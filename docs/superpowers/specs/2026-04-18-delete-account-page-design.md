# Delete Account Contact Page — Design Spec

**Date:** 2026-04-18
**Route:** `/delete-account`

## Overview

A contact page allowing Shard Cards app users to submit an account deletion request. The form collects identifying information and sends it to the developer via Resend. The developer's email address is never exposed in client-side code.

## Files

| File | Purpose |
|---|---|
| `src/routes/delete-account.tsx` | Page component with form UI |
| `src/routes/api/delete-account.ts` | Server-side POST handler |

**Environment variable:** `RESEND_API_KEY` — server-only, stored in `.env`, never imported in client code.

## Page (`/delete-account`)

- Follows the existing legal page pattern: TanStack Router `createFileRoute`, slate color palette, `max-w-3xl` container, `← Back` link to `/`
- `"use client"` form state managed with React `useState` — no extra form libraries

## Form Fields

| Field | Type | Required |
|---|---|---|
| Full name | text input | yes |
| Email address | email input | yes |
| App username / ID | text input | yes |
| Reason for deletion | textarea | no |
| Confirmation checkbox | checkbox | yes ("I confirm I want to delete my account") |

- Submit button disabled while request is in flight
- Client-side validation: all required fields filled + checkbox checked before submit is enabled

## API Route (`POST /api/delete-account`)

1. Parses JSON body
2. Validates all required fields are present server-side
3. Calls Resend SDK to send email to `anielfeyt.dev@gmail.com`
4. Email subject: `Account Deletion Request — [Full Name]`
5. Email body: formatted list of all four form fields
6. Returns `{ success: true }` on success, `{ error: "..." }` on failure

## UI States

| State | Behaviour |
|---|---|
| Idle | Form rendered normally |
| Submitting | Submit button shows loading indicator, disabled |
| Success | Form replaced with confirmation: "Your request has been received. We'll process it within 30 days." |
| Error | Inline error banner above submit button, form stays intact for retry |

## Security

- Developer email is only referenced in the server-side API route — never in the client bundle
- Server-side re-validation of required fields guards against direct API calls bypassing the client

## Dependencies

- `resend` npm package (to be installed)
