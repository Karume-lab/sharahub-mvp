import { AuthFormWrapper, SignUpForm } from "@/components";

export const dynamic = "force-dynamic";

const SignUpPage = () => {
  return (
    <AuthFormWrapper
      otherPage={{
        title: "Already have an account?",
        actionTitle: "Sign in",
        href: "/sign-in",
      }}
      footerActionTitle="SIGN UP"
      title="Sign up for a new account"
      Form={SignUpForm}
      sideImageSrc={"/auth/sign-up.svg"}
    />
  );
};

export default SignUpPage;
