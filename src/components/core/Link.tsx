"use client";

import NextLink, { type LinkProps as NextLinkProps } from "next/link";
import type React from "react";
import type { URLKeys } from "@/lib/types";

type QueryObject = Record<string, string | number | boolean | undefined>;

type CustomHref =
  | URLKeys
  | {
      pathname: URLKeys;
      query?: QueryObject;
    };

interface LinkProps extends Omit<NextLinkProps, "href"> {
  href: CustomHref;
  children?: React.ReactNode;
  className?: string;
}

const Link: React.FC<LinkProps> = ({ href, children, ...rest }) => {
  return (
    <NextLink href={href} {...rest}>
      {children}
    </NextLink>
  );
};

export default Link;
