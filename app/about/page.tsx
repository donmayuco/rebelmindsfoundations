// app/about/page.tsx
import Link from "next/link";
import {
  Shield,
  Sparkles,
  Wand2,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Compass,
  Layers,
  ArrowRight,
  ClipboardList,
  Gauge,
  Brain,
} from "lucide-react";

function Pill({
  Icon,
  children,
}: {
  Icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs text-white/80">
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10">
        <Icon className="h-3.5 w-3.5 text-teal-300" />
      </span>
      {children}
    </span>
  );
}

function AccentCard({
  eyebrow,
  title,
  children,
  icon,
}: {
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
  icon?: React.ComponentType<{ className?: string }>;
}) {
  const Icon = icon;

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
      {/* subtle gradient + noise feel */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-teal-400/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-amber-400/10 blur-3xl" />
      </div>

      {/* left accent bar */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-teal-300/70 via-teal-300/20 to-transparent" />

      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div>
            {eyebrow && (
              <p className="text-xs font-semibold tracking-wide text-white/60">
                {eyebrow}
              </p>
            )}
            <h2 className="mt-2 text-2xl font-semibold tracking-tight">
              {title}
            </h2>
          </div>

          {Icon && (
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10">
              <Icon className="h-5 w-5 text-teal-300" />
            </span>
          )}
        </div>

        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#070B18] text-white">
      {/* Background glow (matches your site) */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-teal-400/10 blur-3xl" />
        <div className="absolute bottom-[-160px] right-[-120px] h-[520px] w-[520px] rounded-full bg-amber-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-24">
        {/* HEADER */}
        <section className="max-w-3xl">
          <p className="text-xs font-semibold tracking-wide text-white/60">
            About Rebel Minds Foundations
          </p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
            We help <span className="text-white">parents</span> stop fighting
            homework — by building systems kids can actually run.
          </h1>

          <p className="mt-5 text-base text-white/75">
            RMF is parent-forward, system-first academic support for families
            stuck in reminders, conflict, and inconsistency. We don’t add more
            pressure. We identify what’s breaking down and install simple,
            age-appropriate systems so support fades as skills grow.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            <Pill Icon={Compass}>Clarity first</Pill>
            <Pill Icon={Layers}>System design</Pill>
            <Pill Icon={Clock}>Support fades over time</Pill>
            <Pill Icon={Shield}>Non-diagnostic</Pill>
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              See services & tiers
            </Link>
          </div>
        </section>

        {/* ✅ NEW: RIGOR / SERIOUSNESS UP FRONT */}
        <section className="mt-14">
          <AccentCard
            eyebrow="Rigor (without labels)"
            title="Non-diagnostic means function over labels."
            icon={Gauge}
          >
            <p className="text-sm text-white/75">
              RMF is built on applied psychology and learning science — but we
              don’t rely on clinical labels to create change. We focus on what’s
              observable, repeatable, and adjustable: the behaviors, routines,
              supports, and environments that shape academic performance.
            </p>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-sm font-semibold text-white">
                  What makes RMF “serious”
                </p>
                <ul className="mt-3 space-y-2 text-sm text-white/75">
                  {[
                    "Behavior-based intake (not vibes) — focused on observable patterns.",
                    "Structured scoring that clarifies severity and priorities (so you know what to fix first).",
                    "Systems design: routines, accountability, environment, and role clarity — not generic advice.",
                    "Iteration: we build, test, adjust — so strategies actually stick in real life.",
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-teal-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-sm font-semibold text-white">
                  What we don’t do
                </p>
                <ul className="mt-3 space-y-2 text-sm text-white/75">
                  {[
                    "We don’t “treat” — we design and install learning systems.",
                    "We don’t label your child — we map what’s working and what’s not.",
                    "We don’t depend on endless sessions — we aim for independence.",
                    "We don’t add pressure — we reduce chaos by creating structure.",
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1.5 inline-block h-2 w-2 rounded-full bg-white/30" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10">
                    <ClipboardList className="h-5 w-5 text-teal-300" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Structured intake
                    </p>
                    <p className="mt-1 text-sm text-white/75">
                      Clear signals instead of guesswork.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10">
                    <Brain className="h-5 w-5 text-teal-300" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Practical psychology
                    </p>
                    <p className="mt-1 text-sm text-white/75">
                      Behavior + systems that change daily outcomes.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10">
                    <Layers className="h-5 w-5 text-teal-300" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Systems that stick
                    </p>
                    <p className="mt-1 text-sm text-white/75">
                      Designed for real families, not perfect weeks.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-teal-400/20 bg-teal-400/10 p-4">
              <p className="text-sm font-semibold text-white">
                The point is outcomes — not labels.
              </p>
              <p className="mt-1 text-sm text-white/75">
                We aim to improve academic performance while reducing parent
                involvement over time — because the system carries the load.
              </p>
            </div>
          </AccentCard>
        </section>

        {/* PARENT PAIN → PROMISE */}
        <section className="mt-14 grid gap-6 md:grid-cols-2">
          <AccentCard
            eyebrow="What it feels like"
            title="Before RMF"
            icon={AlertTriangle}
          >
            <p className="text-sm text-white/75">
              When the system is missing, parents become the external brain —
              and nights turn into conflict.
            </p>

            <div className="mt-5 space-y-3 text-sm text-white/75">
              {[
                "“If I don’t remind them, nothing happens.”",
                "“Homework takes hours and ends in frustration.”",
                "“They shut down the moment it gets hard.”",
                "“I’m doing too much… but I don’t know what to change.”",
              ].map((line) => (
                <div
                  key={line}
                  className="rounded-2xl border border-white/10 bg-black/20 p-4"
                >
                  {line}
                </div>
              ))}
            </div>
          </AccentCard>

          <AccentCard
            eyebrow="What changes"
            title="After RMF"
            icon={Sparkles}
          >
            <p className="text-sm text-white/75">
              You stop guessing. Your child gets clearer expectations and
              supports that fit their age. And your role becomes lighter —
              because the system carries the load.
            </p>

            <div className="mt-5 grid gap-3">
              {[
                { t: "Clear priorities", d: "You know what to fix first." },
                { t: "Age-appropriate structure", d: "Support fits development." },
                { t: "Parent load decreases", d: "Systems replace reminders." },
              ].map((x) => (
                <div
                  key={x.t}
                  className="rounded-2xl border border-white/10 bg-black/20 p-4"
                >
                  <p className="text-sm font-semibold text-white">{x.t}</p>
                  <p className="mt-1 text-sm text-white/75">{x.d}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-teal-400/20 bg-teal-400/10 p-4">
              <p className="text-sm font-semibold text-white">
                Our promise (without hype)
              </p>
              <p className="mt-1 text-sm text-white/75">
                We build learning systems your child can run — so parent support
                decreases as independence grows and academic skills and outcomes
                improve.
              </p>
            </div>
          </AccentCard>
        </section>

        {/* WHAT RMF IS / ISN’T */}
        <section className="mt-14">
          <AccentCard
            eyebrow="Clarity"
            title="What RMF is (and isn’t)"
            icon={Shield}
          >
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-sm font-semibold text-white">RMF is…</p>
                <ul className="mt-3 space-y-2 text-sm text-white/75">
                  {[
                    "Systems-based academic support for families",
                    "Non-diagnostic, behavior-based assessment + scoring",
                    "Clear next steps + age-appropriate tools",
                    "Designed to reduce parent load over time",
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-teal-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-sm font-semibold text-white">RMF is not…</p>
                <ul className="mt-3 space-y-2 text-sm text-white/75">
                  {[
                    "Tutoring",
                    "Therapy or counseling",
                    "A diagnosis or label",
                    "Ongoing supervision forever",
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1.5 inline-block h-2 w-2 rounded-full bg-white/30" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AccentCard>
        </section>

        {/* HOW WE WORK */}
        <section className="mt-14">
          <AccentCard eyebrow="Process" title="How we work" icon={Wand2}>
            <p className="text-sm text-white/75">
              A simple sequence: assess → clarify → build → fade support.
            </p>

            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {[
                {
                  step: "1",
                  title: "Initial Assessment",
                  body:
                    "A structured, non-diagnostic intake that scores load across learning domains and surfaces clear signals.",
                },
                {
                  step: "2",
                  title: "Parent Results Review",
                  body:
                    "You complete the assessment first. Then we review together, confirm priorities, and answer key questions for next steps.",
                },
                {
                  step: "3",
                  title: "System Build + Fade Support",
                  body:
                    "We design and install systems that fit your child’s age—then gradually reduce parent involvement as routines take over.",
                },
              ].map((s) => (
                <div
                  key={s.title}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6"
                >
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="absolute -top-16 -left-16 h-40 w-40 rounded-full bg-teal-400/10 blur-2xl" />
                  </div>

                  <div className="relative">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-slate-900 text-sm font-bold">
                        {s.step}
                      </div>
                      <p className="text-sm font-semibold">{s.title}</p>
                    </div>
                    <p className="mt-3 text-sm text-white/75">{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </AccentCard>
        </section>

        {/* WHO IT'S FOR */}
        <section className="mt-14">
          <AccentCard eyebrow="Fit" title="Who RMF is for" icon={Compass}>
            <p className="text-sm text-white/75">
              RMF is a good fit when effort isn’t the issue — consistency is.
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Capable but inconsistent performance",
                "Homework battles and burnout",
                "Avoidance, shutdown, or overwhelm",
                "Parent is acting as the “external brain”",
                "Organization/time struggles",
                "Too many reminders to get started",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-white/75"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-5">
              <p className="text-sm font-semibold text-white">
                The outcome we aim for
              </p>
              <p className="mt-2 text-sm text-white/75">
                Less conflict. Fewer reminders. A child who can manage school
                demands with increasing independence.
              </p>

              <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
                >
                  Compare support levels
                </Link>

                <Link
                  href="/assessment"
                  className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-white/90"
                >
                  Begin the Parent Initial Assessment
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </AccentCard>
        </section>

        {/* CTA */}
        <section className="mt-16">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -top-28 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-teal-400/10 blur-3xl" />
            </div>

            <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold tracking-wide text-white/60">
                  Stop guessing. Start with clarity.
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Complete the Initial Assessment first.
                </h2>
                <p className="mt-2 text-sm text-white/75">
                  Then we’ll review results together and guide next steps in a
                  follow-up parent session.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/assessment"
                  className="inline-flex items-center justify-center rounded-2xl bg-white px-8 py-4 text-base font-semibold text-slate-900 hover:bg-white/90"
                >
                  Begin the Parent Initial Assessment
                </Link>

                <Link
                  href="/how-it-works"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-8 py-4 text-base font-semibold text-white hover:bg-white/10"
                >
                  See how it works
                </Link>
              </div>
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