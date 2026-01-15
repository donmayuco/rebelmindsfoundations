// app/faq/page.tsx
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type FAQ = {
  q: string;
  a: React.ReactNode;
  tag?: "Clarity" | "Process" | "Fit" | "Logistics";
};

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 20 20"
      className={`h-5 w-5 text-white/70 transition-transform duration-200 ${
        open ? "rotate-180" : "rotate-0"
      }`}
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function TagPill({ tag }: { tag: NonNullable<FAQ["tag"]> }) {
  const cls =
    tag === "Clarity"
      ? "border-teal-400/20 bg-teal-400/10 text-teal-200"
      : tag === "Process"
      ? "border-white/10 bg-white/5 text-white/75"
      : tag === "Fit"
      ? "border-white/10 bg-black/20 text-white/70"
      : "border-white/10 bg-white/5 text-white/70"; // Logistics

  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-semibold ${cls}`}
    >
      {tag}
    </span>
  );
}

function FAQItem({
  item,
  open,
  onToggle,
}: {
  item: FAQ;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/20">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-start justify-between gap-4 p-5 text-left"
        aria-expanded={open}
      >
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-base font-semibold text-white">{item.q}</h3>
            {item.tag ? <TagPill tag={item.tag} /> : null}
          </div>
          <p className="mt-1 text-sm text-white/60">
            Tap to {open ? "collapse" : "expand"}.
          </p>
        </div>
        <span className="mt-0.5 shrink-0">
          <Chevron open={open} />
        </span>
      </button>

      {open ? (
        <div className="border-t border-white/10 px-5 pb-5 pt-4 text-sm leading-relaxed text-white/75">
          {item.a}
        </div>
      ) : null}
    </div>
  );
}

export default function FAQPage() {
  const faqs: FAQ[] = useMemo(
    () => [
      // CLARITY
      {
        tag: "Clarity",
        q: "Is this a diagnosis?",
        a: (
          <>
            No. Rebel Minds Foundations is educational and systems-based. The{" "}
            <span className="font-semibold text-white">Quick Pattern Scan</span>{" "}
            helps you notice patterns, and the{" "}
            <span className="font-semibold text-white">
              Parent Initial Assessment
            </span>{" "}
            translates those patterns into practical priorities (0–3 by domain)
            and a recommended next step.
          </>
        ),
      },
      {
        tag: "Clarity",
        q: "Does RMF work with neurodivergent students (ADHD, autism, etc.)?",
        a: (
          <>
            Yes. Many neurodivergent students benefit quickly from systems-based
            support because the challenges are often about{" "}
            <span className="font-semibold text-white">
              execution, consistency, and load
            </span>{" "}
            — not intelligence or effort.
            <br />
            <br />
            RMF does not diagnose or treat neurodevelopmental conditions. Instead, we
            focus on observable patterns: how tasks are started, organized, sustained,
            and completed in real environments. That approach is often especially
            helpful for students whose brains don’t respond well to generic advice or
            rigid expectations.
            <br />
            <br />
            Our systems are designed to work for a wide range of learners — including
            neurodivergent students — without requiring a label to be effective.
          </>
        ),
      },
      {
        tag: "Clarity",
        q: "Is this tutoring, therapy, or ongoing supervision?",
        a: (
          <>
            It’s none of those. We’re not replacing school instruction or
            clinical care. We focus on{" "}
            <span className="font-semibold text-white">
              learning systems and sustainability
            </span>{" "}
            — the routines, structures, and supports that make follow-through
            easier and more consistent.
          </>
        ),
      },
      {
        tag: "Clarity",
        q: "What do you mean by “systems” (not just skills)?",
        a: (
          <>
            Skills matter — but many students already have the ability. What’s
            missing is a setup that reliably converts ability into results. A
            system is the{" "}
            <span className="font-semibold text-white">repeatable pathway</span>{" "}
            for planning, starting, tracking, finishing, and recovering from
            setbacks.
          </>
        ),
      },

      // PROCESS
      {
        tag: "Process",
        q: "What happens after we complete the Quick Pattern Scan?",
        a: (
          <>
            You get a signal that updates automatically as patterns emerge. From
            there, you can decide whether you want to move forward with the{" "}
            <span className="font-semibold text-white">
              Parent Initial Assessment
            </span>{" "}
            (the step where we map priorities and design an age-appropriate plan).
          </>
        ),
      },
      {
        tag: "Process",
        q: "What does the Parent Initial Assessment actually produce?",
        a: (
          <>
            A clear output you can use: domain-level priorities (0–3 severity),
            a recommended path forward, and “what to build first” guidance — all
            designed to reduce trial-and-error.
          </>
        ),
      },
      {
        tag: "Process",
        q: "How long does it take to see improvement?",
        a: (
          <>
            It depends on the student and the starting point. Many families feel
            relief quickly when the plan becomes clear. Durable changes usually
            come from consistent implementation over time — small wins first,
            then stronger routines.
          </>
        ),
      },
      {
        tag: "Process",
        q: "Does RMF work with neurodivergent students (ADHD, autism, etc.)?",
        a: (
          <>
            Yes — many of our methods were built with neurodivergent learning
            styles in mind. We don’t label or diagnose; we focus on what helps a
            student function better in the real world: clarity, structure, and
            sustainable routines.
          </>
        ),
      },

      // FIT
      {
        tag: "Fit",
        q: "Who is this a good fit for?",
        a: (
          <>
            Families who feel like school takes more energy than it should —
            even when the student is capable. If there’s friction around focus,
            planning, follow-through, overwhelm, or consistency, RMF is often a
            strong fit.
          </>
        ),
      },
      {
        tag: "Fit",
        q: "Who is this NOT a good fit for?",
        a: (
          <>
            If you’re looking for medical diagnosis, crisis support, or therapy,
            RMF isn’t the right lane. Also, if there’s an urgent safety concern
            (self-harm risk, severe distress), please seek immediate
            professional/clinical support first.
          </>
        ),
      },
      {
        tag: "Fit",
        q: "What if my child doesn’t want help?",
        a: (
          <>
            That’s common. RMF often starts with parent-side clarity and
            environmental adjustments. We can still reduce friction by changing
            setup, expectations, and routines — without turning it into a power
            struggle.
          </>
        ),
      },

      // LOGISTICS
      {
        tag: "Logistics",
        q: "What ages do you work with?",
        a: (
          <>
            RMF is designed to be age-appropriate. The same domains can show up
            differently across elementary, middle, high school, and college-age
            students — so we adjust recommendations accordingly.
          </>
        ),
      },
      {
        tag: "Logistics",
        q: "Do you coordinate with schools or IEP/504 plans?",
        a: (
          <>
            We can provide parent-friendly clarity you can bring into school
            conversations. We don’t replace school processes, but we help you
            understand patterns and advocate for supports that actually match
            your child.
          </>
        ),
      },
      {
        tag: "Logistics",
        q: "Is there a “right” score on the Quick Pattern Scan?",
        a: (
          <>
            No. The scan is about{" "}
            <span className="font-semibold text-white">pattern density</span>{" "}
            — not judgment. More checked items doesn’t mean “worse”; it means
            the student may benefit from more structured, intentional systems.
          </>
        ),
      },
    ],
    []
  );

  const [query, setQuery] = useState("");
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return faqs;
    return faqs.filter((f) => {
      const plainA =
        typeof f.a === "string"
          ? f.a
          : // very lightweight fallback: search only question + tag
            "";
      return (
        f.q.toLowerCase().includes(q) ||
        (f.tag ? f.tag.toLowerCase().includes(q) : false) ||
        plainA.toLowerCase().includes(q)
      );
    });
  }, [faqs, query]);

  return (
    <main className="bg-[#070A12]">
      <section className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        {/* Top header card */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2">
                <span className="inline-flex items-center rounded-full border border-teal-400/20 bg-teal-400/10 px-3 py-1 text-xs font-semibold text-teal-200">
                  FAQ
                </span>
                <span className="text-xs text-white/50">
                  Clear answers for parents
                </span>
              </div>

              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                Frequently Asked Questions
              </h1>

              <p className="mt-3 text-sm leading-relaxed text-white/75 md:text-base">
                If you’re here, you’re probably trying to reduce overwhelm and
                replace trial-and-error with clarity. These answers are written
                to be straightforward, non-diagnostic, and grounded in what RMF
                actually does.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                <span className="inline-flex items-center rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs font-semibold text-white/70">
                  No diagnosis
                </span>
                <span className="inline-flex items-center rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs font-semibold text-white/70">
                  Systems-based support
                </span>
                <span className="inline-flex items-center rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs font-semibold text-white/70">
                  Recognition → clarity → next step
                </span>
              </div>
            </div>

            {/* CTA box */}
            <div className="rounded-2xl border border-white/10 bg-black/20 p-5 md:w-[360px]">
              <p className="text-sm font-semibold text-white">
                Want clarity without pressure?
              </p>
              <p className="mt-2 text-sm text-white/70">
                Start with the Quick Pattern Scan, then decide whether the Parent
                Initial Assessment is the right next step.
              </p>
              <div className="mt-4 flex flex-col gap-2">
                <Link
                  href="/services#quick-pattern-scan"
                  className="inline-flex items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-white/90"
                >
                  Go to Quick Pattern Scan
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/85 hover:bg-white/10"
                >
                  View Services
                </Link>
              </div>
              <p className="mt-3 text-xs text-white/55">
                You’re not committing to anything by exploring.
              </p>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-5 md:p-6">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold text-white">
                Search questions
              </p>
              <p className="mt-1 text-sm text-white/60">
                Type a keyword like “diagnosis”, “school”, “ADHD”, or “plan”.
              </p>
            </div>

            <div className="md:w-[420px]">
              <label className="sr-only" htmlFor="faqSearch">
                Search FAQs
              </label>
              <input
                id="faqSearch"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search FAQs…"
                className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none ring-0 focus:border-white/20"
              />
            </div>
          </div>
        </div>

        {/* FAQ list */}
        <div className="mt-6 grid gap-4">
          {filtered.length === 0 ? (
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-white/70">
              No matches. Try a different keyword.
            </div>
          ) : (
            filtered.map((item, idx) => {
              // When filtered, openIdx refers to filtered list index for a smooth UX.
              const isOpen = openIdx === idx;
              return (
                <FAQItem
                  key={`${item.q}-${idx}`}
                  item={item}
                  open={isOpen}
                  onToggle={() => setOpenIdx(isOpen ? null : idx)}
                />
              );
            })
          )}
        </div>

        {/* Bottom reassurance */}
        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
          <h2 className="text-xl font-semibold text-white">
            Still have a question?
          </h2>
          <p className="mt-2 text-sm text-white/70">
            That’s normal — parents deserve clarity. If something isn’t answered
            here, we can add it to the FAQ so other families don’t have to guess.
          </p>

          <div className="mt-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="text-sm text-white/60">
              Prefer to start with the scan first?
            </div>
            <Link
              href="/services#quick-pattern-scan"
              className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-white/90"
            >
              Start with the Quick Pattern Scan
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}