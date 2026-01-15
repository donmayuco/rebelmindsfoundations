"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type Category = {
  id: string;
  title: string;
  items: string[];
};

const STORAGE_KEY = "rmf_quick_pattern_scan_v2";

const CATEGORIES: Category[] = [
  {
    id: "focus",
    title: "Attention & Engagement",
    items: [
      "My child starts tasks but drifts off quickly without noticing",
      "My child needs frequent reminders to stay engaged",
      "My child can focus mostly under pressure, urgency, or stress",
      "My child loses track of what they were doing mid-task",
      "My child shuts down when sustained attention is required for too long",
    ],
  },
  {
    id: "planning",
    title: "Planning & Time Awareness",
    items: [
      "Homework takes much longer than it should",
      "My child struggles to decide what to do first",
      "Deadlines are remembered only when they’re very close",
      "Even simple tasks feel overwhelming to start",
      "My child avoids starting when steps aren’t clearly laid out",
    ],
  },
  {
    id: "followthrough",
    title: "Organization & Follow-Through",
    items: [
      "Systems work briefly, then fall apart",
      "My child loses materials, instructions, or assignments",
      "Work is started but not completed consistently",
      "Effort doesn’t reliably translate into finished work",
      "I feel like I’m the one holding everything together",
    ],
  },
  {
    id: "learning",
    title: "Learning & Academic Performance",
    items: [
      "My child understands concepts but struggles to show it on paper",
      "Studying takes time, but results don’t reflect the effort",
      "Mistakes happen that seem avoidable",
      "Tests don’t reflect what my child knows",
      "Skills don’t always carry over from one assignment to the next",
    ],
  },
  {
    id: "emotion",
    title: "Emotional Regulation & Motivation",
    items: [
      "Homework becomes emotional quickly",
      "Small setbacks lead to shutdown or avoidance",
      "Motivation drops fast when things feel hard",
      "My child avoids tasks that feel discouraging",
      "Stress interferes with learning more than ability does",
    ],
  },
  {
    id: "systems",
    title: "Systems Fit & Sustainability",
    items: [
      "We’ve tried planners, charts, or systems that didn’t stick",
      "I provide reminders for systems meant to reduce reminders",
      "Advice sounds good but doesn’t translate into daily use",
      "Tools feel overwhelming or get abandoned",
      "Support feels reactive rather than sustainable",
    ],
  },
];

function makeId(categoryId: string, index: number) {
  return `${categoryId}:${index}`;
}

