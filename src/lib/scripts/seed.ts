import { drizzle } from "drizzle-orm/node-postgres";
import { seed } from "drizzle-seed";
import { pool } from "@/lib/db";
import { env } from "@/lib/types";

const db = drizzle(pool);

export const main = async () => {
  console.log("🌱 Seeding local Postgres DB...");

  if (env.NODE_ENV === "production") {
    console.log("⚠️ Skipping seed in production");
    return;
  }

  await seed(db, {});

  console.log("✅ Postgres DB seeded with meaningful todos!");
};

main()
  .catch((err) => {
    console.error("❌ Error while seeding:", err);
  })
  .finally(async () => {
    await pool.end();
    process.exit();
  });
