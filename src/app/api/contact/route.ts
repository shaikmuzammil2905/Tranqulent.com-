import { NextRequest } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, phone, areaOfInterest, message } = body;

    // Validate required fields
    if (!name || !email || !company || !message) {
      return Response.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    // Create a transporter using SMTP
    // Uses environment variables for configuration
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Compose the email
    const mailOptions = {
      from: `"Tranquelent Website" <${process.env.SMTP_USER}>`,
      to: "hello@tranquelent.com",
      replyTo: email,
      subject: `New Inquiry: ${areaOfInterest} — from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
          <div style="background: #03182E; padding: 24px 32px;">
            <h1 style="color: #ffffff; font-size: 20px; margin: 0;">New Engineering Inquiry</h1>
            <p style="color: #168BFF; font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; margin: 8px 0 0;">
              TRANQUELENT WEBSITE FORM SUBMISSION
            </p>
          </div>
          
          <div style="padding: 32px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #03182E; width: 160px; vertical-align: top;">
                  Full Name
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #475569;">
                  ${name}
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #03182E; vertical-align: top;">
                  Email
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #475569;">
                  <a href="mailto:${email}" style="color: #087CF5; text-decoration: none;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #03182E; vertical-align: top;">
                  Company
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #475569;">
                  ${company}
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #03182E; vertical-align: top;">
                  Phone
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #475569;">
                  ${phone || "Not provided"}
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #03182E; vertical-align: top;">
                  Area of Interest
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #475569;">
                  <span style="background: #EFF6FF; color: #087CF5; padding: 4px 12px; border-radius: 20px; font-size: 13px; font-weight: 600;">
                    ${areaOfInterest}
                  </span>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; font-weight: bold; color: #03182E; vertical-align: top;">
                  Message
                </td>
                <td style="padding: 12px 0; color: #475569; line-height: 1.6;">
                  ${message.replace(/\n/g, "<br>")}
                </td>
              </tr>
            </table>
          </div>
          
          <div style="background: #f8fafc; padding: 16px 32px; border-top: 1px solid #e2e8f0;">
            <p style="color: #94a3b8; font-size: 12px; margin: 0;">
              This inquiry was submitted via the Tranquelent website contact form.
            </p>
          </div>
        </div>
      `,
      text: `
New Engineering Inquiry — Tranquelent Website

Full Name: ${name}
Email: ${email}
Company: ${company}
Phone: ${phone || "Not provided"}
Area of Interest: ${areaOfInterest}

Message:
${message}

---
Submitted via the Tranquelent website contact form.
      `.trim(),
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return Response.json(
      { success: true, message: "Your inquiry has been sent successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return Response.json(
      { error: "Failed to send your inquiry. Please try again later." },
      { status: 500 }
    );
  }
}
