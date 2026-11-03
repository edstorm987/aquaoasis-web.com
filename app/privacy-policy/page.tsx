import Link from "next/link";
import { PageHero } from "@/components/site/blocks";

export const metadata = {
  title: "Privacy & cookie policy",
  description: "What AquaOasis-Web collects, why, how it's used and how cookie choices work.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        kicker="Privacy policy"
        title="Privacy & cookie policy"
        lede="What we collect, why we collect it, how we use it, and how cookie choices work on this website."
        crumbs={[{ href: "/privacy-policy", label: "Privacy" }]}
      />
      <section className="section">
        <div className="wrap prose">
          <h2>Who we are</h2>
          <p>
            This website is operated by Edward Hallam, a sole trader in England and Wales trading as
            AquaOasis-Web. AquaOasis-Web provides websites, Google Business Profile and local SEO support,
            social media management, ecommerce, campaigns and related digital services for small businesses
            and creators. You can contact us at <a href="mailto:aquaoasis-web@gmail.com">aquaoasis-web@gmail.com</a> or 07305410203.
          </p>
          <h2>Information we collect</h2>
          <p>
            We collect the information you choose to send through our forms, chat, free tools, emails,
            phone calls or support requests. This may include your name, phone number, email address,
            preferred contact method, business details, website details and your message.
          </p>
          <h2>How we use your information</h2>
          <p>
            We use your information to reply to enquiries, arrange call backs, provide customer support,
            prepare quotes, review your online presence, send you results you ask for from our free tools,
            and deliver services you ask us about. Enquiries are stored and managed centrally in AquaCRM,
            the business system run by our group, Zimante Group.
          </p>
          <h2>Free tools</h2>
          <p>
            The social post creator runs in your browser. Any image you add stays on your device and is not
            uploaded. The website &amp; Google health check fetches the public web page you enter from our
            server to check things like its title, security and mobile setup; your quiz answers stay in your
            browser. Nothing from either tool is sent to us unless you choose to unlock the full report or
            download, in which case your name, email and a summary of your results are sent to us so we can
            send them and follow up.
          </p>
          <h2>Cookies and tracking</h2>
          <p>
            Necessary storage remembers your privacy choice and supports core site functions. Optional
            first-party Aqua analytics can measure page use, performance, errors and form completion events,
            but it does not collect the contents you type into forms.
          </p>
          <p>
            Analytics and marketing events remain blocked until you allow the relevant category. Any future
            Google Tags, Meta pixels or similar tools must use the same permission. You can reject
            non-essential storage and still use the website, then change your choice from{" "}
            <Link href="/cookie-settings">cookie settings</Link> at any time.
          </p>
          <p>
            Our forms use a bot check (Cloudflare Turnstile) to block spam. It may process technical
            information about your browser for that purpose only.
          </p>
          <h2>Sharing information</h2>
          <p>
            We do not sell your personal information. We only share details when needed to provide a service
            you requested, work with trusted service providers, comply with the law, or protect our business.
          </p>
          <h2>How long we keep information</h2>
          <p>
            We keep enquiry and support information only for as long as needed to respond, provide services,
            keep basic business records and handle legitimate follow-up.
          </p>
          <h2>Your rights</h2>
          <p>
            You can ask us to access, correct or delete your personal information by emailing{" "}
            <a href="mailto:aquaoasis-web@gmail.com">aquaoasis-web@gmail.com</a>. You can also ask us to stop
            using your details for follow-up marketing at any time.
          </p>
          <p><small>Last updated: November 2026</small></p>
        </div>
      </section>
    </>
  );
}
