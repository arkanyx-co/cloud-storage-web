import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuth({
  providers: [
    process.env.VERCEL_ENV === 'preview'
      ? CredentialsProvider({
          name: 'Credentials',
          credentials: {
            username: {
              label: 'Username',
              type: 'text',
              placeholder: 'jsmith',
            },
            password: { label: 'Password', type: 'password' },
          },
          authorize: async () => ({
            id: '1',
            name: 'J Smith',
            email: 'jsmith@example.com',
            image: 'https://i.pravatar.cc/150?u=jsmith@example.com',
          }),
        })
      : GoogleProvider({
          clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
          clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
        }),
  ],
});
