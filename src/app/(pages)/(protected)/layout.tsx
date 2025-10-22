import React from "react";
import { auth } from "@/utils/auth";
import { headers } from "next/headers";
import { redirect, RedirectType } from "next/navigation";

interface ProtectedLayoutProps
  extends Readonly<{
    children: React.ReactNode;
  }> {}

const ProtectedLayout: React.FC<ProtectedLayoutProps> = async ({
  children,
}) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/sign-in", RedirectType.replace);
  }

  return <>{children}</>;
};

export default ProtectedLayout;
