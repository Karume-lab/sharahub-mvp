import SectionTitle from "@/features/landing-page/components/SectionTitle";
import {
  Anchor,
  Avatar,
  Box,
  Card,
  Container,
  Group,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconWorld,
  TablerIcon,
} from "@tabler/icons-react";

const members: {
  avatarSrc: string;
  fullNames: string;
  role: string;
  externalLinks: {
    href: string;
    Icon: TablerIcon;
  }[];
}[] = [
  {
    avatarSrc: "https://i.pravatar.cc/150?img=1",
    fullNames: "Ernest Mulongo",
    role: "CEO",
    externalLinks: [
      { href: "https://github.com/alice", Icon: IconBrandGithub },
      { href: "https://linkedin.com/in/alice", Icon: IconBrandLinkedin },
    ],
  },
  {
    avatarSrc: "https://i.pravatar.cc/150?img=4",
    fullNames: "Daniel Karume",
    role: "Software Engineer",
    externalLinks: [
      { href: "https://github.com/brian", Icon: IconBrandGithub },
      { href: "https://linkedin.com/in/brian", Icon: IconBrandLinkedin },
    ],
  },
  {
    avatarSrc: "https://i.pravatar.cc/150?img=3",
    fullNames: "Kelvin Ouma",
    role: "Product Designer",
    externalLinks: [
      { href: "https://carolportfolio.com", Icon: IconWorld },
      { href: "https://linkedin.com/in/carol", Icon: IconBrandLinkedin },
    ],
  },
];

const TheTeam = () => {
  return (
    <Box py="xl" px={{ base: "sm", sm: "md", md: "xl" }} id="the-team">
      <Container size="lg">
        <SectionTitle
          title="THE TEAM"
          description="Meet the minds behind SharaHub"
        />

        <SimpleGrid
          cols={{ base: 1, sm: 3 }}
          spacing={{ base: "md", md: "lg" }}
          mt="xl"
        >
          {members.map((member) => (
            <Card key={member.fullNames} shadow="sm" radius="md" padding="lg">
              <Stack align="center" gap="xs">
                <Avatar
                  src={member.avatarSrc}
                  size={80}
                  radius="xl"
                  alt={`${member.fullNames} profile picture`}
                />
                <Title order={5}>{member.fullNames}</Title>
                <Text size="sm" c="dimmed">
                  {member.role}
                </Text>

                <Group gap="xs" mt="xs" wrap="wrap" justify="center">
                  {member.externalLinks.map(({ href, Icon }) => (
                    <Anchor
                      key={href}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      c="dimmed"
                    >
                      <Icon size={20} stroke={1.5} />
                    </Anchor>
                  ))}
                </Group>
              </Stack>
            </Card>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default TheTeam;
