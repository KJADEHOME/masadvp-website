# MASA Development International Website

Next.js website for MASA Development International Limited.

## Local Development

```bash
npm install
npm run dev
```

## Production

Deploy on Vercel and connect the production domain:

- `www.masadvp.com`
- `masadvp.com`

## Contact Form

The contact form posts to `/api/contact` and sends email through Resend.
Set these Vercel environment variables before production launch:

```bash
RESEND_API_KEY=
CONTACT_TO_EMAIL=service@masadvp.com
CONTACT_FROM_EMAIL=MASA Website <noreply@masadvp.com>
```
