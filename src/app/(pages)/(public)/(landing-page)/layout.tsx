import { headers } from "next/headers";
import { redirect } from "next/navigation";
import type React from "react";
import { auth } from "@/features/auth";
import { LandingPageAppShellWrapper } from "@/features/landing-page";

interface LandingPageLayoutProps
  extends Readonly<{
    children: React.ReactNode;
  }> {}

const LandingPageLayout: React.FC<LandingPageLayoutProps> = async ({
  children,
}) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session) {
    redirect("/dashboard");
  }

  return <LandingPageAppShellWrapper>{children}</LandingPageAppShellWrapper>;
};

export default LandingPageLayout;
