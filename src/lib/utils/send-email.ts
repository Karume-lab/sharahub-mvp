"use server";

import nodemailer from "nodemailer";
import { env } from "@/lib/types";

export const sendEmail = async ({
  to,
  subject,
  html,
  from = "SharaHub <noreply@sharahub.local>",
}: {
  to: string;
  subject: string;
  html: string;
  from?: string;
}) => {
  try {
    const info = await nodemailer
      .createTransport({
        host: env.SMTP_HOST,
        port: Number(env.SMTP_PORT),
        secure: false,
        auth: env.SMTP_USER
          ? {
              user: env.SMTP_USER,
              pass: env.SMTP_PASS,
            }
          : undefined,
      })
      .sendMail({
        from,
        to,
        subject,
        html,
      });

    console.log(`✅ Email sent to ${to}: ${info.messageId}`);
    if (env.NODE_ENV === "development") {
      console.log(`📬 Preview: ${nodemailer.getTestMessageUrl(info)}`);
    }
  } catch (error) {
    console.error("❌ Failed to send email:", error);
    throw error;
  }
};
