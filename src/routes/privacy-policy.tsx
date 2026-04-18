import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [{ name: "robots", content: "noindex, nofollow" }],
  }),
  component: PrivacyPolicy,
});

function Section({
  number,
  title,
  children,
}: {
  number: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-8">
      <h2 className="text-slate-700 font-semibold text-lg mb-3">
        {number}. {title}
      </h2>
      <div className="text-slate-500 leading-relaxed space-y-3">{children}</div>
    </div>
  );
}

export default function PrivacyPolicy() {
  return (
    <main className="container mx-auto px-4 py-16 max-w-3xl">
      <div className="mb-2">
        <Link
          to="/"
          className="text-sm text-slate-400 hover:text-slate-600 transition-colors"
        >
          ← Back
        </Link>
      </div>

      <h1 className="text-slate-700 font-bold text-4xl md:text-5xl mb-2">
        Privacy Policy
      </h1>
      <p className="text-slate-400 text-sm mb-12">
        Shard Cards &mdash; Last updated: 18 April 2026
      </p>

      <Section number={1} title="Introduction">
        <p>
          Aniel Feyt ("we", "us", "our") operates the Shard Cards mobile
          application ("the App"). This Privacy Policy explains how we handle
          your personal information in compliance with the Protection of
          Personal Information Act 4 of 2013 (POPIA).
        </p>
      </Section>

      <Section number={2} title="Information We Collect">
        <p>
          You may enter the following categories of personal information into
          the App:
        </p>
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li>Contact and address details</li>
          <li>Clothing sizes and preferences</li>
          <li>Dietary information and restrictions</li>
          <li>Body measurements</li>
          <li>Medical information</li>
          <li>Vehicle details</li>
        </ul>
        <p>
          This information is stored entirely on your device. We do not collect,
          transmit, or have access to any of the personal information you enter
          into the App.
        </p>
      </Section>

      <Section number={3} title="Information Collected Automatically">
        <p>
          When you purchase a premium subscription, our payment processor
          RevenueCat collects transaction and subscription data necessary to
          manage your subscription. RevenueCat may collect your device
          identifier, purchase history, and app usage data related to
          subscription status. Please review{" "}
          <a
            href="https://www.revenuecat.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 underline underline-offset-2 hover:text-slate-800 transition-colors"
          >
            RevenueCat's Privacy Policy
          </a>
          .
        </p>
        <p>We do not use analytics, advertising SDKs, or tracking tools.</p>
      </Section>

      <Section number={4} title="How Your Information Is Used">
        <p>
          The personal information you enter into the App is used solely by you,
          on your device, for your own reference. We do not process, access, or
          use this data in any way.
        </p>
        <p>
          Subscription data collected by RevenueCat is used solely to validate
          and manage your premium subscription entitlement.
        </p>
      </Section>

      <Section number={5} title="Data Storage and Security">
        <p>
          All personal information you enter is stored locally on your device
          using your device's built-in storage. It is your responsibility to
          secure your device. We recommend using a device passcode or biometric
          lock.
        </p>
        <p>We do not operate servers that store your personal information.</p>
      </Section>

      <Section number={6} title="Data Sharing">
        <p>
          We do not sell, rent, or share your personal information with third
          parties, except as follows:
        </p>
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li>
            <span className="font-medium text-slate-600">RevenueCat:</span>{" "}
            receives subscription and device data solely to process and manage
            your in-app subscription.
          </li>
          <li>
            <span className="font-medium text-slate-600">
              Legal requirements:
            </span>{" "}
            we may disclose information if required by South African law or a
            valid court order.
          </li>
        </ul>
      </Section>

      <Section number={7} title="Your Rights Under POPIA">
        <p>As a data subject under POPIA, you have the right to:</p>
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li>Know what personal information we hold about you</li>
          <li>Request correction or deletion of your personal information</li>
          <li>Object to the processing of your personal information</li>
          <li>
            Lodge a complaint with the Information Regulator of South Africa
          </li>
        </ul>
        <p>
          Since personal data entered into the App lives only on your device,
          you can delete it at any time by editing or deleting entries within
          the App, or by uninstalling the App.
        </p>
        <p>
          To exercise any of the above rights or to raise a complaint, contact
          us at{" "}
          <a
            href="mailto:anielfeyt.dev@gmail.com"
            className="text-slate-600 underline underline-offset-2 hover:text-slate-800 transition-colors"
          >
            anielfeyt.dev@gmail.com
          </a>
          .
        </p>
      </Section>

      <Section number={8} title="Children's Privacy">
        <p>
          The App is not directed at children under the age of 18. We do not
          knowingly collect personal information from children.
        </p>
      </Section>

      <Section number={9} title="Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time. We will notify
          you of material changes by updating the date at the top of this page.
          Continued use of the App after changes constitutes acceptance of the
          updated policy.
        </p>
      </Section>

      <Section number={10} title="Contact">
        <p>Aniel Feyt</p>
        <p>
          Email:{" "}
          <a
            href="mailto:anielfeyt.dev@gmail.com"
            className="text-slate-600 underline underline-offset-2 hover:text-slate-800 transition-colors"
          >
            anielfeyt.dev@gmail.com
          </a>
        </p>
        <p>
          Website:{" "}
          <a
            href="http://www.anielfeyt.com"
            className="text-slate-600 underline underline-offset-2 hover:text-slate-800 transition-colors"
          >
            www.anielfeyt.com
          </a>
        </p>
      </Section>
    </main>
  );
}
