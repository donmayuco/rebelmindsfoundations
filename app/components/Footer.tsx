import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-black/5">
      <div className="mx-auto max-w-7xl px-6 py-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        
        {/* Left */}
        <p className="text-xs text-slate-500">
          © 2026 Rebel Minds Foundations. All rights reserved.
        </p>

        {/* Right */}
        <nav className="flex items-center gap-6 text-xs text-slate-500">
          <Link href="/about" className="hover:text-slate-800">
            About
          </Link>
          <Link href="/services" className="hover:text-slate-800">
            Services
          </Link>
          <Link href="/how-it-works" className="hover:text-slate-800">
            How it Works
          </Link>
          <Link href="/privacy-policy" className="hover:text-slate-800">
            Privacy Policy
          </Link>
          <Link href="/terms-of-use" className="hover:text-slate-800">
            Terms of Use
          </Link>
        </nav>
      </div>
    </footer>
  );
}