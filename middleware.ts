import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // ✅ Allow Next.js internals + common public files
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname === "/favicon.ico" ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml"
  ) {
    return NextResponse.next();
  }

  // ✅ Allow any file requests (images, css, js, etc.)
  // Examples: /rmf-logo.png, /icons/icon-32.png, /something.css
  if (pathname.includes("."))
    return NextResponse.next();

  // ✅ Allow the coming soon page itself (avoid loops)
  if (pathname.startsWith("/coming-soon")) {
    return NextResponse.next();
  }

  // 🔁 Everything else -> show coming soon (rewrite avoids redirect loops)
  const url = req.nextUrl.clone();
  url.pathname = "/coming-soon";
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/:path*"],
};