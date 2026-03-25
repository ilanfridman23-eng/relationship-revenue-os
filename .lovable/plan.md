

## Wire Apply Form to mailto:adam@mabbly.com

### Change in `src/components/ApplySection.tsx`

Update the submit button's `onClick` handler to:

1. Build a `mailto:` URL with `adam@mabbly.com` as the recipient
2. Set the subject to "Research Session Application" (or similar)
3. Format all form fields into the email body as labeled lines (Full Name, Firm Name, Role, etc.)
4. Open via `window.location.href = mailtoUrl`
5. Then set `submitted = true` to show the confirmation message

No backend, no new files. Single file edit.

