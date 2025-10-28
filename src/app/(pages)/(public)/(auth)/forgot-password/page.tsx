import { AuthFormWrapper } from "@/features/auth";
import React from "react";

const ForgotPassword = () => {
  return (
    <AuthFormWrapper
      otherPage={{
        title: "Back to sign in?",
        actionTitle: "Sign in",
        href: "/sign-in",
      }}
      footerActionTitle="SIGN IN"
      title="Enter the email for your account"
      Form={ForgotPassword}
      sideImageSrc={"/auth/forgot-password.svg"}
    />
  );
};

export default ForgotPassword;
