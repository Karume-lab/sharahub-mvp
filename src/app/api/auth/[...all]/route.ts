import { toNextJsHandler } from "better-auth/next-js";
import { auth } from "~/src/features/auth/utils/auth";

export const { POST, GET } = toNextJsHandler(auth);
