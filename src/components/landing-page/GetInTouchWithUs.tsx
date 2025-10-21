"use client";

import GetInTouchWithUsIllustration from "@/public/landing-page/get-in-touch-with-us.svg";
import { getPrimaryColorHexCode } from "@/src/lib/utils";
import {
  Anchor,
  Box,
  Button,
  Container,
  Group,
  Image as MantineImage,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
  TextInput,
} from "@mantine/core";
import {
  IconMailFilled,
  IconMapPinFilled,
  IconPhoneFilled,
  TablerIcon,
} from "@tabler/icons-react";
import Image from "next/image";

import { SectionTitle } from "~/components";

const contacts: { Icon: TablerIcon; label: string; href: string }[] = [
  {
    Icon: IconPhoneFilled,
    label: "+254704150182",
    href: "tel:+254704150182",
  },
  {
    Icon: IconMailFilled,
    label: "sharahub@gmail.com",
    href: "mailto:sharahub@gmail.com",
  },
  {
    Icon: IconMapPinFilled,
    label: "Nairobi, Westlands",
    href: "https://www.google.com/maps/place/Westlands,+Nairobi/",
  },
];

const GetInTouchWithUs = () => {
  return (
    <Box
      py="xl"
      px={{ base: "sm", sm: "md", md: "xl" }}
      id="get-in-touch-with-us"
    >
      <Container size="lg">
        <SectionTitle
          title="GET IN TOUCH WITH US"
          description="Got Feedback? Here's a form!"
        />

        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl" mt="xl">
          <Stack>
            <TextInput label="Full Name" placeholder="Your name" withAsterisk />
            <TextInput
              label="Email"
              placeholder="you@example.com"
              type="email"
              withAsterisk
            />
            <TextInput
              label="Phone Number"
              placeholder="+254..."
              withAsterisk
            />
            <Textarea
              label="Message"
              placeholder="Tell us what you're thinking..."
              minRows={4}
              autosize
              withAsterisk
            />
            <Button type="submit" fullWidth>
              Send Message
            </Button>
          </Stack>

          <Stack align="center" justify="space-between" gap="md">
            <MantineImage
              component={Image}
              alt="Get in touch with us illustration"
              src={GetInTouchWithUsIllustration}
              width={300}
              height={300}
              fit="contain"
              style={{ maxWidth: "100%" }}
            />

            <Group gap="xs" align="center" pt="md">
              {contacts.map(({ Icon, label, href }) => (
                <Anchor
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  c="dimmed"
                >
                  <Group gap="xs">
                    <Icon color={getPrimaryColorHexCode()} />
                    <Text>{label}</Text>
                  </Group>
                </Anchor>
              ))}
            </Group>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default GetInTouchWithUs;
