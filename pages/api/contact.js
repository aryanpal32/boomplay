import { createTransport } from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, phone, subject, message } = req.body;

    // Basic validation
    if (!name || !email || !subject || !message) {
      throw new Error('Missing required fields');
    }

    const transporter = createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"Contact Form" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER, // Or your contact email
      replyTo: email,
      subject: `New Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">New Contact Form Submission</h2>
          <h3 style="color: #1e40af;">From: ${name}</h3>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
          
          <h3 style="color: #1e40af; margin-top: 20px;">Message</h3>
          <p>${message.replace(/\n/g, '<br>')}</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Contact API Error:', error);
    return res.status(500).json({ 
      success: false, 
      error: error.message || 'Failed to send message' 
    });
  }
}