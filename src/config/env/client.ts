import { z } from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_APP_URL: z.string().url(),
});

const envClient = envSchema.safeParse({
  NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
});

if (!envClient.success) {
  console.error(envClient.error.issues);
  throw new Error("There is an error with the client environment variables");
}

export const env = envClient.data;
