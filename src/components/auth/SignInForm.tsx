"use client";

import { Button, Group, PasswordInput, Stack, TextInput } from "@mantine/core";
import { IconUserFilled } from "@tabler/icons-react";

const SignInForm = () => {
  return (
    <Stack px={150}>
      <TextInput
        label="Email or Phone Number"
        placeholder="Enter the email or phone number you used to create your account"
        rightSection={<IconUserFilled />}
        c={"white"}
        withAsterisk
      />
      <PasswordInput
        label="Password"
        placeholder="Enter your password"
        c={"white"}
        withAsterisk
      />
      <Group justify="flex-end" mt="md">
        <Button type="submit" fullWidth>
          Sign in
        </Button>
      </Group>
    </Stack>
  );
};

export default SignInForm;
