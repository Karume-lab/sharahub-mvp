import { ProfileTypes as P } from "@/src/lib/constants";
import { FRONTEND_URLS } from "@/src/lib/urls/frontend-urls";

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
