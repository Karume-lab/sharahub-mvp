import { navLinks } from "@/src/lib/constants";
import { Anchor, Button, Group } from "@mantine/core";
import { Link, SiteLogo } from "~/components";

const LandingPageHeader = () => {
  return (
    <>
      <Link href="/">
        <SiteLogo />
      </Link>
      <Group gap={"md"} visibleFrom="md">
        {navLinks.map((n) => (
          <Anchor href={n.href} key={n.label} component={Link}>
            {n.label}
          </Anchor>
        ))}
      </Group>
      <Anchor href="/sign-up" component={Link} visibleFrom="md">
        <Button>Get Started</Button>
      </Anchor>
    </>
  );
};

export default LandingPageHeader;
