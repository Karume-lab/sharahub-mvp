"use client";

import {
  Button,
  Card,
  Center,
  Container,
  Stack,
  Text,
  Title,
  Image as MantineImage,
  rem,
} from "@mantine/core";
import { IconArrowNarrowLeft } from "@tabler/icons-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import NotFoundIllustration from "~/public/core/not-found.svg";

const NotFound = () => {
  const router = useRouter();

  return (
    <Center h="100vh" bg="gray.0" px="sm">
      <Container size="sm" px={{ base: "sm", sm: "md" }}>
        <Card
          p={{ base: "lg", sm: "xl" }}
          bg="white"
          shadow="md"
          radius="md"
          withBorder
        >
          <Stack align="center" gap="md">
            <MantineImage
              component={Image}
              alt="Not found illustration"
              src={NotFoundIllustration}
              width={300}
              height={300}
              fit="contain"
            />
            <Title
              order={2}
              ta="center"
              fw={700}
              c="blue"
              fz={{ base: rem(24), sm: rem(32) }}
            >
              404 - Page Not Found
            </Title>
            <Text size="md" ta="center" c="gray.7" px={{ base: "sm", sm: 40 }}>
              Oops! The page you're looking for doesn't exist or has been moved.
            </Text>
            <Button
              onClick={router.back}
              size="md"
              radius="md"
              leftSection={<IconArrowNarrowLeft />}
              mt="sm"
              variant="outline"
              color="blue"
            >
              Go Back
            </Button>
          </Stack>
        </Card>
      </Container>
    </Center>
  );
};

export default NotFound;
