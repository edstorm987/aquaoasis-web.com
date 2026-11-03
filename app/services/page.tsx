import Link from "next/link";
import { Icon } from "@/components/site/Icon";
import { CtaBand, PageHero, ServiceCard } from "@/components/site/blocks";
import { services } from "@/lib/site";

export const metadata = {
  title: "Services",
  description: "Websites, social media, Google and local SEO, ecommerce and campaigns for small and growing businesses.",
};

const combos = [
  { title: "Just getting started", copy: "A focused website plus a properly set-up Google Business Profile. The essentials, done right.", picks: ["Websites", "Google & local SEO"] },
  { title: "Ready to be seen", copy: "Keep your socials ticking over with planned content, and make sure people can find you locally.", picks: ["Social media", "Google & local SEO"] },
  { title: "Selling online", copy: "An online shop people trust, with campaigns to bring the right buyers in.", picks: ["Ecommerce", "Campaigns"] },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        kicker="Services"
        title={<>One team for everything <span className="gradient-text">online.</span></>}
        lede="Five things we do brilliantly. Use one, or let us join them up so your website, socials and Google all pull in the same direction."
        crumbs={[{ href: "/services", label: "Services" }]}
        actions={<Link className="btn btn-aqua" href="/contact">Get a quote <Icon name="arrow" /></Link>}
      />
      <section className="section">
        <div className="wrap">
          <div className="grid grid-3">
            {services.map((service, index) => (
              <ServiceCard key={service.slug} service={service} delay={index * 0.06} />
            ))}
          </div>
        </div>
      </section>
      <section className="section paper-2">
        <div className="wrap">
          <div className="section-head">
            <p className="kicker">Popular combinations</p>
            <h2 className="h-lg">Where most businesses start.</h2>
          </div>
          <div className="grid grid-3">
            {combos.map((combo, index) => (
              <article className="card" key={combo.title} data-reveal style={{ "--d": `${index * 0.08}s`, display: "grid", gap: 12 } as React.CSSProperties}>
                <h3 className="h-sm">{combo.title}</h3>
                <p style={{ color: "var(--muted)" }}>{combo.copy}</p>
                <ul className="tick-list">{combo.picks.map((pick) => <li key={pick}>{pick}</li>)}</ul>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
