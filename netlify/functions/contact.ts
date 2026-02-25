import { Handler } from "@netlify/functions";
import nodemailer from "nodemailer";

const handler: Handler = async (event) => {
  // Only allow POST
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const { name, email, details } = JSON.parse(event.body || "{}");

    if (!name || !email || !details) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "All fields are required" }),
      };
    }

    const gmailUser = process.env.GMAIL_USER?.trim();
    const gmailPass = process.env.GMAIL_APP_PASSWORD?.replace(/\s/g, "");

    if (!gmailUser || !gmailPass) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Server configuration error: Missing credentials" }),
      };
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: gmailUser,
        pass: gmailPass,
      },
    });

    const mailOptions = {
      from: gmailUser,
      to: gmailUser,
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

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to send email" }),
    };
  }
};

export { handler };
