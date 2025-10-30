import { AuthFormWrapper, SignInForm } from "@/features/auth";

const SignInPage = () => {
  return (
    <AuthFormWrapper
      otherPage={{
        title: "Don't have an account?",
        actionTitle: "Sign up",
        href: "/sign-in",
      }}
      footerActionTitle="SIGN IN"
      title="Sign in to your account"
      Form={SignInForm}
      sideImageSrc={"/auth/sign-in.svg"}
    />
  );
};

export default SignInPage;
