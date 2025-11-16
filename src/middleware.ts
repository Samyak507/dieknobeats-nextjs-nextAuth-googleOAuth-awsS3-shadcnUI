import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token;
    const { pathname } = req.nextUrl;

    //  Allow homepage to be accessed without login
    if (pathname === "/") return NextResponse.next();

    // ✅ If user not logged in, redirect them to sign-in with callback
    if (!token) {
      return NextResponse.redirect(
        new URL(`/auth/sign-in?callbackUrl=${pathname}`, req.url)
      );
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: () => true, // we handle auth manually above
    },
  }
);

// ✅ Matcher - protect everything except sign-in, sign-up, api, static files and favicon
export const config = {
  matcher: [
    "/((?!api|auth/sign-in|auth/sign-up|_next|static|favicon.ico|$).*)",
  ],
};
