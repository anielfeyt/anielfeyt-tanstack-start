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
