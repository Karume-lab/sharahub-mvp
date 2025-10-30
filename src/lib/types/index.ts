import type { ProfileTypes as P } from "@/lib/constants";
import type { FRONTEND_URLS } from "@/lib/urls/frontend-urls";

export type ProfileTypes = keyof typeof P;

export type URLKeys = (typeof FRONTEND_URLS)[keyof typeof FRONTEND_URLS];

export type SignInResponse =
  | {
      success: true;
      token: string;
      user: { id: string; email: string };
    }
  | {
      success: false;
      error: string;
    };
