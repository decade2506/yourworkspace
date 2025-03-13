import ContactForm from "@/components/contact";
import nodemailer from "nodemailer";
import { FormData } from "@/@types/mail-form";

export default function Contact() {
  const sendMail = async (data:FormData) => {
    'use server'
    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.SMTP_USERNAME,
          pass: process.env.SMTP_PASSWORD,
        },
        tls: {
          rejectUnauthorized: true
        },
        secure: true
      })
      
      const textContent = `
        New Contact Form Submission
        --------------------------
        Name: ${data.name}
        Email: ${data.email}
        Phone: ${data.phone}
        Company: ${data.company}
        
        Message:
        ${data.message || 'No message provided'}
      `;

      const htmlContent = `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Company:</strong> ${data.company}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message || 'No message provided'}</p>
      `;
      
      const mailOptions = {
        from: {
          name: "Your Website Contact Form",
          address: process.env.SMTP_USERNAME as string
        },
        replyTo: data.email,
        to: process.env.MAIL_RECIEVER_ADDRESS,
        subject: `Website Contact: ${data.name} from ${data.company}`,
        text: textContent,
        html: htmlContent,
        headers: {
          'X-Contact-Form': 'true',
          'X-Originating-IP': '127.0.0.1',
          'List-Unsubscribe': `<mailto:${process.env.SMTP_USERNAME}?subject=unsubscribe>`
        }
      };

      await transporter.sendMail(mailOptions);
      return {
        success: true,
        error: null,
      };
    } catch (error) {
      console.error("Email sending error:", error);
      return {
        success: false,
        error: "An error occurred while sending your message.",
      };
    }
  };

  return (
    <ContactForm sendMail={sendMail} />
  );
}
