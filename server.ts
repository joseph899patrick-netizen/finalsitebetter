import express from "express";
import { createServer as createViteServer } from "vite";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API route for contact form
  app.post("/api/contact", async (req, res) => {
    const { name, email, details } = req.body;

    if (!name || !email || !details) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const gmailUser = process.env.GMAIL_USER?.trim();
    const gmailPass = process.env.GMAIL_APP_PASSWORD?.replace(/\s/g, ""); // Remove all spaces

    if (!gmailUser || !gmailPass) {
      const missing = [];
      if (!gmailUser) missing.push("GMAIL_USER");
      if (!gmailPass) missing.push("GMAIL_APP_PASSWORD");
      console.error(`Missing environment variables: ${missing.join(", ")}`);
      return res.status(500).json({ error: "Server configuration error: Missing credentials" });
    }

    console.log(`Attempting to send email from: ${gmailUser}`);
    console.log(`Password length: ${gmailPass.length} characters`);

    try {
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // use SSL
        auth: {
          user: gmailUser,
          pass: gmailPass,
        },
      });

      const mailOptions = {
        from: gmailUser,
        to: gmailUser, // Send to yourself
        subject: `New Lead from SiteBetter: ${name}`,
        text: `
          Name: ${name}
          Email: ${email}
          
          Details:
          ${details}
        `,
        replyTo: email
      };

      await transporter.sendMail(mailOptions);
      res.json({ success: true });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Failed to send email" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static("dist"));
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
