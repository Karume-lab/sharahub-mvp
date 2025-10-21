"use client";

import { theme } from "@/src/styles/mantine-theme";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";

import { NuqsAdapter } from "nuqs/adapters/next/app";
import React from "react";

interface ProviderProps {
  children: React.ReactNode;
}

const Providers: React.FC<ProviderProps> = ({ children }) => {
  return (
    <MantineProvider theme={theme}>
      <NuqsAdapter>
        <Notifications />
        {children}
      </NuqsAdapter>
    </MantineProvider>
  );
};

export default Providers;
