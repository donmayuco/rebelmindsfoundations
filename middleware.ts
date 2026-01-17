import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // allow the coming-soon route itself
  if (pathname.startsWith("/coming-soon")) return NextResponse.next();

  // allow Next internals + static files
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // redirect everything else
  return NextResponse.redirect(new URL("/coming-soon", request.url));
}

export const config = {
  matcher: "/:path*",
};