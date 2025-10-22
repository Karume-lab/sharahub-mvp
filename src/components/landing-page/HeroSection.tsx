import styles from "#/hero-section.module.css";
import PeopleDiscussing from "~/public/landing-page/people-discussing.png";
import {
  Anchor,
  Button,
  Card,
  CardSection,
  Container,
  Image as MantineImage,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import Image from "next/image";
import { Link } from "@/components";

const HeroSection = () => {
  return (
    <Card className={styles.backgroundColor} py={48} mt={80}>
      <Container size="lg">
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl" verticalSpacing="xl">
          <Stack gap="md">
            <Title className={"responsiveTitle"}>
              Leading platform for results-driven digital ads, helping partners
              grow revenue efficiently.
            </Title>
            <Text size="md">
              Excel within a leading global network focused on results-driven
              collaboration, helping enterprises, influencers, and media
              partners boost revenue through long-term, efficient expansion
              strategies.
            </Text>
            <Anchor href="/sign-up" component={Link}>
              <Button size="md">Join us today!</Button>
            </Anchor>
          </Stack>

          <Card withBorder p="xs" radius="md" mx="auto" w="100%" maw={500}>
            <CardSection>
              <MantineImage
                component={Image}
                alt="People discussing business."
                src={PeopleDiscussing}
                width={500}
                height={400}
                radius="lg"
              />
            </CardSection>
          </Card>
        </SimpleGrid>
      </Container>
    </Card>
  );
};

export default HeroSection;
