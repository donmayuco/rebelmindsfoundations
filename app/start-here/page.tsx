// app/start-here/page.tsx
import Link from "next/link";
import {
  Sparkles,
  Shield,
  Layers,
  Compass,
  ClipboardList,
  Route,
  CheckCircle2,
  ArrowRight,
  BadgeDollarSign,
  Scale,
  HeartHandshake,
  Info,
} from "lucide-react";

/**
 * TODO: Replace with your Stripe link once created.
 * Example:
 * const ORIENTATION_CHECKOUT_URL = "https://buy.stripe.com/...";
 */
const ORIENTATION_CHECKOUT_URL = "#";

function Pill({
  Icon,
  children,
}: {
  Icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80">
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10">
        <Icon className="h-3.5 w-3.5 text-teal-300" />
      </span>
      {children}
    </span>
  );
}

function Card({
  title,
  desc,
  Icon,
}: {
  title: string;
  desc: string;
  Icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-black/20 p-6">
      <div className="flex items-start gap-3">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10">
          <Icon className="h-5 w-5 text-teal-300" />
        </span>
        <div>
          <p className="text-sm font-semibold text-white">{title}</p>
          <p className="mt-2 text-sm text-white/70 leading-relaxed">{desc}</p>
        </div>
      </div>
    </div>
  );
}

function SectionCard({
  eyebrow,
  title,
  children,
  icon: Icon,
}: {
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
  icon?: React.ComponentType<{ className?: string }>;
}) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
      {/* subtle gradient + glow */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -top-28 -left-28 h-72 w-72 rounded-full bg-teal-400/10 blur-3xl" />
        <div className="absolute -bottom-28 -right-28 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl" />
      </div>

      {/* left accent bar */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-teal-300/70 via-teal-300/20 to-transparent" />

      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div className="max-w-3xl">
            {eyebrow ? (
              <p className="text-xs font-semibold tracking-wide text-white/60">
                {eyebrow}
              </p>
            ) : null}
            <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
              {title}
            </h2>
          </div>

          {Icon ? (
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10">
              <Icon className="h-5 w-5 text-teal-300" />
            </span>
          ) : null}
        </div>

        <div className="mt-5">{children}</div>
      </div>
    </div>
  );
}

