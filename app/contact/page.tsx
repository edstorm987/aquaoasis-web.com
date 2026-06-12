import { ContactForm } from "@/components/ContactForm";
import { MaintenanceFooter } from "@/components/MaintenanceFooter";
import { MaintenanceHeader } from "@/components/MaintenanceHeader";

export default function ContactPage() {
  return (
    <>
      <MaintenanceHeader />
      <main className="maintenance-page">
        <section className="maintenance-shell contact-page" aria-labelledby="contact-title">
          <div className="container contact-grid">
            <div className="maintenance-copy reveal">
              <h1 id="contact-title">Contact us.</h1>
              <p>
                Leave your details and tell us how we can help. We will come
                back to you as soon as possible.
              </p>
              <div className="contact-details">
                <a href="tel:+447305410203">07305410203</a>
                <a href="mailto:aquaoasis-web@gmail.com">aquaoasis-web@gmail.com</a>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      <MaintenanceFooter />
    </>
  );
}
