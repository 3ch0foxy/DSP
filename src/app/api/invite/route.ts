import resend from "@/lib/resend";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, email } = await req.json();

  const lumaLink = `https://lu.ma/evt-JOZGiPEEj8BR17Z?pk=${encodeURIComponent(email)}`;

  await resend.emails.send({
    from: "noreply@dsp.vercel.app", // You can verify this domain in Resend later
    to: email,
    subject: "You're invited to DSP Launch 🚀",
    html: `
      <p>Hi ${name},</p>
      <p>You're invited to our DSP Launch event! Click below to register and receive your QR check-in:</p>
      <p><a href="${lumaLink}" style="color:#4f46e5;">Register Now</a></p>
      <p>See you there!</p>
    `,
  });

  return NextResponse.json({ message: "Invitation sent!" });
}
