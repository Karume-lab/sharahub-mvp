import { os } from "@orpc/server";
import { sendEmailRouter } from "@/lib/server/orpc/routers/send-email-router";

export const router = os.router({
  sendEmail: sendEmailRouter,
});

export type Router = typeof router;
