import Link from "next/link";
import Container from "./Container";
import StartAssessmentButton from "./StartAssessmentButton";
export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-black/5">
      <Container className="flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="flex flex-col items-start">
          <img
            src="/rmf-logo.png"
            alt="Rebel Minds Foundations"
            className="h-14 w-auto"
          />
          <span className="mt-1 text-xs italic text-slate-500">
            Because new results require new thinking.
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
  <Link href="/" className="hover:text-slate-900 transition">
    Home
  </Link>

  <Link href="/about" className="hover:text-slate-900 transition">
    About
  </Link>

  <Link href="/how-it-works" className="hover:text-slate-900 transition">
    How it Works
  </Link>

  <Link href="/services" className="hover:text-slate-900 transition">
    Services
  </Link>

  <Link
    href="/rebelbot"
    className="font-medium text-slate-600 hover:text-slate-900 transition"
  >
    RebelBot
  </Link>

  <Link href="/faq" className="hover:text-slate-900 transition">
    FAQ
  </Link>

  <Link
  href="/access"
  className="text-slate-600 hover:text-slate-900 transition"
>
  Access
</Link>
</nav>

        {/* Soft action (not a pushy CTA) */}
        <a
  href="https://buy.stripe.com/dRm00l3z6dmr3c29Cz4ZG00"
  target="_blank"
  rel="noopener noreferrer"
  className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50 hover:shadow-sm transition"
>
  Start The Initial Assessment!
</a>
      </Container>
    </header>
  );
}