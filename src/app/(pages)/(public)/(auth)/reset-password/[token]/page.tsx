import { AuthFormWrapper } from "@/features/auth";
import NewPasswordForm from "@/features/auth/components/NewPasswordForm";

const ResetPasswordTokenPage = () => {
  return (
    <AuthFormWrapper
      otherPage={{
        title: "Remember your password?",
        actionTitle: "Sign in",
        href: "/sign-in",
      }}
      footerActionTitle="SIGN IN"
      title="Enter new password"
      sideImageSrc={"/auth/reset-password.svg"}
    >
      <NewPasswordForm />
    </AuthFormWrapper>
  );
};

export default ResetPasswordTokenPage;
