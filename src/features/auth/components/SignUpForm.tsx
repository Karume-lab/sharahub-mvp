"use client";

import { useState } from "react";
import {
  Anchor,
  Box,
  Button,
  Checkbox,
  PasswordInput,
  Select,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { IconUserFilled } from "@tabler/icons-react";
import { notifications } from "@mantine/notifications";
import { Link } from "@/components";
import { authClient } from "~/src/features/auth/utils/auth-client";
import { useRouter } from "next/navigation";

const SignUpForm = () => {
  /* TODO:
  - use mantine forms
  - use react query
  - create forgot password
  */

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const [profileType, setProfileType] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSignUp = async () => {
    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !password ||
      !confirmPassword
    ) {
      notifications.show({
        title: "Missing information",
        message: "Please fill in all required fields.",
        color: "red",
      });
      return;
    }

    if (password !== confirmPassword) {
      notifications.show({
        title: "Password mismatch",
        message: "Passwords do not match.",
        color: "red",
      });
      return;
    }

    if (!agree) {
      notifications.show({
        title: "Agreement required",
        message: "Please accept the terms and conditions to continue.",
        color: "yellow",
      });
      return;
    }

    try {
      setLoading(true);
      await authClient.signUp.email({
        email,
        password,
        name: `${firstName} ${lastName}`,
        callbackURL: "/dashboard",
        fetchOptions: {
          onRequest: () => setLoading(true),
          onResponse: () => setLoading(false),
          onError: (ctx) => {
            notifications.show({
              title: "Sign-up failed",
              message: ctx.error.message || "An error occurred during sign-up.",
              color: "red",
            });
          },
          onSuccess: async () => {
            notifications.show({
              title: "Success!",
              message: "Your account has been created successfully.",
              color: "green",
            });
            router.push("/dashboard");
          },
        },
      });
    } catch (err: any) {
      console.error("Sign-up error:", err);
      notifications.show({
        title: "Unexpected error",
        message: "Something went wrong. Please try again.",
        color: "red",
      });
      setLoading(false);
    }
  };

  return (
    <>
      <SimpleGrid cols={{ base: 1, md: 2 }} spacing="md" mb="md">
        <TextInput
          label="First Name"
          placeholder="Enter your first name"
          withAsterisk
          c={"white"}
          value={firstName}
          onChange={(e) => setFirstName(e.currentTarget.value)}
        />
        <TextInput
          label="Last Name"
          placeholder="Enter your last name"
          withAsterisk
          c={"white"}
          value={lastName}
          onChange={(e) => setLastName(e.currentTarget.value)}
        />
        <TextInput
          label="Email"
          placeholder="Enter your email"
          rightSection={<IconUserFilled size={18} />}
          c={"white"}
          withAsterisk
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
        <TextInput
          label="Phone Number"
          placeholder="Enter your phone number"
          withAsterisk
          c={"white"}
          value={phone}
          onChange={(e) => setPhone(e.currentTarget.value)}
        />
        <PasswordInput
          label="Password"
          placeholder="Enter your password"
          withAsterisk
          c={"white"}
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
        <PasswordInput
          label="Confirm Password"
          placeholder="Confirm your password"
          withAsterisk
          c={"white"}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.currentTarget.value)}
        />
      </SimpleGrid>

      <Stack>
        <Select
          c={"white"}
          placeholder="Select the type of profile you want"
          withAsterisk
          label="Select profile type"
          data={[
            { label: "Individual", value: "individual" },
            { label: "Business", value: "business" },
          ]}
          value={profileType}
          onChange={setProfileType}
          renderOption={({ option, checked }) => (
            <Stack gap={0}>
              <Text c={checked ? "primary" : undefined}>{option.label}</Text>
              <Text size="xs" c="dimmed"></Text>
            </Stack>
          )}
        />

        <Box>
          <Checkbox
            label="I have read and accept the terms and conditions"
            c="white"
            checked={agree}
            onChange={(e) => setAgree(e.currentTarget.checked)}
          />
          <Text size="sm" c="white" ta="start" mt={4}>
            By checking this box, you confirm that you have carefully reviewed
            and agree to our{" "}
            <Anchor component={Link} href="/terms">
              terms and conditions
            </Anchor>
            , which outline your rights and responsibilities while using our
            services.
          </Text>
        </Box>
      </Stack>

      <Button
        type="submit"
        fullWidth
        size="md"
        mt="lg"
        onClick={handleSignUp}
        loading={loading}
      >
        Sign Up
      </Button>
    </>
  );
};

export default SignUpForm;
