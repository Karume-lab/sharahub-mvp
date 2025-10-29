"use client";

import { useParams, useRouter } from "next/navigation";
import { Button, PasswordInput, Stack, Text } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { useForm } from "@mantine/form";
import { zod4Resolver } from "mantine-form-zod-resolver";
import { useMutation } from "@tanstack/react-query";
import {
  newPasswordSchema,
  type NewPasswordSchema,
} from "@/features/auth/validations";
import { authClient } from "@/features/auth/utils/auth-client";

const NewPasswordForm = () => {
  const { token } = useParams<{ token: string }>();
  const router = useRouter();

  const form = useForm<NewPasswordSchema>({
    validate: zod4Resolver(newPasswordSchema),
    initialValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (values: NewPasswordSchema) => {
      return await authClient.resetPassword(
        {
          token,
          newPassword: values.password,
        },
        {
          onSuccess: () => {
            form.reset();
            notifications.show({
              title: "Password reset",
              message: "Your password has been successfully reset!",
              color: "green",
            });
            router.replace("/sign-in");
          },
          onError: (ctx) => {
            notifications.show({
              title: "Error",
              message:
                ctx.error.message ||
                "Failed to reset password. The link may be invalid or expired.",
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
      <Stack px={{ lg: 50, xl: 100 }}>
        <PasswordInput
          label="New Password"
          placeholder="Enter your new password"
          withAsterisk
          disabled={mutation.isPending}
          c="white"
          {...form.getInputProps("password")}
        />
        <PasswordInput
          label="Confirm Password"
          placeholder="Re-enter your new password"
          withAsterisk
          disabled={mutation.isPending}
          c="white"
          {...form.getInputProps("confirmPassword")}
        />
        <Button
          type="submit"
          fullWidth
          loading={mutation.isPending}
          disabled={!token}
        >
          Reset Password
        </Button>
      </Stack>
    </form>
  );
};

export default NewPasswordForm;
