// app/assessment/page.tsx
"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  Shield,
  ClipboardList,
  Layers,
  Gauge,
  ArrowRight,
  RotateCcw,
  Info,
} from "lucide-react";

type Option = { label: string; value: 0 | 1 | 2 | 3; helper?: string };
type Domain = {
  id: string;
  title: string;
  subtitle: string;
  items: { id: string; prompt: string }[];
};

const STORAGE_KEY = "rmf_initial_assessment_v1";

/**
 * 0–3 scale (non-diagnostic, behavior-based)
 * 0 = Not showing / not a current issue
 * 1 = Occasional / mild friction
 * 2 = Frequent / moderate friction
 * 3 = Consistent / high load
 */
const OPTIONS: Option[] = [
  { label: "0", value: 0, helper: "Not showing / not a current issue" },
  { label: "1", value: 1, helper: "Occasional / mild friction" },
  { label: "2", value: 2, helper: "Frequent / moderate friction" },
  { label: "3", value: 3, helper: "Consistent / high load" },
];

const DOMAINS: Domain[] = [
  {
    id: "focus",
    title: "Attention & Engagement",
    subtitle: "Starting, sustaining, and returning to tasks without constant prompting.",
    items: [
      { id: "focus_1", prompt: "Gets started but drifts off quickly without noticing." },
      { id: "focus_2", prompt: "Needs frequent reminders to stay on-task." },
      { id: "focus_3", prompt: "Focus improves mainly under urgency/pressure." },
      { id: "focus_4", prompt: "Loses track mid-task (what they were doing / next step)." },
      { id: "focus_5", prompt: "Shuts down when attention is required for too long." },
    ],
  },
  {
    id: "planning",
    title: "Planning & Time Awareness",
    subtitle: "Sequencing, estimating time, and initiating the right first step.",
    items: [
      { id: "plan_1", prompt: "Work takes much longer than it should (even when trying)." },
      { id: "plan_2", prompt: "Struggles to decide what to do first." },
      { id: "plan_3", prompt: "Deadlines are remembered only when very close." },
      { id: "plan_4", prompt: "Even simple tasks feel overwhelming to start." },
      { id: "plan_5", prompt: "Avoids starting when steps aren’t clearly laid out." },
    ],
  },
  {
    id: "followthrough",
    title: "Organization & Follow-Through",
    subtitle: "Keeping track of materials, instructions, and finishing consistently.",
    items: [
      { id: "org_1", prompt: "Systems work briefly, then fall apart." },
      { id: "org_2", prompt: "Loses materials, instructions, or assignments." },
      { id: "org_3", prompt: "Starts work but doesn’t complete it consistently." },
      { id: "org_4", prompt: "Effort doesn’t reliably translate into finished work." },
      { id: "org_5", prompt: "Parent feels like the one holding everything together." },
    ],
  },
  {
    id: "learning",
    title: "Learning & Academic Performance",
    subtitle: "Showing knowledge reliably across assignments, tests, and formats.",
    items: [
      { id: "learn_1", prompt: "Understands concepts but struggles to show it on paper." },
      { id: "learn_2", prompt: "Studying takes time, but results don’t match effort." },
      { id: "learn_3", prompt: "Makes avoidable mistakes (misreads, skips, careless errors)." },
      { id: "learn_4", prompt: "Tests don’t reflect what they know." },
      { id: "learn_5", prompt: "Skills don’t carry over consistently from one task to the next." },
    ],
  },
  {
    id: "emotion",
    title: "Emotional Regulation & Motivation",
    subtitle: "Stress, frustration tolerance, and staying engaged when it’s hard.",
    items: [
      { id: "emo_1", prompt: "Homework becomes emotional quickly." },
      { id: "emo_2", prompt: "Small setbacks lead to shutdown or avoidance." },
      { id: "emo_3", prompt: "Motivation drops fast when difficulty shows up." },
      { id: "emo_4", prompt: "Avoids tasks that feel discouraging." },
      { id: "emo_5", prompt: "Stress interferes with learning more than ability does." },
    ],
  },
  {
    id: "systems",
    title: "Systems Fit & Sustainability",
    subtitle: "Whether tools and routines stick without constant parent management.",
    items: [
      { id: "sys_1", prompt: "We’ve tried planners/charts/systems that didn’t stick." },
      { id: "sys_2", prompt: "I remind for systems that were meant to reduce reminders." },
      { id: "sys_3", prompt: "Advice sounds good but doesn’t translate into daily use." },
      { id: "sys_4", prompt: "Tools feel overwhelming or get abandoned." },
      { id: "sys_5", prompt: "Support feels reactive rather than sustainable." },
    ],
  },
];

