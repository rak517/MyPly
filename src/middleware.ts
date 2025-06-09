import { NextResponse, type NextRequest } from 'next/server';
import { updateSession } from '@/utils/supabase/middleware';
import { AFTER_LOGIN_ROUTE, BEFORE_LOGIN_ROUTE } from './constants/route';
import { createClient } from '@/utils/supabase/server';

/**
 * Middleware that enforces authentication-based routing for incoming requests.
 *
 * Redirects authenticated users away from routes intended only for unauthenticated users, and redirects unauthenticated users away from routes intended only for authenticated users. If no redirect is needed, proceeds with the updated session response.
 *
 * @param request - The incoming Next.js request.
 * @returns A response that may be a redirect or the original response from session update.
 */
export async function middleware(request: NextRequest) {
  const res = await updateSession(request);

  const supabase = await createClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const pathName = request.nextUrl.pathname;
  const isBeforeLoginRoute = BEFORE_LOGIN_ROUTE.includes(pathName);
  const isAfterLoginRoute = AFTER_LOGIN_ROUTE.some((route) => pathName.startsWith(route));

  if (isBeforeLoginRoute && session) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  if (isAfterLoginRoute && !session) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return res;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
