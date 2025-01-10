import NextAuth from 'next-auth';
import { JWT } from 'next-auth/jwt';
import { User as UserDB } from '@/lib/models/users';
import { DefaultSession } from 'next-auth';
import { MongoDBAdapter } from '@auth/mongodb-adapter';
import authConfig from '@/auth.config';
import callbacks from './lib/auth/callbacks';

//Modify User, Session and Token Types
declare module 'next-auth' {
  interface Session {
    user: UserDB & DefaultSession['user'];
  }

  interface User extends UserDB {}
}

declare module 'next-auth/jwt' {
  interface JWT extends UserDB {}
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  callbacks,
  ...authConfig,
});
