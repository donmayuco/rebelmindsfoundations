"use client";

import Link from "next/link";
import {
  Shield,
  Mail,
  CheckCircle2,
  ArrowRight,
  Clock,
  BadgeCheck,
} from "lucide-react";

function StatPill({
  children,
  tone = "neutral",
}: {
  children: React.ReactNode;
  tone?: "neutral" | "teal";
}) {
  const cls =
    tone === "teal"
      ? "border-teal-400/20 bg-teal-400/10 text-teal-200"
      : "border-white/10 bg-white/5 text-white/70";

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${cls}`}
    >
      {children}
    </span>
  );
}

function IconBadge({
  icon: Icon,
  tone = "teal",
}: {
  icon: React.ComponentType<{ className?: string }>;
  tone?: "teal" | "neutral";
}) {
  const cls =
    tone === "teal"
      ? "bg-teal-400/10 ring-teal-400/20 text-teal-200"
      : "bg-white/5 ring-white/10 text-white/70";

  return (
    <span
      className={`mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-2xl ring-1 ${cls}`}
      aria-hidden="true"
    >
      <Icon className="h-5 w-5" />
    </span>
  );
}

function AccessCard({
  icon,
  title,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_8px_30px_rgb(0,0,0,0.25)]">
      <div className="flex items-start gap-3">
        <IconBadge icon={icon} />
        <div className="min-w-0">
          <h3 className="text-base font-semibold text-white">{title}</h3>
          <div className="mt-2 text-sm text-white/70">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default function AccessPage() {
  const supportEmail = "rebelmindsiopsych@gmail.com"; // <- change if you want

  const subject = encodeURIComponent("Rebel Minds Academics — Access question");
  const body = encodeURIComponent(
    `Hi Rebel Minds Academics,\n\nMy question is about:\n- (payments / scheduling access / website)\n\nDetails:\n\nThanks!`
  );

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-72 w-[48rem] -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-[-140px] right-[-120px] h-80 w-80 rounded-full bg-white/5 blur-3xl" />
      </div>

      <section className="relative mx-auto max-w-6xl px-6 py-20">
        {/* Eyebrow */}
        <p className="text-xs tracking-[0.35em] text-white/50">ACCESS</p>

        {/* Hero */}
        <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl">
          Clear paths. Intentional communication.
        </h1>

        <p className="mt-6 max-w-3xl text-white/70">
          We keep communication simple and purposeful. If you’re ready to work
          together, the best next step is the{" "}
          <span className="font-semibold text-white">Initial Assessment</span>.
          For quick questions about{" "}
          <span className="font-semibold text-white">
            access, payments, scheduling, or website issues
          </span>
          , email support below.
        </p>

        {/* Micro-trust pills */}
        <div className="mt-6 flex flex-wrap gap-2">
          <StatPill tone="teal">Systems first</StatPill>
          <StatPill>Admin support only</StatPill>
          <StatPill>
            <span className="inline-flex items-center gap-2">
              <Clock className="h-3.5 w-3.5" />
              Response: within 1 business day
            </span>
          </StatPill>
          <StatPill>Weekdays</StatPill>
        </div>

        {/* Actions */}
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-white/90 transition"
          >
            Start with the Initial Assessment
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>

          <a
            href={`mailto:${supportEmail}?subject=${subject}&body=${body}`}
            className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
          >
            Email Support
            <Mail className="ml-2 h-4 w-4 text-white/75" />
          </a>
        </div>

        <p className="mt-4 text-sm text-white/50">
          Response time: within 1 business day (weekdays).
        </p>

        {/* Cards */}
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {/* Card 1 */}
          <AccessCard icon={BadgeCheck} title="Coaching starts with the system">
            <p>
              We don’t coach by email or DM. The Initial Assessment keeps
              recommendations{" "}
              <span className="font-semibold text-white">
                structured, age-appropriate,
              </span>{" "}
              and tied to observable patterns — not guesswork.
            </p>
          </AccessCard>

          {/* Card 2 */}
          <AccessCard icon={Mail} title="Admin support only">
            <p>
              Email is for logistics: payments, scheduling access, or website
              issues. For anything coaching-related, we’ll direct you to the
              assessment or a parent session.
            </p>

            <div className="mt-4 rounded-2xl bg-black/20 px-4 py-3 ring-1 ring-white/10">
              <p className="text-sm text-white/80">
                <span className="text-white/60">Support email:</span>{" "}
                <span className="font-semibold text-white">{supportEmail}</span>
              </p>
            </div>
          </AccessCard>

          {/* Card 3 */}
          <AccessCard icon={CheckCircle2} title="What to include in your email">
            {/* Slightly calmer typography here */}
            <ul className="mt-1 space-y-2 text-xs leading-relaxed text-white/70">
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-300/80" />
                What you’re trying to access (payment / scheduling / page)
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-300/80" />
                The email you used (if relevant)
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-300/80" />
                A screenshot if it’s a technical issue
              </li>
            </ul>
          </AccessCard>
        </div>

        {/* Unwrapped “Thank you” section (stronger, less apologetic) */}
        <h2 className="mt-20 text-center text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Thank you for your patience and understanding.
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-white/70">
          Clear systems work best when communication is intentional. We
          appreciate you taking the time to understand how we work — it helps us
          protect quality and build better outcomes for families.
        </p>

        {/* Bottom reassurance */}
        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6">
          <p className="text-sm text-white/70">
            If you’re ready to move forward, the Initial Assessment is usually
            the best place to begin.{" "}
            <Link
              href="/services"
              className="font-semibold text-white underline underline-offset-4 hover:opacity-90"
            >
              Start the Initial Assessment
            </Link>
            .
          </p>
        </div>
      </section>

      <footer className="mx-auto max-w-6xl px-6 pb-10 text-xs text-white/45">
        Rebel Minds Academics provides educational coaching and academic strategy
        services. This is not therapy, counseling, or medical treatment.
      </footer>
    </main>
  );
}