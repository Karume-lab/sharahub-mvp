import { os } from "@orpc/server";
import { z } from "zod";
import { sendEmail } from "@/lib/utils";

export const sendEmailRouter = os.router({
  email: os
    .input(
      z.object({
        to: z.email(),
        subject: z.string(),
        html: z.string(),
      }),
    )
    .handler(async ({ input }) => {
      const result = await sendEmail(input);
      return result;
    }),
});
