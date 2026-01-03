# Contact Form Setup Guide
## Historic Studies Limited Website

**Created:** January 2, 2026
**Email Service:** Resend
**Status:** Ready for configuration

---

## Overview

The contact form has been implemented and is ready to use. It requires minimal setup to start receiving emails.

### Features

✅ Client-side validation
✅ Server-side validation
✅ Rate limiting (3 requests/minute per IP)
✅ Spam protection (honeypot field)
✅ HTML email formatting
✅ Auto-reply setup (reply-to header)
✅ Success/error feedback
✅ Accessible (ARIA labels, keyboard navigation)

---

## Setup Instructions

### Step 1: Create Resend Account

1. Go to https://resend.com/signup
2. Sign up with your email
3. Verify your email address

### Step 2: Get API Key

1. Log in to Resend dashboard
2. Click on "API Keys" in the sidebar
3. Click "Create API Key"
4. Name it "HSL Website Contact Form"
5. Copy the API key (starts with `re_`)

**⚠️ Important:** Save this key immediately - you can only see it once!

### Step 3: Configure Environment Variables

#### Local Development

1. Copy the template file:
   ```bash
   cp .env.example .env.local
   ```

2. Edit `.env.local` and add your API key:
   ```bash
   RESEND_API_KEY=re_your_actual_api_key_here
   ```

3. Verify `.env.local` is in `.gitignore` (it already is!)

#### Vercel Production

1. Go to Vercel Dashboard → Your Project
2. Click "Settings" → "Environment Variables"
3. Add new variable:
   - **Name:** `RESEND_API_KEY`
   - **Value:** Your API key from Step 2
   - **Environment:** Production (and Preview if desired)
4. Click "Save"
5. Redeploy your site (Vercel will do this automatically)

---

## Step 4: Verify Domain (Optional but Recommended)

**Why verify?** Better email deliverability and ability to use custom "from" address

### Using Resend Test Domain (Quick Start)

The current setup uses `onboarding@resend.dev` which works immediately but:
- Shows "via resend.dev" in email clients
- Limited to 100 emails/day during testing

### Using Your Own Domain (Production)

1. In Resend dashboard, click "Domains"
2. Click "Add Domain"
3. Enter your domain (e.g., `historicstudies.com`)
4. Add the DNS records shown to your domain provider:
   - **TXT record** for SPF
   - **CNAME records** for DKIM
5. Wait for verification (usually 5-30 minutes)
6. Update API route to use your domain:

**File:** `pages/api/contact.js` (line 112)

```javascript
// Change this:
from: 'Historic Studies Limited <onboarding@resend.dev>',

// To this:
from: 'Historic Studies Limited <contact@yourdomain.com>',
```

---

## Testing the Contact Form

### Local Testing

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open http://localhost:3000/contact

3. Fill out and submit the form

4. Check that:
   - Form validation works (try invalid inputs)
   - Success message appears
   - Email arrives at `cphilips5509@gmail.com`
   - Reply-to is the user's email

### Production Testing

After deploying to Vercel:

1. Visit your live site's contact page
2. Submit a test message
3. Verify email delivery
4. Test reply functionality

---

## Troubleshooting

### Form Submits but No Email Received

**Check:**
1. ✓ `RESEND_API_KEY` is set in Vercel environment variables
2. ✓ Vercel has been redeployed after adding env var
3. ✓ API key is valid (not expired or deleted)
4. ✓ Check spam folder
5. ✓ Check Resend dashboard for delivery status

**Verify API key:**
```bash
# In Resend dashboard → API Keys
# Make sure key status is "Active"
```

### Error: "Email service not configured"

**Solution:**
- `RESEND_API_KEY` environment variable is missing
- Add it to `.env.local` (local) or Vercel env vars (production)

### Error: "Too many requests"

**Reason:** Rate limiting (3 requests/minute)
**Solution:** Wait 60 seconds and try again

### Form Validation Fails

**Check:**
- Name: At least 2 characters
- Email: Valid email format
- Subject: At least 5 characters
- Message: At least 20 characters

### Emails Going to Spam

**Solutions:**
1. Verify your domain with Resend (see Step 4)
2. Add SPF and DKIM DNS records
3. Ask recipient to mark as "Not Spam"
4. Use your own domain instead of `resend.dev`

---

## Rate Limits

