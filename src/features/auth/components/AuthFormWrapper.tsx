/** biome-ignore-all lint/correctness/noUnusedImports: Yet to implement social auth */
/** biome-ignore-all lint/correctness/noUnusedFunctionParameters: Yet to implement social auth */

"use client";

import {
  Anchor,
  BackgroundImage,
  Box,
  Button,
  Card,
  CardSection,
  Divider,
  Flex,
  Group,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import {
  IconBrandFacebookFilled,
  IconBrandGoogleFilled,
  IconBrandInstagramFilled,
  IconChevronLeft,
} from "@tabler/icons-react";
import type { Route } from "next";
import Link from "next/link";
import type React from "react";
import type { ReactNode } from "react";
import SiteLogo from "@/components/core/SiteLogo";

interface AuthFormWrapperProps extends Readonly<{ children: React.ReactNode }> {
  title: string;
  otherPage: {
    title: string;
    href: Extract<Route, "/sign-in" | "/sign-up"> | URL;
    actionTitle: string;
  };
  footerActionTitle: string;

  sideImageSrc: string;
}

const AuthFormWrapper: React.FC<AuthFormWrapperProps> = ({
  title,
  otherPage,
  sideImageSrc,
  children,
  footerActionTitle,
}) => {
  return (
    <Flex direction={{ base: "column", md: "row" }}>
      <Card
        p={{ base: "lg", md: 50 }}
        ta={"center"}
        radius="sm"
        withBorder
        w={{
          sm: "100%",
          md: "60%",
        }}
      >
        <Stack>
          <CardSection>
            <Title c={"primary"} className="responsiveTitle">
              {title}
            </Title>
          </CardSection>

          {/* TODO: implement social auth */}

          {/* <SimpleGrid cols={{ base: 1, md: 3 }}>
            <Button fullWidth leftSection={<IconBrandGoogleFilled />}>
              Google
            </Button>
            <Button fullWidth leftSection={<IconBrandFacebookFilled />}>
              Facebook
            </Button>
            <Button fullWidth leftSection={<IconBrandInstagramFilled />}>
              Instagram
            </Button>
          </SimpleGrid>

          <Divider
            label={<Text c="white">OR {footerActionTitle} WITH EMAIL</Text>}
          /> */}
          <Box
            mah={{ lg: "60vh" }}
            mih={{ lg: 300 }}
            px={{ lg: 32, xl: 64 }}
            ta={"left"}
          >
            {children}
          </Box>
        </Stack>

        <CardSection>
          <Text mt="sm">
            {otherPage.title}{" "}
            <Anchor component={Link} href={otherPage.href} underline="always">
              {otherPage.actionTitle}
            </Anchor>
          </Text>
        </CardSection>
      </Card>

      <BackgroundImage
        visibleFrom="md"
        src={sideImageSrc}
        radius="sm"
        p="md"
        w={{
          sm: "100%",
          md: "40%",
        }}
      >
        <Group justify="space-between">
          <Anchor href="/" component={Link}>
            <Button leftSection={<IconChevronLeft />} variant="white">
              Back to Website
            </Button>
          </Anchor>

          <Box w="fit">
            <SiteLogo />
          </Box>
        </Group>
      </BackgroundImage>
    </Flex>
  );
};

export default AuthFormWrapper;
