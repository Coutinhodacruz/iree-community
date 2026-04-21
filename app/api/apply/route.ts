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
    const { fullName, email, phone, position, experience, message } = body;

    const agencyMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Job Application: ${position} - ${fullName}`,
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
        <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 800; letter-spacing: 1px;">NEW JOB APPLICATION</h1>
        <p style="color: #8b5cf6; margin: 8px 0 0 0; font-size: 14px; text-transform: uppercase; letter-spacing: 2px; font-weight: 600;">Iree Community Agency</p>
      </td>
    </tr>
    <tr>
      <td style="padding: 40px 30px;">
        <p style="color: #475569; font-size: 16px; line-height: 1.6; margin-top: 0;">A new candidate has submitted an application for the <strong>${position}</strong> position.</p>
        
        <table width="100%" cellpadding="15" cellspacing="0" style="margin-top: 30px; border-collapse: collapse; border-radius: 8px; overflow: hidden; border: 1px solid #e2e8f0;">
          <tr style="background-color: #f8fafc; border-bottom: 1px solid #e2e8f0;">
            <td style="width: 35%; color: #64748b; font-size: 13px; text-transform: uppercase; font-weight: 700; letter-spacing: 1px;">Applicant</td>
            <td style="color: #0f172a; font-size: 15px; font-weight: 500;">${fullName}</td>
          </tr>
          <tr style="border-bottom: 1px solid #e2e8f0;">
            <td style="color: #64748b; font-size: 13px; text-transform: uppercase; font-weight: 700; letter-spacing: 1px;">Email</td>
            <td><a href="mailto:${email}" style="color: #8b5cf6; text-decoration: none; font-size: 15px; font-weight: 500;">${email}</a></td>
          </tr>
          <tr style="background-color: #f8fafc; border-bottom: 1px solid #e2e8f0;">
            <td style="color: #64748b; font-size: 13px; text-transform: uppercase; font-weight: 700; letter-spacing: 1px;">Phone</td>
            <td style="color: #0f172a; font-size: 15px; font-weight: 500;">${phone}</td>
          </tr>
          <tr style="border-bottom: 1px solid #e2e8f0;">
            <td style="color: #64748b; font-size: 13px; text-transform: uppercase; font-weight: 700; letter-spacing: 1px;">Position</td>
            <td style="color: #8b5cf6; font-size: 15px; font-weight: 700;">${position}</td>
          </tr>
          <tr style="background-color: #f8fafc;">
            <td style="color: #64748b; font-size: 13px; text-transform: uppercase; font-weight: 700; letter-spacing: 1px;">Experience</td>
            <td style="color: #0f172a; font-size: 15px; font-weight: 500;">${experience} years</td>
          </tr>
        </table>
        
        <div style="margin-top: 30px; padding: 25px; background-color: #f8fafc; border-left: 4px solid #8b5cf6; border-radius: 0 8px 8px 0;">
          <h3 style="margin: 0 0 10px 0; color: #0f172a; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Candidate Message</h3>
          <p style="color: #334155; white-space: pre-wrap; line-height: 1.8; margin: 0; font-size: 15px;">${message || 'No additional message provided.'}</p>
        </div>
      </td>
    </tr>
    <tr>
      <td style="background-color: #f1f5f9; padding: 20px; text-align: center; border-top: 1px solid #e2e8f0;">
        <p style="color: #94a3b8; font-size: 12px; margin: 0;">This is an automated notification from your Careers page.</p>
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
      subject: `Application Received: ${position} at Iree Community Agency`,
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
        <p style="color: #8b5cf6; margin: 10px 0 0 0; font-size: 14px; text-transform: uppercase; letter-spacing: 3px; font-weight: 600;">Careers & Opportunities</p>
      </td>
    </tr>
    <tr>
      <td style="padding: 40px 30px;">
        <h2 style="color: #0f172a; font-size: 20px; margin-top: 0;">Hello ${fullName},</h2>
        
        <p style="color: #475569; font-size: 16px; line-height: 1.6;">Thank you for applying for the <strong>${position}</strong> role at Iree Community Agency. We have successfully received your application.</p>
        
        <p style="color: #475569; font-size: 16px; line-height: 1.6;">Our recruitment team will review your qualifications and ${experience} years of experience. If your profile aligns with our current openings or client needs, we will reach out to you within the next 24-48 hours to schedule an interview.</p>
        
        <div style="margin: 30px 0; padding: 25px; background-color: #f5f3ff; border-radius: 8px; text-align: center; border: 1px dashed #ddd6fe;">
          <p style="color: #5b21b6; font-size: 15px; margin: 0; line-height: 1.6; font-weight: 500;">We appreciate your interest in joining our team of dedicated professionals.</p>
        </div>
        
        <p style="color: #475569; font-size: 16px; line-height: 1.6; margin-bottom: 0;">Best of luck,</p>
        <p style="color: #0f172a; font-size: 16px; font-weight: 600; margin-top: 5px;">The Recruitment Team</p>
      </td>
    </tr>
    <tr>
      <td style="background-color: #f8fafc; padding: 30px 20px; text-align: center; border-top: 1px solid #e2e8f0;">
        <p style="color: #0f172a; font-size: 14px; font-weight: 600; margin: 0 0 10px 0;">Iree Community Agency</p>
        <p style="color: #64748b; font-size: 12px; line-height: 1.5; margin: 0;">2275 Upper Middle Rd E Suite 101, Oakville, ON L6H 0C3</p>
        <p style="color: #64748b; font-size: 12px; line-height: 1.5; margin: 5px 0 0 0;">
          <a href="mailto:Ireecommunityagency@gmail.com" style="color: #8b5cf6; text-decoration: none;">Ireecommunityagency@gmail.com</a>
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

    return NextResponse.json({ message: 'Application submitted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to submit application' }, { status: 500 });
  }
}
