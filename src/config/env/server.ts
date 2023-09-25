import { z, ZodTypeAny } from "zod";

const arrayFromString = <T extends ZodTypeAny>(schema: T) =>
  z.preprocess((obj) => {
    return typeof obj === "string" ? obj.split(",").map((el) => el.trim()) : [];
  }, z.array(schema));

const envSchema = z.object({
  ALLOW_EMAIL_LIST: arrayFromString(z.string()),
  DATABASE_URL: z.string(),
  UPLOAD_DIR: z.string(),
  UPLOAD_DIR_ALBUMS: z.string(),
  UPLOAD_DIR_IMAGES_PREFIX: z.string().optional(),
  GOOGLE_CLIENT_ID: z.string(),
  GOOGLE_CLIENT_SECRET: z.string(),
  FACEBOOK_CLIENT_ID: z.string(),
  FACEBOOK_CLIENT_SECRET: z.string(),
  NEXTAUTH_SECRET: z.string(),
  NEXTAUTH_URL: z.string(),
});

const serverEnv = envSchema.safeParse(process.env);

if (!serverEnv.success) {
  console.error(serverEnv.error.issues);
  throw new Error("There is an error with the server environment variables");
}
export const env = serverEnv.data;
