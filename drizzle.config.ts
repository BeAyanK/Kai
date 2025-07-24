import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env" });

export default {
  dialect: "postgresql", // "postgresql" | "mysql" | "sqlite"
  schema: "./src/lib/db/schema.ts",
  out: "./drizzle", // optional: specifies the output directory for migrations
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
} satisfies Config;
