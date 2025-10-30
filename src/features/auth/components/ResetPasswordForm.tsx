"use client";

import { Box, Button, Stack, TextInput, Transition } from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconMailFilled } from "@tabler/icons-react";
import { useMutation } from "@tanstack/react-query";
import { zod4Resolver } from "mantine-form-zod-resolver";
import { useState } from "react";
import ResetPasswordLinkSentAlert from "@/features/auth/components/ResetPasswordLinkSentAlert";
import { authClient } from "@/features/auth/utils/auth-client";
import {
  type ResetPasswordSchema,
  resetPasswordSchema,
} from "@/features/auth/validations";

const ResetPasswordForm = () => {
  const [emailSent, setEmailSent] = useState(false);
  const [sentTo, setSentTo] = useState("");

  const form = useForm<ResetPasswordSchema>({
    validate: zod4Resolver(resetPasswordSchema),
    initialValues: { email: "" },
  });

  const mutation = useMutation({
    mutationFn: async (values: ResetPasswordSchema) => {
      return await authClient.forgetPassword(
        { email: values.email, redirectTo: "/dashboard" },
        {
          onSuccess: () => {
            setSentTo(values.email);
            setEmailSent(true);
            form.reset();
          },
          onError: (ctx) => {
            setEmailSent(false);
            form.setErrors({
              email: ctx.error.message || "Failed to send reset link.",
            });
          },
        },
      );
    },
  });

  const handleSubmit = form.onSubmit((values) => mutation.mutate(values));

  return (
    <Box pos="relative" mih={200}>
      <Transition
        mounted={!emailSent}
        transition="fade-up"
        duration={500}
        timingFunction="ease-in-out"
      >
        {(styles) => (
          <form
            onSubmit={handleSubmit}
            style={{ ...styles, position: "absolute", width: "100%" }}
          >
            <Stack px={{ lg: 50, xl: 100 }}>
              <TextInput
                label="Email"
                placeholder="Enter your account email"
                rightSection={<IconMailFilled />}
                withAsterisk
                disabled={mutation.isPending}
                c="white"
                {...form.getInputProps("email")}
              />

              <Button type="submit" fullWidth loading={mutation.isPending}>
                Send Reset Link
              </Button>
            </Stack>
          </form>
        )}
      </Transition>

      <Transition
        mounted={emailSent}
        transition="fade-up"
        duration={500}
        timingFunction="ease-in-out"
      >
        {(styles) => (
          <div style={{ ...styles, position: "absolute", width: "100%" }}>
            <ResetPasswordLinkSentAlert
              visible={emailSent}
              email={sentTo}
              onBack={() => setEmailSent(false)}
            />
          </div>
        )}
      </Transition>
    </Box>
  );
};

export default ResetPasswordForm;
