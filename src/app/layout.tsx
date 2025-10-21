import "@/src/styles";
import "@/src/styles/global.css";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { Providers } from "~/components";
import { ColorSchemeScript, mantineHtmlProps } from "@mantine/core";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SharaHub",
  description: "An affiliate marketing platform like no other!",
};

interface RootLayoutProps
  extends Readonly<{
    children: React.ReactNode;
  }> {}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
