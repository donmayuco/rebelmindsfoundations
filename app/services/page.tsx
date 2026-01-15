// app/services/page.tsx
import QuickPatternScan from "../components/QuickPatternScan/checklist";
import Link from "next/link";
import {
  Compass,
  Puzzle,
  Wrench,
  RefreshCw,
  Sparkles,
  ArrowRight,
  ClipboardList,
  SlidersHorizontal,
  MapPinned,
  CheckCircle2,
  BookOpen,
  ShieldCheck,
} from "lucide-react";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#070B18] text-white">
      <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-24">
        {/* HEADER */}
        <section className="max-w-3xl">
          <p className="text-xs font-semibold tracking-wide text-white/60">
            Rebel Minds Foundations Services
          </p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
            Support that builds independence — not dependence.
          </h1>

          <p className="mt-5 text-base text-white/75">
            RMF follows a natural sequence:{" "}
            <span className="text-white/90 font-semibold">
              Orientation → Assessment → System → Independence
            </span>
            . Every family starts with clarity and context, then we scale support
            based on need and capacity — with the goal of reducing parent
            involvement over time as skills and systems take over.
          </p>
        </section>

        {/* CORE PRINCIPLE */}
        <section className="mt-14 max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
          <h2 className="text-xl font-semibold">How RMF support works</h2>

          <p className="mt-3 text-sm text-white/75">
            RMF is not tutoring and not ongoing supervision. We help families
            identify where learning breaks down, design the right systems, and
            install them correctly — so support fades as skills grow.
          </p>

          <p className="mt-3 text-sm text-white/75">
            The highest level of success is not more meetings. It’s fewer
            reminders, less conflict, and a child who can manage school demands
            with increasing independence.
          </p>
        </section>

        {/* Quick Pattern Scan */}
        <section className="mt-16">
          <QuickPatternScan />
        </section>

        {/* ✅ START HERE (Gateway) — NOW ORIENTATION */}
        <section className="mt-14">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div className="max-w-3xl">
                <p className="text-xs font-semibold tracking-wide text-white/60">
                  START HERE
                </p>

                <h2 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">
                  Orientation Report
                </h2>

                <p className="mt-3 text-sm text-white/75 leading-relaxed">
                  The Orientation Report helps you quickly organize what you’re
                  seeing — without pressure, labels, or guesswork. It’s designed
                  to reduce overwhelm and point you toward the right next step
                  in the RMF ecosystem.
                </p>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {[
                    "A clear picture of what matters most right now",
                    "A simple explanation of the RMF sequence (what happens next and why)",
                    "A calmer way to move forward without escalating pressure at home",
                    "A recommended next step based on your family’s situation",
                  ].map((line) => (
                    <div
                      key={line}
                      className="flex items-start gap-2 rounded-2xl border border-white/10 bg-black/20 p-4"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-teal-300" />
                      <p className="text-sm text-white/75">{line}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/start-here"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 text-sm font-semibold text-slate-900 hover:bg-white/90"
                  >
                    Read the Orientation Report
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  <Link
                    href="/our-approach"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-sm font-semibold text-white hover:bg-white/10"
                  >
                    Explore Our Approach
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Right card */}
              <div className="w-full md:w-[340px]">
                <div className="rounded-3xl border border-white/10 bg-black/20 p-5">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10">
                      <BookOpen className="h-5 w-5 text-teal-300" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold">What this gives you</p>
                      <p className="mt-1 text-xs text-white/60">
                        Calm clarity, not a sales push.
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 space-y-3">
                    {[
                      "A grounded starting point (so you stop spiraling).",
                      "Language you can use without escalating conflict.",
                      "A clean next step inside the RMF sequence.",
                    ].map((line) => (
                      <div key={line} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-teal-300" />
                        <p className="text-xs text-white/70 leading-relaxed">
                          {line}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs text-white/70 leading-relaxed">
                      <span className="font-semibold text-white">
                        Non-diagnostic.
                      </span>{" "}
                      RMF is educational and systems-based. We focus on function
                      and patterns — then design practical structure that fades
                      parent load over time.
                    </p>
                  </div>

                  <p className="mt-3 text-[11px] text-white/50">
                    If you want a deeper, scored map of needs, the Parent Initial
                    Assessment is step 2.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ✅ SERVICE COMPARISON — UPDATED */}
        <section className="mt-14">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
            <h2 className="text-2xl font-semibold tracking-tight">
              Service Comparison
            </h2>

            <p className="mt-2 max-w-3xl text-sm text-white/75">
              The RMF sequence starts with{" "}
              <span className="text-white/90 font-semibold">Orientation</span>.
              If you need deeper clarity, we move into{" "}
              <span className="text-white/90 font-semibold">Assessment</span>{" "}
              and then into{" "}
              <span className="text-white/90 font-semibold">System</span>{" "}
              support — with the goal of reaching{" "}
              <span className="text-white/90 font-semibold">Independence</span>{" "}
              (less parent involvement over time).
            </p>

            {/* marker */}
            <p className="mt-4 text-xs text-teal-300">✅ Comparison table loaded</p>

            <div className="mt-6 overflow-x-auto">
              <table className="w-full min-w-[950px] border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-3 pr-4 text-left text-xs font-semibold text-white/60">
                      Included
                    </th>
                    <th className="py-3 px-4 text-left text-xs font-semibold text-white/60">
                      Orientation
                    </th>
                    <th className="py-3 px-4 text-left text-xs font-semibold text-white/60">
                      Assessment
                    </th>
                    <th className="py-3 px-4 text-left text-xs font-semibold text-white/60">
                      System Build
                    </th>
                    <th className="py-3 pl-4 text-left text-xs font-semibold text-white/60">
                      Independence Support
                    </th>
                  </tr>
                </thead>

                <tbody className="text-sm text-white/75">
                  {[
                    ["Orientation Report (Start Here)", "✓", "✓", "✓", "✓"],
                    ["Parent Initial Assessment (scored)", "—", "✓", "✓", "✓"],
                    ["Parent Results Review Session", "—", "✓", "✓", "✓"],
                    ["Clear Priority Signals", "✓", "✓", "✓", "✓"],
                    ["Severity by domain (0–3)", "—", "✓", "✓", "✓"],
                    ["Written RMF System Blueprint", "—", "—", "✓", "✓"],
                    ["Parent Role Clarity", "—", "—", "✓", "✓"],
                    ["Student Responsibility Map", "—", "—", "✓", "✓"],
                    ["Guided System Setup", "—", "—", "✓", "—"],
                    ["Student Onboarding Support", "—", "—", "✓", "—"],
                    ["Planned Support Fade", "—", "—", "✓", "✓"],
                    ["Ongoing Adjustments / Tune-Ups", "—", "—", "—", "✓"],
                    ["Transition Support (new demands)", "—", "—", "—", "✓"],
                    [
                      "Primary Outcome",
                      "Clarity",
                      "Accurate targeting",
                      "Working structure",
                      "Stability + independence",
                    ],
                    ["Parent Time Over Time", "⬇ Slightly", "⬇⬇", "⬇⬇⬇", "⬇⬇⬇⬇"],
                  ].map(([label, a, b, c, d]) => (
                    <tr key={label} className="border-b border-white/10">
                      <td className="py-3 pr-4 font-medium text-white/80">
                        {label}
                      </td>
                      <td
                        className={`py-3 px-4 ${
                          a === "✓" ? "text-teal-300 font-semibold" : ""
                        }`}
                      >
                        {a}
                      </td>
                      <td
                        className={`py-3 px-4 ${
                          b === "✓" ? "text-teal-300 font-semibold" : ""
                        }`}
                      >
                        {b}
                      </td>
                      <td
                        className={`py-3 px-4 ${
                          c === "✓" ? "text-teal-300 font-semibold" : ""
                        }`}
                      >
                        {c}
                      </td>
                      <td
                        className={`py-3 pl-4 ${
                          d === "✓" ? "text-teal-300 font-semibold" : ""
                        }`}
                      >
                        {d}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4">
              <p className="text-sm text-white/75">
                <span className="font-semibold text-white">
                  The goal isn’t more meetings — it’s less struggle.
                </span>{" "}
                RMF is designed so parents become less involved over time as
                systems and skills take over.
              </p>
            </div>
          </div>
        </section>

        {/* ✅ HOW RECOMMENDATIONS WORK (Visual strip) — UPDATED */}
        <section className="mt-14">
          <div className="grid gap-6 md:grid-cols-4">
            {[
              {
                title: "1) Orientation",
                icon: BookOpen,
                body:
                  "Start with the Orientation Report to reduce overwhelm and make the next step obvious.",
              },
              {
                title: "2) Assessment",
                icon: ClipboardList,
                body:
                  "If needed, complete the Parent Initial Assessment for scored signals (0–3) across RMF domains.",
              },
              {
                title: "3) System",
                icon: MapPinned,
                body:
                  "We design a practical system blueprint: routines, roles, boundaries, and student ownership.",
              },
              {
                title: "4) Independence",
                icon: ShieldCheck,
                body:
                  "Support fades on purpose — as the student runs the system with less parent involvement.",
              },
            ].map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-7"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10">
                      <Icon className="h-5 w-5 text-teal-300" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{card.title}</p>
                      <p className="mt-2 text-sm text-white/75 leading-relaxed">
                        {card.body}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 rounded-2xl border border-teal-400/20 bg-teal-400/10 p-4">
            <p className="text-sm text-white/75">
              <span className="font-semibold text-white">
                You don’t need to pick the “right package.”
              </span>{" "}
              Start with Orientation — then we guide your next step inside the
              RMF sequence.
            </p>
          </div>
        </section>

        {/* ✅ Framing header before tiers — UPDATED */}
        <section className="mt-20 max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight">
            Support levels inside the RMF sequence
          </h2>
          <p className="mt-3 text-sm text-white/75">
            Orientation comes first. From there, we recommend the next step
            based on what you need most right now, your child’s age, and your
            family’s capacity — with the goal of reducing parent involvement
            over time.
          </p>
        </section>

        {/* SERVICES (Cards) */}
        <section className="mt-10 space-y-10">
          {/* LEVEL 1 */}
          <div className="group rounded-3xl border border-white/10 bg-white/5 p-6 transition duration-200 hover:-translate-y-0.5 hover:border-white/15 hover:bg-white/7 md:p-8">
            <div className="flex items-start justify-between gap-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-white/40">
                Step 1 of 4
              </p>
              <span className="inline-flex items-center rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/55">
                Orientation
              </span>
            </div>

            <div className="mt-3 flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10">
                <Compass className="h-5 w-5 text-teal-300" />
              </span>
              <div>
                <h3 className="text-2xl font-semibold">
                  Orientation &amp; Direction
                </h3>
                <p className="mt-1 text-sm text-white/75">
                  Reduce overwhelm. Get a clean next step.
                </p>
              </div>
            </div>

            <ul className="mt-6 space-y-2 text-sm text-white/75">
              <li>• Orientation Report (Start Here)</li>
              <li>• Clarity on what matters most right now</li>
              <li>• A recommended next step inside RMF</li>
            </ul>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-teal-400/20 bg-teal-400/10 px-3 py-1 text-xs font-semibold text-teal-200">
                <Sparkles className="h-3.5 w-3.5" />
                Primary outcome: Clarity
              </span>

              <p className="text-xs text-white/50">
                Best first step if you feel stuck or overwhelmed.
              </p>
            </div>

            <p className="mt-4 text-sm text-white/70">
              Ideal for families who want to stop guessing, stabilize the
              situation, and move forward without escalating pressure at home.
            </p>
          </div>

          {/* LEVEL 2 */}
          <div className="group rounded-3xl border border-white/10 bg-white/5 p-6 transition duration-200 hover:-translate-y-0.5 hover:border-white/15 hover:bg-white/7 md:p-8">
            <div className="flex items-start justify-between gap-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-white/40">
                Step 2 of 4
              </p>
              <span className="inline-flex items-center rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/55">
                Assessment
              </span>
            </div>

            <div className="mt-3 flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10">
                <SlidersHorizontal className="h-5 w-5 text-teal-300" />
              </span>
              <div>
                <h3 className="text-2xl font-semibold">Assessment &amp; Signals</h3>
                <p className="mt-1 text-sm text-white/75">
                  Behavior-based scoring that makes priorities obvious.
                </p>
              </div>
            </div>

            <ul className="mt-6 space-y-2 text-sm text-white/75">
              <li>• Parent Initial Assessment (non-diagnostic)</li>
              <li>• Severity scoring by domain (0–3)</li>
              <li>• Parent Results Review Session</li>
              <li>• Recommended path based on need (not upsell)</li>
            </ul>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-teal-400/20 bg-teal-400/10 px-3 py-1 text-xs font-semibold text-teal-200">
                <Sparkles className="h-3.5 w-3.5" />
                Primary outcome: Accurate targeting
              </span>

              <p className="text-xs text-white/50">
                Best if you need clearer “what to fix first.”
              </p>
            </div>

            <p className="mt-4 text-sm text-white/70">
              Ideal for families who recognize patterns, but want structured
              clarity — so decisions aren’t based on vibes or trial-and-error.
            </p>
          </div>

          {/* LEVEL 3 */}
          <div className="group rounded-3xl border border-white/10 bg-white/5 p-6 transition duration-200 hover:-translate-y-0.5 hover:border-white/15 hover:bg-white/7 md:p-8">
            <div className="flex items-start justify-between gap-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-white/40">
                Step 3 of 4
              </p>
              <span className="inline-flex items-center rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/55">
                System
              </span>
            </div>

            <div className="mt-3 flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10">
                <Puzzle className="h-5 w-5 text-teal-300" />
              </span>
              <div>
                <h3 className="text-2xl font-semibold">System Blueprint</h3>
                <p className="mt-1 text-sm text-white/75">
                  Turn insight into a practical, working plan.
                </p>
              </div>
            </div>

            <ul className="mt-6 space-y-2 text-sm text-white/75">
              <li>• Written RMF System Blueprint</li>
              <li>• Parent role clarity and boundaries</li>
              <li>• Student responsibility map</li>
              <li>• Designed for your family’s capacity</li>
            </ul>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-teal-400/20 bg-teal-400/10 px-3 py-1 text-xs font-semibold text-teal-200">
                <Sparkles className="h-3.5 w-3.5" />
                Primary outcome: Working structure
              </span>

              <p className="text-xs text-white/50">
                Not designed to “take over” nightly homework.
              </p>
            </div>

            <p className="mt-4 text-sm text-white/70">
              Ideal for families who need structure that actually sticks — so
              you’re not reinventing the process every night.
            </p>
          </div>

          {/* LEVEL 4 */}
          <div className="group rounded-3xl border border-white/10 bg-white/5 p-6 transition duration-200 hover:-translate-y-0.5 hover:border-white/15 hover:bg-white/7 md:p-8">
            <div className="flex items-start justify-between gap-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-white/40">
                Step 4 of 4
              </p>
              <span className="inline-flex items-center rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/55">
                Independence
              </span>
            </div>

            <div className="mt-3 flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10">
                <Wrench className="h-5 w-5 text-teal-300" />
              </span>
              <div>
                <h3 className="text-2xl font-semibold">Guided Implementation</h3>
                <p className="mt-1 text-sm text-white/75">
                  Install the system correctly — then fade support.
                </p>
              </div>
            </div>

            <ul className="mt-6 space-y-2 text-sm text-white/75">
              <li>• Time-limited guided support during setup</li>
              <li>• Parent check-ins while the system stabilizes</li>
              <li>• Student onboarding (age-appropriate)</li>
              <li>• Planned reduction of parent involvement</li>
            </ul>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-teal-400/20 bg-teal-400/10 px-3 py-1 text-xs font-semibold text-teal-200">
                <Sparkles className="h-3.5 w-3.5" />
                Primary outcome: Independence
              </span>

              <p className="text-xs text-white/50">
                Not ideal if you want indefinite weekly sessions.
              </p>
            </div>

            <p className="mt-4 text-sm text-white/70">
              Ideal for families who want support installing systems properly,
              with the goal of needing less help over time — not more.
            </p>
          </div>

          {/* OPTIONAL: Maintenance card (kept, but positioned as “as-needed”) */}
          <div className="group rounded-3xl border border-white/10 bg-white/5 p-6 transition duration-200 hover:-translate-y-0.5 hover:border-white/15 hover:bg-white/7 md:p-8">
            <div className="flex items-start justify-between gap-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-white/40">
                As-needed
              </p>
              <span className="inline-flex items-center rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/55">
                Stability
              </span>
            </div>

            <div className="mt-3 flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10">
                <RefreshCw className="h-5 w-5 text-teal-300" />
              </span>
              <div>
                <h3 className="text-2xl font-semibold">
                  Maintenance &amp; Adjustments
                </h3>
                <p className="mt-1 text-sm text-white/75">
                  Support when things change — not when things are working.
                </p>
              </div>
            </div>

            <ul className="mt-6 space-y-2 text-sm text-white/75">
              <li>• Periodic system check-ins</li>
              <li>• Adjustments for new academic demands</li>
              <li>• Transition support as children grow</li>
              <li>• Preventative tune-ups (when needed)</li>
            </ul>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-teal-400/20 bg-teal-400/10 px-3 py-1 text-xs font-semibold text-teal-200">
                <Sparkles className="h-3.5 w-3.5" />
                Primary outcome: Stability
              </span>

              <p className="text-xs text-white/50">
                Best after systems are already installed.
              </p>
            </div>

            <p className="mt-4 text-sm text-white/70">
              Ideal for families who have working systems and want occasional
              guidance — without ongoing oversight.
            </p>
          </div>
        </section>

        {/* CTA — UPDATED to Orientation gravity */}
        <section className="mt-20 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-2xl font-semibold">Not sure where to begin?</h2>

          <p className="mt-3 max-w-2xl text-sm text-white/75">
            Start with the{" "}
            <span className="text-white/90 font-semibold">Orientation Report</span>
            . If a scored map of needs would help, the Parent Initial Assessment
            is step 2 — and we’ll guide your next step from there.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/start-here"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 text-sm font-semibold text-slate-900 hover:bg-white/90"
            >
              Read the Orientation Report
              <ArrowRight className="h-4 w-4" />
            </Link>

            <a
              href="https://buy.stripe.com/dRm00l3z6dmr3c29Cz4ZG00"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-sm font-semibold text-white hover:bg-white/10"
            >
              Start the Parent Initial Assessment
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </section>

        <footer className="mt-14 text-xs text-white/55">
          Rebel Minds Foundations is educational and systems-based. It does not
          diagnose, treat, or replace clinical care.
        </footer>
      </div>
    </main>
  );
}