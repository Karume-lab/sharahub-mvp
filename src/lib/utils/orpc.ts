import type { router } from "@/lib/server/orpc/routers";
import { createORPCClient } from "@orpc/client";
import { RPCLink } from "@orpc/client/fetch";
import { RouterClient } from "@orpc/server";
import { createTanstackQueryUtils } from "@orpc/tanstack-query";

const link = new RPCLink({
  url: `${
    typeof window !== "undefined"
      ? window.location.origin
      : "http://localhost:3000"
  }/api/rpc`,
  headers: async () => {
    if (typeof window !== "undefined") return {};
    const { headers } = await import("next/headers");
    return await headers();
  },
});

export const ORPCClient: RouterClient<typeof router> = createORPCClient(link);

export const ORPCTanstackClient = createTanstackQueryUtils(ORPCClient);
