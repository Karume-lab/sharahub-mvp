"use client";

import {
  Anchor,
  AppShell,
  AppShellFooter,
  AppShellHeader,
  AppShellMain,
  AppShellNavbar,
  Avatar,
  Burger,
  Group,
  Skeleton,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import type { ReactNode } from "react";
import { SignOutButton } from "@/features/auth/components";
import { authClient } from "@/features/auth/utils/auth-client";
import SiteLogo from "./SiteLogo";

interface AppShellWrapperProps extends Readonly<{ children: ReactNode }> {}

const AppShellWrapper: React.FC<AppShellWrapperProps> = ({ children }) => {
  const [opened, { toggle }] = useDisclosure();
  const { data: session, isPending } = authClient.useSession();

  return (
    <AppShell
      header={{ height: 60 }}
      footer={{ height: 60 }}
      navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShellHeader>
        <Group h="100%" px="md" justify="space-between">
          <Group>
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="sm"
            />

            <Anchor component={Link} href="/dashboard">
              <SiteLogo />
            </Anchor>
          </Group>

          {isPending ? (
            <Skeleton height={36} width={36} circle />
          ) : (
            <Avatar
              radius="xl"
              src={session?.user?.image ?? null}
              alt={session?.user?.name ?? "User"}
              color="primary"
            >
              {session?.user?.name
                ? session.user.name.charAt(0).toUpperCase()
                : "?"}
            </Avatar>
          )}
        </Group>
      </AppShellHeader>

      <AppShellNavbar p="md">
        Navbar
        <SignOutButton />
      </AppShellNavbar>

      <AppShellMain>{children}</AppShellMain>

      <AppShellFooter p="md" ta={"center"}>
        &copy; SharaHub {new Date().getFullYear()}
      </AppShellFooter>
    </AppShell>
  );
};

export default AppShellWrapper;
