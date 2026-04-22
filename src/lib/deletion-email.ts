"use server";
import { createServerFn } from "@tanstack/react-start";
import { Resend } from "resend";
import { validateDeletionBody, type DeletionBody } from "./delete-account";

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

export const submitDeletionRequest = createServerFn({ method: "POST" })
  .inputValidator((data: DeletionBody) => {
    const error = validateDeletionBody(data);
    if (error) throw new Error(error);
    return data;
  })
  .handler(async ({ data }) => {
    if (!process.env.RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY environment variable is not set");
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const { fullName, email, username, reason } = data;

    const { error: sendError } = await resend.emails.send({
      from: "Shard Cards <noreply@anielfeyt.com>",
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
      throw new Error("Failed to send request. Please try again.");
    }

    return { success: true };
  });
