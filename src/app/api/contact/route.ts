import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import crypto from "crypto";

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, phone, areaOfInterest, message, _hp_check } = body;

    // 1. Anti-spam honeypot check - silently discard bot submissions to protect domain sender score
    if (_hp_check) {
      return NextResponse.json(
        { success: true, message: "Your inquiry has been sent successfully." },
        { status: 200 }
      );
    }

    // 2. Validate required fields
    if (!name || !email || !company || !message) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    // 3. Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(String(email).trim())) {
      return NextResponse.json(
        { error: "Please provide a valid work email address." },
        { status: 400 }
      );
    }

    // 4. Sanitize inputs against header injection and malformed characters
    const cleanName = String(name).replace(/[\r\n]/g, " ").trim().slice(0, 100);
    const cleanEmail = String(email).replace(/[\r\n]/g, "").trim().slice(0, 120);
    const cleanCompany = String(company).replace(/[\r\n]/g, " ").trim().slice(0, 100);
    const cleanPhone = String(phone || "").replace(/[\r\n]/g, " ").trim().slice(0, 50);
    const cleanArea = String(areaOfInterest || "Engineering").replace(/[\r\n]/g, " ").trim().slice(0, 100);
    const cleanMessage = String(message).trim().slice(0, 5000);

    // 5. SMTP credentials and transporter configuration
    const smtpUser = (process.env.SMTP_USER || "Swathi.shetty@tranquelent.com").trim();
    const rawPass = process.env.SMTP_PASS || "jepw kwtg anez kwrq";
    const smtpPass = rawPass.replace(/\s+/g, "").trim();
    const recipientAdmin = (process.env.SMTP_TO || "Swathi.shetty@tranquelent.com").trim();

    const smtpHost = process.env.SMTP_HOST?.trim();
    const smtpPort = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 465;
    const smtpSecure = process.env.SMTP_SECURE !== undefined ? process.env.SMTP_SECURE === "true" : smtpPort === 465;

    const transportConfig = smtpHost
      ? {
          host: smtpHost,
          port: smtpPort,
          secure: smtpSecure,
          auth: { user: smtpUser, pass: smtpPass },
          tls: { rejectUnauthorized: true },
          connectionTimeout: 10000,
          greetingTimeout: 10000,
          socketTimeout: 15000,
        }
      : {
          service: "gmail",
          auth: { user: smtpUser, pass: smtpPass },
          connectionTimeout: 10000,
          greetingTimeout: 10000,
          socketTimeout: 15000,
        };

    const transporter = nodemailer.createTransport(transportConfig as any);

    // 6. Domain-aligned Message-IDs to pass SpamAssassin MID checks and Google DKIM/DMARC alignment
    const domain = smtpUser.includes("@") ? smtpUser.split("@")[1].toLowerCase() : "tranquelent.com";
    const timestamp = Date.now();
    const adminNonce = crypto.randomBytes(6).toString("hex");
    const customerNonce = crypto.randomBytes(6).toString("hex");
    const adminMessageId = `<inquiry.${timestamp}.${adminNonce}@${domain}>`;
    const customerMessageId = `<confirm.${timestamp}.${customerNonce}@${domain}>`;
    const sendDate = new Date();

    // 7. Admin Email (Sent to Swathi with all form details and anti-spam headers)
    const replySubject = encodeURIComponent(`Re: Inquiry regarding ${cleanArea} - Tranquelent`);
    const mailOptionsAdmin = {
      from: `"Tranquelent Inquiry Portal" <${smtpUser}>`,
      to: recipientAdmin,
      replyTo: `"${cleanName.replace(/[^\w\s.-]/g, "")}" <${cleanEmail}>`,
      envelope: {
        from: smtpUser,
        to: recipientAdmin,
      },
      messageId: adminMessageId,
      date: sendDate,
      subject: `[Website Inquiry] ${cleanName} - ${cleanCompany} (${cleanArea})`,
      headers: {
        "Auto-Submitted": "auto-generated",
        "X-Auto-Response-Suppress": "All",
        "Precedence": "bulk",
        "X-Mailer": "Tranquelent Notification Engine v2.0",
        "X-Report-Abuse": "Please report abuse to abuse@tranquelent.com",
        "Feedback-ID": "website-lead:contact-form:tranquelent",
      },
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Website Inquiry</title>
</head>
<body style="margin: 0; padding: 24px; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #0f172a; -webkit-font-smoothing: antialiased;">
  <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 620px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);">
    <tr>
      <td style="background-color: #03182E; padding: 28px 32px; border-bottom: 3px solid #168BFF;">
        <h1 style="color: #ffffff; font-size: 20px; font-weight: 700; margin: 0; letter-spacing: -0.01em;">New Engineering Inquiry</h1>
        <p style="color: #168BFF; font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; margin: 8px 0 0; font-weight: 600;">
          TRANQUELENT WEBSITE CONTACT PORTAL
        </p>
      </td>
    </tr>
    <tr>
      <td style="padding: 32px;">
        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse; font-size: 14px;">
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-weight: 600; color: #03182E; width: 150px; vertical-align: top;">Full Name</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #334155;"><strong>${escapeHtml(cleanName)}</strong></td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-weight: 600; color: #03182E; vertical-align: top;">Work Email</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #087CF5;">
              <a href="mailto:${cleanEmail}" style="color: #087CF5; text-decoration: none; font-weight: 600;">${escapeHtml(cleanEmail)}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-weight: 600; color: #03182E; vertical-align: top;">Company</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #334155;">${escapeHtml(cleanCompany)}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-weight: 600; color: #03182E; vertical-align: top;">Phone Number</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #334155;">${escapeHtml(cleanPhone || "Not provided")}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-weight: 600; color: #03182E; vertical-align: top;">Area of Interest</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #334155;">
              <span style="background-color: #EFF6FF; color: #087CF5; padding: 4px 12px; border-radius: 16px; font-size: 13px; font-weight: 600; display: inline-block;">${escapeHtml(cleanArea)}</span>
            </td>
          </tr>
          <tr>
            <td style="padding: 14px 0 6px 0; font-weight: 600; color: #03182E; vertical-align: top;">Project Overview</td>
            <td style="padding: 14px 0 6px 0; color: #334155; line-height: 1.6; white-space: pre-wrap;">${escapeHtml(cleanMessage)}</td>
          </tr>
        </table>

        <div style="margin-top: 28px; padding-top: 20px; border-top: 1px solid #e2e8f0; text-align: center;">
          <a href="mailto:${cleanEmail}?subject=${replySubject}" style="display: inline-block; background-color: #087CF5; color: #ffffff; text-decoration: none; font-weight: 600; font-size: 14px; padding: 12px 28px; border-radius: 8px; box-shadow: 0 2px 4px rgba(8, 124, 245, 0.2);">
            Reply Directly to ${escapeHtml(cleanName)}
          </a>
        </div>
      </td>
    </tr>
    <tr>
      <td style="background-color: #f8fafc; padding: 16px 32px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b; line-height: 1.5;">
        <p style="margin: 0;">This inquiry was securely delivered from the Tranquelent website contact form.</p>
        <p style="margin: 4px 0 0 0;">Sender verified via Tranquelent Mail System &bull; Austin, TX &bull; Bangalore, India</p>
      </td>
    </tr>
  </table>
