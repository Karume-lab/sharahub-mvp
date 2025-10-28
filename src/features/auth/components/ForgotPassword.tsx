"use client";

import { authClient } from "@/features/auth/utils/auth-client";
import {
  ForgotPasswordSchema,
  forgotPasswordSchema,
} from "@/features/auth/validations";
import { Button, Stack, TextInput, Text, Anchor } from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { IconMailFilled } from "@tabler/icons-react";
import { useMutation } from "@tanstack/react-query";
import { zod4Resolver } from "mantine-form-zod-resolver";
import Link from "next/link";

const ForgotPassword = () => {
  const form = useForm<ForgotPasswordSchema>({
    validate: zod4Resolver(forgotPasswordSchema),
    initialValues: {
      email: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (values: ForgotPasswordSchema) => {
      return await authClient.forgetPassword(
        {
          email: values.email,
        },
        {
          onSuccess: () => {
            notifications.show({
              title: "Email sent",
              message: "A password reset link has been sent to your email.",
              color: "green",
            });
          },
          onError: (ctx) => {
            notifications.show({
              title: "Error",
              message: ctx.error.message || "Failed to send reset link.",
              color: "red",
            });
          },
        }
      );
    },
  });

  const handleSubmit = form.onSubmit((values) => mutation.mutate(values));

  return (
    <form onSubmit={handleSubmit}>
      <Stack px={150}>
        <Text c="white" ta="center" size="lg" fw={500}>
          Forgot your password?
        </Text>
        <Text c="dimmed" ta="center" size="sm">
          Enter the email associated with your account and we'll send you a
          reset link.
        </Text>

        <TextInput
          label="Email"
          placeholder="Enter your account email"
          rightSection={<IconMailFilled />}
          withAsterisk
          c="white"
          {...form.getInputProps("email")}
        />

        <Button type="submit" fullWidth loading={mutation.isPending}>
          Send Reset Link
        </Button>

        <Text ta="center" size="sm" c="dimmed">
          Remember your password?{" "}
          <Anchor component={Link} href="/sign-in" c="white">
            Sign in
          </Anchor>
        </Text>
      </Stack>
    </form>
  );
};

export default ForgotPassword;
