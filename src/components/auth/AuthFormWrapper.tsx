import { URLKeys } from "@/src/lib/types";
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
  IconArrowNarrowLeft,
  IconBrandFacebookFilled,
  IconBrandGoogleFilled,
  IconBrandInstagramFilled,
} from "@tabler/icons-react";
import Link from "next/link";
import React, { ReactNode } from "react";
import { SiteLogo } from "~/components";

interface AuthFormWrapperProps {
  title: string;
  otherPage: {
    title: string;
    href: URLKeys;
    actionTitle: string;
  };
  footerActionTitle: string;
  Form: Readonly<ReactNode>;
  sideImageSrc: string;
}

const AuthFormWrapper: React.FC<AuthFormWrapperProps> = ({
  title,
  otherPage,
  Form,
  sideImageSrc,
  footerActionTitle,
}) => {
  return (
    <Flex direction={{ base: "column", md: "row" }}>
      <Card
        p={{ base: "lg", md: 50 }}
        ta={"center"}
        bg="primary.3"
        radius="sm"
        withBorder
        w={{
          sm: "100%",
          md: "60%",
        }}
      >
        <Stack>
          <CardSection>
            <Title c="white" className="responsiveTitle">
              {title}
            </Title>
          </CardSection>

          <SimpleGrid cols={{ base: 1, md: 3 }}>
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
          />
          <Box mah={{ lg: "60vh" }} mih={{ lg: 300 }}>
            {Form}
          </Box>
        </Stack>

        <CardSection>
          <Text c="white" mt="sm">
            {otherPage.title}{" "}
            <Anchor
              component={Link}
              href={otherPage.href}
              c="white"
              underline="always"
            >
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
            <Button leftSection={<IconArrowNarrowLeft />} variant="white">
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
