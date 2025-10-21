"use client";

import { URLKeys } from "@/src/lib/types";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import React from "react";

type CustomHref =
  | URLKeys
  | {
      pathname: URLKeys;
      query?: Record<string, any>;
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
