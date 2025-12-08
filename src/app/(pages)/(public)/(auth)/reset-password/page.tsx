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
      title="Reset password"
      sideImageSrc={"/auth/reset-password.svg"}
    >
      <ResetPasswordForm />
    </AuthFormWrapper>
  );
};

export default ResetPasswordPage;
