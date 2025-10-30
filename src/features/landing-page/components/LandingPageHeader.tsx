import { Anchor, Button, Group } from "@mantine/core";
import Link from "next/link";
import { SiteLogo } from "@/components";
import { navLinks } from "@/lib/constants";

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
