// app/our-approach/page.tsx
import Link from "next/link";
import {
  Compass,
  ClipboardList,
  SlidersHorizontal,
  Layers3,
  Wrench,
  GraduationCap,
  ShieldCheck,
  Timer,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

export default function OurApproachPage() {
  const steps = [
    {
      step: "STEP 1",
      title: "Orientation (start with clarity)",
      icon: Compass,
      description:
        "We help you name what’s actually happening—what’s primary, what’s secondary, and what doesn’t need your energy right now.",
      outcomes: [
        "A clearer picture of the friction",
        "Less confusion, less self-blame",
        "A calm next-step direction",
      ],
    },
    {
      step: "STEP 2",
      title: "Assessment (structured signals)",
      icon: ClipboardList,
      description:
        "A non-diagnostic, behavior-based intake that maps patterns across RMF domains—so decisions aren’t driven by guesswork.",
      outcomes: [
        "Priority signals by domain",
        "Severity levels (0–3)",
        "Targets that actually move outcomes",
      ],
    },
    {
      step: "STEP 3",
      title: "System (build what can run without you)",
      icon: Layers3,
      description:
        "We design a simple, realistic system: routines, roles, boundaries, and student ownership—built for your family’s real capacity.",
      outcomes: [
        "Role clarity (parent vs. student)",
        "Less nightly negotiation",
        "A system blueprint you can execute",
      ],
    },
    {
      step: "STEP 4",
      title: "Independence (fade support on purpose)",
      icon: GraduationCap,
      description:
        "Support is temporary by design. As the system carries the load, we reduce parent involvement and strengthen student ownership.",
      outcomes: [
        "Less parent time over time",
        "Less conflict, more consistency",
        "More independence (age-appropriate)",
      ],
    },
  ];

  const outcomes = [
    {
      title: "Less daily friction",
      icon: ShieldCheck,
      text: "Because expectations are clear—and the next step is obvious.",
    },
    {
      title: "Less parent time over time",
      icon: Timer,
      text: "Because reminders get replaced by routines, cues, and student-owned check-ins.",
    },
    {
      title: "More student ownership",
      icon: Sparkles,
      text: "Because responsibility shifts back to the student in an age-appropriate way.",
    },
  ];

  const whatYouGet = [
    {
      title: "Clear priority signals",
      icon: SlidersHorizontal,
      text: "Know what matters most right now—so you stop chasing everything at once.",
    },
    {
      title: "System-first blueprint",
      icon: Wrench,
      text: "A plan that reduces dependence instead of increasing it.",
    },
    {
      title: "A path to independence",
      icon: GraduationCap,
      text: "Support that fades as systems and skills take over.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#070B18] text-white">
      <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-24">
        {/* HERO */}
        <section className="max-w-3xl">
          <p className="text-xs font-semibold tracking-wide text-white/60">
            OUR APPROACH
          </p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
            Orientation first. Systems next. Independence as the goal.
          </h1>

          <p className="mt-5 text-base text-white/75">
            RMF is built for families stuck in inconsistency, reminders, and
            homework friction. We don’t add pressure. We build{" "}
            <span className="text-white/90 font-semibold">
              systems your child can actually run
            </span>{" "}
            —so support fades over time.
          </p>
        </section>

        {/* FLOW STRIP */}
        <section className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div className="max-w-3xl">
              <h2 className="text-xl font-semibold tracking-tight">
                The RMF sequence (on purpose)
              </h2>
              <p className="mt-3 text-sm text-white/75">
                We start with orientation so you feel steady. Then we use
                structured signals to choose the right system—so independence is
                the outcome, not the slogan.
              </p>
            </div>

            <div className="flex items-center justify-center rounded-2xl border border-white/10 bg-black/20 px-8 py-4">
              <div className="flex items-center gap-3 text-sm font-semibold text-white">
                <CheckCircle2 className="h-5 w-5 text-teal-400" />
                <span>Orientation</span>
                <span className="text-white/40">→</span>
                <span>Assessment</span>
                <span className="text-white/40">→</span>
                <span>System</span>
                <span className="text-white/40">→</span>
                <span>Independence</span>
              </div>
            </div>
          </div>
        </section>

        {/* STEP GRID */}
        <section className="mt-14">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">
              How it works (in real life)
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-white/75">
              A structured path from uncertainty to a working system—designed to
              make parent involvement shrink over time.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {steps.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 md:p-7"
                >
                  <div className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-teal-400/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-black/20">
                      <Icon className="h-5 w-5 text-teal-300" />
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs font-semibold tracking-wide text-white/55">
                        {s.step}
                      </p>

                      <h3 className="mt-1 text-lg font-semibold text-white">
                        {s.title}
                      </h3>

                      <p className="mt-2 text-sm text-white/75">
                        {s.description}
                      </p>

                      <ul className="mt-4 space-y-2 text-sm text-white/70">
                        {s.outcomes.map((o) => (
                          <li key={o} className="flex items-start gap-2">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 text-teal-300" />
                            <span>{o}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* WHAT CHANGES */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold tracking-tight">
            What changes over time
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-white/75">
            RMF isn’t built to increase dependency. It’s built to make support
            shrink as systems and skills take over.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {outcomes.map((c) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.title}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-black/20">
                      <Icon className="h-5 w-5 text-teal-300" />
                    </div>
                    <h3 className="text-base font-semibold">{c.title}</h3>
                  </div>
                  <p className="mt-3 text-sm text-white/75">{c.text}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* WIDE BAND */}
        <section className="mt-16 rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
          <h2 className="text-2xl font-semibold tracking-tight">
            What you get (without fluff)
          </h2>
          <p className="mt-3 text-base text-white/70 max-w-4xl leading-relaxed">
            The goal is a plan you can actually run—without increasing your
            nightly workload.
            <span className="block mt-2 text-white/60">
              Parent time investment decreases over time.
            </span>
          </p>

          <div className="mt-7 grid gap-6 md:grid-cols-3">
            {whatYouGet.map((g) => {
              const Icon = g.icon;
              return (
                <div
                  key={g.title}
                  className="rounded-3xl border border-white/10 bg-black/20 p-6"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-black/20">
                      <Icon className="h-5 w-5 text-teal-300" />
                    </div>
                    <h3 className="text-base font-semibold text-white">
                      {g.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm text-white/75">{g.text}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* SOFT CTA (single option, no confusion) */}
        <section className="mt-16 rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-xl font-semibold">Not sure where to start?</h2>
              <p className="mt-2 text-sm text-white/75">
                Start with Orientation to get clarity and a steady next step.
                Assessment comes after—only if needed.
              </p>
            </div>

            {/* ✅ FIXED: keeps ($59) on the same line */}
            <div className="mt-2">
              <Link
                href="/start-here"
                className="inline-flex items-center justify-center rounded-2xl bg-white px-8 py-4 text-sm font-semibold text-slate-900 hover:bg-white/90 whitespace-nowrap"
              >
                Start the First Step: Orientation Report ($59)
              </Link>
            </div>
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