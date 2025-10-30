import { headers } from "next/headers";
import { redirect } from "next/navigation";
import type React from "react";
import { auth } from "@/features/auth/utils/auth";

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
    redirect("/sign-in");
  }

  return <>{children}</>;
};

export default ProtectedLayout;
