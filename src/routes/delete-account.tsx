import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/delete-account")({
  head: () => ({
    meta: [
      { title: "Delete Account — Shard Cards" },
      { name: "robots", content: "noindex, nofollow" },
    ],
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
  "w-full bg-white border border-slate-300 rounded-lg px-4 py-2.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400";

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
      <main className="container mx-auto px-4 py-16 max-w-3xl">
        <div className="mb-2">
          <Link to="/" className="text-sm text-slate-400 hover:text-slate-600 transition-colors">
            ← Back
          </Link>
        </div>
        <div className="py-16 text-center">
          <h1 className="text-2xl font-semibold text-slate-700 mb-4">Request Received</h1>
          <p className="text-slate-500">
            Your account deletion request has been received. We'll process it within 30 days.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 py-16 max-w-3xl">
      <div className="mb-2">
        <Link to="/" className="text-sm text-slate-400 hover:text-slate-600 transition-colors">
          ← Back
        </Link>
      </div>

      <h1 className="text-3xl font-bold text-slate-700 mb-2">Delete Account</h1>
      <p className="text-slate-500 mb-8 leading-relaxed">
        Fill in the form below to request deletion of your Shard Cards account and all associated data.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {status === "error" && (
          <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3 text-sm">
            {errorMessage}
          </div>
        )}

        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-slate-700 mb-1">
            Full name <span className="text-red-500">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            required
            value={form.fullName}
            onChange={(e) => setForm((f) => ({ ...f, fullName: e.target.value }))}
            className={inputClass}
            placeholder="Jane Smith"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
            Email address <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            className={inputClass}
            placeholder="jane@example.com"
          />
        </div>

        <div>
          <label htmlFor="username" className="block text-sm font-medium text-slate-700 mb-1">
            App username / ID <span className="text-red-500">*</span>
          </label>
          <input
            id="username"
            type="text"
            required
            value={form.username}
            onChange={(e) => setForm((f) => ({ ...f, username: e.target.value }))}
            className={inputClass}
            placeholder="Your in-app username or account ID"
          />
        </div>

        <div>
          <label htmlFor="reason" className="block text-sm font-medium text-slate-700 mb-1">
            Reason <span className="text-slate-400 text-xs font-normal">(optional)</span>
          </label>
          <textarea
            id="reason"
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
            className="mt-0.5 h-4 w-4 rounded border-slate-300"
          />
          <label htmlFor="confirmed" className="text-sm text-slate-600">
            I confirm that I want to permanently delete my Shard Cards account and all associated data.
            This action cannot be undone.
          </label>
        </div>

        <button
          type="submit"
          disabled={!isValid || status === "submitting"}
          className="w-full bg-slate-700 hover:bg-slate-800 disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed text-white font-medium rounded-lg px-6 py-3 transition-colors"
        >
          {status === "submitting" ? "Submitting…" : "Submit Request"}
        </button>
      </form>
    </main>
  );
}
