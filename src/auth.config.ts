import type { NextAuthConfig } from 'next-auth';
import credentialsProvider from '@/lib/auth/providers/credentials-provider';
import githubProvider from '@/lib/auth/providers/github-provider';
import googleProvider from '@/lib/auth/providers/google-provider';

// Notice this is only an object, not a full Auth.js instance
export default {
  session: { strategy: 'jwt' },
  pages: {
    signIn: '/auth/login',
  },
  providers: [credentialsProvider, githubProvider, googleProvider],
} satisfies NextAuthConfig;
