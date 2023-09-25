import * as schema from "./schema";
import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";
import { env } from "../config/env/server";

const { DATABASE_URL } = env;

export const client = new Client({
  connectionString: DATABASE_URL,
});

(async () => {
  try {
    await client.connect();
  } catch (error) {
    console.log(error);
    await client.end();
  }
})();

export const db = drizzle(client, { schema });
