import { sendEmailRouter } from "@/lib/server/orpc/routers/send-email-router";
import { os } from "@orpc/server";

export const router = os.router({
  sendEmail: sendEmailRouter,
});

export type Router = typeof router;
