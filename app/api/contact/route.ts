import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { name, company, email, country, message } = await request.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Email service not configured" }, { status: 500 });
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      from: "COMIX Website <onboarding@resend.dev>",
      to: "y.mahmoud@comixpharma.com",
      reply_to: email,
      subject: `New enquiry — ${name}${company ? ` · ${company}` : ""}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #111; margin-bottom: 24px;">New enquiry from COMIX website</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666; width: 130px;">Name</td><td style="padding: 10px 0; border-bottom: 1px solid #eee;">${name}</td></tr>
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666;">Company</td><td style="padding: 10px 0; border-bottom: 1px solid #eee;">${company || "—"}</td></tr>
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666;">Email</td><td style="padding: 10px 0; border-bottom: 1px solid #eee;"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666;">Market</td><td style="padding: 10px 0; border-bottom: 1px solid #eee;">${country || "—"}</td></tr>
            <tr><td style="padding: 10px 12px 10px 0; color: #666; vertical-align: top;">Message</td><td style="padding: 10px 0; white-space: pre-wrap;">${message}</td></tr>
          </table>
          <p style="margin-top: 32px; color: #999; font-size: 12px;">Sent from comixpharma.com</p>
        </div>
      `,
    }),
  });

  if (!res.ok) {
    const error = await res.text();
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
