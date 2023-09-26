import { z } from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_APP_URL: z.string().url(),
  NEXT_PUBLIC_UPLOAD_IMAGES_PREFIX: z.string(),
});

const envClient = envSchema.safeParse({
  NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
  NEXT_PUBLIC_UPLOAD_IMAGES_PREFIX:
    process.env.NEXT_PUBLIC_UPLOAD_IMAGES_PREFIX,
});

if (!envClient.success) {
  console.error(envClient.error.issues);
  throw new Error("There is an error with the client environment variables");
}

export const env = envClient.data;
