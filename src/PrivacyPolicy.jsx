
import { Link } from "react-router-dom";
import { ArrowLeft, ShieldCheck } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#faf8f4] text-gray-800">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <Link to="/" className="text-xl font-bold text-[#246b55]">
            Bhargav Group
          </Link>

          <Link
            to="/"
            className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#246b55]"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-14">
        <div className="mb-8 flex items-center gap-3">
          <ShieldCheck size={34} className="text-[#246b55]" />
          <div>
            <h1 className="text-3xl font-bold sm:text-4xl">
              Privacy Policy
            </h1>
            <p className="mt-2 text-sm text-gray-500">
              Last updated: October 19, 2026
            </p>
          </div>
        </div>

        <div className="space-y-8 rounded-xl border bg-white p-6 leading-7 shadow-sm sm:p-10">
          <section>
            <h2 className="mb-3 text-xl font-semibold">1. Introduction</h2>
            <p>
              Bhargav Group respects your privacy. This policy explains how
              information may be collected, used, and protected when you visit
              our website or contact us about our real estate projects.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">
              2. Information We Collect
            </h2>
            <p>
              We may collect information you provide, such as your name,
              phone number, email address, property preferences, and enquiry
              details. Technical information, such as browser type and pages
              visited, may also be collected through hosting or analytics
              services where applicable.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">
              3. How We Use Information
            </h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Respond to enquiries and requests.</li>
              <li>Provide information about projects and site visits.</li>
              <li>Improve website functionality and user experience.</li>
              <li>Maintain security and prevent misuse.</li>
              <li>Comply with applicable legal requirements.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">
              4. Sharing of Information
            </h2>
            <p>
              We do not intend to sell your personal information. Information
              may be shared with service providers who help operate our
              website or respond to enquiries, or when disclosure is required
              by law.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">5. Cookies</h2>
            <p>
              Our website or its service providers may use cookies or similar
              technologies for functionality, analytics, and performance.
              You can manage cookies through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">6. Data Security</h2>
            <p>
              We take reasonable steps to protect information handled through
              our website. However, no electronic storage or transmission
              method can be guaranteed to be completely secure.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">
              7. Your Privacy Choices
            </h2>
            <p>
              You may contact us to request access to, correction of, or
              deletion of information you have provided, subject to applicable
              laws and required record-retention obligations.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">
              8. Third-Party Links
            </h2>
            <p>
              Our website may link to third-party websites. Their privacy
              practices are governed by their own policies.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">
              9. Changes to This Policy
            </h2>
            <p>
              We may update this policy when our practices or legal
              requirements change. Updates will be posted on this page.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">10. Contact Us</h2>
            <p>
              For privacy-related questions, please contact us through our{" "}
              <Link
                to="/contact"
                className="font-medium text-[#246b55] underline"
              >
                Contact page
              </Link>.
            </p>
          </section>
        </div>

        <p className="mt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Bhargav Group. All rights reserved.
        </p>
      </main>
    </div>
  );
}
