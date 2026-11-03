import { SupportForm } from "@/components/SupportForm";
import { Icon } from "@/components/site/Icon";
import { PageHero } from "@/components/site/blocks";
import { contact } from "@/lib/site";

export const metadata = {
  title: "Customer support",
  description: "Help for existing AquaOasis-Web clients.",
};

export default function CustomerSupportPage() {
  return (
    <>
      <PageHero
        kicker="Customer support"
        title="Need a hand with something?"
        lede="Questions, changes or an update on your project. Send us the details and we'll get back to you directly."
        crumbs={[{ href: "/customer-support", label: "Support" }]}
      />
      <section className="section">
        <div className="wrap contact-grid">
          <div>
            <h2 className="h-md">Prefer to talk?</h2>
            <div className="contact-lines">
              <a className="contact-line" href={contact.phoneHref}>
                <span className="icon-tile accent-aqua"><Icon name="phone" /></span>
                <span>{contact.phone}<small>Call or WhatsApp</small></span>
              </a>
              <a className="contact-line" href={contact.emailHref}>
                <span className="icon-tile accent-violet"><Icon name="mail" /></span>
                <span>{contact.email}<small>We reply within a working day</small></span>
              </a>
            </div>
          </div>
          <SupportForm />
        </div>
      </section>
    </>
  );
}
