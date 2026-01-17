import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Allow Next internals + assets + API
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/favicon") ||
    pathname.match(/\.(png|jpg|jpeg|webp|svg|ico|css|js|map)$/)
  ) {
    return NextResponse.next();
  }

  // Allow the coming-soon page itself
  if (pathname === "/coming-soon") return NextResponse.next();

  // Gate everything else to coming-soon
  const url = req.nextUrl.clone();
  url.pathname = "/coming-soon";
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image).*)"],
};