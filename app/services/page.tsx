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
            Every family starts with clarity. From there, support is tailored
            based on your child’s needs, your family’s capacity, and how much
            structure is required — with the goal of reducing parent involvement
            over time as academic skills and outcomes improve.
          </p>
        </section>

        {/* CORE PRINCIPLE */}
        <section className="mt-14 max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
          <h2 className="text-xl font-semibold">How RMF support works</h2>

          <p className="mt-3 text-sm text-white/75">
            RMF is not tutoring and not ongoing supervision. We identify where
            learning breaks down, design the right systems, and help families
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

        {/* ✅ START HERE (Gateway) */}
        <section className="mt-14">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div className="max-w-3xl">

                <h2 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">
                  Parent Initial Assessment
                </h2>

                <p className="mt-3 text-sm text-white/75 leading-relaxed">
                  A non-diagnostic, behavior-based intake that replaces
                  trial-and-error with a clear, age-appropriate plan forward. We
                  start by understanding how your child actually works — so
                  every recommendation is intentional.
                </p>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {[
                    "Clear priority signals (what matters most right now)",
                    "Severity scoring across RMF learning domains (0–3)",
                    "A recommended path based on need — not upsell",
                    "A parent results review conversation after completion",
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
              </div>

              {/* ✅ ONLY CHANGE: Right card (removed "Explore..." CTA) */}
              <div className="w-full md:w-[340px]">
                <div className="rounded-3xl border border-white/10 bg-black/20 p-5">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10">
                      <ClipboardList className="h-5 w-5 text-teal-300" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold">
                        What happens after you submit
                      </p>
                      <p className="mt-1 text-xs text-white/60">
                        No pressure—just clarity and a recommended next step.
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 space-y-3">
                    {[
                      "We translate your responses into clear signals (0–3 by domain).",
                      "You receive priority targets and a recommended path forward.",
                      "Then we review results with you and guide next steps.",
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
                        Not a diagnosis.
                      </span>{" "}
                      RMF is educational and systems-based—built to reduce
                      parent involvement over time as academic skills and outcomes improve.
                    </p>
                  </div>

                  <p className="mt-3 text-[11px] text-white/50">
                    You can start the assessment anytime from the header button.
                  </p>
                </div>
              </div>
              {/* ✅ END change */}
            </div>
          </div>
        </section>

        {/* SERVICE COMPARISON */}
        <section className="mt-14">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
            <h2 className="text-2xl font-semibold tracking-tight">
              Service Comparison
            </h2>

            <p className="mt-2 max-w-2xl text-sm text-white/75">
              All families begin with the Initial Assessment. From there, support
              levels determine how much structure we design and how much we help
              you install — with the goal of reducing parent load over time.
            </p>

            {/* ✅ marker so you can confirm it renders */}
            <p className="mt-4 text-xs text-teal-300">✅ Comparison table loaded</p>

            <div className="mt-6 overflow-x-auto">
              <table className="w-full min-w-[950px] border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-3 pr-4 text-left text-xs font-semibold text-white/60">
                      Included
                    </th>
                    <th className="py-3 px-4 text-left text-xs font-semibold text-white/60">
                      Clarity &amp; Direction
                    </th>
                    <th className="py-3 px-4 text-left text-xs font-semibold text-white/60">
                      System Blueprint
                    </th>
                    <th className="py-3 px-4 text-left text-xs font-semibold text-white/60">
                      Guided Implementation
                    </th>
                    <th className="py-3 pl-4 text-left text-xs font-semibold text-white/60">
                      Maintenance &amp; Adjustments
                    </th>
                  </tr>
                </thead>

                <tbody className="text-sm text-white/75">
                  {[
                    ["Initial Assessment", "✓", "✓", "✓", "✓"],
                    ["Parent Results Review Session", "✓", "✓", "✓", "✓"],
                    ["Clear Priority Signals", "✓", "✓", "✓", "✓"],
                    ["Written RMF System Blueprint", "—", "✓", "✓", "✓"],
                    ["Parent Role Clarity", "—", "✓", "✓", "✓"],
                    ["Student Responsibility Map", "—", "✓", "✓", "✓"],
                    ["Guided System Setup", "—", "—", "✓", "—"],
                    ["Student Onboarding Support", "—", "—", "✓", "—"],
                    ["Parent Check-Ins (Time-Limited)", "—", "—", "✓", "—"],
                    ["Planned Support Fade", "—", "—", "✓", "—"],
                    ["Ongoing Adjustments", "—", "—", "—", "✓"],
                    ["Transition Support (new demands)", "—", "—", "—", "✓"],
                    ["Preventative Tune-Ups", "—", "—", "—", "✓"],
                    [
                      "Primary Outcome",
                      "Clarity",
                      "Structure",
                      "Independence",
                      "Stability",
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

        {/* ✅ HOW RECOMMENDATIONS WORK (Visual strip) */}
        <section className="mt-14">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "1) Assess",
                icon: ClipboardList,
                body:
                  "You complete the Parent Initial Assessment so we can see where learning breaks down—without labels.",
              },
              {
                title: "2) Signals",
                icon: SlidersHorizontal,
                body:
                  "We translate responses into clear signals (0–3 by domain) so priorities are obvious and actionable.",
              },
              {
                title: "3) Recommend",
                icon: MapPinned,
                body:
                  "We recommend the right level of support based on need and family capacity—so you’re not guessing.",
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
              The assessment creates clarity, then we guide next steps.
            </p>
          </div>
        </section>

        {/* ✅ Framing header before tiers */}
        <section className="mt-20 max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight">
            Possible next steps after the Initial Assessment
          </h2>
          <p className="mt-3 text-sm text-white/75">
            These support levels are typically recommended based on your
            assessment results, your child’s age, and your family’s capacity —
            with the goal of reducing parent involvement over time.
          </p>
        </section>

        {/* SERVICES */}
        <section className="mt-10 space-y-10">
          {/* TIER 1 */}
          <div className="group rounded-3xl border border-white/10 bg-white/5 p-6 transition duration-200 hover:-translate-y-0.5 hover:border-white/15 hover:bg-white/7 md:p-8">
            <div className="flex items-start justify-between gap-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-white/40">
                For families who feel stuck
              </p>
              <span className="inline-flex items-center rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/55">
                Step 1 of 4
              </span>
            </div>

            <div className="mt-3 flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10">
                <Compass className="h-5 w-5 text-teal-300" />
              </span>
              <div>
                <h3 className="text-2xl font-semibold">Clarity &amp; Direction</h3>
                <p className="mt-1 text-sm text-white/75">
                  Understand what’s happening — and what matters most right now.
                </p>
              </div>
            </div>

            <ul className="mt-6 space-y-2 text-sm text-white/75">
              <li>• Initial Parent Assessment</li>
              <li>• Results review and priority signals</li>
              <li>• Clear recommendations for next steps</li>
            </ul>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-teal-400/20 bg-teal-400/10 px-3 py-1 text-xs font-semibold text-teal-200">
                <Sparkles className="h-3.5 w-3.5" />
                Primary outcome: Clarity
              </span>

              <p className="text-xs text-white/50">
                Not ideal for daily tutoring or ongoing supervision.
              </p>
            </div>

            <p className="mt-4 text-sm text-white/70">
              Ideal for families who want to stop guessing and gain immediate
              clarity without committing to ongoing support.
            </p>
          </div>

          {/* TIER 2 */}
          <div className="group rounded-3xl border border-white/10 bg-white/5 p-6 transition duration-200 hover:-translate-y-0.5 hover:border-white/15 hover:bg-white/7 md:p-8">
            <div className="flex items-start justify-between gap-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-white/40">
                For families who need structure
              </p>
              <span className="inline-flex items-center rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/55">
                Step 2 of 4
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
              <li>• Everything in Clarity &amp; Direction</li>
              <li>• Written RMF System Blueprint</li>
              <li>• Parent role clarity and boundaries</li>
              <li>• Student responsibility map</li>
            </ul>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-teal-400/20 bg-teal-400/10 px-3 py-1 text-xs font-semibold text-teal-200">
                <Sparkles className="h-3.5 w-3.5" />
                Primary outcome: Structure
              </span>

              <p className="text-xs text-white/50">
                Not ideal if you want us to “take over” nightly homework.
              </p>
            </div>

            <p className="mt-4 text-sm text-white/70">
              Ideal for families who want a clear structure they can follow
              consistently — without reinventing the process every night.
            </p>
          </div>

          {/* TIER 3 */}
          <div className="group rounded-3xl border border-white/10 bg-white/5 p-6 transition duration-200 hover:-translate-y-0.5 hover:border-white/15 hover:bg-white/7 md:p-8">
            <div className="flex items-start justify-between gap-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-white/40">
                For families ready to step back
              </p>
              <span className="inline-flex items-center rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/55">
                Step 3 of 4
              </span>
            </div>

            <div className="mt-3 flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10">
                <Wrench className="h-5 w-5 text-teal-300" />
              </span>
              <div>
                <h3 className="text-2xl font-semibold">Guided Implementation</h3>
                <p className="mt-1 text-sm text-white/75">
                  Build the system correctly — then step back.
                </p>
              </div>
            </div>

            <ul className="mt-6 space-y-2 text-sm text-white/75">
              <li>• Time-limited guided support</li>
              <li>• Parent check-ins during setup</li>
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

          {/* TIER 4 */}
          <div className="group rounded-3xl border border-white/10 bg-white/5 p-6 transition duration-200 hover:-translate-y-0.5 hover:border-white/15 hover:bg-white/7 md:p-8">
            <div className="flex items-start justify-between gap-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-white/40">
                For families managing new demands
              </p>
              <span className="inline-flex items-center rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/55">
                Step 4 of 4
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
            </ul>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-teal-400/20 bg-teal-400/10 px-3 py-1 text-xs font-semibold text-teal-200">
                <Sparkles className="h-3.5 w-3.5" />
                Primary outcome: Stability
              </span>

              <p className="text-xs text-white/50">
                Not ideal if systems haven’t been installed yet.
              </p>
            </div>

            <p className="mt-4 text-sm text-white/70">
              Ideal for families who have systems in place and want occasional
              guidance without ongoing oversight.
            </p>
          </div>
        </section>

        {/* CTA (kept as-is) */}
        <section className="mt-20 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-2xl font-semibold">
            Not sure which level of support is right?
          </h2>

          <p className="mt-3 max-w-2xl text-sm text-white/75">
            Every family begins with the Initial Assessment. From there, we
            recommend support based on need — not upsell.
          </p>

          <div className="mt-6">
          <a
  href="https://buy.stripe.com/dRm00l3z6dmr3c29Cz4ZG00"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 text-sm font-semibold text-slate-900 hover:bg-white/90"
            >
               Start The Initial Assessment!
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