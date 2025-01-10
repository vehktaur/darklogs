import NextAuth from 'next-auth';
import authConfig from '@/auth.config';
import {
  apiAuthPrefix,
  authRoutes,
  DEFAULT_LOGIN_REDIRECT,
  publicRoutes,
} from './routes';

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const {
    auth,
    nextUrl: { pathname },
  } = req;
  const isLoggedIn = !!auth;
  const isAPIRoute = pathname.startsWith(apiAuthPrefix);
  const isAuthRoute = authRoutes.includes(pathname);
  const isPublicRoute = publicRoutes.some((route) =>
    typeof route === 'string' ? route === pathname : route.test(pathname),
  );

  if (isAPIRoute) {
    return;
  }

  if (isAuthRoute) {
    if (isLoggedIn)
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, req.url));

    return;
  }

  if (!isPublicRoute && !isLoggedIn) {
    return Response.redirect(new URL('/auth/login', req.url));
  }

  return;
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
