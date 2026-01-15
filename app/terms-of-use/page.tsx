// app/terms-of-use/page.tsx
import Link from "next/link";

export default function TermsOfUsePage() {
  return (
    <main className="min-h-screen bg-[#070B18] text-white">
      <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-24">
        {/* Header */}
        <header className="max-w-3xl">
          <p className="text-xs font-semibold tracking-wide text-white/60">
            Rebel Minds Foundations
          </p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
            Terms of Use
          </h1>

          <p className="mt-3 text-sm text-white/65">
            Last updated: January 13, 2026
          </p>

          <p className="mt-6 text-base text-white/75">
            These Terms of Use (“Terms”) govern your access to and use of the
            Rebel Minds Foundations website and services (the “Site” and
            “Services”). By using the Site or Services, you agree to these Terms.
          </p>
        </header>

        {/* Body card */}
        <section className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6 md:p-10">
          <div className="prose prose-invert max-w-none prose-p:text-white/75 prose-li:text-white/75 prose-headings:text-white prose-strong:text-white prose-a:text-white">
            <h2>1) Educational services disclaimer</h2>
            <p>
              Rebel Minds Foundations provides educational coaching and
              systems-based support for parents/guardians of K–12 students. RMF is
              not therapy, counseling, medical care, or psychological treatment,
              and we do not diagnose or treat conditions.
            </p>
            <p>
              If you have concerns about a child’s mental health, safety, or a
              potential medical emergency, contact a qualified professional or
              your local emergency services.
            </p>

            <h2>2) Parent/guardian role</h2>
            <p>
              RMF Services are designed to support parents/guardians. Parents
              remain responsible for decisions, implementation, supervision, and
              outcomes at home and at school.
            </p>

            <h2>3) No guarantees</h2>
            <p>
              Results vary based on many factors (including consistency,
              environment, and school demands). We do not guarantee specific
              outcomes.
            </p>

            <h2>4) Acceptable use</h2>
            <p>You agree not to:</p>
            <ul>
              <li>Use the Site for unlawful purposes.</li>
              <li>Attempt to interfere with the Site’s security or operation.</li>
              <li>Scrape, harvest, or collect data without permission.</li>
              <li>Upload or transmit malicious code.</li>
              <li>Misrepresent your identity or affiliation.</li>
            </ul>

            <h2>5) Intellectual property</h2>
            <p>
              The Site and its content (including text, design, graphics, logos,
              and frameworks) are owned by Rebel Minds Foundations or its
              licensors and are protected by intellectual property laws. You may
              use the Site for personal, non-commercial purposes only, and you
              may not copy, reproduce, or distribute Site content without written
              permission.
            </p>

            <h2>6) Third-party services and links</h2>
            <p>
              The Site may link to or integrate third-party services (e.g.,
              scheduling tools, analytics, forms, email). Your use of third-party
              services is governed by their terms and policies.
            </p>

            <h2>7) User submissions</h2>
            <p>
              If you submit information through forms or email, you represent
              that it is accurate and that you have the right to provide it. Do
              not submit confidential information you do not have permission to
              share.
            </p>

            <h2>8) Payment and scheduling</h2>
            <p>
              If you purchase Services, you agree to provide accurate payment and
              contact information. Scheduling details, rescheduling policies, and
              service scope may be provided at booking or in follow-up
              communication.
            </p>

            <h2>9) Limitation of liability</h2>
            <p>
              To the maximum extent permitted by law, RMF will not be liable for
              indirect, incidental, special, consequential, or punitive damages,
              or any loss of profits or revenues, arising from your use of the
              Site or Services.
            </p>

            <h2>10) Changes to these Terms</h2>
            <p>
              We may update these Terms from time to time. Continued use of the
              Site or Services after updates means you accept the updated Terms.
            </p>

            <h2>11) Contact</h2>
            <p>
              Questions about these Terms? Contact us at{" "}
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
                href="/privacy-policy"
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/85 hover:bg-white/10"
              >
                View Privacy Policy
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