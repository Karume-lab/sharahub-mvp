"use client";

import { authClient } from "@/features/auth/utils/auth-client";
import {
  resetPasswordSchema,
  ResetPasswordSchema,
} from "@/features/auth/validations";
import { Button, Stack, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { IconMailFilled } from "@tabler/icons-react";
import { useMutation } from "@tanstack/react-query";
import { zod4Resolver } from "mantine-form-zod-resolver";

const ResetPassword = () => {
  const form = useForm<ResetPasswordSchema>({
    validate: zod4Resolver(resetPasswordSchema),
    initialValues: {
      email: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (values: ResetPasswordSchema) => {
      return await authClient.forgetPassword(
        {
          email: values.email,
          redirectTo: "/dashboard",
        },
        {
          onSuccess: () => {
            notifications.show({
              title: "Email sent",
              message: "If an account exists, a reset link was sent.",
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
      </Stack>
    </form>
  );
};

export default ResetPassword;
