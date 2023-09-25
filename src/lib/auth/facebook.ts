import FacebookProvider from "next-auth/providers/facebook";
import { env } from "@/config/env/server";

const { FACEBOOK_CLIENT_ID, FACEBOOK_CLIENT_SECRET } = env;

export const FACEBOOK_PROVIDER = FacebookProvider({
  clientId: FACEBOOK_CLIENT_ID,
  clientSecret: FACEBOOK_CLIENT_SECRET,
});
