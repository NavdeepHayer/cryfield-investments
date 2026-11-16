import {
  type ContactFields,
  isOriginAllowed,
  parseAllowedOrigins,
  screenSubmission,
} from "./spam.ts";

const ALLOWED_ORIGINS = parseAllowedOrigins(
  Deno.env.get("CRYFIELD_ALLOWED_ORIGIN"),
);

function corsHeadersFor(origin: string | null): Record<string, string> {
  const allowAny = ALLOWED_ORIGINS.includes("*");
  return {
    "Access-Control-Allow-Origin": allowAny
      ? "*"
      : origin && isOriginAllowed(origin, ALLOWED_ORIGINS)
        ? origin
        : ALLOWED_ORIGINS[0],
    "Access-Control-Allow-Headers":
      "Content-Type, Authorization, x-client-info, apikey",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    ...(allowAny ? {} : { Vary: "Origin" }),
  };
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildEmailHtml(data: ContactFields): string {
  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#f0f4f8;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f0f4f8;padding:32px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;">
        <tr><td style="background:#102a43;padding:24px 32px;">
          <h1 style="margin:0;color:#d4a039;font-size:20px;">Cryfield Investments</h1>
          <p style="margin:4px 0 0;color:#9fb3c8;font-size:13px;">New Contact Form Enquiry</p>
        </td></tr>
        <tr><td style="padding:32px;">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr><td style="padding:8px 0;color:#627d98;font-size:13px;font-weight:600;">Name</td></tr>
            <tr><td style="padding:0 0 16px;color:#102a43;font-size:15px;">${escapeHtml(data.firstName)} ${escapeHtml(data.lastName)}</td></tr>
            <tr><td style="padding:8px 0;color:#627d98;font-size:13px;font-weight:600;">Email</td></tr>
            <tr><td style="padding:0 0 16px;color:#102a43;font-size:15px;"><a href="mailto:${escapeHtml(data.email)}" style="color:#d4a039;">${escapeHtml(data.email)}</a></td></tr>
            <tr><td style="padding:8px 0;color:#627d98;font-size:13px;font-weight:600;">Subject</td></tr>
            <tr><td style="padding:0 0 16px;color:#102a43;font-size:15px;">${escapeHtml(data.subject)}</td></tr>
            <tr><td style="padding:8px 0;color:#627d98;font-size:13px;font-weight:600;">Message</td></tr>
            <tr><td style="padding:0 0 16px;color:#102a43;font-size:15px;line-height:1.6;white-space:pre-wrap;">${escapeHtml(data.message)}</td></tr>
          </table>
        </td></tr>
        <tr><td style="background:#f0f4f8;padding:16px 32px;text-align:center;">
          <p style="margin:0;color:#829ab1;font-size:12px;">Sent from the Cryfield Investments website contact form</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

Deno.serve(async (req: Request) => {
  const origin = req.headers.get("Origin");
  const corsHeaders = corsHeadersFor(origin);

  function jsonResponse(body: Record<string, unknown>, status: number) {
    return new Response(JSON.stringify(body), {
      status,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return jsonResponse({ error: "Method not allowed" }, 405);
  }

  // Browsers always send Origin on this request, so a missing or foreign one
  // means the request did not come from the website's form.
  if (!isOriginAllowed(origin, ALLOWED_ORIGINS)) {
    console.log("Blocked submission: origin not allowed:", origin);
    return jsonResponse({ error: "Forbidden" }, 403);
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return jsonResponse({ error: "Invalid JSON" }, 400);
  }

  const verdict = screenSubmission(body);

  if (verdict.action === "reject") {
    return jsonResponse({ error: verdict.error }, 400);
  }

  if (verdict.action === "drop") {
    console.log("Dropped submission as spam:", verdict.reason);
    return jsonResponse({ success: true }, 200);
  }

  const { fields, flags } = verdict;
  const subjectPrefix = flags.length > 0 ? "[Possible spam] " : "";
  if (flags.length > 0) {
    console.log("Flagged submission:", flags.join("; "));
  }

  const RESEND_API_KEY = Deno.env.get("CRYFIELD_RESEND_API_KEY");
  const RECIPIENT_EMAIL = Deno.env.get("CRYFIELD_RECIPIENT_EMAIL");
  const FROM_EMAIL = Deno.env.get("CRYFIELD_FROM_EMAIL");

  if (!RESEND_API_KEY || !RECIPIENT_EMAIL || !FROM_EMAIL) {
    console.error("Missing environment variables");
    return jsonResponse({ error: "Server configuration error" }, 500);
  }

  const resendRes = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: FROM_EMAIL,
      to: [RECIPIENT_EMAIL],
      reply_to: fields.email,
      subject: `${subjectPrefix}Contact Form: ${fields.subject}`,
      html: buildEmailHtml(fields),
    }),
  });

  if (!resendRes.ok) {
    const err = await resendRes.text();
    console.error("Resend error:", err);
    return jsonResponse({ error: "Failed to send email" }, 502);
  }

  return jsonResponse({ success: true }, 200);
});
