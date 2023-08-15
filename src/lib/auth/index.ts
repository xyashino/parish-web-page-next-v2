import NextAuth, { NextAuthOptions } from "next-auth";
import { checkEmailIsAllowed } from "@/lib/auth/check-email-is-allowed";
import { GOOGLE_PROVIDER } from "@/lib/auth/google";
import { FACEBOOK_PROVIDER } from "@/lib/auth/facebook";

export const authOptions = {
  providers: [GOOGLE_PROVIDER, FACEBOOK_PROVIDER],
  callbacks: {
    async signIn({ user }) {
      const stringEmail = user.email;
      return checkEmailIsAllowed(stringEmail ?? "");
    },
  },
  pages: {
    signIn: "/login",
  },
} as NextAuthOptions;

export default NextAuth(authOptions);
