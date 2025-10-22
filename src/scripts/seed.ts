import { drizzle } from "drizzle-orm/node-postgres";
import { seed } from "drizzle-seed";
import * as schema from "@/db/schema";
import { pool } from "@/db";

const db = drizzle(pool);

const meaningfulTodos = [
  "Set up local development environment",
  "Check PostgreSQL synchronization",
  "Write initial database schema",
  "Implement user authentication",
  "Design landing page",
  "Create API endpoints",
  "Write unit tests for todos",
  "Add caching with TanStack Query",
  "Integrate Mantine UI styling",
  "Deploy to staging environment",
];

async function main() {
  console.log("🌱 Seeding local Postgres DB...");

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

  console.log("✅ Postgres DB seeded with meaningful todos!");
}

main()
  .catch((err) => {
    console.error("❌ Error while seeding:", err);
  })
  .finally(async () => {
    await pool.end();
    process.exit();
  });
