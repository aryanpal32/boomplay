import { createTransport } from 'nodemailer';
import { IncomingForm } from 'formidable';
import fs from 'fs';

export const config = {
  api: {
    bodyParser: false,
  },
};

const validateEnvironment = () => {
  if (!process.env.GMAIL_USER || !process.env.GMAIL_PASSWORD) {
    throw new Error('Email credentials not configured in environment variables');
  }
};

const validateFields = (fields) => {
  const required = ['fullName', 'email', 'position'];
  const missing = required.filter(field => !fields[field]);
  if (missing.length > 0) {
    throw new Error(`Missing required fields: ${missing.join(', ')}`);
  }

  if (fields.position === 'Other' && !fields.otherPosition) {
    throw new Error('Please specify the position when selecting "Other"');
  }
};

const validateFile = (file) => {
  if (!file) return null;
  
  const allowedTypes = [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'image/jpeg',
    'image/png'
  ];
  
  if (!allowedTypes.includes(file.mimetype)) {
    throw new Error('Invalid file type. Only PDF, Word (DOC/DOCX), JPEG, and PNG files are allowed.');
  }

  // Check file size (max 5MB)
  const maxSize = 5 * 1024 * 1024; // 5MB
  if (file.size > maxSize) {
    throw new Error('File size too large. Maximum allowed size is 5MB.');
  }

  return file;
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // 1. Validate environment variables
    validateEnvironment();

    // 2. Parse form data
   // In your handler function, replace the form parsing section with:

const { fields, files } = await new Promise((resolve, reject) => {
  const form = new IncomingForm();
  form.parse(req, (err, fields, files) => {
    if (err) return reject(err);
    
    // Convert single-element arrays to strings
    const processedFields = {};
    for (const [key, value] of Object.entries(fields)) {
      processedFields[key] = Array.isArray(value) ? value[0] : value;
    }
    
    resolve({ fields: processedFields, files });
  });
});

    // 3. Validate required fields
    validateFields(fields);

    // 4. Validate file if present
    const resumeFile = files.resume ? validateFile(files.resume[0]) : null;

    // 5. Prepare email content
    const finalPosition = fields.position === 'Other' 
      ? fields.otherPosition 
      : fields.position;

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2563eb;">New Creative Team Application</h2>
        
        <h3 style="color: #1e40af;">Applicant Details</h3>
        <p><strong>Name:</strong> ${fields.fullName}</p>
        <p><strong>Position:</strong> ${finalPosition}</p>
        ${fields.age ? `<p><strong>Age:</strong> ${fields.age}</p>` : ''}
        ${fields.gender ? `<p><strong>Gender:</strong> ${fields.gender}</p>` : ''}
        
        <h3 style="color: #1e40af; margin-top: 20px;">Contact Information</h3>
        <p><strong>Email:</strong> ${fields.email}</p>
        ${fields.phone ? `<p><strong>Phone:</strong> ${fields.phone}</p>` : ''}
        
        <h3 style="color: #1e40af; margin-top: 20px;">About the Applicant</h3>
        <p>${fields.aboutYou?.replace(/\n/g, '<br>') || 'Not provided'}</p>
        
        ${resumeFile ? `
        <h3 style="color: #1e40af; margin-top: 20px;">Attachment</h3>
        <p>Resume/Portfolio: ${resumeFile.originalFilename}</p>
        ` : ''}
      </div>
    `;

    // 6. Configure and send email
    const transporter = createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"Creative Team Application" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER, // Send to yourself
      replyTo: fields.email, // Allow replying directly to applicant
      subject: `New Application: ${fields.fullName} for ${finalPosition}`,
      html: emailHtml,
      attachments: resumeFile ? [{
        filename: resumeFile.originalFilename,
        content: fs.createReadStream(resumeFile.filepath),
      }] : [],
    };

    await transporter.sendMail(mailOptions);

    // 7. Clean up temporary file
    if (resumeFile) {
      fs.unlink(resumeFile.filepath, (err) => {
        if (err) console.error('Error deleting temporary file:', err);
      });
    }

    return res.status(200).json({ success: true });

  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ 
      success: false, 
      error: error.message || 'Failed to process application',
      details: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
}