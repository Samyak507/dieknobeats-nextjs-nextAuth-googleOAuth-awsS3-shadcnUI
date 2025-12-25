import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  // Public routes
  if (
    pathname === "/" ||
    pathname.startsWith("/auth") ||
    pathname === "/favicon.ico"
  ) {
    return NextResponse.next();
  }

  const token = await getToken({ req });

  if (!token) {
    return NextResponse.redirect(
      new URL(`/auth/sign-in?callbackUrl=${pathname}`, req.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all paths except API routes and Next.js files
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};