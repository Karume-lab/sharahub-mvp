"use client";

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
import { Link } from "~/components";

const SignUpForm = () => {
  return (
    <>
      <SimpleGrid cols={{ base: 1, md: 2 }} spacing="md" mb="md">
        <TextInput
          label="First Name"
          placeholder="Enter your first name"
          withAsterisk
          c={"white"}
        />
        <TextInput
          label="Last Name"
          placeholder="Enter your last name"
          withAsterisk
          c={"white"}
        />
        <TextInput
          label="Email"
          placeholder="Enter your email"
          rightSection={<IconUserFilled size={18} />}
          c={"white"}
          withAsterisk
        />
        <TextInput
          label="Phone Number"
          placeholder="Enter your phone number"
          withAsterisk
          c={"white"}
        />
        <PasswordInput
          label="Password"
          placeholder="Enter your password"
          withAsterisk
          c={"white"}
        />
        <PasswordInput
          label="Confirm Password"
          placeholder="Confirm your password"
          withAsterisk
          c={"white"}
        />
      </SimpleGrid>
      <Stack>
        <Select
          c={"white"}
          placeholder="Select the type of profile you want"
          withAsterisk
          label="Select profile type"
          data={[]}
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

      <Button type="submit" fullWidth size="md" mt="lg">
        Sign Up
      </Button>
    </>
  );
};

export default SignUpForm;
