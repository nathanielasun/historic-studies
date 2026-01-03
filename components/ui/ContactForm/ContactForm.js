import { useState } from 'react';
import styles from './ContactForm.module.css';

/**
 * ContactForm component - Handles contact form submission
 * Sends email via Resend API through Next.js API route
 *
 * Features:
 * - Client-side validation
 * - Honeypot spam protection
 * - Loading states
 * - Success/error feedback
 */
export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        _honeypot: '' // Spam trap - should remain empty
    });
    const [status, setStatus] = useState('idle'); // idle | loading | success | error
    const [errors, setErrors] = useState({});
    const [debugInfo, setDebugInfo] = useState(null);

    // Client-side validation
    const validate = () => {
        const newErrors = {};

        if (!formData.name.trim() || formData.name.length < 2) {
            newErrors.name = 'Name must be at least 2 characters';
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!formData.subject.trim() || formData.subject.length < 5) {
            newErrors.subject = 'Subject must be at least 5 characters';
        }

        if (!formData.message.trim() || formData.message.length < 20) {
            newErrors.message = 'Message must be at least 20 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check honeypot (spam bots fill this hidden field)
        if (formData._honeypot) {
            return; // Silent fail for bots
        }

        if (!validate()) {
            return;
        }

        setStatus('loading');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject,
                    message: formData.message
                }),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus('success');
                setDebugInfo(null);
                // Reset form
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: '',
                    _honeypot: ''
                });
                // Auto-hide success message after 5 seconds
                setTimeout(() => {
                    if (status === 'success') setStatus('idle');
                }, 5000);
            } else {
                setStatus('error');
                setDebugInfo(data?.debug || null);
                console.error('Form submission error:', data.error);
            }
        } catch (error) {
            setStatus('error');
            setDebugInfo({
                message: error?.message || String(error),
                type: 'network_error'
            });
            console.error('Network error:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error for this field when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            {/* Honeypot field - hidden from users, visible to bots */}
            <input
                type="text"
                name="_honeypot"
                value={formData._honeypot}
                onChange={handleChange}
                className={styles.honeypot}
                tabIndex="-1"
                autoComplete="off"
                aria-hidden="true"
            />

            <div className={styles.fieldGroup}>
                <label htmlFor="name" className={styles.label}>
                    Name <span className={styles.required}>*</span>
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                    disabled={status === 'loading'}
                    required
                    aria-required="true"
                    aria-invalid={errors.name ? 'true' : 'false'}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                    <span id="name-error" className={styles.error} role="alert">
                        {errors.name}
                    </span>
                )}
            </div>

            <div className={styles.fieldGroup}>
                <label htmlFor="email" className={styles.label}>
                    Email <span className={styles.required}>*</span>
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                    disabled={status === 'loading'}
                    required
                    aria-required="true"
                    aria-invalid={errors.email ? 'true' : 'false'}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                    <span id="email-error" className={styles.error} role="alert">
                        {errors.email}
                    </span>
                )}
            </div>

            <div className={styles.fieldGroup}>
                <label htmlFor="subject" className={styles.label}>
                    Subject <span className={styles.required}>*</span>
                </label>
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`${styles.input} ${errors.subject ? styles.inputError : ''}`}
                    disabled={status === 'loading'}
                    required
                    aria-required="true"
                    aria-invalid={errors.subject ? 'true' : 'false'}
                    aria-describedby={errors.subject ? 'subject-error' : undefined}
                />
                {errors.subject && (
                    <span id="subject-error" className={styles.error} role="alert">
                        {errors.subject}
                    </span>
                )}
            </div>

            <div className={styles.fieldGroup}>
                <label htmlFor="message" className={styles.label}>
                    Message <span className={styles.required}>*</span>
                </label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
                    disabled={status === 'loading'}
                    required
                    aria-required="true"
                    aria-invalid={errors.message ? 'true' : 'false'}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {errors.message && (
                    <span id="message-error" className={styles.error} role="alert">
                        {errors.message}
                    </span>
                )}
            </div>

            <button
                type="submit"
                className={styles.button}
                disabled={status === 'loading'}
                aria-busy={status === 'loading'}
            >
                {status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
                <div className={styles.successMessage} role="status" aria-live="polite">
                    ✓ Message sent successfully! Charles will respond soon.
                </div>
            )}

            {status === 'error' && (
                <div className={styles.errorMessage} role="alert" aria-live="assertive">
                    ✗ Failed to send message. Please try again or email directly at{' '}
                    <a href="mailto:charlie@historicstudies.com" className="inlineLink">
                        charlie@historicstudies.com
                    </a>
                </div>
            )}

            {status === 'error' && debugInfo && (
                <pre className={styles.debugPanel}>
                    {JSON.stringify(debugInfo, null, 2)}
                </pre>
            )}
        </form>
    );
}
