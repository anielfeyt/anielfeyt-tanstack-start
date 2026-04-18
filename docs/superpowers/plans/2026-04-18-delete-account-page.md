# Delete Account Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a `/delete-account` page with a contact form that sends account deletion requests to the developer via Resend, without exposing the developer's email in client code.

**Architecture:** A TanStack Router page route at `src/routes/delete-account.tsx` renders the form. On submit it POSTs to a TanStack Start API route at `src/routes/api/delete-account.ts`, which validates the payload server-side and sends an email via the Resend SDK. The developer email and API key never touch the client bundle.

**Tech Stack:** TanStack Router/Start v1, React 19, Tailwind CSS v4, Resend SDK, Vitest

---

## File Map

| File | Action | Responsibility |
|---|---|---|
| `src/routes/delete-account.tsx` | Create | Page component with form UI, client-side validation, submit/success/error states |
| `src/routes/api/delete-account.ts` | Create | POST handler: validates body, sends email via Resend |
| `src/lib/delete-account.ts` | Create | Pure validation logic — testable without framework |
| `src/lib/__tests__/delete-account.test.ts` | Create | Vitest unit tests for validation |
| `.env` | Modify | Add `RESEND_API_KEY` |
| `.env.example` | Create | Template for the env var (no secret value) |

---

### Task 1: Install Resend and configure environment

**Files:**
- Modify: `.env`
- Create: `.env.example`

- [ ] **Step 1: Install the Resend SDK**

```bash
npm install resend
```

Expected: `resend` appears in `package.json` dependencies.

- [ ] **Step 2: Add the API key to `.env`**

Open `.env` and add this line (replace with your real key from resend.com):

```
RESEND_API_KEY=re_xxxxxxxxx
```

- [ ] **Step 3: Create `.env.example`**

Create `F:/projects/anielfeyt.com/.env.example` with:

```
RESEND_API_KEY=
```

- [ ] **Step 4: Verify `.env` is gitignored**

Run:
```bash
git check-ignore -v .env
```
Expected: `.gitignore:.env` — confirms it won't be committed.

- [ ] **Step 5: Commit**

```bash
git add .env.example package.json package-lock.json
git commit -m "chore: install resend, add .env.example"
```

---

### Task 2: Pure validation logic + tests

**Files:**
- Create: `src/lib/delete-account.ts`
- Create: `src/lib/__tests__/delete-account.test.ts`

- [ ] **Step 1: Write the failing tests**

Create `src/lib/__tests__/delete-account.test.ts`:

```ts
import { describe, it, expect } from "vitest";
import { validateDeletionBody, type DeletionBody } from "../delete-account";

describe("validateDeletionBody", () => {
  const valid: DeletionBody = {
    fullName: "Jane Smith",
    email: "jane@example.com",
    username: "jane123",
    reason: "",
    confirmed: true,
  };

  it("returns null for a valid body", () => {
    expect(validateDeletionBody(valid)).toBeNull();
  });

  it("returns error when fullName is missing", () => {
    expect(validateDeletionBody({ ...valid, fullName: "" })).toBe(
      "Full name is required."
    );
  });

  it("returns error when email is missing", () => {
    expect(validateDeletionBody({ ...valid, email: "" })).toBe(
      "Email address is required."
    );
  });

  it("returns error when username is missing", () => {
    expect(validateDeletionBody({ ...valid, username: "" })).toBe(
      "App username / ID is required."
    );
  });

  it("returns error when confirmed is false", () => {
    expect(validateDeletionBody({ ...valid, confirmed: false })).toBe(
      "You must confirm account deletion."
    );
  });

  it("returns error when body is null", () => {
    expect(validateDeletionBody(null)).toBe("Invalid request body.");
  });
});
```

- [ ] **Step 2: Run tests to verify they fail**

```bash
npm run test
```

Expected: 6 failures — `validateDeletionBody` not found.

- [ ] **Step 3: Implement the validation module**

