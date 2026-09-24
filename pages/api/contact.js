import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  const { name, phone } = req.body || {};

  if (!name || !phone) {
    return res.status(400).json({ success: false, message: 'Name and Phone number are required.' });
  }

  const mailUser = process.env.MAIL_USER;
  const mailPass = process.env.MAIL_PASS;
  const mailTo = process.env.MAIL_TO || mailUser;

  if (!mailUser || !mailPass) {
    console.error('Missing MAIL_USER or MAIL_PASS in environment variables');
    return res.status(500).json({ success: false, message: 'Server email configuration missing' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: mailUser,
        pass: mailPass,
      },
    });

    const mailOptions = {
      from: `"Atarashii Serenity" <${mailUser}>`,
      to: mailTo,
      subject: `New Lead: ${name} (${phone}) - Atarashii Serenity`,
      html: `
        <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; padding: 24px; color: #18332c; max-width: 600px; border: 1px solid #c4a964; border-radius: 8px; background-color: #faf9f5;">
          <h2 style="color: #18332c; margin-top: 0; border-bottom: 2px solid #c4a964; padding-bottom: 12px;">New Lead Enquiry</h2>
          <p style="font-size: 15px; line-height: 1.6;">You have received a new consultation request from the <strong>Atarashii Serenity</strong> landing page:</p>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px; background-color: #ffffff; border-radius: 6px; overflow: hidden; border: 1px solid #e2ddd3;">
            <tr style="border-bottom: 1px solid #e2ddd3;">
              <td style="padding: 12px 16px; font-weight: bold; width: 35%; color: #18332c; background-color: #f3efe6;">Full Name</td>
              <td style="padding: 12px 16px; color: #27493e; font-size: 15px;">${name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e2ddd3;">
              <td style="padding: 12px 16px; font-weight: bold; color: #18332c; background-color: #f3efe6;">Phone Number</td>
              <td style="padding: 12px 16px; color: #c4a964; font-weight: bold; font-size: 16px;">
                <a href="tel:${phone}" style="color: #18332c; text-decoration: none;">${phone}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 16px; font-weight: bold; color: #18332c; background-color: #f3efe6;">Timestamp</td>
              <td style="padding: 12px 16px; color: #666; font-size: 13px;">${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</td>
            </tr>
          </table>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true, message: 'Lead submitted successfully' });
  } catch (error) {
    console.error('Nodemailer error:', error);
    return res.status(500).json({ success: false, message: error.message || 'Failed to send email' });
  }
}
