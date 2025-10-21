"use client";

import { Link, SectionTitle } from "~/components";
import { getPrimaryColorHexCode } from "@/src/lib/utils";
import {
  Box,
  Button,
  Card,
  CardSection,
  Group,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { IconBuildings, IconUsers, TablerIcon } from "@tabler/icons-react";
import React from "react";
import { ProfileTypes } from "@/src/lib/types";

const FindYourFit = () => {
  return (
    <Box bg="primary.1" p={{ base: "md", sm: "lg", md: 80, lg: 120 }}>
      <SectionTitle
        title="FIND YOUR FIT"
        description="Which profile best describes you?"
      />

      <SimpleGrid
        cols={{ base: 1, sm: 2 }}
        spacing={{ base: "lg", md: "xl" }}
        mt="xl"
      >
        <ProfileTypeCard variant="Business" />
        <ProfileTypeCard variant="Affiliate" />
      </SimpleGrid>
    </Box>
  );
};

interface ProfileTypeCardProps {
  variant: ProfileTypes;
}

const content: Record<
  ProfileTypes,
  {
    title: string;
    headline: string;
    description: string;
    cta: string;
    icon: TablerIcon;
  }
> = {
  Affiliate: {
    title: "Creators & Publishers",
    headline: "Grow Your Influence, Earn on Your Terms",
    description:
      "Join forces with trusted brands to share products your audience genuinely connects with. Transform your reach into real rewards through flexible, values-aligned partnerships.",
    cta: "Start Earning",
    icon: IconUsers,
  },
  Business: {
    title: "Brands & Agencies",
    headline: "Drive Results Through Smart Partnerships",
    description:
      "Work with experienced creators to expand your visibility and connect with engaged audiences. Launch impactful campaigns that build trust and deliver long-term returns.",
    cta: "Promote Your Brand",
    icon: IconBuildings,
  },
};

const ProfileTypeCard: React.FC<ProfileTypeCardProps> = ({ variant }) => {
  const { title, headline, description, cta, icon: Icon } = content[variant];

  return (
    <Card shadow="sm" radius="md" padding="xl" withBorder>
      <CardSection withBorder inheritPadding py="md">
        <Stack gap="xs">
          <Group p={0} m={0}>
            <Icon size={28} color={getPrimaryColorHexCode()} />
            <Title order={6} c={getPrimaryColorHexCode()}>
              {title}
            </Title>
          </Group>
          <Title order={3} fw={500}>
            {headline}
          </Title>
          <Text size="sm" c="dimmed">
            {description}
          </Text>
        </Stack>
      </CardSection>

      <Group justify="flex-end" mt="md">
        <Button
          variant="light"
          color="primary"
          component={Link}
          href={
            variant === "Affiliate"
              ? "/sign-up?profile-type=affiliate"
              : "/sign-up?profile-type=business"
          }
        >
          {cta}
        </Button>
      </Group>
    </Card>
  );
};

export default FindYourFit;