Create `src/lib/delete-account.ts`:

```ts
export interface DeletionBody {
  fullName: string;
  email: string;
  username: string;
  reason: string;
  confirmed: boolean;
}

export function validateDeletionBody(body: unknown): string | null {
  if (!body || typeof body !== "object") return "Invalid request body.";
  const b = body as Partial<DeletionBody>;
  if (!b.fullName?.trim()) return "Full name is required.";
  if (!b.email?.trim()) return "Email address is required.";
  if (!b.username?.trim()) return "App username / ID is required.";
  if (!b.confirmed) return "You must confirm account deletion.";
  return null;
}
```

- [ ] **Step 4: Run tests to verify they pass**

```bash
npm run test
```

Expected: 6 tests pass.

- [ ] **Step 5: Commit**

```bash
git add src/lib/delete-account.ts src/lib/__tests__/delete-account.test.ts
git commit -m "feat: add deletion request validation logic with tests"
```

---

### Task 3: API route

**Files:**
- Create: `src/routes/api/delete-account.ts`

- [ ] **Step 1: Create the API route**

Create `src/routes/api/delete-account.ts`:

```ts
import { createAPIFileRoute } from "@tanstack/react-start/api";
import { Resend } from "resend";
import { validateDeletionBody, type DeletionBody } from "@/lib/delete-account";

export const APIRoute = createAPIFileRoute("/api/delete-account")({
  POST: async ({ request }) => {
    const body = await request.json().catch(() => null);

    const error = validateDeletionBody(body);
    if (error) {
      return Response.json({ error }, { status: 400 });
    }

    const { fullName, email, username, reason } = body as DeletionBody;

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { error: sendError } = await resend.emails.send({
      from: "Shard Cards <onboarding@resend.dev>",
      to: ["anielfeyt.dev@gmail.com"],
      subject: `Account Deletion Request — ${fullName}`,
      html: `
        <h2>Account Deletion Request</h2>
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>App Username / ID:</strong> ${username}</p>
        <p><strong>Reason:</strong> ${reason || "Not provided"}</p>
      `,
    });

    if (sendError) {
      return Response.json(
        { error: "Failed to send request. Please try again." },
        { status: 500 }
      );
    }

    return Response.json({ success: true });
  },
});
```

> **Note:** The `from` address uses Resend's shared testing domain. Once you verify a custom domain in Resend (e.g., `noreply@anielfeyt.com`), update this field.

- [ ] **Step 2: Verify TypeScript compiles**

```bash
npm run build
```

Expected: build succeeds with no TypeScript errors.

- [ ] **Step 3: Commit**

```bash
git add src/routes/api/delete-account.ts
git commit -m "feat: add delete account API route with Resend email"
```

---

### Task 4: Page component

**Files:**
- Create: `src/routes/delete-account.tsx`

- [ ] **Step 1: Create the page route**

Create `src/routes/delete-account.tsx`:

