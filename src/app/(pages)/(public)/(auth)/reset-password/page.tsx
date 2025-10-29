import { AuthFormWrapper, ResetPasswordForm } from "@/features/auth";

const ResetPasswordPage = () => {
  return (
    <AuthFormWrapper
      otherPage={{
        title: "Remember your password?",
        actionTitle: "Sign in",
        href: "/sign-in",
      }}
      footerActionTitle="SIGN IN"
      title="Forget password"
      Form={ResetPasswordForm}
      sideImageSrc={"/auth/reset-password.svg"}
    />
  );
};

export default ResetPasswordPage;
