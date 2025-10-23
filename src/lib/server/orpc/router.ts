import { os } from "@orpc/server";

export const router = os.router({});

export type Router = typeof router;