function CheckIcon({ checked }: { checked: boolean }) {
  return (
    <span
      className={`mt-1 grid h-5 w-5 place-items-center rounded border border-white/15 ${
        checked ? "bg-white text-slate-900" : "bg-white/10 text-transparent"
      }`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="currentColor">
        <path
          fillRule="evenodd"
          d="M16.704 5.29a1 1 0 0 1 .006 1.414l-7.25 7.25a1 1 0 0 1-1.414 0l-3.25-3.25A1 1 0 1 1 6.2 9.29l2.543 2.543 6.543-6.543a1 1 0 0 1 1.418 0Z"
          clipRule="evenodd"
        />
      </svg>
    </span>
  );
}

function SignalPill({ signal }: { signal: string }) {
  const cls =
    signal === "Strong"
      ? "bg-white/15 text-white border border-white/15"
      : signal === "Moderate"
      ? "bg-white/12 text-white border border-white/10"
      : signal === "Light"
      ? "bg-white/10 text-white/90 border border-white/10"
      : signal === "Early signal"
      ? "bg-white/8 text-white/85 border border-white/10"
      : "bg-white/8 text-white/80 border border-white/10";

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold ${cls}`}
    >
      {signal}
    </span>
  );
}

function MetaPill({
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

export default function QuickPatternScan() {
  const allItemIds = useMemo(() => {
    const ids: string[] = [];
    for (const c of CATEGORIES) c.items.forEach((_, i) => ids.push(makeId(c.id, i)));
    return ids;
  }, []);

  const [checked, setChecked] = useState<Record<string, boolean>>({});

  // Load
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw) as Record<string, boolean>;
      if (parsed && typeof parsed === "object") setChecked(parsed);
    } catch {}
  }, []);

  // Save
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(checked));
    } catch {}
  }, [checked]);

  const checkedCount = useMemo(() => {
    let n = 0;
    for (const id of allItemIds) if (checked[id]) n++;
    return n;
  }, [allItemIds, checked]);

  const totalCount = allItemIds.length;

  // 0 = Not started
  // 1–3 = Early signal
  // 4–7 = Light
  // 8–12 = Moderate
  // 13+ = Strong
  const signal =
    checkedCount === 0
      ? "Not started"
      : checkedCount <= 3
      ? "Early signal"
      : checkedCount <= 7
      ? "Light"
      : checkedCount <= 12
      ? "Moderate"
      : "Strong";

  // Flow: Orientation → Assessment → System → Independence
  const signalMessage =
    checkedCount === 0
      ? "Start anywhere — this updates automatically as patterns emerge."
      : checkedCount <= 3
      ? "Early signal — small friction points are common. Use the Orientation Report to organize what you’re seeing and choose a calm next step."
      : checkedCount <= 7
      ? "Light signal — a few targeted systems may reduce friction. The Orientation Report helps you focus on the highest-leverage change first."
      : checkedCount <= 12
      ? "Moderate signal — patterns may be crossing domains. Start with the Orientation Report to clarify priorities. If you want scored signals (0–3 by domain), the Parent Initial Assessment is step 2."
      : "Strong signal — high pattern density. Start with the Orientation Report to stabilize and choose the right path. If you want a scored map of needs and what to build first, the Parent Initial Assessment is step 2.";

  const toggle = (id: string) =>
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));

  const reset = () => setChecked({});

  return (
    <section id="quick-pattern-scan" className="mt-10">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
        {/* Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-white/80">
                Quick scan
              </span>
              <span className="text-xs text-white/50">
                Optional: a 60-second pattern mirror
              </span>
            </div>

            <h2 className="mt-4 text-2xl font-semibold text-white">
              Quick Pattern Scan (for Parents)
            </h2>

            <p className="mt-2 text-sm text-white/80">
              This is not a diagnosis and not the Parent Initial Assessment — it’s a fast
              mirror to help you notice patterns. Your true starting point is the{" "}
              <span className="text-white/90 font-semibold">Orientation Report</span>.
            </p>

            <p className="mt-1 text-sm italic text-white/70">
              Think: recognition → orientation → assessment → system → independence.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/80">
              <span className="font-semibold text-white">{checkedCount}</span> /{" "}
              {totalCount} checked
            </div>

            <button
              type="button"
              onClick={reset}
              className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80 hover:bg-white/10"
            >
              Reset
            </button>
          </div>
        </div>

        {/* Signal card */}
        <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="grid gap-4 lg:grid-cols-[1fr_340px] lg:items-start">
            {/* Left */}
            <div className="space-y-2">
              <p className="text-sm text-white/70">
                Check anything that feels familiar — this scan is a mirror, not a plan.
              </p>

              {/* Meta pills */}
              <div className="mt-4 flex flex-wrap gap-2">
                <MetaPill>Pattern mirror</MetaPill>
                <MetaPill tone="teal">No diagnosis</MetaPill>
                <MetaPill>
                  {checkedCount} / {totalCount} checked
                </MetaPill>

                {signal === "Not started" && (
                  <>
                    <MetaPill>Start anywhere</MetaPill>
                    <MetaPill>Look for repeats</MetaPill>
                  </>
                )}

                {signal === "Early signal" && (
                  <>
                    <MetaPill>Common friction</MetaPill>
                    <MetaPill>Small wins first</MetaPill>
                    <MetaPill>Orientation next</MetaPill>
                  </>
                )}

                {signal === "Light" && (
                  <>
                    <MetaPill>Targeted systems</MetaPill>
                    <MetaPill>Reduce friction</MetaPill>
                    <MetaPill>Orientation next</MetaPill>
                  </>
                )}

                {signal === "Moderate" && (
                  <>
                    <MetaPill>Cross-domain pattern</MetaPill>
                    <MetaPill>Prioritize first</MetaPill>
                    <MetaPill>Orientation next</MetaPill>
                  </>
                )}

                {signal === "Strong" && (
                  <>
                    <MetaPill>High pattern density</MetaPill>
                    <MetaPill>Stabilize first</MetaPill>
                    <MetaPill>Orientation next</MetaPill>
                  </>
                )}
              </div>

              <p className="mt-3 text-xs text-white/55">
                Tip: You don’t need to check everything for support to be useful.
              </p>

              {/* Signal indicator (bottom) */}
              <div className="mt-4 border-t border-white/10 pt-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-sm text-white/60">Your scan signal:</span>
                  <SignalPill signal={signal} />
                </div>

                <p className="mt-2 text-sm text-white/65">{signalMessage}</p>
              </div>
            </div>

            {/* Right */}
            <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
              <p className="text-sm font-semibold text-white">
                What this scan does (and doesn’t do)
              </p>

              <ul className="mt-3 space-y-2 text-sm text-white/70">
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-300/80" />
                  Quick recognition — not an evaluation.
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-300/80" />
                  Helps you notice repeats so you’re not guessing.
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-300/80" />
                  Orientation comes next: it turns recognition into calm clarity and a recommended path.
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-300/80" />
                  If needed, the Parent Initial Assessment is step 2 — scored signals (0–3 by domain) to pinpoint what to build first.
                </li>
              </ul>

              <div className="mt-3 rounded-xl border border-white/10 bg-white/5 p-3">
                <p className="text-xs text-white/65">
                  Best use: do this scan fast, then read the Orientation Report with these patterns in mind.
                </p>
              </div>

              <div className="mt-4 flex flex-col gap-2">
                <Link
                  href="/start-here"
                  className="inline-flex items-center justify-center rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-white/90"
                >
                  Read the Orientation Report
                </Link>

                <a
                  href="https://buy.stripe.com/dRm00l3z6dmr3c29Cz4ZG00"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-semibold text-white hover:bg-white/10"
                >
                  Start the Parent Initial Assessment (Step 2)
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {CATEGORIES.map((category) => (
            <div
              key={category.id}
              className="rounded-2xl border border-white/10 bg-black/20 p-5"
            >
              <h3 className="text-base font-semibold text-white">
                {category.title}
              </h3>

              <ul className="mt-4 space-y-3">
                {category.items.map((text, i) => {
                  const id = makeId(category.id, i);
                  const isOn = !!checked[id];

                  return (
                    <li key={id}>
                      <button
                        type="button"
                        onClick={() => toggle(id)}
                        className="group flex w-full items-start gap-3 text-left"
                      >
                        <CheckIcon checked={isOn} />
                        <span className={`text-sm ${isOn ? "text-white" : "text-white/80"}`}>
                          {text}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-7 flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold text-white">
              Ready to turn recognition into clarity?
            </p>
            <p className="mt-1 text-sm text-white/70">
              Next step: read the Orientation Report to get a recommended path. If you want scored signals (0–3 by domain), the Parent Initial Assessment is step 2.
            </p>
          </div>

          <div className="flex w-full flex-col gap-2 md:w-auto sm:flex-row">
            <Link
              href="/start-here"
              className="inline-flex w-full items-center justify-center rounded-2xl bg-white px-6 py-4 text-sm font-semibold text-slate-900 hover:bg-white/90 md:w-auto"
            >
              Orientation Report
            </Link>

            <a
              href="https://buy.stripe.com/dRm00l3z6dmr3c29Cz4ZG00"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-sm font-semibold text-white hover:bg-white/10 md:w-auto"
            >
              Assessment (Step 2)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}