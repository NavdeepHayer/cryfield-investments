// Spam screening for the contact form. Pure functions, no I/O, so the rules
// can be tested without deploying the function.

export const ALLOWED_SUBJECTS = [
  "General Enquiry",
  "Investment Opportunity",
  "Land Acquisition",
  "Development Partnership",
  "Healthcare Investment",
  "Other",
];

export const MIN_FILL_TIME_MS = 3000;
export const MIN_MESSAGE_LENGTH = 20;
const MIN_MESSAGE_LETTERS = 10;
const MAX_NAME_LENGTH = 60;
const MAX_EMAIL_LENGTH = 254;
const MAX_MESSAGE_LENGTH = 5000;
const MAX_LINKS = 2;
const MAX_GMAIL_DOTS = 2;

export interface ContactFields {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

export type Verdict =
  // Deliver the email. `flags` lists soft spam signals, if any.
  | { action: "send"; fields: ContactFields; flags: string[] }
  // Tell the visitor what to fix. Used for mistakes a real person can make.
  | { action: "reject"; error: string }
  // Pretend it worked and send nothing. Used for signals only a bot produces,
  // so the bot gets no hint about what tripped it.
  | { action: "drop"; reason: string };

function str(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export function screenSubmission(body: unknown): Verdict {
  if (typeof body !== "object" || body === null || Array.isArray(body)) {
    return { action: "reject", error: "Invalid request" };
  }
  const raw = body as Record<string, unknown>;

  // Hidden field that people never see; bots that fill every input trip it.
  if (str(raw.referralCode) !== "") {
    return { action: "drop", reason: "honeypot filled" };
  }

  // The real form reports how long the page was open before submitting.
  // Scripts posting straight to the endpoint omit it; fast bots fail it.
  if (
    typeof raw.elapsedMs !== "number" ||
    !Number.isFinite(raw.elapsedMs) ||
    raw.elapsedMs < MIN_FILL_TIME_MS
  ) {
    return { action: "drop", reason: "submitted too fast or timing missing" };
  }

  const fields: ContactFields = {
    firstName: str(raw.firstName),
    lastName: str(raw.lastName),
    email: str(raw.email),
    subject: str(raw.subject),
    message: str(raw.message),
  };

  if (
    !fields.firstName ||
    !fields.lastName ||
    !fields.email ||
    !fields.subject ||
    !fields.message
  ) {
    return { action: "reject", error: "All fields are required" };
  }

  // The form only offers a fixed dropdown, so anything else was not sent by it.
  if (!ALLOWED_SUBJECTS.includes(fields.subject)) {
    return { action: "drop", reason: "subject not in dropdown" };
  }

  if (
    fields.firstName.length > MAX_NAME_LENGTH ||
    fields.lastName.length > MAX_NAME_LENGTH
  ) {
    return { action: "reject", error: "Name is too long" };
  }

  if (
    fields.email.length > MAX_EMAIL_LENGTH ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)
  ) {
    return { action: "reject", error: "Invalid email address" };
  }

  if (fields.message.length > MAX_MESSAGE_LENGTH) {
    return {
      action: "reject",
      error: `Message is too long (maximum ${MAX_MESSAGE_LENGTH} characters)`,
    };
  }

  const letters = fields.message.match(/\p{L}/gu)?.length ?? 0;
  if (
    fields.message.length < MIN_MESSAGE_LENGTH ||
    letters < MIN_MESSAGE_LETTERS
  ) {
    return {
      action: "reject",
      error: `Please tell us a little more about your enquiry (at least ${MIN_MESSAGE_LENGTH} characters).`,
    };
  }

  const flags: string[] = [];

  const [localPart, domain] = fields.email.toLowerCase().split("@");
  const dots = localPart.split(".").length - 1;
  if (
    (domain === "gmail.com" || domain === "googlemail.com") &&
    dots > MAX_GMAIL_DOTS
  ) {
    flags.push("Gmail address padded with dots");
  }

  const links = fields.message.match(/https?:\/\/|www\./gi)?.length ?? 0;
  if (links > MAX_LINKS) {
    flags.push("message contains several links");
  }

  return { action: "send", fields, flags };
}

// CRYFIELD_ALLOWED_ORIGIN may be "*" or a comma-separated list of origins.
export function parseAllowedOrigins(value: string | undefined): string[] {
  return (value ?? "*")
    .split(",")
    .map((o) => o.trim().replace(/\/$/, ""))
    .filter(Boolean);
}

export function isOriginAllowed(
  origin: string | null,
  allowed: string[],
): boolean {
  if (allowed.includes("*")) return true;
  return origin !== null && allowed.includes(origin.replace(/\/$/, ""));
}
