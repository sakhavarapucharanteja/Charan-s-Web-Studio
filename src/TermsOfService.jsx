
import { Link } from "react-router-dom";
import { ArrowLeft, FileText } from "lucide-react";

export default function TermsOfService() {
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
          <FileText size={34} className="text-[#246b55]" />
          <div>
            <h1 className="text-3xl font-bold sm:text-4xl">
              Terms of Service
            </h1>
            <p className="mt-2 text-sm text-gray-500">
              Last updated: October 19, 2026
            </p>
          </div>
        </div>

        <div className="space-y-8 rounded-xl border bg-white p-6 leading-7 shadow-sm sm:p-10">
          <section>
            <h2 className="mb-3 text-xl font-semibold">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using the Bhargav Group website, you agree to
              these Terms of Service. If you do not agree, please discontinue
              use of the website.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">
              2. Website Information
            </h2>
            <p>
              This website provides general information about our real estate
              projects, properties, amenities, and services. Information may
              change over time and should be confirmed before making decisions.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">
              3. Project Details
            </h2>
            <p>
              Project descriptions, images, locations, plot sizes, amenities,
              prices, availability, and completion timelines should be
              independently confirmed with Bhargav Group before purchase.
              Images may be illustrative and may not represent the final
              property.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">
              4. Enquiries and Site Visits
            </h2>
            <p>
              Submitting an enquiry or requesting a site visit does not
              reserve a property or guarantee availability. Any purchase
              will be governed by separate agreements and applicable law.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">
              5. Acceptable Use
            </h2>
            <p>You agree not to:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Use the website for unlawful or fraudulent purposes.</li>
              <li>Attempt unauthorized access to website systems.</li>
              <li>Disrupt website operation or interfere with other users.</li>
              <li>Copy or misuse content in violation of applicable law.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">
              6. Intellectual Property
            </h2>
            <p>
              Unless otherwise stated, website content, branding, graphics,
              and layouts belong to Bhargav Group or are used with permission.
              Reproduction or commercial use requires appropriate
              authorization.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">
              7. Third-Party Links
            </h2>
            <p>
              Third-party links are provided for convenience. Bhargav Group
              does not control those websites or their policies.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">
              8. Disclaimer
            </h2>
            <p>
              We aim to keep website information accurate and accessible but
              do not guarantee that it will always be complete, current,
              uninterrupted, or error-free. Nothing in these terms excludes
              liability that cannot legally be excluded.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">
              9. Changes to These Terms
            </h2>
            <p>
              We may revise these terms from time to time. Updates will be
              published on this page with a revised date.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">
              10. Governing Law
            </h2>
            <p>
              These terms are subject to applicable laws of India. The
              business should obtain legal review of any additional
              jurisdiction or dispute-resolution provisions.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">11. Contact Us</h2>
            <p>
              If you have questions about these terms, contact us through our{" "}
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
