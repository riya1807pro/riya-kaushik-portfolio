import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "method not allowed" });
  }

  const { name, email, mobile, reason, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "missing details" });
  }

  // smtp transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_USER,
      subject: "New email from portfolio message",
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Mobile no.:</strong> ${mobile}</p>
             <p><strong>Reason:</strong> ${reason}</p>
             <p><strong>Message:</strong> ${message}</p>`
    });

    return res.status(200).json({ message: "Message sent successfully" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Error sending email" });
  }
}
