import { auth } from '@/shared/api';
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    signIn: async ({ account, user }) => {
      if (account?.provider === 'google' && account?.access_token) {
        const { data } = await auth.authorizeByGoogle(account?.access_token);
        user.accessToken = data.accessToken;
        user.refreshToken = data.refreshToken;
        return true;
      }
      return false;
    },
    jwt: ({ token, user }) => {
      if (user?.accessToken) {
        token.accessToken = user.accessToken;
      }

      return token;
    },
    session: ({ session, token }) => {
      session.accessToken = token.accessToken;
      return session;
    },
  },
});
