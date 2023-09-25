import GoogleProvider from "next-auth/providers/google";
import { env } from "@/config/env/server";

const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = env;

export const GOOGLE_PROVIDER = GoogleProvider({
  clientId: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
});
