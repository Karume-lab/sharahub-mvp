"use client";

import { Link } from "@/components";
import { authClient } from "@/features/auth/utils/auth-client";
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
import { useRouter } from "next/navigation";
import { z } from "zod";

const formSchema = z
  .object({
    firstName: z.string().min(1, "First name required"),
    lastName: z.string().min(1, "Last name required"),
    email: z.email("Invalid email address"),
    phone: z.string().min(8, "Phone number required"),
    password: z.string().min(8, "Minimum 8 characters"),
    confirmPassword: z.string().min(8),
    profileType: z
      .enum(["individual", "business"])
      .refine((val) => !!val, { message: "Select a profile type" }),

    agree: z.boolean().refine((val) => val === true, {
      message: "You must agree to continue",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export default function SignUpForm() {
  const router = useRouter();

  const form = useForm({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      profileType: "",
      agree: false,
    },
    validate: zod4Resolver(formSchema),
  });

  const { mutate, isPending } = useMutation({
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
      notifications.show({
        title: "Success!",
        message: "Your account has been created",
        color: "green",
      });
      router.push("/dashboard");
    },
    onError: (err: any) => {
      notifications.show({
        title: "Sign-up failed",
        message: err?.message ?? "Something went wrong",
        color: "red",
      });
    },
  });

  const handleSubmit = form.onSubmit((values) => mutate(values));

  return (
    <>
      <form onSubmit={handleSubmit}>
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="md" mb="md">
          <TextInput
            label="First Name"
            placeholder="Enter your first name"
            rightSection={<IconUserFilled size={18} />}
            withAsterisk
            c="white"
            {...form.getInputProps("firstName")}
          />
          <TextInput
            label="Last Name"
            placeholder="Enter your last name"
            rightSection={<IconUserFilled size={18} />}
            withAsterisk
            c="white"
            {...form.getInputProps("lastName")}
          />
          <TextInput
            label="Email"
            placeholder="Enter your email"
            rightSection={<IconMailFilled size={18} />}
            withAsterisk
            c="white"
            {...form.getInputProps("email")}
          />
          <TextInput
            label="Phone Number"
            placeholder="Enter your phone number"
            withAsterisk
            rightSection={<IconPhoneFilled size={18} />}
            c="white"
            {...form.getInputProps("phone")}
          />
          <PasswordInput
            label="Password"
            placeholder="Enter your password"
            withAsterisk
            c="white"
            {...form.getInputProps("password")}
          />
          <PasswordInput
            label="Confirm Password"
            placeholder="Confirm your password"
            withAsterisk
            c="white"
            {...form.getInputProps("confirmPassword")}
          />
        </SimpleGrid>

        <Stack>
          <Select
            c="white"
            placeholder="Select the type of profile you want"
            withAsterisk
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

        <Button type="submit" fullWidth size="md" mt="lg" loading={isPending}>
          Sign Up
        </Button>
      </form>
    </>
  );
}
