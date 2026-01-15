"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "./Container";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-black/5">
      <Container className="py-4">
        {/* Top row */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex min-w-0 flex-col items-start">
            <img
              src="/rmf-logo.png"
              alt="Rebel Minds Foundations"
              className="h-12 w-auto"
              draggable={false}
            />
            <span className="mt-1 text-xs italic text-slate-500">
              Because new results require new thinking.
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
            <Link href="/" className="hover:text-slate-900">Home</Link>

            {/* NEW */}
            <Link href="/start-here" className="hover:text-slate-900">Start Here</Link>
            <Link href="/our-approach" className="hover:text-slate-900">Our Approach</Link>

            {/* Existing */}
            <Link href="/services" className="hover:text-slate-900">Services</Link>
            <Link href="/rebelbot" className="font-medium text-slate-900">RebelBot</Link>
            <Link href="/faq" className="hover:text-slate-900">FAQ</Link>
            <Link href="/access" className="hover:text-slate-900">Access</Link>
          </nav>

          {/* Desktop CTA */}
          <a
            href="https://buy.stripe.com/dRm00l3z6dmr3c29Cz4ZG00"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50 transition"
          >
            Start The Initial Assessment!
          </a>

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
              {[
                ["/", "Home"],

                // NEW
                ["/start-here", "Start Here"],
                ["/our-approach", "Our Approach"],

                // Existing
                ["/about", "About"],
                ["/how-it-works", "How it Works"],
                ["/services", "Services"],
                ["/rebelbot", "RebelBot"],
                ["/faq", "FAQ"],
                ["/access", "Access"],
              ].map(([href, label]) => (
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

            <a
              href="https://buy.stripe.com/dRm00l3z6dmr3c29Cz4ZG00"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex w-full items-center justify-center rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white"
            >
              Start The Initial Assessment
            </a>
          </div>
        )}
      </Container>
    </header>
  );
}