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
