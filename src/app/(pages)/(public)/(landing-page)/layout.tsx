import { LandingPageAppShellWrapper } from "@/features/landing-page";
import React from "react";

interface LandingPageLayoutProps
  extends Readonly<{
    children: React.ReactNode;
  }> {}

const LandingPageLayout: React.FC<LandingPageLayoutProps> = ({ children }) => {
  return <LandingPageAppShellWrapper>{children}</LandingPageAppShellWrapper>;
};

export default LandingPageLayout;
