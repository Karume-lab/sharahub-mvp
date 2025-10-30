import type { ProfileTypes as P } from "@/lib/constants";
import { env } from "./env";

export type ProfileTypes = keyof typeof P;

export { env };
