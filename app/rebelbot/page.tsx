// app/rebelbot/page.tsx
import Link from "next/link";
import type React from "react";
import {
  ShieldCheck,
  Repeat,
  Puzzle,
  Brain,
  ZapOff,
  Clock,
  Wand2,
  Sparkles,
  MessageSquareText,
} from "lucide-react";

export const metadata = {
  title: "RebelBot | RMF",
  description:
    "Meet RebelBot — a calm, neutral guide that carries the rules, reduces friction, and helps learning feel manageable again.",
};

export default function RebelBotPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="bg-emerald-50">
        <div className="mx-auto max-w-6xl px-6 py-14">
          {/* Hero top row */}
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            {/* Left: copy */}
            <div className="space-y-5">
              <p className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/60 px-3 py-1 text-sm font-medium text-slate-700">
                <Sparkles size={16} className="text-emerald-700" />
                RMF System Guide
              </p>

              <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
                Meet RebelBot
              </h1>

              <p className="max-w-xl text-lg leading-relaxed text-slate-700">
                RebelBot is a calm, neutral guide that helps learning feel manageable again.
                He carries the rules, reduces friction, and keeps routines consistent — so
                progress doesn’t depend on nightly battles.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="https://buy.stripe.com/dRm00l3z6dmr3c29Cz4ZG00"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800"
                >
                  Start The Initial Assessment!
                </a>

                <Link
                  href="/program"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white/40 px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-white"
                >
                  See How RMF Works
                </Link>
              </div>

              <p className="text-sm text-slate-600">
                Not a mascot — a system guide. Built to be predictable, calm, and easy to follow.
              </p>
            </div>

            {/* Right: intro image */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-sm">
                <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-slate-50">
                  <img
                    src="/rebelbothi.png"
                    alt="RebelBot Intro Mode — waving hello"
                    className="h-full w-full object-contain"
                  />
                </div>

                <p className="mt-3 text-center text-sm text-slate-600">
                  RebelBot “Intro Mode” — used once to welcome your family.
                </p>
              </div>
            </div>
          </div>

          {/* Benefit cards: add breathing room from screen edges */}
          <div className="mt-10 px-2 sm:px-0">
            <div className="grid gap-6 sm:grid-cols-3">
              <BenefitCard
                icon={ShieldCheck}
                title="Less conflict at home"
                body="RebelBot becomes the third voice — neutral, predictable, and calm — so structure doesn’t feel like pressure."
              />
              <BenefitCard
                icon={Repeat}
                title="Clear rules, steady routines"
                body="Time boundaries, stopping points, and step-by-step expectations become visible and repeatable."
              />
              <BenefitCard
                icon={Puzzle}
                title="Systems > willpower"
                body="Instead of “try harder,” RebelBot helps students work inside a structure that supports follow-through."
              />
            </div>
          </div>
        </div>
      </section>

      {/* PARENT-FACING + MODES (SWAPPED for visual balance) */}
      <section className="border-t bg-white">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            {/* LEFT: Focus image + modes grouped (RebelBot on the LEFT now) */}
            <aside className="space-y-6">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-slate-50">
                  <img
                    src="/rebelbotfocustime.png"
                    alt='RebelBot “Focus Time” — speaking to Alex'
                    className="h-full w-full object-contain"
                  />
                </div>

                <p className="mt-3 flex items-center justify-center gap-2 text-center text-sm text-slate-600">
                  <Clock size={16} className="text-emerald-700" />
                  RebelBot “Focus Time” — used during calm, time-boxed work sessions once routines are established.
                </p>

                <div className="mt-6">
                  <h3 className="flex items-center gap-2 text-lg font-semibold text-slate-900">
                    <Wand2 size={18} className="text-emerald-700" />
                    Three of seven modes RebelBot uses
                  </h3>

                  <div className="mt-4 space-y-3">
                    <MiniMode
                      icon={Clock}
                      title="Focus Mode"
                      body="Time-boxed work sessions with calm, clear rules."
                    />
                    <MiniMode
                      icon={Puzzle}
                      title="Planning Mode"
                      body="Turn overwhelm into the next small, doable step."
                    />
                    <MiniMode
                      icon={ShieldCheck}
                      title="Reset / Repair Mode"
                      body="Mistakes become “system data” — adjust, don’t shame."
                    />
                  </div>
                </div>
              </div>

              <div className="rounded-3xl bg-slate-900 p-6 text-white">
                <h3 className="text-lg font-semibold">Want RebelBot to guide your child?</h3>
                <p className="mt-2 text-white/85">
                  Start with the Initial Assessment — it maps what your child needs so the support is intentional.
                </p>

                <a
                  href="https://buy.stripe.com/dRm00l3z6dmr3c29Cz4ZG00"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100"
                >
                  Start The Initial Assessment
                </a>
              </div>
            </aside>

            {/* RIGHT: Parent-facing explanation (now on the RIGHT) */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                For parents: why RebelBot looks “simple” on purpose
              </h2>

              <p className="text-base leading-relaxed text-slate-700">
                Most kids don’t need more hype — they need{" "}
                <span className="font-semibold text-slate-900">predictability</span>.
                RebelBot’s design is intentionally calm and neutral so he can hold structure without turning into a
                character your child needs to “perform for.”
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <InfoCard
                  icon={ZapOff}
                  title="Neutral face = less emotional friction"
                  body="A low-emotion expression reduces escalation. The guide stays calm even when the moment isn’t."
                />
                <InfoCard
                  icon={Brain}
                  title="Simple shapes = faster processing"
                  body="Clean, consistent visuals are easier to read when a child is overloaded or distracted."
                />
                <InfoCard
                  icon={Repeat}
                  title="Same look, every time = trust"
                  body="Consistency builds safety. If the guide changes styles or moods, many kids stop trusting the routine."
                />
                <InfoCard
                  icon={ShieldCheck}
                  title='A “third voice” outside the parent-child loop'
                  body="RebelBot holds the rules so you don’t have to be the constant reminder. That often reduces conflict and increases follow-through."
                />
              </div>

              <div className="relative overflow-hidden rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-6 shadow-sm">
  {/* left accent bar */}
  <div className="absolute inset-y-0 left-0 w-1.5 bg-emerald-500/70" />

  {/* subtle top glow */}
  <div className="pointer-events-none absolute -top-24 right-0 h-48 w-48 rounded-full bg-emerald-200/40 blur-3xl" />

  <div className="pl-3">
    <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/70 px-3 py-1 text-xs font-semibold text-emerald-900">
      <span className="h-2 w-2 rounded-full bg-emerald-600" />
      Key takeaway
    </div>

    <h3 className="text-base font-semibold text-slate-900">
      The goal is independence — not dependence
    </h3>

    <p className="mt-2 text-sm leading-relaxed text-slate-700">
      RebelBot helps your child borrow structure until it becomes their own. Over time, the routines get
      internalized — and the need for reminders decreases.
    </p>
    <p className="mt-3 text-xs font-medium text-emerald-800">
  Structure now → independence later.
</p>
  </div>
</div>

              {/* Small “RebelBot speaks” block to match your image */}
              <div className="rounded-3xl border border-slate-200 bg-white p-6">
                <h3 className="flex items-center gap-2 text-base font-semibold text-slate-900">
                  <MessageSquareText size={18} className="text-emerald-700" />
                  What it sounds like at home
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">
                  RebelBot uses short, calm language. No lectures. No negotiating. Just the next step.
                </p>

                <div className="mt-4 grid gap-3">
                  <QuoteBubble>
                    <strong>“Okay, Alex.</strong> Focus time — <strong>45 minutes</strong>. Then we stop.”
                  </QuoteBubble>
                  <QuoteBubble>
                    “We’re not finishing everything. We’re finishing <strong>this step</strong>.”
                  </QuoteBubble>
                  <QuoteBubble>
                    “If something doesn’t work, that’s data. We <strong>adjust the system</strong>.”
                  </QuoteBubble>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DEEPER EXPLANATION SECTION */}
      <section className="border-t bg-white">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="grid gap-10 lg:grid-cols-3">
            {/* Main content */}
            <div className="space-y-10 lg:col-span-2">
              <ContentBlock
                icon={Sparkles}
                title="Why RebelBot exists"
                text={
                  <>
                    At home, learning can quietly turn into a power struggle: parents feel responsible for keeping
                    everything on track, children feel pressured or judged, and everyone ends the night exhausted.
                    RebelBot exists to change that dynamic by adding a{" "}
                    <span className="font-semibold text-slate-900">third voice</span> — one that is neutral,
                    consistent, and calm.
                  </>
                }
              />

              <ContentBlock
                icon={Puzzle}
                title="What RebelBot does"
                text={
                  <>
                    RebelBot acts as an{" "}
                    <span className="font-semibold text-slate-900">
                      external guide for focus, planning, and follow-through
                    </span>
                    . He supports students by setting clear boundaries, normalizing breaks, and turning mistakes
                    into system adjustments — not personal failures.
                  </>
                }
              />

              <div className="rounded-3xl border border-slate-200 bg-emerald-50 p-6">
                <div className="flex items-center gap-2">
                  <Wand2 className="text-emerald-700" size={20} />
                  <h3 className="text-lg font-semibold text-slate-900">RebelBot speaks the rules</h3>
                </div>
                <p className="mt-2 text-slate-700">
                  RebelBot doesn’t motivate through pressure or gimmicks. He simply states what the system expects —
                  in language kids can actually follow.
                </p>

                <div className="mt-5 grid gap-4">
                  <QuoteBubble>
                    “It’s focus time. We’re working for <strong>45 minutes</strong>. Then we stop.”
                  </QuoteBubble>
                  <QuoteBubble>
                    “If something doesn’t work, that’s data. We <strong>adjust the system</strong>.”
                  </QuoteBubble>
                  <QuoteBubble>
                    “We’re not finishing everything. We’re finishing <strong>this step</strong>.”
                  </QuoteBubble>
                </div>
              </div>

              <ContentBlock
                icon={ShieldCheck}
                title="Why parents find RebelBot supportive"
                text={
                  <>
                    Many parents are tired of being the reminder, the enforcer, and the one pushing when their child is
                    already overwhelmed. RebelBot helps by holding structure{" "}
                    <span className="font-semibold text-slate-900">outside the parent–child relationship</span>.
                    That often means fewer arguments, clearer boundaries, and more consistency without constant oversight.
                  </>
                }
              />

              <ContentBlock
                icon={Brain}
                title="Not a mascot. A system guide."
                text={
                  <>
                    RebelBot isn’t here to distract. He’s a visual and verbal anchor that helps students internalize
                    routines over time. You’ll see him on focus sheets, planning pages, and reflection tools — always
                    present, never overwhelming.
                  </>
                }
              />

              <ContentBlock
                icon={Repeat}
                title="The goal"
                text={
                  <>
                    The goal isn’t for students to rely on RebelBot forever. The goal is for them to{" "}
                    <span className="font-semibold text-slate-900">
                      borrow structure until it becomes their own
                    </span>
                    . RebelBot helps build habits — quietly, calmly, and without shame.
                  </>
                }
              />
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              <div className="rounded-3xl border border-slate-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-slate-900">Where you’ll see RebelBot</h3>
                <ul className="mt-3 space-y-2 text-slate-700">
                  <BulletItem>Focus sheets (45-minute work blocks)</BulletItem>
                  <BulletItem>Planning pages (first step, checkpoints)</BulletItem>
                  <BulletItem>Reset tools (repair after rough days)</BulletItem>
                  <BulletItem>Program dashboards & progress moments</BulletItem>
                </ul>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-lg font-semibold text-slate-900">A quick parent takeaway</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">
                  If your child resists reminders, it’s often not “attitude.” It’s overload. RebelBot reduces overload
                  by making the next step clear, time-bound, and repeatable.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="border-t bg-emerald-50">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">
                Structure that supports kids — and parents.
              </h2>
              <p className="mt-2 max-w-2xl text-slate-700">
                RebelBot helps make expectations visible, consistent, and calm — so learning feels safer and more predictable.
              </p>
            </div>

            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <a
                href="https://buy.stripe.com/dRm00l3z6dmr3c29Cz4ZG00"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800"
              >
                Take the Initial Assessment
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
              >
                Ask a Question
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ---------- Components ---------- */

function BenefitCard({
  icon: Icon,
  title,
  body,
}: {
  icon: React.ElementType;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-3 flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
          <Icon size={18} />
        </div>
        <h3 className="text-base font-semibold text-slate-900">{title}</h3>
      </div>
      <p className="text-sm leading-relaxed text-slate-700">{body}</p>
    </div>
  );
}

function InfoCard({
  icon: Icon,
  title,
  body,
}: {
  icon: React.ElementType;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <div className="mb-2 flex items-center gap-2 text-slate-900">
        <Icon size={16} className="text-emerald-700" />
        <p className="text-sm font-semibold">{title}</p>
      </div>
      <p className="text-sm leading-relaxed text-slate-700">{body}</p>
    </div>
  );
}

function ContentBlock({
  icon: Icon,
  title,
  text,
}: {
  icon: React.ElementType;
  title: string;
  text: React.ReactNode;
}) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <Icon size={18} className="text-emerald-700" />
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">{title}</h2>
      </div>
      <p className="text-base leading-relaxed text-slate-700">{text}</p>
    </div>
  );
}

function QuoteBubble({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 text-slate-800">
      <p className="text-sm leading-relaxed">{children}</p>
    </div>
  );
}

function MiniMode({
  icon: Icon,
  title,
  body,
}: {
  icon: React.ElementType;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <div className="flex items-start gap-2">
        <Icon size={16} className="mt-0.5 text-emerald-700" />
        <div>
          <p className="text-sm font-semibold text-slate-900">{title}</p>
          <p className="mt-1 text-sm leading-relaxed text-slate-700">{body}</p>
        </div>
      </div>
    </div>
  );
}

function BulletItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-2">
      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-slate-900" />
      <span className="text-sm leading-relaxed">{children}</span>
    </li>
  );
}