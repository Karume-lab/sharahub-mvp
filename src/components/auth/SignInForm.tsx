"use client";

import { authClient } from "@/utils/auth-client";
import {
  Anchor,
  Button,
  Checkbox,
  Group,
  PasswordInput,
  Stack,
  TextInput,
} from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { IconUserFilled } from "@tabler/icons-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SignInForm = () => {
  /* TODO:
  - use mantine forms
  - use react query
  - create forgot password
  */

  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSignIn = async () => {
    if (!emailOrPhone || !password) {
      notifications.show({
        title: "Missing information",
        message: "Please enter your email (or phone) and password.",
        color: "red",
      });
      return;
    }

    try {
      setLoading(true);
      await authClient.signIn.email(
        {
          email: emailOrPhone,
          password,
        },
        {
          onRequest: () => setLoading(true),
          onResponse: () => setLoading(false),
          onError: (ctx) => {
            notifications.show({
              title: "Sign-in failed",
              message:
                ctx.error.message || "Invalid credentials, please try again.",
              color: "red",
            });
          },
          onSuccess: async () => {
            notifications.show({
              title: "Welcome back!",
              message: "You’ve signed in successfully.",
              color: "green",
            });
            router.push("/dashboard");
          },
        }
      );
    } catch (err: any) {
      console.error("Sign-in error:", err);
      notifications.show({
        title: "Unexpected error",
        message: "Something went wrong. Please try again later.",
        color: "red",
      });
      setLoading(false);
    }
  };

  return (
    <Stack px={150}>
      <TextInput
        label="Email or Phone Number"
        placeholder="Enter the email or phone number you used to create your account"
        rightSection={<IconUserFilled />}
        c={"white"}
        withAsterisk
        value={emailOrPhone}
        onChange={(e) => setEmailOrPhone(e.currentTarget.value)}
      />

      <PasswordInput
        label="Password"
        placeholder="Enter your password"
        c={"white"}
        withAsterisk
        value={password}
        onChange={(e) => setPassword(e.currentTarget.value)}
      />

      <Group justify="space-between" mt="xs">
        <Checkbox
          label="Remember me"
          checked={rememberMe}
          onChange={(e) => setRememberMe(e.currentTarget.checked)}
          c={"white"}
        />
        <Anchor component={Link} href="/forgot-password" c="white" size="sm">
          Forgot password?
        </Anchor>
      </Group>

      <Group justify="flex-end" mt="md">
        <Button
          type="submit"
          fullWidth
          loading={loading}
          onClick={handleSignIn}
        >
          Sign in
        </Button>
      </Group>
    </Stack>
  );
};

export default SignInForm;
