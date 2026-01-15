// app/page.tsx
import Link from "next/link";
import {
  Eye,
  PlayCircle,
  FolderKanban,
  Brain,
  Lightbulb,
  HeartPulse,
  Sparkles,
  Shield,
  AlertTriangle,
  BatteryLow,
  Wand2,
  ClipboardList,
  BarChart3,
  Route,
} from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#070B18] text-white">
      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-teal-400/10 blur-3xl" />
        <div className="absolute bottom-[-160px] right-[-120px] h-[520px] w-[520px] rounded-full bg-amber-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-24">
        {/* HERO */}
        <section className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
              Rebel Minds Foundations <span className="text-white/40">•</span>
              Learning systems for K–12 students & families
            </p>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
            Homework shouldn’t feel like a nightly battle— for parents or their kids.
            </h1>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/75">
              If your child is capable but inconsistent — and you’re stuck
              reminding, pushing, rescuing, or negotiating — the issue is rarely
              intelligence. It’s missing systems.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/assessment"
                className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-white/90"
              >
                Start with the Parent Initial Assessment
              </Link>

              <Link
                href="/how-it-works"
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                See how it works
              </Link>
            </div>

            {/* ✅ TOP 3 ELONGATED CARDS — FIXED */}
            <div className="mt-8 max-w-xl flex flex-col gap-6">
              {[
                {
                  title: "Non-Diagnostic",
                  desc: "Behavior-based, not labels.",
                  Icon: Eye,
                },
                {
                  title: "Parent-Aligned",
                  desc: "Support that fades over time.",
                  Icon: HeartPulse,
                },
                {
                  title: "System-First",
                  desc: "Design > willpower.",
                  Icon: FolderKanban,
                },
              ].map(({ title, desc, Icon }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10">
                      <Icon className="h-4 w-4 text-teal-300" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold">{title}</p>
                      <p className="mt-1 text-xs text-white/70">{desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
            <p className="text-sm font-semibold text-white">
              What families come to us with
            </p>

            <div className="mt-4 space-y-3 text-sm text-white/75">
              {[
                "“My child is smart, but nothing is consistent.”",
                "“Homework takes hours and ends in frustration.”",
                "“If I don’t remind them, nothing happens.”",
                "“They shut down the moment it feels hard.”",
              ].map((line) => (
                <div
                  key={line}
                  className="rounded-2xl border border-white/10 bg-black/20 p-4"
                >
                  {line}
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-teal-400/20 bg-teal-400/10 p-4">
              <p className="text-sm font-semibold text-white">
                Our promise (without hype)
              </p>
              <p className="mt-1 text-sm text-white/75">
                We identify where learning breaks down and build simple systems
                your child can actually run — so support decreases as skills grow.
              </p>
            </div>
          </div>
        </section>

        {/* PROBLEM → SOLUTION */}
        <section className="mt-16 md:mt-24">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "The Problem",
                icon: "problem",
                body:
                  "School expects planning, focus, and study systems — but many kids were never taught them.",
              },
              {
                title: "The Cost",
                icon: "cost",
                body:
                  "Parents become the external brain. Kids lose confidence. Everyone gets exhausted.",
              },
              {
                title: "The Fix",
                icon: "fix",
                body:
                  "We treat learning like a system: assess → design supports → build independence.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10">
                    {card.icon === "problem" && (
                      <AlertTriangle className="h-4 w-4 text-teal-300" />
                    )}
                    {card.icon === "cost" && (
                      <BatteryLow className="h-4 w-4 text-teal-300" />
                    )}
                    {card.icon === "fix" && (
                      <Wand2 className="h-4 w-4 text-teal-300" />
                    )}
                  </span>
                  <p className="text-sm font-semibold">{card.title}</p>
                </div>
                <p className="mt-3 text-sm text-white/75">{card.body}</p>
              </div>
            ))}
          </div>
        </section>
<section className="mt-16 md:mt-24">
  <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
    <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
      {/* LEFT: COPY */}
      <div>
        {/* Eyebrow (optional but recommended) */}
        <p className="text-xs font-semibold tracking-wide text-white/60">
          Before coaching. Before systems. Before support.
        </p>

        <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
          Stop Guessing. Start With Clarity.
        </h2>

        <p className="mt-3 text-sm text-white/80">
          <span className="font-semibold text-white">
            Our Initial Assessment replaces trial-and-error with a clear,
            age-appropriate plan your family can actually follow.
          </span>
        </p>

        <p className="mt-2 text-sm text-white/70">
          We start by understanding how your child actually works — so every
          recommendation is intentional.
        </p>

        {/* Feature chips (optional) */}
        <div className="mt-6 flex flex-wrap gap-3">
  {[
    { label: "Guided parent intake", Icon: ClipboardList },
    { label: "Structured scoring", Icon: BarChart3 },
    { label: "Clear next-step plan", Icon: Route },
  ].map(({ label, Icon }) => (
    <span
      key={label}
      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm text-white/80"
    >
      <Icon className="h-4 w-4 text-teal-300" />
      {label}
    </span>
  ))}
</div>
<div className="mt-8 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
  <p className="text-sm text-white/70 max-w-xl">
    Complete the assessment first. We’ll review results together and guide next
    steps in a follow-up parent session.
  </p>

  <Link
    href="/assessment"
    className="inline-flex w-full sm:w-auto items-center justify-center rounded-2xl bg-white px-8 py-4 text-base font-semibold text-slate-900 hover:bg-white/90"
  >
    Begin the Initial Assessment — $150
  </Link>
</div>
      </div>
    </div>
  </div>
</section>
      </div>
    </main>
  );
}