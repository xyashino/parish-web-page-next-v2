import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";

dotenv.config();

const { DATABASE_URL } = process.env;

if (!DATABASE_URL) {
  throw new Error("DATABASE_URL .env variable is missing or empty");
}

export default {
  schema: "./src/db/schema/*",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
    connectionString: DATABASE_URL,
  },
} satisfies Config;
