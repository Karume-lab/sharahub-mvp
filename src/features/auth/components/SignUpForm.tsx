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
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import {
  IconMailFilled,
  IconPhoneFilled,
  IconUserFilled,
} from "@tabler/icons-react";
import { useMutation } from "@tanstack/react-query";
import { zod4Resolver } from "mantine-form-zod-resolver";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient } from "@/features/auth/utils/auth-client";
import { type SignUpSchema, signUpSchema } from "@/features/auth/validations";

export default function SignUpForm() {
  const router = useRouter();

  const form = useForm<SignUpSchema>({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      profileType: "individual",
      agree: false,
    },
    validate: zod4Resolver(signUpSchema),
  });

  const mutation = useMutation({
    mutationFn: async (values: typeof form.values) => {
      return authClient.signUp.email({
        email: values.email,
        password: values.password,
        name: `${values.firstName} ${values.lastName}`,
        profileType: values.profileType,
        callbackURL: "/dashboard",
      });
    },
    onSuccess: () => {
      form.reset();
      notifications.show({
        title: "Success!",
        message: "Your account has been created",
        color: "green",
      });
      router.push("/dashboard");
    },
    onError: (error) => {
      notifications.show({
        title: "Sign-up failed",
        message: error?.message ?? "Something went wrong",
        color: "red",
      });
    },
  });

  const handleSubmit = form.onSubmit((values) => mutation.mutate(values));

  return (
    <form onSubmit={handleSubmit}>
      <SimpleGrid cols={{ base: 1, md: 2 }} spacing="md" mb="md">
        <TextInput
          label="First Name"
          placeholder="Enter your first name"
          rightSection={<IconUserFilled size={18} />}
          withAsterisk
          disabled={mutation.isPending}
          c="white"
          {...form.getInputProps("firstName")}
        />
        <TextInput
          label="Last Name"
          placeholder="Enter your last name"
          rightSection={<IconUserFilled size={18} />}
          withAsterisk
          disabled={mutation.isPending}
          c="white"
          {...form.getInputProps("lastName")}
        />
        <TextInput
          label="Email"
          placeholder="Enter your email"
          rightSection={<IconMailFilled size={18} />}
          withAsterisk
          disabled={mutation.isPending}
          c="white"
          {...form.getInputProps("email")}
        />
        <TextInput
          label="Phone Number"
          placeholder="Enter your phone number"
          withAsterisk
          disabled={mutation.isPending}
          rightSection={<IconPhoneFilled size={18} />}
          c="white"
          {...form.getInputProps("phone")}
        />
        <PasswordInput
          label="Password"
          placeholder="Enter your password"
          withAsterisk
          disabled={mutation.isPending}
          c="white"
          {...form.getInputProps("password")}
        />
        <PasswordInput
          label="Confirm Password"
          placeholder="Confirm your password"
          withAsterisk
          disabled={mutation.isPending}
          c="white"
          {...form.getInputProps("confirmPassword")}
        />
      </SimpleGrid>

      <Stack>
        <Select
          c="white"
          placeholder="Select the type of profile you want"
          withAsterisk
          disabled={mutation.isPending}
          label="Select profile type"
          data={[
            { label: "Individual", value: "individual" },
            { label: "Business", value: "business" },
          ]}
          {...form.getInputProps("profileType")}
        />

        <Box>
          <Checkbox
            label="I have read and accept the terms and conditions"
            c="white"
            checked={form.values.agree}
            {...form.getInputProps("agree", { type: "checkbox" })}
          />
          <Text size="sm" c="white" ta="start" mt={4}>
            By checking this box, you confirm that you have carefully reviewed
            and agree to our{" "}
            <Anchor component={Link} href="/terms">
              terms and conditions
            </Anchor>
            .
          </Text>
        </Box>
      </Stack>

      <Button
        type="submit"
        fullWidth
        size="md"
        mt="lg"
        loading={mutation.isPending}
      >
        Sign Up
      </Button>
    </form>
  );
}
