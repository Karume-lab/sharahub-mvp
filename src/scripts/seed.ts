import { drizzle } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";
import { seed } from "drizzle-seed";
import * as schema from "@/db/schema";

const sqlite = new Database("sqlite.db");
const db = drizzle(sqlite);

const meaningfulTodos = [
  "Set up local development environment",
  "Check SQLite synchronization",
  "Write initial database schema",
  "Implement user authentication",
  "Design landing page",
  "Create API endpoints",
  "Write unit tests for todos",
  "Add caching with TanStack Query",
  "Integrate Tailwind CSS styling",
  "Deploy to staging environment",
];

async function main() {
  console.log("🌱 Seeding local DB...");

  if (process.env.NODE_ENV === "production") {
    console.log("⚠️ Skipping seed in production");
    return;
  }

  await seed(db, { todos: schema.todos }).refine((f) => ({
    todos: {
      count: 10,
      columns: {
        text: f.valuesFromArray({ values: meaningfulTodos }),
        done: f.boolean(),
      },
    },
  }));

  console.log("✅ DB seeded with meaningful todos!");
}

main().finally(() => process.exit());
