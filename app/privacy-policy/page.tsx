// app/privacy-policy/page.tsx
import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#070B18] text-white">
      <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-24">
        {/* Header */}
        <header className="max-w-3xl">
          <p className="text-xs font-semibold tracking-wide text-white/60">
            Rebel Minds Foundations
          </p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
            Privacy Policy
          </h1>

          <p className="mt-3 text-sm text-white/65">
            Last updated: January 13, 2026
          </p>

          <p className="mt-6 text-base text-white/75">
            This Privacy Policy explains what information Rebel Minds Foundations
            (“RMF,” “we,” “us,” “our”) collects, how we use it, and the choices
            you have when you visit our website and use our services.
          </p>
        </header>

        {/* Body card */}
        <section className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6 md:p-10">
          <div className="prose prose-invert max-w-none prose-p:text-white/75 prose-li:text-white/75 prose-headings:text-white prose-strong:text-white prose-a:text-white">
            <h2>1) Who this is for</h2>
            <p>
              RMF is designed for parents/guardians seeking educational,
              systems-based support for K–12 learning and home routines. Parents
              complete intake forms and assessments and remain responsible for
              decisions and implementation at home.
            </p>

            <h2>2) Information we collect</h2>
            <p>We may collect information in the following ways:</p>
            <ul>
              <li>
                <strong>Information you provide:</strong> such as your name,
                email, phone number, and messages you submit through forms or
                email.
              </li>
              <li>
                <strong>Assessment and intake responses:</strong> including
                parent-reported observations about your child’s learning habits,
                routines, and school experience.
              </li>
              <li>
                <strong>Scheduling and service details:</strong> if you book or
                request services (for example, meeting preferences and logistics).
              </li>
              <li>
                <strong>Device and usage data:</strong> basic technical
                information like browser type, pages visited, and approximate
                location inferred from IP address.
              </li>
              <li>
                <strong>Cookies:</strong> small files used for basic site
                functionality and to understand how the site is used.
              </li>
            </ul>

            <h2>3) How we use information</h2>
            <p>We use information to:</p>
            <ul>
              <li>Provide and improve RMF services and site functionality.</li>
              <li>
                Review assessments, prepare recommendations, and support
                follow-up conversations with parents/guardians.
              </li>
              <li>Respond to inquiries and communicate with you.</li>
              <li>
                Maintain security, prevent fraud, and protect the integrity of
                our services.
              </li>
              <li>Comply with legal obligations when required.</li>
            </ul>

            <h2>4) What we do not do</h2>
            <ul>
              <li>
                We do <strong>not</strong> sell your personal information.
              </li>
              <li>
                We do <strong>not</strong> provide therapy, diagnosis, or medical
                treatment.
              </li>
              <li>
                We do <strong>not</strong> knowingly collect personal
                information directly from children without parent/guardian
                involvement.
              </li>
            </ul>

            <h2>5) Sharing information</h2>
            <p>
              We may share information only as necessary to operate our services,
              including:
            </p>
            <ul>
              <li>
                <strong>Service providers:</strong> (e.g., website hosting,
                analytics, email delivery, scheduling, and form tools). They
                process data on our behalf and are expected to protect it.
              </li>
              <li>
                <strong>Legal reasons:</strong> if required by law or to protect
                rights, safety, or property.
              </li>
              <li>
                <strong>Business transfers:</strong> in the event of a merger,
                acquisition, or sale of assets (information may be transferred as
                part of that transaction).
              </li>
            </ul>

            <h2>6) Cookies and analytics</h2>
            <p>
              We may use cookies and basic analytics to understand site traffic
              and improve user experience. You can control cookies through your
              browser settings. Disabling cookies may impact certain site
              features.
            </p>

            <h2>7) Data retention</h2>
            <p>
              We keep personal information only as long as needed for the
              purposes described above, unless a longer retention period is
              required or permitted by law.
            </p>

            <h2>8) Your choices</h2>
            <p>You may request to:</p>
            <ul>
              <li>Access, correct, or delete certain personal information.</li>
              <li>Opt out of non-essential emails (if applicable).</li>
            </ul>
            <p>
              To make a request, contact us using the information below. We may
              need to verify your identity.
            </p>

            <h2>9) Security</h2>
            <p>
              We use reasonable safeguards to protect information. No method of
              transmission or storage is 100% secure, so we cannot guarantee
              absolute security.
            </p>

            <h2>10) Contact</h2>
            <p>
              For privacy questions or requests, contact us at{" "}
              <a href="mailto:contact@rebelmindsfoundations.com">
                contact@rebelmindsfoundations.com
              </a>
              .
            </p>

            <hr />

            <p className="text-sm text-white/60">
              RMF is educational and systems-based. It does not diagnose, treat,
              or replace clinical care.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/terms-of-use"
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/85 hover:bg-white/10"
              >
                View Terms of Use
              </Link>

              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/85 hover:bg-white/10"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}