/**
 * Contact Form API Route
 * Handles form submissions and sends emails via Resend
 *
 * Features:
 * - Rate limiting (3 requests per minute per IP)
 * - Server-side validation
 * - Spam protection
 * - Email sending via Resend API
 */

import { getSiteConfig } from '../../lib/content';

// Simple in-memory rate limiting (for production, use Redis or similar)
const rateLimit = new Map();

const debugEnabled = process.env.CONTACT_DEBUG === 'true';

function withDebug(payload, debug) {
    if (!debugEnabled) {
        return payload;
    }

    return {
        ...payload,
        debug
    };
}

/**
 * Check if IP has exceeded rate limit
 * @param {string} ip - Client IP address
 * @returns {boolean} - True if request allowed, false if rate limited
 */
function checkRateLimit(ip) {
    const now = Date.now();
    const windowMs = 60 * 1000; // 1 minute window
    const maxRequests = 3; // 3 requests per minute

    if (!rateLimit.has(ip)) {
        rateLimit.set(ip, []);
    }

    const requests = rateLimit.get(ip);
    // Remove old requests outside the window
    const recentRequests = requests.filter(time => now - time < windowMs);
    rateLimit.set(ip, recentRequests);

    if (recentRequests.length >= maxRequests) {
        return false; // Rate limit exceeded
    }

    recentRequests.push(now);
    return true;
}

/**
 * Validate contact form data
 * @param {Object} data - Form data
 * @returns {Array} - Array of error messages (empty if valid)
 */
function validateContactForm(data) {
    const errors = [];

    // Name validation
    if (!data.name || typeof data.name !== 'string') {
        errors.push('Name is required');
    } else if (data.name.trim().length < 2 || data.name.length > 100) {
        errors.push('Name must be 2-100 characters');
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email || !emailRegex.test(data.email)) {
        errors.push('Invalid email address');
    }

    // Subject validation
    if (!data.subject || typeof data.subject !== 'string') {
        errors.push('Subject is required');
    } else if (data.subject.trim().length < 5 || data.subject.length > 200) {
        errors.push('Subject must be 5-200 characters');
    }

    // Message validation
    if (!data.message || typeof data.message !== 'string') {
        errors.push('Message is required');
    } else if (data.message.trim().length < 20 || data.message.length > 2000) {
        errors.push('Message must be 20-2000 characters');
    }

    // Check for suspicious content (basic spam detection)
    const suspiciousPatterns = [
        /<script/i,
        /onclick/i,
        /onerror/i,
        /javascript:/i,
        /<iframe/i,
    ];

    const allText = `${data.name} ${data.subject} ${data.message}`;
    if (suspiciousPatterns.some(pattern => pattern.test(allText))) {
        errors.push('Suspicious content detected');
    }

    return errors;
}

/**
 * Sanitize text to prevent XSS
 * @param {string} text - Text to sanitize
 * @returns {string} - Sanitized text
 */