function Pill({
  icon: Icon,
  children,
  tone = "neutral",
}: {
  icon?: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
  tone?: "neutral" | "teal";
}) {
  const cls =
    tone === "teal"
      ? "border-teal-400/20 bg-teal-400/10 text-teal-200"
      : "border-white/10 bg-white/5 text-white/70";

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold ${cls}`}
    >
      {Icon ? (
        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10">
          <Icon className="h-3.5 w-3.5 text-teal-300" />
        </span>
      ) : null}
      {children}
    </span>
  );
}

function ScorePill({ score }: { score: number }) {
  // Keep it neutral so nothing looks “more important”
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/80">
      {score}
    </span>
  );
}

function clamp01(n: number) {
  return Math.max(0, Math.min(1, n));
}

export default function AssessmentPage() {
  // answers[itemId] = 0..3
  const [answers, setAnswers] = useState<Record<string, 0 | 1 | 2 | 3>>({});

  const allItemIds = useMemo(() => {
    const ids: string[] = [];
    for (const d of DOMAINS) for (const it of d.items) ids.push(it.id);
    return ids;
  }, []);

  // Load from localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw) as Record<string, 0 | 1 | 2 | 3>;
      if (parsed && typeof parsed === "object") setAnswers(parsed);
    } catch {}
  }, []);

  // Save to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(answers));
    } catch {}
  }, [answers]);

  const answeredCount = useMemo(() => {
    let n = 0;
    for (const id of allItemIds) if (answers[id] !== undefined) n++;
    return n;
  }, [allItemIds, answers]);

  const totalCount = allItemIds.length;

  const progress = clamp01(totalCount === 0 ? 0 : answeredCount / totalCount);

  const setScore = (itemId: string, v: 0 | 1 | 2 | 3) => {
    setAnswers((prev) => ({ ...prev, [itemId]: v }));
  };

  const reset = () => setAnswers({});

  // Domain totals + signals
  const domainResults = useMemo(() => {
    return DOMAINS.map((d) => {
      const vals = d.items.map((it) => answers[it.id]);
      const answered = vals.filter((v) => v !== undefined).length;
      const total = d.items.length;
      const sum = vals.reduce((acc, v) => acc + (v ?? 0), 0);
      const max = total * 3;

      // Severity label (quiet + non-gamified)
      // 0–2 = Low, 3–6 = Mild, 7–10 = Moderate, 11–15 = High
      const label =
        sum <= 2 ? "Low signal" : sum <= 6 ? "Mild signal" : sum <= 10 ? "Moderate signal" : "High signal";

      return { ...d, answered, total, sum, max, label };
    });
  }, [answers]);

  const topDomains = useMemo(() => {
    const sorted = [...domainResults].sort((a, b) => b.sum - a.sum);
    return sorted.slice(0, 3);
  }, [domainResults]);

  return (
    <main className="min-h-screen bg-[#070B18] text-white">
      {/* Background glow (RMF style) */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-teal-400/10 blur-3xl" />
        <div className="absolute bottom-[-160px] right-[-120px] h-[520px] w-[520px] rounded-full bg-amber-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-14 md:py-20">
        {/* Header */}
        <section className="max-w-3xl">
          <p className="text-xs font-semibold tracking-wide text-white/60">
            Parent Initial Assessment
          </p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
            Clarity without labels.
          </h1>

          <p className="mt-5 text-base text-white/75">
            This is <span className="font-semibold text-white">not a diagnosis</span>. It’s a structured,
            behavior-based way to map where school is breaking down — and what to build first.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            <Pill icon={Shield}>Non-diagnostic</Pill>
            <Pill icon={ClipboardList}>Behavior-based</Pill>
            <Pill icon={Layers}>By learning domain</Pill>
            <Pill icon={Gauge} tone="teal">
              0–3 severity (per item)
            </Pill>
          </div>
        </section>

        {/* Progress + actions */}
        <section className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-5 md:p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold text-white">Your progress</p>
              <p className="mt-1 text-sm text-white/70">
                Answer what you can. You can stop and return anytime.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/80">
                <span className="font-semibold text-white">{answeredCount}</span> / {totalCount} answered
              </div>

              <button
                type="button"
                onClick={reset}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80 hover:bg-white/10"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                Reset
              </button>
            </div>
          </div>

          {/* progress bar */}
          <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-black/20 ring-1 ring-white/10">
            <div
              className="h-full bg-white/40"
              style={{ width: `${Math.round(progress * 100)}%` }}
            />
          </div>

          {/* scale helper */}
          <div className="mt-5 grid gap-3 md:grid-cols-4">
            {OPTIONS.map((o) => (
              <div
                key={o.value}
                className="rounded-2xl border border-white/10 bg-black/20 p-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <p className="text-sm font-semibold text-white">{o.label}</p>
                  <span className="text-xs text-white/50">Severity</span>
                </div>
                <p className="mt-2 text-sm text-white/70">{o.helper}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Domains */}
        <section className="mt-10 space-y-6">
          {DOMAINS.map((d) => {
            const dRes = domainResults.find((x) => x.id === d.id)!;
            return (
              <div
                key={d.id}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8"
              >
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div className="max-w-3xl">
                    <h2 className="text-xl font-semibold">{d.title}</h2>
                    <p className="mt-1 text-sm text-white/70">{d.subtitle}</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <Pill>
                      {dRes.answered}/{dRes.total} answered
                    </Pill>
                    <Pill>
                      <span className="text-white/60">Domain total:</span>{" "}
                      <span className="font-semibold text-white">{dRes.sum}</span>
                      <span className="text-white/50"> / {dRes.max}</span>
                    </Pill>
                    <Pill tone="teal">{dRes.label}</Pill>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  {d.items.map((it) => {
                    const val = answers[it.id];
                    return (
                      <div
                        key={it.id}
                        className="rounded-2xl border border-white/10 bg-black/20 p-5"
                      >
                        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                          <p className="text-sm text-white/85">{it.prompt}</p>

                          <div className="flex flex-wrap items-center gap-2">
                            {OPTIONS.map((o) => {
                              const active = val === o.value;
                              return (
                                <button
                                  key={o.value}
                                  type="button"
                                  onClick={() => setScore(it.id, o.value)}
                                  className={`inline-flex h-9 w-10 items-center justify-center rounded-xl border text-sm font-semibold transition ${
                                    active
                                      ? "border-white/30 bg-white/15 text-white"
                                      : "border-white/10 bg-white/5 text-white/70 hover:bg-white/10"
                                  }`}
                                  aria-label={`Set ${d.title}: ${it.prompt} to ${o.value}`}
                                >
                                  {o.label}
                                </button>
                              );
                            })}

                            <span className="ml-2 hidden md:inline-flex">
                              <ScorePill score={val ?? 0} />
                            </span>
                          </div>
                        </div>

                        {val === undefined ? (
                          <div className="mt-3 flex items-start gap-2 text-xs text-white/55">
                            <Info className="mt-0.5 h-3.5 w-3.5 text-white/40" />
                            <p>
                              Choose the option that best matches what you see most often right now.
                            </p>
                          </div>
                        ) : null}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </section>

        {/* Results / Summary scaffold */}
        <section className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold tracking-wide text-white/60">
                Summary
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                What’s showing up most right now
              </h2>
              <p className="mt-2 text-sm text-white/75">
                This is a snapshot of patterns — not a label. The goal is to identify
                what to build first so the system (not the parent) carries the load.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <Pill>
                <span className="text-white/60">Answered:</span>{" "}
                <span className="font-semibold text-white">{answeredCount}</span> / {totalCount}
              </Pill>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {topDomains.map((d) => (
              <div
                key={d.id}
                className="rounded-2xl border border-white/10 bg-black/20 p-5"
              >
                <p className="text-sm font-semibold text-white">{d.title}</p>
                <p className="mt-2 text-sm text-white/70">
                  Domain total:{" "}
                  <span className="font-semibold text-white">{d.sum}</span>{" "}
                  <span className="text-white/50">/ {d.max}</span>
                </p>
                <p className="mt-2 text-xs text-white/60">{d.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-teal-400/20 bg-teal-400/10 p-5">
            <p className="text-sm font-semibold text-white">Next step</p>
            <p className="mt-2 text-sm text-white/75">
              If you want a clear plan (not more pressure), the next step is a parent
              review where we confirm priorities and map what to build first.
            </p>

            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-white/90"
              >
                View services & next steps
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>

              <Link
                href="/access"
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                Questions? Contact support
              </Link>
            </div>
          </div>
        </section>

        <footer className="mt-10 text-xs text-white/55">
          Rebel Minds Foundations is educational and systems-based. It does not diagnose, treat,
          or replace clinical care.
        </footer>
      </div>
    </main>
  );
}