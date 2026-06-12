import { MaintenanceFooter } from "@/components/MaintenanceFooter";
import { MaintenanceHeader } from "@/components/MaintenanceHeader";

export default function PrivacyPolicyPage() {
  return (
    <>
      <MaintenanceHeader />
      <main className="maintenance-page">
        <section className="maintenance-shell" aria-labelledby="privacy-title">
          <div className="container privacy-card reveal">
            <p className="eyebrow">Privacy policy</p>
            <h1 id="privacy-title">Privacy & Cookie Policy</h1>
            <p>
              AquaOasis-Web respects your privacy. This page explains what we
              collect, why we collect it, how we use it, and how cookie choices
              work on this website.
            </p>
            <h2>Who we are</h2>
            <p>
              AquaOasis-Web provides websites, Google Profile support, social
              presence setup, website reviews, and related digital services for
              small businesses and creators. You can contact us at
              aquaoasis-web@gmail.com or 07305410203.
            </p>
            <h2>Information we collect</h2>
            <p>
              We collect the information you choose to send through our forms,
              emails, phone calls, or support requests. This may include your
              name, phone number, email address, preferred contact method,
              business details, website details, and your message.
            </p>
            <h2>How we use your information</h2>
            <p>
              We use your information to reply to enquiries, arrange call backs,
              provide customer support, prepare quotes, review your online
              presence, and deliver services you ask us about.
            </p>
            <h2>Cookies and tracking</h2>
            <p>
              We only use essential site storage right now, such as remembering
              your cookie choice. We are not currently running analytics cookies,
              Google Tags, ad pixels, or marketing tracking.
            </p>
            <p>
              If analytics, Google Tags, Meta pixels, or similar tools are added
              later, they should be treated as non-essential cookies and only
              run after you accept them. You can reject non-essential cookies
              and still use the website. You can update your choices any time
              from the Cookie settings link in the footer.
            </p>
            <a className="primary-button privacy-cookie-button" href="/cookie-settings">
              Manage cookie choices
            </a>
            <h2>Sharing information</h2>
            <p>
              We do not sell your personal information. We only share details
              when needed to provide a service you requested, work with trusted
              service providers, comply with the law, or protect our business.
            </p>
            <h2>How long we keep information</h2>
            <p>
              We keep enquiry and support information only for as long as needed
              to respond, provide services, keep basic business records, and
              handle legitimate follow-up.
            </p>
            <h2>Your rights</h2>
            <p>
              You can ask us to access, correct, or delete your personal
              information by emailing aquaoasis-web@gmail.com. You can also ask
              us to stop using your details for follow-up marketing.
            </p>
            <p className="privacy-updated">Last updated: 2026</p>
          </div>
        </section>
      </main>
      <MaintenanceFooter />
    </>
  );
}
