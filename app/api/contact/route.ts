import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, message } = body;

    const agencyMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Contact Form Submission: ${subject}`,
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 40px 20px; background-color: #f8fafc; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); overflow: hidden;">
    <tr>
      <td style="background-color: #0f172a; padding: 40px 20px; text-align: center;">
        <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 800; letter-spacing: 1px;">NEW CONTACT INQUIRY</h1>
        <p style="color: #3b82f6; margin: 8px 0 0 0; font-size: 14px; text-transform: uppercase; letter-spacing: 2px; font-weight: 600;">Iree Community Agency</p>
      </td>
    </tr>
    <tr>
      <td style="padding: 40px 30px;">
        <p style="color: #475569; font-size: 16px; line-height: 1.6; margin-top: 0;">You have received a new message from the website contact form. Here are the details:</p>
        
        <table width="100%" cellpadding="15" cellspacing="0" style="margin-top: 30px; border-collapse: collapse; border-radius: 8px; overflow: hidden; border: 1px solid #e2e8f0;">
          <tr style="background-color: #f8fafc; border-bottom: 1px solid #e2e8f0;">
            <td style="width: 30%; color: #64748b; font-size: 13px; text-transform: uppercase; font-weight: 700; letter-spacing: 1px;">Name</td>
            <td style="color: #0f172a; font-size: 15px; font-weight: 500;">${name}</td>
          </tr>
          <tr style="border-bottom: 1px solid #e2e8f0;">
            <td style="color: #64748b; font-size: 13px; text-transform: uppercase; font-weight: 700; letter-spacing: 1px;">Email</td>
            <td><a href="mailto:${email}" style="color: #3b82f6; text-decoration: none; font-size: 15px; font-weight: 500;">${email}</a></td>
          </tr>
          <tr style="background-color: #f8fafc; border-bottom: 1px solid #e2e8f0;">
            <td style="color: #64748b; font-size: 13px; text-transform: uppercase; font-weight: 700; letter-spacing: 1px;">Phone</td>
            <td style="color: #0f172a; font-size: 15px; font-weight: 500;">${phone || 'Not provided'}</td>
          </tr>
          <tr>
            <td style="color: #64748b; font-size: 13px; text-transform: uppercase; font-weight: 700; letter-spacing: 1px;">Subject</td>
            <td style="color: #0f172a; font-size: 15px; font-weight: 500;">${subject}</td>
          </tr>
        </table>
        
        <div style="margin-top: 30px; padding: 25px; background-color: #f8fafc; border-left: 4px solid #3b82f6; border-radius: 0 8px 8px 0;">
          <h3 style="margin: 0 0 10px 0; color: #0f172a; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Message Content</h3>
          <p style="color: #334155; white-space: pre-wrap; line-height: 1.8; margin: 0; font-size: 15px;">${message}</p>
        </div>
      </td>
    </tr>
    <tr>
      <td style="background-color: #f1f5f9; padding: 20px; text-align: center; border-top: 1px solid #e2e8f0;">
        <p style="color: #94a3b8; font-size: 12px; margin: 0;">This is an automated notification from your website.</p>
      </td>
    </tr>
  </table>
</body>
</html>
      `,
    };

    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting Iree Community Agency',
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 40px 20px; background-color: #f8fafc; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); overflow: hidden;">
    <tr>
      <td style="background-color: #0f172a; padding: 40px 20px; text-align: center;">
        <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 800; letter-spacing: 1px;">IREE COMMUNITY AGENCY</h1>
        <p style="color: #3b82f6; margin: 10px 0 0 0; font-size: 14px; text-transform: uppercase; letter-spacing: 3px; font-weight: 600;">Staffing Excellence</p>
      </td>
    </tr>
    <tr>
      <td style="padding: 40px 30px;">
        <h2 style="color: #0f172a; font-size: 20px; margin-top: 0;">Hello ${name},</h2>
        
        <p style="color: #475569; font-size: 16px; line-height: 1.6;">Thank you for reaching out to us. We have received your message regarding <strong>"${subject}"</strong>.</p>
        
        <p style="color: #475569; font-size: 16px; line-height: 1.6;">Our team is reviewing your inquiry and will get back to you within 24 hours. We pride ourselves on providing prompt and exceptional service.</p>
        
        <div style="margin: 30px 0; padding: 25px; background-color: #eff6ff; border-radius: 8px; text-align: center;">
          <p style="color: #1e3a8a; font-size: 15px; margin: 0; line-height: 1.6;">If your request is urgent, please call our 24/7 priority support line:<br>
          <strong style="font-size: 18px; display: inline-block; margin-top: 8px;">647-200-7442</strong></p>
        </div>
        
        <p style="color: #475569; font-size: 16px; line-height: 1.6; margin-bottom: 0;">Warm regards,</p>
        <p style="color: #0f172a; font-size: 16px; font-weight: 600; margin-top: 5px;">The Client Success Team</p>
      </td>
    </tr>
    <tr>
      <td style="background-color: #f8fafc; padding: 30px 20px; text-align: center; border-top: 1px solid #e2e8f0;">
        <p style="color: #0f172a; font-size: 14px; font-weight: 600; margin: 0 0 10px 0;">Iree Community Agency</p>
        <p style="color: #64748b; font-size: 12px; line-height: 1.5; margin: 0;">2275 Upper Middle Rd E Suite 101, Oakville, ON L6H 0C3</p>
        <p style="color: #64748b; font-size: 12px; line-height: 1.5; margin: 5px 0 0 0;">
          <a href="mailto:Ireecommunityagency@gmail.com" style="color: #3b82f6; text-decoration: none;">Ireecommunityagency@gmail.com</a>
        </p>
      </td>
    </tr>
  </table>
</body>
</html>
      `,
    };

    await transporter.sendMail(agencyMailOptions);
    await transporter.sendMail(userMailOptions);

    return NextResponse.json({ message: 'Message sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
