import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/db";
import { nextCookies } from "better-auth/next-js";
import {
  user,
  account,
  session,
} from "@/__generated__/better-auth/auth-schema";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: {
      user,
      account,
      session,
    },
  }),
  emailAndPassword: {
    enabled: true,
    sendResetPassword: async (data, request) => {
      // TODO: Send an email to the user with a link to reset their password
    },
  },
  session: {
    cookieCache: {
      enabled: true,
      maxAge: 5 * 60,
    },
  },
  plugins: [nextCookies()],
});
