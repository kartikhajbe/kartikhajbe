"use server"

import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
})

interface ContactEmailProps {
  name: string
  email: string
  subject: string
  message: string
}

export async function sendContactEmail({ name, email, subject, message }: ContactEmailProps) {
  try {
    // Validate environment variables
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error("[v0] Gmail credentials not configured")
      return { success: false, error: "Email service not configured" }
    }

    // Send email to you (Kartik)
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${name} (${email})</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    })

    // Send confirmation email to the visitor
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: email,
      subject: "Thank you for reaching out - Kartik Hajbe",
      html: `
        <p>Hi ${name},</p>
        <p>Thank you for contacting me! I've received your message and will get back to you soon.</p>
        <p><strong>Your message:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
        <hr />
        <p>Best regards,<br />Kartik Hajbe</p>
      `,
    })

    return { success: true }
  } catch (error) {
    console.error("[v0] Email send error:", error)
    return { success: false, error: "Failed to send email" }
  }
}
