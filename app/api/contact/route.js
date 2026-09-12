import { NextResponse } from "next/server";

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request) {
  const data = await request.json().catch(() => null);

  if (!data?.name || !data?.email || !data?.message) {
    return NextResponse.json(
      { message: "Name, email and message are required." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || "services@masadvp.com";
  const from = process.env.CONTACT_FROM_EMAIL || "MASA Website <onboarding@resend.dev>";

  if (!apiKey) {
    return NextResponse.json(
      { message: "Email service is not configured yet." },
      { status: 503 }
    );
  }

  const subject = `New MASA inquiry from ${data.name}`;
  const html = `
    <h2>New MASA Website Inquiry</h2>
    <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
    <p><strong>Company:</strong> ${escapeHtml(data.company)}</p>
    <p><strong>Country / Region:</strong> ${escapeHtml(data.country)}</p>
    <p><strong>Product Interest:</strong> ${escapeHtml(data.interest)}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(data.message).replaceAll("\n", "<br />")}</p>
  `;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from,
      to,
      reply_to: data.email,
      subject,
      html
    })
  });

  if (!response.ok) {
    return NextResponse.json(
      { message: "The inquiry could not be sent." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
