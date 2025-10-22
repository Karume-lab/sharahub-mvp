"use client";

import { navLinks } from "@/lib/constants";
import {
  AppShell,
  AppShellHeader,
  AppShellMain,
  Burger,
  Button,
  Card,
  CardSection,
  Group,
  Menu,
} from "@mantine/core";
import { useDisclosure, useHeadroom } from "@mantine/hooks";
import React from "react";
import { LandingPageFooter, LandingPageHeader, Link } from "@/components";

interface LandingPageAppShellWrapperProps {
  children: React.ReactNode;
}

const LandingPageAppShellWrapper: React.FC<LandingPageAppShellWrapperProps> = ({
  children,
}) => {
  const [opened, { toggle }] = useDisclosure(false);
  const pinned = useHeadroom({ fixedAt: 120 });

  return (
    <AppShell
      header={{
        height: 100,
        offset: false,
        collapsed: !pinned,
      }}
      padding="md"
    >
      <AppShellHeader
        withBorder={false}
        className={`transition-all duration-300 ${
          pinned ? "opacity-100" : "opacity-0"
        }`}
      >
        <Card shadow="sm" withBorder m="md">
          <CardSection p="xs">
            <Group justify="space-between">
              <Menu
                opened={opened}
                onChange={toggle}
                shadow="md"
                width="95%"
                position="bottom"
              >
                <Menu.Target>
                  <Burger
                    opened={opened}
                    onClick={toggle}
                    hiddenFrom="sm"
                    size="sm"
                  />
                </Menu.Target>
                <Menu.Dropdown>
                  {navLinks.map(({ label, href }) => (
                    <Menu.Item
                      key={label}
                      component={Link}
                      href={href}
                      onClick={() => toggle()}
                    >
                      {label}
                    </Menu.Item>
                  ))}
                  <Menu.Item
                    component={Link}
                    href="/sign-up"
                    onClick={() => toggle()}
                  >
                    <Button fullWidth variant="light" color="primary">
                      Get Started
                    </Button>
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
              <LandingPageHeader />
            </Group>
          </CardSection>
        </Card>
      </AppShellHeader>

      <AppShellMain my={"lg"}>{children}</AppShellMain>

      <LandingPageFooter />
    </AppShell>
  );
};

export default LandingPageAppShellWrapper;