function sanitize(text) {
    return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#x27;')
        .replace(/\//g, '&#x2F;');
}

export default async function handler(req, res) {
    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json(withDebug(
            { error: 'Method not allowed' },
            { method: req.method }
        ));
    }

    // Get client IP for rate limiting
    const ip = req.headers['x-forwarded-for']?.split(',')[0] || req.socket.remoteAddress || 'unknown';

    // Check rate limit
    if (!checkRateLimit(ip)) {
        console.warn(`Rate limit exceeded for IP: ${ip}`);
        return res.status(429).json(withDebug(
            { error: 'Too many requests. Please wait a minute and try again.' },
            { ip }
        ));
    }

    // Extract and validate form data
    const { name, email, subject, message } = req.body;
    const validationErrors = validateContactForm({ name, email, subject, message });

    if (validationErrors.length > 0) {
        console.warn('Validation failed:', validationErrors);
        return res.status(400).json(withDebug(
            { error: validationErrors.join(', ') },
            { validationErrors }
        ));
    }

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
        console.error('RESEND_API_KEY not configured');
        return res.status(500).json(withDebug(
            { error: 'Email service not configured. Please contact the administrator.' },
            { hasApiKey: false }
        ));
    }

    // Resolve recipient and sender details
    const siteConfig = getSiteConfig();
    const recipientEmail = process.env.CONTACT_TO_EMAIL || siteConfig?.contact?.email;
    const fromAddress = process.env.RESEND_FROM_EMAIL || '<anything>@dezenua.resend.app>';

    if (!recipientEmail) {
        console.error('Contact recipient email not configured');
        return res.status(500).json(withDebug(
            { error: 'Email service not configured. Please contact the administrator.' },
            { hasRecipient: false }
        ));
    }

    try {
        // Import Resend
        const { Resend } = require('resend');
        const resend = new Resend(process.env.RESEND_API_KEY);

        // Sanitize inputs for HTML display
        const sanitizedName = sanitize(name.trim());
        const sanitizedEmail = sanitize(email.trim());
        const sanitizedSubject = sanitize(subject.trim());
        const sanitizedMessage = sanitize(message.trim());

        // Send email
        const { data, error } = await resend.emails.send({
            from: fromAddress, // Use verified domain in production
            to: recipientEmail,
            replyTo: email.trim(), // User's email for easy replies
            subject: `Website Contact: ${subject.trim()}`,
            html: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Form Submission</title>
</head>
<body style="font-family: Georgia, 'Times New Roman', serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
    <div style="background: #ebffff; border: 2px solid #508190; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
        <h2 style="color: #508190; margin-top: 0;">New Contact Form Submission</h2>
        <p style="margin: 10px 0;"><strong>From:</strong> ${sanitizedName}</p>
        <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${sanitizedEmail}" style="color: #508190;">${sanitizedEmail}</a></p>
        <p style="margin: 10px 0;"><strong>Subject:</strong> ${sanitizedSubject}</p>
    </div>

    <div style="background: #fff; border: 2px solid #ddd; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
        <h3 style="margin-top: 0; color: #333;">Message:</h3>
        <p style="white-space: pre-wrap; margin: 0;">${sanitizedMessage}</p>
    </div>

    <div style="background: #f5f5f5; border-top: 2px solid #ddd; padding: 15px; border-radius: 8px;">
        <p style="font-size: 12px; color: #666; margin: 5px 0;">
            <strong>Sent from:</strong> Historic Studies Limited website contact form
        </p>
        <p style="font-size: 12px; color: #666; margin: 5px 0;">
            <strong>IP Address:</strong> ${ip}
        </p>
        <p style="font-size: 12px; color: #666; margin: 5px 0;">
            <strong>Timestamp:</strong> ${new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })} EST
        </p>
    </div>

    <div style="margin-top: 20px; padding-top: 15px; border-top: 1px solid #ddd; text-align: center;">
        <p style="font-size: 12px; color: #999; margin: 0;">
            To reply, simply respond to this email. Your reply will go directly to ${sanitizedEmail}
        </p>
    </div>
</body>
</html>
            `,
        });

        if (error) {
            console.error('Resend error:', error);
            return res.status(502).json(withDebug(
                { error: 'Failed to send email. Please try again or contact us directly.' },
                {
                    resendError: error,
                    from: fromAddress,
                    to: recipientEmail,
                    subject: `Website Contact: ${subject.trim()}`
                }
            ));
        }

        console.log('Email sent successfully:', data?.id);

        return res.status(200).json(withDebug(
            {
                success: true,
                message: 'Email sent successfully',
                id: data?.id
            },
            {
                from: fromAddress,
                to: recipientEmail
            }
        ));

    } catch (error) {
        console.error('Email send error:', error);

        // Don't expose detailed error to client
        return res.status(500).json(withDebug(
            { error: 'Failed to send email. Please try again or contact us directly at cphilips5509@gmail.com' },
            {
                message: error?.message || String(error),
                from: fromAddress,
                to: recipientEmail
            }
        ));
    }
}
