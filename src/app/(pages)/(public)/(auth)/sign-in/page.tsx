import { AuthFormWrapper, SignInForm } from "@/features/auth";

const SignInPage = () => {
  return (
    <AuthFormWrapper
      otherPage={{
        title: "Don't have an account?",
        actionTitle: "Sign up",
        href: "/sign-up",
      }}
      footerActionTitle="SIGN IN"
      title="Sign in to your account"
      sideImageSrc={"/auth/sign-in.svg"}
    >
      <SignInForm />
    </AuthFormWrapper>
  );
};

export default SignInPage;
