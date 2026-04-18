import { createAPIFileRoute } from "@tanstack/react-start/api";
import { Resend } from "resend";
import { validateDeletionBody, type DeletionBody } from "@/lib/delete-account";

// Helper function to escape HTML special characters
function escapeHtml(str: string): string {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return str.replace(/[&<>"']/g, (char) => map[char]);
}

// Initialize Resend client at module scope
if (!process.env.RESEND_API_KEY) {
  throw new Error("RESEND_API_KEY environment variable is not set");
}

const resend = new Resend(process.env.RESEND_API_KEY);

export const APIRoute = createAPIFileRoute("/api/delete-account")({
  POST: async ({ request }) => {
    const body = await request.json().catch(() => null);

    const error = validateDeletionBody(body);
    if (error) {
      return Response.json({ error }, { status: 400 });
    }

    const { fullName, email, username, reason } = body as DeletionBody;

    const { error: sendError } = await resend.emails.send({
      from: "Shard Cards <onboarding@resend.dev>",
      to: ["anielfeyt.dev@gmail.com"],
      subject: `Account Deletion Request — ${escapeHtml(fullName)}`,
      html: `
        <h2>Account Deletion Request</h2>
        <p><strong>Full Name:</strong> ${escapeHtml(fullName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>App Username / ID:</strong> ${escapeHtml(username)}</p>
        <p><strong>Reason:</strong> ${escapeHtml(reason || "Not provided")}</p>
      `,
    });

    if (sendError) {
      console.error("[delete-account] Resend send error:", sendError);
      return Response.json(
        { error: "Failed to send request. Please try again." },
        { status: 500 }
      );
    }

    return Response.json({ success: true });
  },
});
