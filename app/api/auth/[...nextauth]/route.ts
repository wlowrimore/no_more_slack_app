import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import type { JWT } from "next-auth/jwt";
import type { Session } from "next-auth";

const authConfig = {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async jwt({ token, account, profile }: any) {
      if (account && profile) {
        token.accessToken = account.access_token;
        token.id = profile.sub;
      }
      return token;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      // Add custom properties to session using type assertion
      const extendedSession = session as any;

      if (token.accessToken) {
        extendedSession.accessToken = token.accessToken;
      }
      if (token.id && session.user) {
        extendedSession.user.id = token.id;
      }
      return extendedSession;
    },
  },
  pages: {
    signIn: "/signin",
  },
  session: {
    strategy: "jwt" as const,
  },
  debug: process.env.NODE_ENV === "development",
} satisfies Parameters<typeof NextAuth>[0];

const nextAuth = NextAuth(authConfig);

const { handlers } = NextAuth(authConfig);
export const { GET, POST } = handlers;

export const auth = nextAuth.auth;
export const authConfigHandler = NextAuth(authConfig);
