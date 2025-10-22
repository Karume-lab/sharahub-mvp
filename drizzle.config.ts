import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: ["src/db/schema.ts", "src/__generated__/better-auth/auth-schema.ts"],
  out: "src/__generated__/drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