### Free Tier Limits

| Limit | Value |
|-------|-------|
| Emails per day | 100 |
| Emails per month | 3,000 |
| API requests per minute | 3 (custom rate limit) |

### If You Exceed Limits

**Option 1:** Upgrade to paid plan ($20/mo for 50,000 emails)
**Option 2:** Implement database logging to track legitimate submissions
**Option 3:** Add CAPTCHA for additional spam prevention

---

## Customization

### Change Recipient Email

**File:** `pages/api/contact.js` (line 113)

```javascript
to: 'newemail@example.com', // Change this
```

### Change Form Fields

**Add field to component:**
`components/ui/ContactForm/ContactForm.js`

**Add validation to API:**
`pages/api/contact.js` → `validateContactForm()`

### Customize Email Template

**File:** `pages/api/contact.js` (lines 115-170)

Edit the HTML template to change:
- Email layout
- Colors and styling
- Additional information
- Footer text

---

## Security Features

### Implemented

✅ **Rate limiting:** 3 requests/minute per IP
✅ **Honeypot field:** Catches spam bots
✅ **Input validation:** Client and server-side
✅ **XSS protection:** All inputs sanitized
✅ **Content filtering:** Detects suspicious patterns
✅ **CORS protection:** API only accepts from same domain

### Additional Security (Optional)

🔲 **CAPTCHA:** Add Google reCAPTCHA or hCaptcha
🔲 **Database logging:** Track submissions for analysis
🔲 **IP blocking:** Block known spam IPs
🔲 **Email verification:** Require email confirmation

---

## Monitoring

### View Email Logs

1. Log in to Resend dashboard
2. Click "Logs" in sidebar
3. View all sent emails, delivery status, and errors

### Check Form Submissions

Currently, submissions are only sent via email. To track all submissions:

**Option:** Add database logging in API route
```javascript
// In pages/api/contact.js
// Before sending email, log to database:
await db.submissions.create({
    name, email, subject, message,
    ip, timestamp: new Date()
});
```

---

## Cost Breakdown

### Free Tier (Recommended for HSL)

- **Cost:** $0/month
- **Emails:** 3,000/month
- **Sufficient for:** ~100 inquiries/month
- **Overage:** None (hard limit)

### Paid Tier (If Needed)

- **Cost:** $20/month
- **Emails:** 50,000/month
- **Additional:** $1 per 1,000 emails

### Estimated Usage

Based on typical historical research inquiry sites:
- Expected: 10-30 inquiries/month
- Free tier is more than sufficient

---

## Support & Resources

### Resend Documentation

- Getting started: https://resend.com/docs/send-with-nextjs
- API reference: https://resend.com/docs/api-reference/emails/send-email
- Domain verification: https://resend.com/docs/dashboard/domains/introduction

### Alternative Email Services

If you prefer a different service:

| Service | Free Tier | Setup Complexity |
|---------|-----------|------------------|
| **Resend** | 3,000/mo | ⭐⭐ Easy |
| SendGrid | 100/day | ⭐⭐⭐ Medium |
| Mailgun | 5,000/mo (3 months) | ⭐⭐⭐ Medium |
| AWS SES | 62,000/mo (12 months) | ⭐⭐⭐⭐⭐ Complex |

---

## Maintenance

### Monthly Tasks

- [ ] Check Resend dashboard for delivery issues
- [ ] Review email logs for spam attempts
- [ ] Verify API key is still active

### As Needed

- [ ] Update rate limits if receiving too much spam
- [ ] Rotate API key if compromised
- [ ] Upgrade plan if exceeding free tier

---

## Quick Reference

### Important Files

| File | Purpose |
|------|---------|
| `components/ui/ContactForm/ContactForm.js` | Form component |
| `pages/api/contact.js` | Email sending API |
| `.env.local` | Local environment variables |
| `Vercel → Settings → Environment Variables` | Production config |

### Environment Variables

```bash
RESEND_API_KEY=re_xxxxxxxxxxxxx
```

### Test the Form

```bash
# Local
npm run dev
# Open http://localhost:3000/contact

# Production
# Visit https://your-domain.com/contact
```

---

**Questions?** Refer to:
- Resend documentation: https://resend.com/docs
- Next.js API routes: https://nextjs.org/docs/api-routes/introduction

---

*Last Updated: January 2, 2026*
