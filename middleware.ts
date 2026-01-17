import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow the coming-soon page itself
  if (pathname.startsWith("/coming-soon")) {
    return NextResponse.next();
  }

  // Allow static files and Next internals
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon.ico") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // Redirect everything else
  return NextResponse.redirect(
    new URL("/coming-soon", request.url)
  );
}

export const config = {
  matcher: "/:path*",
};