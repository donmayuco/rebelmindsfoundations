// app/how-it-works/page.tsx
import Link from "next/link";
import {
  ClipboardList,
  SlidersHorizontal,
  Map,
  Wrench,
  ShieldCheck,
  Timer,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Users,
  GraduationCap,
  Layers3,
} from "lucide-react";

export default function HowItWorksPage() {
  const steps = [
    {
      title: "Complete the Parent Initial Assessment",
      icon: ClipboardList,
      description:
        "A structured, non-diagnostic intake that captures patterns—where learning breaks down, what triggers friction, and what’s already working.",
      outcomes: ["Clarity on breakdown points", "Priority signals", "Next-step recommendation"],
    },
    {
      title: "Structured scoring → clear signals",
      icon: SlidersHorizontal,
      description:
        "We translate your responses into clear, behavior-based signals (0–3) across RMF domains—so decisions aren’t based on guesswork.",
      outcomes: ["Severity by domain", "High-leverage targets", "Avoid over-focusing on symptoms"],
    },
    {
      title: "Build the RMF System Blueprint",
      icon: Map,
      description:
        "A simple, realistic plan designed for your family’s capacity: roles, routines, boundaries, and what the student owns vs. what the parent supports.",
      outcomes: ["Role clarity", "Student responsibility map", "Reduced nightly negotiation"],
    },
    {
      title: "Install + fade support over time",
      icon: Wrench,
      description:
        "We help you install the system correctly, then intentionally reduce support as the system starts carrying the load.",
      outcomes: ["Less parent time", "Less conflict", "More independence"],
    },
  ];

  const outcomes = [
    {
      title: "Less daily friction",
      icon: ShieldCheck,
      text:
        "Because expectations are clear—and the system makes the next step obvious.",
    },
    {
      title: "Less parent time over time",
      icon: Timer,
      text:
        "Because reminders get replaced by routines, cues, and student-owned check-ins.",
    },
    {
      title: "More student ownership",
      icon: GraduationCap,
      text:
        "Because responsibility shifts back to the student in an age-appropriate way.",
    },
  ];

  const whatYouGet = [
    {
      title: "Clear priority signals",
      icon: Sparkles,
      text: "What matters most right now—so you stop chasing everything at once.",
    },
    {
      title: "System-first recommendations",
      icon: Layers3,
      text: "Design choices that reduce dependence instead of increasing it.",
    },
    {
      title: "Parent-guided implementation",
      icon: Users,
      text: "Support that helps you install the system—and then step back.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#070B18] text-white">
      <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-24">
        {/* HERO */}
        <section className="max-w-3xl">
          <p className="text-xs font-semibold tracking-wide text-white/60">
            HOW RMF WORKS
          </p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
            Systems first. Support second.
          </h1>

          <p className="mt-5 text-base text-white/75">
            Most families try to fix learning problems with more reminders, more
            pressure, or more help. RMF starts earlier—by identifying{" "}
            <span className="text-white/90 font-semibold">
              how learning is actually breaking down
            </span>{" "}
            and installing systems that reduce friction.
          </p>

          <p className="mt-4 text-base text-white/75">
            <span className="text-white font-semibold">
              When systems work, support becomes unnecessary.
            </span>
          </p>
        </section>

        {/* “CLICK” CALLOUT CARD */}
        <section className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div className="max-w-3xl">
              <h2 className="text-xl font-semibold tracking-tight">
                The “click” moment parents feel
              </h2>
              <p className="mt-3 text-sm text-white/75">
                It’s not “my child is lazy” or “we need more tutoring.” It’s:
                “Oh—this is the exact point where the system breaks.” Once you
                can see the breakdown clearly, the next steps become obvious.
              </p>
            </div>

            <div className="flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-8 py-4">
  <div className="flex items-center gap-3 text-sm font-semibold text-white">
    
    <CheckCircle2 className="h-5 w-5 text-teal-400" />

    <span>Clarity</span>

    <span className="text-white/40">→</span>

    <span>System</span>

    <span className="text-white/40">→</span>

    <span>Independence</span>

  </div>
</div>
          </div>
        </section>

        {/* STEP TIMELINE */}
        <section className="mt-14">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">
                The RMF process
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-white/75">
                A structured path from uncertainty to a working system—designed
                to reduce parent involvement over time.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {steps.map((s, idx) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 md:p-7"
                >
                  {/* subtle glow */}
                  <div className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-teal-400/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-black/20">
                      <Icon className="h-5 w-5 text-teal-300" />
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs font-semibold tracking-wide text-white/55">
                        STEP {idx + 1}
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

        {/* WHAT YOU GET */}
        <section className="mt-16 rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">
                What you get (without fluff)
              </h2>
              <p className="mt-3 text-base text-white/70 max-w-4xl leading-relaxed">
  The goal is a plan you can actually run—without increasing your nightly workload.
  <span className="block mt-2 text-white/60">
    Parent time investment decreases over time.
  </span>
</p>
            </div>
          </div>

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

        {/* Soft CTA (single, not pushy) */}
        <section className="mt-16 rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-xl font-semibold">
                Want clarity on what’s happening?
              </h2>
              <p className="mt-2 text-sm text-white/75">
                The Initial Assessment is the fastest way to turn uncertainty
                into a clear plan—then we review results together and guide next
                steps.
              </p>
            </div>

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