```tsx
import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/delete-account")({
  head: () => ({
    meta: [{ name: "robots", content: "noindex" }],
  }),
  component: DeleteAccountPage,
});

interface FormState {
  fullName: string;
  email: string;
  username: string;
  reason: string;
  confirmed: boolean;
}

type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
  "w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500";

function DeleteAccountPage() {
  const [form, setForm] = useState<FormState>({
    fullName: "",
    email: "",
    username: "",
    reason: "",
    confirmed: false,
  });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const isValid =
    form.fullName.trim() !== "" &&
    form.email.trim() !== "" &&
    form.username.trim() !== "" &&
    form.confirmed;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/delete-account", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(
          (data as { error?: string }).error ?? "Something went wrong. Please try again."
        );
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <Link to="/" className="text-slate-400 hover:text-slate-200 text-sm mb-8 inline-block">
            ← Back
          </Link>
          <div className="py-16 text-center">
            <h1 className="text-2xl font-semibold text-slate-100 mb-4">Request Received</h1>
            <p className="text-slate-400">
              Your account deletion request has been received. We'll process it within 30 days.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <Link to="/" className="text-slate-400 hover:text-slate-200 text-sm mb-8 inline-block">
          ← Back
        </Link>

        <h1 className="text-3xl font-bold text-slate-100 mb-2">Delete Account</h1>
        <p className="text-slate-400 mb-8">
          Fill in the form below to request deletion of your Shard Cards account and all associated data.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {status === "error" && (
            <div className="bg-red-900/40 border border-red-700 text-red-300 rounded-lg px-4 py-3 text-sm">
              {errorMessage}
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">
              Full name <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              required
              value={form.fullName}
              onChange={(e) => setForm((f) => ({ ...f, fullName: e.target.value }))}
              className={inputClass}
              placeholder="Jane Smith"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">
              Email address <span className="text-red-400">*</span>
            </label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
              className={inputClass}
              placeholder="jane@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">
              App username / ID <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              required
              value={form.username}
              onChange={(e) => setForm((f) => ({ ...f, username: e.target.value }))}
              className={inputClass}
              placeholder="Your in-app username or account ID"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">
              Reason{" "}
              <span className="text-slate-500 text-xs">(optional)</span>
            </label>
            <textarea
              rows={4}
              value={form.reason}
              onChange={(e) => setForm((f) => ({ ...f, reason: e.target.value }))}
              className={`${inputClass} resize-none`}
              placeholder="Let us know why you'd like to delete your account"
            />
          </div>

          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="confirmed"
              required
              checked={form.confirmed}
              onChange={(e) => setForm((f) => ({ ...f, confirmed: e.target.checked }))}
              className="mt-0.5 h-4 w-4 rounded border-slate-700 bg-slate-900"
            />
            <label htmlFor="confirmed" className="text-sm text-slate-300">
              I confirm that I want to permanently delete my Shard Cards account and all associated data.
              This action cannot be undone.
            </label>
          </div>

          <button
            type="submit"
            disabled={!isValid || status === "submitting"}
            className="w-full bg-slate-700 hover:bg-slate-600 disabled:bg-slate-800 disabled:text-slate-600 disabled:cursor-not-allowed text-slate-100 font-medium rounded-lg px-6 py-3 transition-colors"
          >
            {status === "submitting" ? "Submitting…" : "Submit Request"}
          </button>
        </form>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Start the dev server and verify the page**

```bash
npm run dev
```

Open `http://localhost:3000/delete-account` and confirm:
- Form renders with all 5 fields
- Submit button is disabled when fields are empty
- Submit button enables only when all required fields are filled and checkbox is checked
- "← Back" link navigates to `/`

- [ ] **Step 3: Verify TypeScript compiles cleanly**

```bash
npm run build
```

Expected: no errors.

- [ ] **Step 4: Commit**

```bash
git add src/routes/delete-account.tsx
git commit -m "feat: add delete account contact page at /delete-account"
```

---

### Task 5: End-to-end smoke test

- [ ] **Step 1: Set a real `RESEND_API_KEY` in `.env`**

Log into [resend.com](https://resend.com), create an API key, and paste it into `.env`:

```
RESEND_API_KEY=re_your_real_key_here
```

- [ ] **Step 2: Submit a test request**

Open `http://localhost:3000/delete-account`, fill in all fields, check the box, and submit.

Expected:
- Form replaced by "Request Received" confirmation message
- Email arrives at `anielfeyt.dev@gmail.com` with subject `Account Deletion Request — [name]`

- [ ] **Step 3: Test error state**

Temporarily set `RESEND_API_KEY=invalid` in `.env`, restart the dev server, and submit the form again.

Expected: red error banner appears — "Failed to send request. Please try again." — form stays intact.

- [ ] **Step 4: Restore valid key and final commit**

```bash
git add -p  # stage only intentional changes (do NOT stage .env)
git commit -m "feat: delete account page complete"
```