export default function StartHerePage() {
  return (
    <main className="min-h-screen bg-[#070B18] text-white">
      {/* Background glow (matches your site) */}
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
              Start Here
            </p>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
              Start with clarity.
              <span className="block text-white/90">Move forward without pressure.</span>
            </h1>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/75">
              When learning or performance feels inconsistent, the first step isn’t more
              strategies — it’s understanding what’s actually happening.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <Pill Icon={Sparkles}>Clarity first</Pill>
              <Pill Icon={Shield}>Non-diagnostic</Pill>
              <Pill Icon={Layers}>Systems, not willpower</Pill>
              <Pill Icon={Compass}>Next step mapped</Pill>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="#orientation"
                className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-white/90"
              >
                Start with the Orientation Report
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>

              <Link
                href="/our-approach"
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                Our Approach
              </Link>
            </div>

            <p className="mt-4 text-sm text-white/55">
              You don’t need to decide anything today.
            </p>
          </div>

          {/* RIGHT PANEL */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
            <p className="text-sm font-semibold text-white">If you’re here, it’s usually because…</p>

            <div className="mt-4 space-y-3 text-sm text-white/75">
              {[
                "“My child is capable, but nothing is consistent.”",
                "“Homework takes forever and ends in conflict.”",
                "“If I don’t remind them, nothing happens.”",
                "“I’ve tried a lot… and I’m still not sure what the issue is.”",
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
              <p className="text-sm font-semibold text-white">The point of “Start Here”</p>
              <p className="mt-1 text-sm text-white/75">
                To replace uncertainty with a calm, clear next step — without labels and without pressure.
              </p>
            </div>
          </div>
        </section>

        {/* TRACK */}
        <section className="mt-16 md:mt-24">
          <SectionCard
            eyebrow="The RMF ecosystem track"
            title="A simple path: clarity → system → independence"
            icon={Route}
          >
            <p className="text-sm text-white/75 leading-relaxed max-w-3xl">
              We follow a structured progression designed to reduce confusion, build the right supports,
              and gradually step back as independence grows.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-4">
              {[
                {
                  t: "Orientation",
                  d: "Clarity before commitment",
                  Icon: Sparkles,
                },
                {
                  t: "Initial Assessment",
                  d: "Signals + scoring by domain",
                  Icon: ClipboardList,
                },
                {
                  t: "Custom System",
                  d: "Blueprint built for your family",
                  Icon: Layers,
                },
                {
                  t: "Independence",
                  d: "Support fades over time",
                  Icon: Route,
                },
              ].map(({ t, d, Icon }) => (
                <div key={t} className="rounded-3xl border border-white/10 bg-black/20 p-5">
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10">
                      <Icon className="h-5 w-5 text-teal-300" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-white">{t}</p>
                      <p className="mt-1 text-xs text-white/65">{d}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-5">
              <p className="text-sm text-white/75">
                <span className="font-semibold text-white">Why we don’t skip steps:</span>{" "}
                jumping straight to solutions often increases pressure and confusion. Orientation protects families
                from trial-and-error by clarifying what actually matters first.
              </p>
            </div>
          </SectionCard>
        </section>

        {/* ORIENTATION */}
        <section id="orientation" className="mt-14">
          <SectionCard
            eyebrow="Orientation Report"
            title="Clarity before commitment"
            icon={HeartHandshake}
          >
            <p className="text-sm text-white/75 leading-relaxed max-w-3xl">
              The Orientation Report is a guided, non-diagnostic report designed to help families understand:
              what may be contributing to learning friction, which areas matter most right now, and what’s likely
              secondary — or not the issue at all.
              <br />
              <br />
              It does not tell you what to do. It helps you understand what’s happening.
            </p>

            {/* Value cards */}
            <div className="mt-7 grid gap-6 md:grid-cols-3">
              <Card
                title="Clear signal map"
                desc="What matters most right now — and what doesn’t."
                Icon={CheckCircle2}
              />
              <Card
                title="Parent-ready language"
                desc="Words you can use with your child (and with schools) without escalating pressure."
                Icon={Info}
              />
              <Card
                title="Recommended next step"
                desc="Pause with clarity — or move forward with confidence."
                Icon={Compass}
              />
            </div>

            {/* THE FIRST 90 SECONDS (Reflowed for rhythm + scan) */}
<div className="mt-8 rounded-3xl border border-white/10 bg-black/20 p-6 md:p-8">
  <div className="flex flex-wrap items-center justify-between gap-3">
    <p className="text-xs font-semibold tracking-wide text-white/60">
      The first 90 seconds (parent-forward)
    </p>

    <div className="flex flex-wrap gap-2">
      <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold text-white/70">
        Gentle clarity
      </span>
      <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold text-white/70">
        No labels
      </span>
      <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold text-white/70">
        No pressure
      </span>
    </div>
  </div>

  {/* TL;DR banner (reduces “wall of text” feel immediately) */}
  <div className="mt-5 rounded-2xl border border-teal-400/20 bg-teal-400/10 p-4">
    <p className="text-sm font-semibold text-white">What you’re about to get</p>
    <p className="mt-1 text-sm text-white/75 leading-relaxed">
      A calm explanation of what may be driving the friction — and a clear sense
      of what matters first (and what doesn’t).
    </p>
  </div>

  {/* Content beats */}
  <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_320px] lg:items-start">
    {/* LEFT: narrative, broken into beats */}
    <div className="space-y-6">
      <div className="space-y-3 text-sm text-white/75 leading-relaxed">
        <p className="text-white/85">
          If you’re here, it’s usually because something hasn’t been sitting right.
        </p>

        <p>
          Not necessarily a crisis. Not necessarily a diagnosis. Just a persistent
          sense that effort isn’t translating into results the way it should.
        </p>

        <p>
          Many parents arrive here after trying encouragement, structure, tutors,
          consequences — or “just one more strategy” — and still feeling unsure
          whether they’re helping or unintentionally adding pressure.
        </p>

        <p className="text-white/85">If that sounds familiar, pause for a moment.</p>

        <p>
          Nothing is wrong with your concern. And nothing here assumes something is
          “wrong” with your child.
        </p>
      </div>

      <div className="border-t border-white/10 pt-6">
        <h3 className="text-sm font-semibold text-white">What this report is meant to do</h3>
        <p className="mt-2 text-sm text-white/70 leading-relaxed">
          This Orientation Report isn’t designed to “fix” anything. Its purpose is
          simpler — and more important:
        </p>

        {/* Shorter, punchier callout */}
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4">
          <p className="text-sm text-white/85 leading-relaxed">
            Help you understand what’s happening, where friction is coming from,
            and what kind of support would actually make sense next.
          </p>
        </div>

        <p className="mt-3 text-sm text-white/70">
          No labels. No assumptions. No pressure to act. Just clarity.
        </p>
      </div>

      <div className="border-t border-white/10 pt-6">
        <h3 className="text-sm font-semibold text-white">A reassuring truth</h3>
        <p className="mt-2 text-sm text-white/70 leading-relaxed">
          When learning or performance feels inconsistent, the issue is rarely motivation,
          intelligence, or effort. More often, it’s a misalignment between how demands
          are structured and how the student actually operates.
        </p>

        {/* One-line “landing sentence” */}
        <div className="mt-4 flex items-start gap-3 rounded-2xl border border-white/10 bg-black/20 p-4">
          <span className="mt-0.5 inline-block h-2 w-2 rounded-full bg-teal-300/80" />
          <p className="text-sm text-white/80 leading-relaxed">
            That’s a systems issue — not a personal failure. And systems can be understood.
          </p>
        </div>
      </div>

      <div className="border-t border-white/10 pt-6">
        <h3 className="text-sm font-semibold text-white">How to use this report</h3>
        <p className="mt-2 text-sm text-white/70 leading-relaxed">
          As you read, you may recognize patterns that feel uncomfortably accurate.
          That’s normal. The goal isn’t to judge or diagnose — it’s to orient what matters
          most right now, what’s secondary, and what doesn’t need your energy yet.
        </p>

        <div className="mt-4 rounded-2xl border border-white/10 bg-black/20 p-4">
          <p className="text-sm text-white/80 leading-relaxed">
            By the end, you should feel steadier, less confused, and clearer about next steps —
            even if you choose to take none immediately.
          </p>
          <p className="mt-2 text-sm font-semibold text-white">That is success.</p>
        </div>
      </div>
    </div>

    {/* RIGHT: “guide rail” (turns density into structure) */}
    <aside className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <p className="text-sm font-semibold text-white">Read it like this</p>
      <p className="mt-2 text-sm text-white/70 leading-relaxed">
        You’re not looking for a “perfect answer.” You’re looking for clarity.
      </p>

      <ul className="mt-4 space-y-3 text-sm text-white/70">
        {[
          "Notice what repeats across situations.",
          "Separate “pattern” from “personality.”",
          "Look for what reduces conflict first.",
          "Use the recommended next step only if needed.",
        ].map((x) => (
          <li key={x} className="flex items-start gap-2">
            <CheckCircle2 className="mt-0.5 h-4 w-4 text-teal-300" />
            <span>{x}</span>
          </li>
        ))}
      </ul>

      <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-4">
        <p className="text-xs font-semibold text-white/80">Reminder</p>
        <p className="mt-1 text-sm text-white/70 leading-relaxed">
          Clarity is the goal — not commitment.
        </p>
      </div>
    </aside>
  </div>
</div>

            {/* IS / IS NOT */}
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-black/20 p-6">
                <p className="text-sm font-semibold text-white">What parents walk away with</p>
                <ul className="mt-3 space-y-2 text-sm text-white/75">
                  {[
                    "A clearer picture of how their child is functioning as a learner",
                    "Relief from self-blame and second-guessing",
                    "Language to describe what’s been hard to articulate",
                    "Confidence about whether to move forward — or pause",
                  ].map((x) => (
                    <li key={x} className="flex gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-teal-300" />
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm text-white/70">
                  Many parents use the Orientation Report simply to confirm what they’ve been sensing.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-black/20 p-6">
                <p className="text-sm font-semibold text-white">What this report does not do</p>
                <ul className="mt-3 space-y-2 text-sm text-white/75">
                  {[
                    "It does not diagnose",
                    "It does not replace school evaluations",
                    "It does not prescribe interventions",
                    "It does not require you to move forward",
                  ].map((x) => (
                    <li key={x} className="flex gap-2">
                      <span className="mt-1.5 inline-block h-2 w-2 rounded-full bg-white/30" />
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm text-white/70">
                  This report exists to create clarity — not obligation.
                </p>
              </div>
            </div>

            {/* PRICING CTA */}
            <div className="mt-8 rounded-3xl border border-teal-400/20 bg-teal-400/10 p-6">
              <div className="flex items-start gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/10">
                  <BadgeDollarSign className="h-5 w-5 text-white" />
                </span>

                <div>
                  <p className="text-sm font-semibold text-white">
                    Start with the Orientation Report — $59
                  </p>
                  <p className="mt-1 text-sm text-white/80">
                    Designed to replace uncertainty with a calm, clear next step.
                  </p>
                </div>
              </div>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <a
                  href={ORIENTATION_CHECKOUT_URL}
                  target={ORIENTATION_CHECKOUT_URL === "#" ? undefined : "_blank"}
                  rel={ORIENTATION_CHECKOUT_URL === "#" ? undefined : "noopener noreferrer"}
                  className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-white/90"
                >
                  Start the Orientation Report
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>

                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
                >
                  View Services
                </Link>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <Pill Icon={Shield}>No diagnosis</Pill>
                <Pill Icon={Scale}>Ethical entry point</Pill>
                <Pill Icon={Layers}>Systems-first</Pill>
                <Pill Icon={Compass}>Next step mapped</Pill>
              </div>

              {ORIENTATION_CHECKOUT_URL === "#" ? (
                <p className="mt-3 text-xs text-white/55">
                  Note: add your Stripe link to <span className="font-semibold text-white">ORIENTATION_CHECKOUT_URL</span>{" "}
                  when ready.
                </p>
              ) : null}
            </div>
          </SectionCard>
        </section>

        {/* WHAT COMES NEXT */}
        <section className="mt-14">
          <SectionCard
            eyebrow="After orientation"
            title="What comes next (only if needed)"
            icon={Layers}
          >
            <p className="text-sm text-white/75 leading-relaxed max-w-3xl">
              For some families, the Orientation Report provides enough clarity to pause, reflect,
              or adjust expectations.
              <br />
              <br />
              For others, it surfaces patterns that warrant a deeper look. When that happens,
              the next step is the Full Initial Assessment — where we translate patterns into structured scoring
              across RMF learning domains and map what to build first.
            </p>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-black/20 p-6">
                <p className="text-sm font-semibold text-white">If you pause after Orientation…</p>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">
                  That’s valid. Clarity reduces pressure. Sometimes the best next step is simply running
                  a calmer week with better understanding.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-black/20 p-6">
                <p className="text-sm font-semibold text-white">If you move forward…</p>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">
                  The Initial Assessment is where we map priorities with structured scoring and design a plan
                  that fits your child’s age and your family’s capacity.
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/assessment"
                className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-white/90"
              >
                Begin the Initial Assessment
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>

              <Link
                href="/access"
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                Access & FAQs
              </Link>
            </div>

            <p className="mt-4 text-sm text-white/55">
              You don’t need to decide anything today.
            </p>
          </SectionCard>
        </section>

        <footer className="mt-14 text-xs text-white/55">
          Rebel Minds Foundations is educational and systems-based. It does not diagnose, treat,
          or replace clinical care.
        </footer>
      </div>
    </main>
  );
}