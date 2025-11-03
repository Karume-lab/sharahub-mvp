import { os } from "@orpc/server";
import { sendEmailProcedure } from "../procedures/send-email-procedure";

export const router = os.router({
  sendEmail: sendEmailProcedure,
});

export type Router = typeof router;
