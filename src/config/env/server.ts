import { z } from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_APP_URL: z.string().url(),
  NEXT_PUBLIC_UPLOAD_IMAGES_PREFIX: z.string(),
  ALLOW_EMAIL_LIST: z.string(),
  DATABASE_URL: z.string().url(),
  UPLOAD_DIR: z.string(),
  UPLOAD_DIR_ALBUM: z.string(),
  GOOGLE_CLIENT_ID: z.string().optional(),
  GOOGLE_CLIENT_SECRET: z.string().optional(),
  FACEBOOK_CLIENT_ID: z.string().optional(),
  FACEBOOK_CLIENT_SECRET: z.string().optional(),
  NEXTAUTH_SECRET: z.string(),
  NEXTAUTH_URL: z.string().url(),
});

const envServer = envSchema.safeParse({
  NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
  NEXT_PUBLIC_UPLOAD_IMAGES_PREFIX:
    process.env.NEXT_PUBLIC_UPLOAD_IMAGES_PREFIX,
  ALLOW_EMAIL_LIST: process.env.ALLOW_EMAIL_LIST,
  DATABASE_URL: process.env.DATABASE_URL,
  UPLOAD_DIR: process.env.UPLOAD_DIR,
  UPLOAD_DIR_ALBUM: process.env.UPLOAD_DIR_ALBUM,
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  FACEBOOK_CLIENT_ID: process.env.FACEBOOK_CLIENT_ID,
  FACEBOOK_CLIENT_SECRET: process.env.FACEBOOK_CLIENT_SECRET,
  NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
  NEXTAUTH_URL: process.env.NEXTAUTH_URL,
});

if (!envServer.success) {
  console.error(envServer.error.issues);
  throw new Error("There is an error with the server environment variables");
}

export const env = envServer.data;
