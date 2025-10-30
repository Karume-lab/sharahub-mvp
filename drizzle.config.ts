import { defineConfig } from "drizzle-kit";
import { env } from "@/lib/types";

export default defineConfig({
  schema: ["src/db/schema.ts", "src/features/auth/db/auth.ts"],
  out: "src/db/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
});
