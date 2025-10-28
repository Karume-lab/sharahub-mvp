import { account, session, user } from "@/features/auth/db/auth";
import { db } from "@/lib/db";
import { sendEmail } from "@/lib/utils";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";
import { emailOTP } from "better-auth/plugins";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: {
      user,
      account,
      session,
    },
  }),

  user: {
    additionalFields: {
      profileType: {
        type: "string",
      },
    },
  },

  emailAndPassword: {
    enabled: true,

    sendResetPassword: async (data, request) => {
      await sendEmail({
        to: data.user.email,
        subject: "Reset your password",
        html: `
            <p>You requested a password reset.</p>
            <p>Click below to reset your password:</p>
            <a href="${request?.url}">Reset Password</a>
            <p>If you didn't request this, please ignore this email.</p>
          `,
      });
    },
  },

  session: {
    cookieCache: {
      enabled: true,
      maxAge: 5 * 60,
    },
  },

  plugins: [
    nextCookies(),

    emailOTP({
      async sendVerificationOTP({ email, otp, type }) {
        if (type === "email-verification") {
          await sendEmail({
            to: email,
            subject: "Verify your email",
            html: `<p>Your verification code is <b>${otp}</b>.</p>`,
          });
        } else if (type === "forget-password") {
          await sendEmail({
            to: email,
            subject: "Reset your password",
            html: `<p>Your password reset code is <b>${otp}</b>.</p>`,
          });
        }
      },
    }),
  ],
});