</body>
</html>`,
      text: `New Engineering Inquiry — Tranquelent Website Contact Form

Full Name: ${cleanName}
Work Email: ${cleanEmail}
Company: ${cleanCompany}
Phone: ${cleanPhone || "Not provided"}
Area of Interest: ${cleanArea}

Project Overview:
${cleanMessage}

---
To reply directly to the customer, email: ${cleanEmail}
Submitted securely via the Tranquelent website contact form.
Tranquelent Private Limited (Austin, TX & Bangalore, India)`.trim(),
    };

    // 8. Customer Confirmation Email (Sent to visitor with anti-spam deliverability standards)
    const mailOptionsCustomer = {
      from: `"Tranquelent Solutions" <${smtpUser}>`,
      to: cleanEmail,
      replyTo: `"Tranquelent Team" <${recipientAdmin}>`,
      envelope: {
        from: smtpUser,
        to: cleanEmail,
      },
      messageId: customerMessageId,
      date: sendDate,
      subject: `Inquiry Confirmation - Tranquelent Solutions`,
      headers: {
        "Auto-Submitted": "auto-generated",
        "X-Auto-Response-Suppress": "All",
        "Precedence": "bulk",
        "X-Mailer": "Tranquelent Notification Engine v2.0",
        "X-Report-Abuse": "Please report abuse to abuse@tranquelent.com",
        "Feedback-ID": "customer-confirm:contact-form:tranquelent",
      },
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Inquiry Confirmation - Tranquelent</title>
</head>
<body style="margin: 0; padding: 24px; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #0f172a; -webkit-font-smoothing: antialiased;">
  <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 620px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);">
    <tr>
      <td style="background-color: #03182E; padding: 28px 32px; border-bottom: 3px solid #168BFF;">
        <h1 style="color: #ffffff; font-size: 22px; font-weight: 700; margin: 0; letter-spacing: -0.01em;">Inquiry Confirmation</h1>
        <p style="color: #168BFF; font-size: 13px; letter-spacing: 0.05em; margin: 8px 0 0;">Thank you for reaching out to Tranquelent Private Limited</p>
      </td>
    </tr>
    <tr>
      <td style="padding: 32px;">
        <p style="color: #334155; font-size: 15px; line-height: 1.6; margin-top: 0;">Dear <strong>${escapeHtml(cleanName)}</strong>,</p>
        <p style="color: #334155; font-size: 15px; line-height: 1.6;">We have received your engineering inquiry. Our technical leadership team will review your requirements and follow up with you promptly.</p>

        <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; margin: 24px 0;">
          <h3 style="color: #03182E; font-size: 13px; text-transform: uppercase; letter-spacing: 0.08em; margin: 0 0 16px 0; border-bottom: 1px solid #e2e8f0; padding-bottom: 8px; font-weight: 700;">Summary of Submitted Details</h3>
          <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse; font-size: 14px;">
            <tr><td style="padding: 6px 0; color: #64748b; width: 140px; font-weight: 600;">Full Name:</td><td style="padding: 6px 0; color: #0f172a; font-weight: 500;">${escapeHtml(cleanName)}</td></tr>
            <tr><td style="padding: 6px 0; color: #64748b; font-weight: 600;">Work Email:</td><td style="padding: 6px 0; color: #0f172a; font-weight: 500;">${escapeHtml(cleanEmail)}</td></tr>
            <tr><td style="padding: 6px 0; color: #64748b; font-weight: 600;">Company:</td><td style="padding: 6px 0; color: #0f172a; font-weight: 500;">${escapeHtml(cleanCompany)}</td></tr>
            <tr><td style="padding: 6px 0; color: #64748b; font-weight: 600;">Phone Number:</td><td style="padding: 6px 0; color: #0f172a; font-weight: 500;">${escapeHtml(cleanPhone || "Not provided")}</td></tr>
            <tr><td style="padding: 6px 0; color: #64748b; font-weight: 600;">Area of Interest:</td><td style="padding: 6px 0; color: #087cf5; font-weight: 600;">${escapeHtml(cleanArea)}</td></tr>
            <tr><td style="padding: 6px 0; color: #64748b; font-weight: 600; vertical-align: top;">Project Overview:</td><td style="padding: 6px 0; color: #0f172a; line-height: 1.5; white-space: pre-wrap;">${escapeHtml(cleanMessage)}</td></tr>
          </table>
        </div>

        <p style="color: #64748b; font-size: 14px; line-height: 1.6; margin-bottom: 0;">
          If you have any additional details or urgent updates, you can reply directly to this email or contact us at <a href="mailto:hello@tranquelent.com" style="color: #087cf5; text-decoration: none; font-weight: 600;">hello@tranquelent.com</a>.
        </p>
      </td>
    </tr>
    <tr>
      <td style="background-color: #f8fafc; padding: 24px 32px; border-top: 1px solid #e2e8f0; text-align: center; font-size: 12px; color: #64748b; line-height: 1.6;">
        <p style="color: #334155; font-size: 13px; font-weight: 700; margin: 0 0 4px 0;">Tranquelent Private Limited</p>
        <p style="margin: 0 0 4px 0;">5900 Balcones Drive STE 100, Austin, TX 78731, USA &bull; Bangalore, Karnataka, India</p>
        <p style="margin: 0; color: #94a3b8;">You received this automated notification because you submitted an inquiry at tranquelent.com.</p>
      </td>
    </tr>
  </table>
</body>
</html>`,
      text: `Dear ${cleanName},

Thank you for reaching out to Tranquelent Private Limited. We have received your engineering inquiry. Our technical leadership team will review your requirements and follow up with you promptly.

Summary of Submitted Details:
- Full Name: ${cleanName}
- Work Email: ${cleanEmail}
- Company: ${cleanCompany}
- Phone Number: ${cleanPhone || "Not provided"}
- Area of Interest: ${cleanArea}
- Project Overview:
${cleanMessage}

If you have any additional details or urgent updates, please feel free to reply directly to this email or contact us at hello@tranquelent.com.

Best regards,
Tranquelent Private Limited
Austin, TX, USA & Bangalore, Karnataka, India
Website: https://www.tranquelent.com`.trim(),
    };

    // 9. Dispatch Admin notification email
    await transporter.sendMail(mailOptionsAdmin);

    // 10. Dispatch Customer confirmation email (non-blocking if customer email provider rejects)
    try {
      await transporter.sendMail(mailOptionsCustomer);
    } catch (custErr: any) {
      console.warn("Customer confirmation email could not be sent:", custErr?.message || custErr);
    }

    return NextResponse.json(
      { success: true, message: "Your inquiry has been sent successfully." },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Contact form error:", error?.message || error);
    return NextResponse.json(
      { error: error?.message || "Failed to send inquiry. Please try again later." },
      { status: 500 }
    );
  }
}
