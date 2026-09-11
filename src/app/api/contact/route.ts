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

    // SMTP credentials (Swathi.shetty@tranquelent.com)
    const smtpUser = (process.env.SMTP_USER || "Swathi.shetty@tranquelent.com").trim();
    const rawPass = process.env.SMTP_PASS || "jepw kwtg anez kwrq";
    const smtpPass = rawPass.replace(/\s+/g, "").trim();
    const recipientAdmin = (process.env.SMTP_TO || "Swathi.shetty@tranquelent.com").trim();

    // Create Gmail transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    // 1. Admin Email (Sent directly to Swathi with all form details)
    const mailOptionsAdmin = {
      from: `"Tranquelent Inquiry Form" <${smtpUser}>`,
      to: recipientAdmin,
      replyTo: email,
      subject: `New Engineering Inquiry: ${areaOfInterest} — ${name} (${company})`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; background-color: #ffffff;">
          <div style="background: #03182E; padding: 24px 32px;">
            <h1 style="color: #ffffff; font-size: 20px; margin: 0; font-weight: 700;">New Engineering Inquiry</h1>
            <p style="color: #168BFF; font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; margin: 8px 0 0; font-weight: 600;">
              TRANQUELENT WEBSITE FORM SUBMISSION
            </p>
          </div>
          
          <div style="padding: 32px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #03182E; width: 160px; vertical-align: top;">Full Name</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #475569;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #03182E; vertical-align: top;">Work Email</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #475569;"><a href="mailto:${email}" style="color: #087CF5; text-decoration: none;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #03182E; vertical-align: top;">Company</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #475569;">${company}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #03182E; vertical-align: top;">Phone Number</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #475569;">${phone || "Not provided"}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #03182E; vertical-align: top;">Area of Interest</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #475569;">
                  <span style="background: #EFF6FF; color: #087CF5; padding: 4px 12px; border-radius: 20px; font-size: 13px; font-weight: 600; display: inline-block;">${areaOfInterest}</span>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; font-weight: bold; color: #03182E; vertical-align: top;">Project Overview</td>
                <td style="padding: 12px 0; color: #475569; line-height: 1.6;">${message.replace(/\n/g, "<br>")}</td>
              </tr>
            </table>
          </div>
          
          <div style="background: #f8fafc; padding: 16px 32px; border-top: 1px solid #e2e8f0;">
            <p style="color: #94a3b8; font-size: 12px; margin: 0;">This inquiry was submitted via the Tranquelent website contact form.</p>
          </div>
        </div>
      `,
      text: `
New Engineering Inquiry — Tranquelent Website

Full Name: ${name}
Work Email: ${email}
Company: ${company}
Phone: ${phone || "Not provided"}
Area of Interest: ${areaOfInterest}

Project Overview:
${message}

---
Submitted via the Tranquelent website contact form.
      `.trim(),
    };

    // 2. Customer Confirmation Email
    const mailOptionsCustomer = {
      from: `"Tranquelent Solutions" <${smtpUser}>`,
      to: email,
      replyTo: recipientAdmin,
      subject: `Thank you for your inquiry - Tranquelent`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; background-color: #ffffff;">
          <div style="background: #03182E; padding: 28px 32px;">
            <h1 style="color: #ffffff; font-size: 22px; margin: 0; font-weight: 700;">Inquiry Confirmation</h1>
            <p style="color: #168BFF; font-size: 13px; letter-spacing: 0.05em; margin: 8px 0 0;">Thank you for reaching out to Tranquelent Private Limited</p>
          </div>
          
          <div style="padding: 32px;">
            <p style="color: #334155; font-size: 15px; line-height: 1.6; margin-top: 0;">Dear <strong>${name}</strong>,</p>
            <p style="color: #334155; font-size: 15px; line-height: 1.6;">We have received your engineering inquiry. Our technical leadership team will review your requirements and get back to you promptly.</p>

            <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 8px; padding: 20px; margin: 24px 0;">
              <h3 style="color: #03182E; font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em; margin: 0 0 16px 0; border-bottom: 1px solid #E2E8F0; padding-bottom: 8px;">Summary of Submitted Details</h3>
              <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                <tr><td style="padding: 6px 0; color: #64748B; width: 140px; font-weight: 600;">Full Name:</td><td style="padding: 6px 0; color: #0F172A; font-weight: 500;">${name}</td></tr>
                <tr><td style="padding: 6px 0; color: #64748B; font-weight: 600;">Work Email:</td><td style="padding: 6px 0; color: #0F172A; font-weight: 500;">${email}</td></tr>
                <tr><td style="padding: 6px 0; color: #64748B; font-weight: 600;">Company:</td><td style="padding: 6px 0; color: #0F172A; font-weight: 500;">${company}</td></tr>
                <tr><td style="padding: 6px 0; color: #64748B; font-weight: 600;">Phone Number:</td><td style="padding: 6px 0; color: #0F172A; font-weight: 500;">${phone || "Not provided"}</td></tr>
                <tr><td style="padding: 6px 0; color: #64748B; font-weight: 600;">Area of Interest:</td><td style="padding: 6px 0; color: #087CF5; font-weight: 600;">${areaOfInterest}</td></tr>
                <tr><td style="padding: 6px 0; color: #64748B; font-weight: 600; vertical-align: top;">Project Overview:</td><td style="padding: 6px 0; color: #0F172A; line-height: 1.5;">${message.replace(/\n/g, "<br>")}</td></tr>
              </table>
            </div>

            <p style="color: #64748B; font-size: 14px; line-height: 1.6; margin-bottom: 0;">
              If you have any additional details or urgent updates, please feel free to reply directly to this email or contact us at <a href="mailto:hello@tranquelent.com" style="color: #087CF5; text-decoration: none;">hello@tranquelent.com</a>.
            </p>
          </div>
          
          <div style="background: #f8fafc; padding: 20px 32px; border-top: 1px solid #e2e8f0; text-align: center;">
            <p style="color: #64748B; font-size: 13px; font-weight: 600; margin: 0 0 4px 0;">Tranquelent Private Limited</p>
            <p style="color: #94a3b8; font-size: 12px; margin: 0;">Austin, TX, USA &bull; Bangalore, Karnataka, India</p>
          </div>
        </div>
      `,
      text: `
Dear ${name},

Thank you for reaching out to Tranquelent Private Limited. We have received your engineering inquiry. Our technical leadership team will review your requirements and get back to you promptly.

Summary of Submitted Details:
- Full Name: ${name}
- Work Email: ${email}
- Company: ${company}
- Phone Number: ${phone || "Not provided"}
- Area of Interest: ${areaOfInterest}
- Project Overview:
${message}

If you have any additional details or urgent updates, please feel free to reply directly to this email or contact us at hello@tranquelent.com.

Best regards,
Tranquelent Private Limited
      `.trim(),
    };

    // Send admin email first (critical - goes directly to Swathi)
    await transporter.sendMail(mailOptionsAdmin);

    // Send customer confirmation (non-critical)
    try {
      await transporter.sendMail(mailOptionsCustomer);
    } catch (custErr: any) {
      console.warn("Customer confirmation email could not be sent:", custErr?.message || custErr);
    }

    return Response.json(
      { success: true, message: "Your inquiry has been sent successfully." },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Contact form error:", error?.message || error);
    return Response.json(
      { error: error?.message || "Failed to send inquiry. Please try again later." },
      { status: 500 }
    );
  }
}
