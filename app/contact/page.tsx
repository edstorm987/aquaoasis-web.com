import Link from "next/link";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Icon } from "@/components/site/Icon";
import { PageHero } from "@/components/site/blocks";
import { contact } from "@/lib/site";

export const metadata = {
  title: "Contact",
  description: "Talk to AquaOasis-Web about your website, social media, Google, online shop or campaigns.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Contact"
        title={<>Let&apos;s get you <span className="gradient-text">sorted.</span></>}
        lede="Tell us where you are and where you want to be. We'll come back with honest advice, a clear plan and a price."
        crumbs={[{ href: "/contact", label: "Contact" }]}
      />
      <section className="section">
        <div className="wrap contact-grid">
          <div>
            <p className="kicker">Talk to a person</p>
            <h2 className="h-md">Call, message or fill in the form.</h2>
            <p className="lede" style={{ marginTop: 14 }}>No bots, no call centre. You&apos;ll speak to the people who actually do the work.</p>
            <div className="contact-lines">
              <a className="contact-line" href={contact.phoneHref}>
                <span className="icon-tile accent-aqua"><Icon name="phone" /></span>
                <span>{contact.phone}<small>Call or WhatsApp</small></span>
              </a>
              <a className="contact-line" href={contact.emailHref}>
                <span className="icon-tile accent-violet"><Icon name="mail" /></span>
                <span>{contact.email}<small>We reply within a working day</small></span>
              </a>
              <div className="contact-line" style={{ fontWeight: 600 }}>
                <span className="icon-tile accent-sun"><Icon name="pin" /></span>
                <span>{contact.location}</span>
              </div>
            </div>
            <p style={{ marginTop: 24 }}>
              Already a client? <Link className="text-link" href="/customer-support">Get support <Icon name="arrow" /></Link>
            </p>
          </div>
          <EnquiryForm />
        </div>
      </section>
    </>
  );
}
