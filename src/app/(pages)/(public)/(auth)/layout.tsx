import { Card, ScrollArea } from "@mantine/core";
import type React from "react";

interface AuthLayoutProps extends Readonly<{ children: React.ReactNode }> {}

const AuthLayout: React.FC<AuthLayoutProps> = async ({ children }) => {
  return (
    <ScrollArea h={"100vh"} p={{ base: "sm", md: "xl" }}>
      <Card withBorder shadow="xl" bg="primary">
        {children}
      </Card>
    </ScrollArea>
  );
};

export default AuthLayout;
