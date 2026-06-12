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
            <h1 id="privacy-title">Privacy Policy</h1>
            <p>
              AquaOasis-Web only collects the information you choose to send us
              through our forms, emails, or phone calls. This may include your
              name, phone number, email address, business details, and your
              message.
            </p>
            <p>
              We use this information to reply to enquiries, provide support,
              prepare quotes, and discuss website, Google Profile, social
              presence, or digital audit services.
            </p>
            <p>
              We do not sell your personal information. We only share details
              when needed to provide a service you have requested, comply with
              the law, or protect our business.
            </p>
            <p>
              You can ask us to update or delete your information by emailing
              aquaoasis-web@gmail.com.
            </p>
            <p className="privacy-updated">Last updated: 2026</p>
          </div>
        </section>
      </main>
      <MaintenanceFooter />
    </>
  );
}
