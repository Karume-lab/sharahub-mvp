import { ZodError, z } from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_APP_URL: z.url(),
  DATABASE_URL: z.string().min(1, "DATABASE_URL is required"),
  BETTER_AUTH_SECRET: z.string().min(1, "BETTER_AUTH_SECRET is required"),
  BETTER_AUTH_URL: z.url(),
  SMTP_HOST: z.string().min(1, "SMTP_HOST is required"),
  SMTP_PORT: z.string().transform((val) => Number(val)),
  SMTP_USER: z.string().min(1, "SMTP_USER is required"),
  SMTP_PASS: z.string().min(1, "SMTP_PASS is required"),
  NODE_ENV: z.enum(["development", "production", "test"]),
});

let env: z.infer<typeof envSchema>;

try {
  env = envSchema.parse(process.env);
} catch (error) {
  console.error("❌ Invalid environment variables:\n");
  if (error instanceof ZodError) {
    console.error(error.issues);
  }
  throw new Error(
    "Invalid or missing environment variables. Check your .env file.",
  );
}

export { env };
