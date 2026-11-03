import Link from "next/link";
import { AQUACRM_PUBLIC_URL, EDWARD_URL, MILESYMEDIA_URL, ZIMANTE_URL, contact, services } from "@/lib/site";
import { Brand } from "./SiteHeader";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <Brand />
            <p>
              Websites, social media, Google and online shops for small and growing
              businesses. Enter the digital age. We sort you out.
            </p>
            <div className="group-strip" aria-label="The group">
              <a href={AQUACRM_PUBLIC_URL} target="_blank" rel="noopener noreferrer">AquaCRM</a>
              <a href={MILESYMEDIA_URL} target="_blank" rel="noopener noreferrer">Milesymedia</a>
              <a href={ZIMANTE_URL} target="_blank" rel="noopener noreferrer">Zimante Group</a>
            </div>
          </div>
          <div className="footer-cols">
            <div>
              <h2>Services</h2>
              <ul>
                {services.map((service) => (
                  <li key={service.slug}><Link href={`/services/${service.slug}`}>{service.name}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h2>Free tools</h2>
              <ul>
                <li><Link href="/free-tools/post-creator">Social post creator</Link></li>
                <li><Link href="/free-tools/health-check">Website & Google health check</Link></li>
                <li><Link href="/free-tools">All free tools</Link></li>
              </ul>
            </div>
            <div>
              <h2>Company</h2>
              <ul>
                <li><Link href="/how-it-works">How it works</Link></li>
                <li><Link href="/work">Work</Link></li>
                <li><Link href="/pricing">Pricing</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h2>Help</h2>
              <ul>
                <li><a href={contact.phoneHref}>{contact.phone}</a></li>
                <li><a href={contact.emailHref}>Email us</a></li>
                <li><Link href="/customer-support">Customer support</Link></li>
                <li><Link href="/sign-in">Client login</Link></li>
                <li><Link href="/privacy-policy">Privacy</Link></li>
                <li><Link href="/cookie-settings">Cookies</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <p className="footer-big" aria-hidden="true">We sort you out.</p>
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} AquaOasis-Web, a trading name of{" "}
            <a href={EDWARD_URL} target="_blank" rel="noopener noreferrer">Edward Hallam</a>, a sole trader in England and Wales.
          </p>
          <p>Part of the <a href={ZIMANTE_URL} target="_blank" rel="noopener noreferrer">Zimante Group</a> family.</p>
        </div>
      </div>
    </footer>
  );
}
