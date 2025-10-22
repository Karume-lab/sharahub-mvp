"use client";

import TanstackQueryClientProvider from "@/components/Providers/TanstackQueryClientProvider";
import React from "react";

import { theme } from "@/styles/mantine-theme";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";

import { NuqsAdapter } from "nuqs/adapters/next/app";

interface ProvidersProps
  extends Readonly<{
    children: React.ReactNode;
  }> {}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <MantineProvider theme={theme}>
      <NuqsAdapter>
        <Notifications />

        <TanstackQueryClientProvider>{children}</TanstackQueryClientProvider>
      </NuqsAdapter>
    </MantineProvider>
  );
};

export default Providers;
