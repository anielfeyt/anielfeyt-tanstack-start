import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => ({
    meta: [{ name: "robots", content: "noindex, nofollow" }],
  }),
  component: TermsAndConditions,
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

export default function TermsAndConditions() {
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
        Terms &amp; Conditions
      </h1>
      <p className="text-slate-400 text-sm mb-12">
        Shard Cards &mdash; Last updated: 18 April 2026
      </p>

      <Section number={1} title="Acceptance of Terms">
        <p>
          By downloading or using the Shard Cards mobile application ("the
          App"), you agree to be bound by these Terms and Conditions ("Terms").
          If you do not agree, do not use the App.
        </p>
      </Section>

      <Section number={2} title="About the App">
        <p>
          Shard Cards is a personal information organiser that stores data such
          as addresses, clothing sizes, dietary preferences, measurements,
          medical details, and vehicle information locally on your device. No
          data is transmitted to external servers.
        </p>
      </Section>

      <Section number={3} title="Premium Subscription">
        <p>
          Certain features of the App require a paid subscription ("Shard Cards
          Premium"). Subscriptions are processed through the App Store (Apple)
          or Google Play Store. Payment is charged to your store account upon
          confirmation of purchase. Subscriptions renew automatically unless
          cancelled at least 24 hours before the end of the current billing
          period. You can manage or cancel your subscription in your store
          account settings. We do not offer refunds beyond what is provided by
          Apple or Google's refund policies.
        </p>
      </Section>

      <Section number={4} title="Licence">
        <p>
          We grant you a limited, non-exclusive, non-transferable, revocable
          licence to use the App for personal, non-commercial purposes in
          accordance with these Terms.
        </p>
        <p>You may not:</p>
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li>Copy, modify, or distribute the App or its content</li>
          <li>Reverse engineer or attempt to extract the source code</li>
          <li>Use the App for any unlawful purpose</li>
        </ul>
      </Section>

      <Section number={5} title="Your Data">
        <p>
          All personal information you enter into the App is stored locally on
          your device. You are solely responsible for the accuracy, maintenance,
          and security of that information. We have no access to it and accept
          no liability for any loss of data resulting from device failure, loss,
          or theft.
        </p>
      </Section>

      <Section number={6} title="Disclaimer of Warranties">
        <p>
          The App is provided "as is" and "as available" without warranties of
          any kind, express or implied. We do not warrant that the App will be
          error-free, uninterrupted, or free of harmful components.
        </p>
        <p>
          Information entered into the App (including medical or dietary
          information) is for personal reference only and does not constitute
          professional medical, nutritional, or legal advice.
        </p>
      </Section>

      <Section number={7} title="Limitation of Liability">
        <p>
          To the maximum extent permitted by South African law, Aniel Feyt shall
          not be liable for any indirect, incidental, special, or consequential
          damages arising from your use of the App, including but not limited to
          loss of data, loss of revenue, or personal injury.
        </p>
      </Section>

      <Section number={8} title="Changes to the App and Terms">
        <p>
          We reserve the right to modify or discontinue the App, or any part of
          it, at any time. We may also update these Terms. Continued use of the
          App after changes constitutes your acceptance of the updated Terms.
        </p>
      </Section>

      <Section number={9} title="Governing Law">
        <p>
          These Terms are governed by the laws of the Republic of South Africa.
          Any disputes shall be subject to the jurisdiction of the South African
          courts.
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
