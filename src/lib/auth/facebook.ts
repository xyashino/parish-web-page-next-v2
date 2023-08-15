import FacebookProvider from "next-auth/providers/facebook";

const { FACEBOOK_CLIENT_ID, FACEBOOK_CLIENT_SECRET } = process.env;

if (!FACEBOOK_CLIENT_ID || !FACEBOOK_CLIENT_SECRET) {
  throw new Error(
    "Missing environment variables client id and secret. Did you forget to run `cp .env.local.example .env.local`?"
  );
}

export const FACEBOOK_PROVIDER = FacebookProvider({
  clientId: FACEBOOK_CLIENT_ID,
  clientSecret: FACEBOOK_CLIENT_SECRET,
});
