import { NextResponse } from "next/server";

const CONTACT_INBOX = "service@masadvp.com";

function clean(value = "") {
  return String(value ?? "").slice(0, 5000).trim();
}

export async function POST(request) {
  const data = await request.json().catch(() => null);

  if (!data?.name || !data?.email || !data?.message) {
    return NextResponse.json(
      { message: "Name, email and message are required." },
      { status: 400 }
    );
  }

  // Forward to FormSubmit (no API key required; one-time activation email
  // is sent to CONTACT_INBOX on first submission). FormSubmit requires an
  // Origin/Referer header and reports success in the JSON body, not the
  // HTTP status code.
  const response = await fetch(
    "https://formsubmit.co/ajax/" + CONTACT_INBOX,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Origin: "https://www.masadvp.com",
        Referer: "https://www.masadvp.com/contact"
      },
      body: JSON.stringify({
        _subject: "New MASA inquiry from " + clean(data.name),
        _replyto: clean(data.email),
        _template: "table",
        Name: clean(data.name),
        Email: clean(data.email),
        Company: clean(data.company),
        "Country / Region": clean(data.country),
        "Product Interest": clean(data.interest),
        Message: clean(data.message)
      })
    }
  );

  const result = await response.json().catch(() => null);
  if (!response.ok || !result || result.success !== "true") {
    return NextResponse.json(
      {
        message:
          "The inquiry could not be sent. Please email " +
          CONTACT_INBOX +
          " directly."
      },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
