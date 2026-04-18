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
