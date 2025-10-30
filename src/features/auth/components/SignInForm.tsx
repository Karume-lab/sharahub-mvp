"use client";

import {
  Anchor,
  Button,
  Checkbox,
  Group,
  PasswordInput,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { IconMailFilled } from "@tabler/icons-react";
import { useMutation } from "@tanstack/react-query";
import { zod4Resolver } from "mantine-form-zod-resolver";
import Link from "next/link";
import { authClient } from "@/features/auth/utils/auth-client";
import { type SignInSchema, signInSchema } from "@/features/auth/validations";

const SignInForm = () => {
  const form = useForm<SignInSchema>({
    validate: zod4Resolver(signInSchema),
    initialValues: {
      email: "",
      password: "",
      rememberMe: true,
    },
  });

  const mutation = useMutation({
    mutationFn: async (values: SignInSchema) => {
      return await authClient.signIn.email(
        {
          email: values.email,
          password: values.password,
          callbackURL: "/dashboard",
        },
        {
          onError: (ctx) => {
            notifications.show({
              title: "Sign-in failed",
              message:
                ctx.error.message || "Invalid credentials, please try again.",
              color: "red",
            });
          },
          onSuccess: () => {
            form.reset();
            notifications.show({
              title: "Welcome back!",
              message: "You've signed in successfully.",
              color: "green",
            });
          },
        },
      );
    },
  });

  const handleSubmit = form.onSubmit((values) => {
    mutation.mutate(values);
  });

  return (
    <form onSubmit={handleSubmit}>
      <Stack px={{ lg: 50, xl: 100 }}>
        <TextInput
          label="Email"
          placeholder="Enter the email you used to create your account"
          rightSection={<IconMailFilled />}
          c={"white"}
          withAsterisk
          disabled={mutation.isPending}
          {...form.getInputProps("email")}
        />

        <PasswordInput
          label="Password"
          placeholder="Enter your password"
          c={"white"}
          withAsterisk
          disabled={mutation.isPending}
          {...form.getInputProps("password")}
        />

        <Checkbox
          label="Remember me"
          c="white"
          {...form.getInputProps("rememberMe", { type: "checkbox" })}
        />

        <Text c="white" ta={"left"} size="sm">
          Forgot your password?{" "}
          <Anchor
            component={Link}
            href={"/reset-password"}
            c="white"
            underline="always"
          >
            Reset
          </Anchor>
        </Text>

        <Group justify="flex-end" mt="md">
          <Button type="submit" fullWidth loading={mutation.isPending}>
            Sign in
          </Button>
        </Group>
      </Stack>
    </form>
  );
};

export default SignInForm;
