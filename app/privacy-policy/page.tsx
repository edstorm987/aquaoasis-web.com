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
              This website is operated by Edward Hallam, a sole trader in
              England and Wales trading as AquaOasis-Web. AquaOasis-Web
              provides websites, Google Profile support, social
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
              Necessary storage remembers your privacy choice and supports core
              site functions. Optional first-party Aqua analytics can measure
              page use, performance, errors and form completion events, but it
              does not collect the contents you type into forms.
            </p>
            <p>
              Analytics and marketing events remain blocked until you allow the
              relevant category. Any future Google Tags, Meta pixels or similar
              tools must use the same permission. You can reject non-essential
              storage and still use the website, then change your choice from
              Cookie settings at any time.
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
