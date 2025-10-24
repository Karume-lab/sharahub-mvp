"use client";

import { Button } from "@mantine/core";
import { useRouter } from "next/navigation";
import { authClient } from "@/features/auth/utils/auth-client";

const SignOutButton = () => {
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await authClient.signOut();
      router.push("/sign-in");
    } catch (err) {
      console.error("Error signing out:", err);
    }
  };

  return (
    <Button onClick={handleSignOut} radius="md" color="red">
      Sign out
    </Button>
  );
};

export default SignOutButton;
