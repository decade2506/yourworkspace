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
        Họ và Tên: ${data.name}
        Email: ${data.email}
        Số điện thoại: ${data.phone}
        Thuộc doanh nghiệp: ${data.company}
        
        Lời nhắn:
        ${data.message || 'Không có tin nhắn nào được cung cấp'}
      `;

      const htmlContent = `
        <h2>Bạn có một yêu cầu liên hệ mới</h2>
        <p><strong>Họ và Tên:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Số điện thoại:</strong> ${data.phone}</p>
        <p><strong>Thuộc doanh nghiệp:</strong> ${data.company}</p>
        <p><strong>Lời nhắn:</strong></p>
        <p>${data.message || 'Không có tin nhắn nào được cung cấp'}</p>
      `;
      
      const mailOptions = {
        from: {
          name: "Từ Form liên hệ của YOURS",
          address: process.env.SMTP_USERNAME as string
        },
        replyTo: data.email,
        to: process.env.MAIL_RECIEVER_ADDRESS,
        subject: `Website Contact: ${data.name} từ ${data.company}`,
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
