"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import Container from "./Container";

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Brand detection (only matters if this header is ever reused in RMA)
  const isRMA =
    pathname.startsWith("/symptoms") ||
    pathname.startsWith("/success") ||
    pathname.startsWith("/paying") ||
    pathname.startsWith("/terms") ||
    pathname.startsWith("/contact");

    const isRMA = false;

  const navLinks: Array<[string, string]> = isRMA
    ? [
        ["/", "Home"],
        ["/about", "About"],
        ["/services", "Services"],
        ["/symptoms", "Symptoms"],
        ["/access", "Access"],
        ["/faq", "FAQ"],
      ]
    : [
        ["/", "Home"],
        ["/start-here", "Start Here"],
        ["/our-approach", "Our Approach"],
        ["/services", "Services"],
        ["/rebelbot", "RebelBot"],
        ["/faq", "FAQ"],
        ["/access", "Access"],
      ];

  const Cta = ({ className = "" }: { className?: string }) =>
    brand.ctaHref.startsWith("http") ? (
      <a
        href={brand.ctaHref}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {brand.ctaText}
      </a>
    ) : (
      <Link href={brand.ctaHref} className={className}>
        {brand.ctaText}
      </Link>
    );

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-black/5">
      <Container className="py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex min-w-0 flex-col items-start">
            <img
              src={brand.logoSrc}
              alt={brand.logoAlt}
              className="h-12 w-auto"
              draggable={false}
            />
            <span className="mt-1 text-xs italic text-slate-500">
              {brand.tagline}
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
            {navLinks.map(([href, label]) => (
              <Link key={href} href={href} className="hover:text-slate-900">
                {label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <Cta className="hidden md:inline-flex rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50 transition" />

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-800"
            aria-label="Toggle menu"
          >
            {mobileOpen ? "Close" : "Menu"}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden mt-4 rounded-2xl border border-slate-200 bg-white p-3">
            <nav className="flex flex-col gap-1 text-sm text-slate-700">
              {navLinks.map(([href, label]) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-3 py-2 hover:bg-slate-50"
                >
                  {label}
                </Link>
              ))}
            </nav>

            <Cta className="mt-3 inline-flex w-full items-center justify-center rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white" />
          </div>
        )}
      </Container>
    </header>
  );
}