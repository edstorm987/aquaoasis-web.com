import { MaintenanceFooter } from "@/components/MaintenanceFooter";
import { MaintenanceHeader } from "@/components/MaintenanceHeader";
import { SupportForm } from "@/components/SupportForm";

export default function CustomerSupportPage() {
  return (
    <>
      <MaintenanceHeader />
      <main className="maintenance-page">
        <section className="maintenance-shell contact-page" aria-labelledby="support-title">
          <div className="container contact-grid">
            <div className="maintenance-copy reveal">
              <p className="eyebrow">Customer support</p>
              <h1 id="support-title">Need help with AquaOasis-Web?</h1>
              <p>
                If you need support, have a question, or want an update, send
                us the details and we will get back to you directly.
              </p>
              <div className="contact-details">
                <a href="tel:+447305410203">07305410203</a>
                <a href="mailto:aquaoasis-web@gmail.com">aquaoasis-web@gmail.com</a>
              </div>
            </div>
            <SupportForm />
          </div>
        </section>
      </main>
      <MaintenanceFooter />
    </>
  );
}
