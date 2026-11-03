import Link from "next/link";
import { Icon } from "@/components/site/Icon";
import { CtaBand, PageHero } from "@/components/site/blocks";
import { AQUACRM_PUBLIC_URL, EDWARD_URL, MILESYMEDIA_URL, ZIMANTE_URL } from "@/lib/site";

export const metadata = {
  title: "About",
  description: "AquaOasis-Web was started in Suffolk by Edward Hallam to help businesses enter the digital age without the jargon.",
};

const values = [
  { title: "Start with reality", copy: "Understand the customer, the business and the budget before suggesting anything." },
  { title: "Make it yours", copy: "Your brand should shine through, not be hidden behind a generic template." },
  { title: "Let results lead", copy: "Measure what people find, understand and act on, then focus where it matters." },
  { title: "Keep it clear", copy: "Who does what, what it costs, what happens next. Always visible." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="About us"
        title={<>Digital work should leave a business <span className="gradient-text">stronger.</span></>}
        lede="AquaOasis-Web was started in Suffolk to help businesses enter the digital age without being buried in jargon, locked into tools they don't need, or left doing the hard parts alone."
        crumbs={[{ href: "/about", label: "About" }]}
      />
      <section className="section">
        <div className="wrap about-grid">
          <div className="portrait" data-reveal>
            <small>Founder · AquaOasis-Web</small>
            <strong>Ed.</strong>
          </div>
          <div data-reveal style={{ display: "grid", gap: 18 } as React.CSSProperties}>
            <p className="kicker">Built by Edward Hallam</p>
            <h2 className="h-lg">Practical first. Ambitious when it counts.</h2>
            <p className="lede">
              AquaOasis-Web began with a simple frustration: too many businesses know they need to do better
              online, but the route is made to feel more confusing and expensive than it needs to be.
            </p>
            <p className="lede">
              Today the work runs from local Google visibility and focused websites to social media, online
              shops and campaigns. The size of the job changes. The standard doesn&apos;t: understand the
              people, make the next step clear and build something the business can genuinely use.
            </p>
            <div className="btn-row">
              <a className="btn btn-primary" href={EDWARD_URL} target="_blank" rel="noopener noreferrer">Meet Ed <Icon name="arrow" /></a>
              <Link className="btn btn-ghost" href="/contact">Talk to us</Link>
            </div>
          </div>
        </div>
      </section>
      <section className="section paper-2">
        <div className="wrap">
          <div className="section-head"><p className="kicker">How we think</p><h2 className="h-lg">Useful, clear and always moving forward.</h2></div>
          <div className="grid grid-4">
            {values.map((value, index) => (
              <article className="card" key={value.title} data-reveal style={{ "--d": `${index * 0.06}s`, display: "grid", gap: 10, alignContent: "start" } as React.CSSProperties}>
                <span className="free-tag" style={{ background: "var(--ink)", color: "#fff" }}>0{index + 1}</span>
                <h3 className="h-sm">{value.title}</h3>
                <p style={{ color: "var(--muted)" }}>{value.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section dark">
        <div className="wrap">
          <div className="section-head"><p className="kicker">The family</p><h2 className="h-lg">Part of the Zimante Group.</h2><p className="lede">Specialists that work together when a project needs more.</p></div>
          <div className="grid grid-3">
            <article className="card" data-reveal style={{ display: "grid", gap: 10, alignContent: "start" }}>
              <h3 className="h-sm">Milesymedia</h3>
              <p>Original photography, video and ads, so your business looks like you rather than stock imagery.</p>
              <a className="text-link" href={MILESYMEDIA_URL} target="_blank" rel="noopener noreferrer">Visit Milesymedia <Icon name="arrow" /></a>
            </article>
            <article className="card" data-reveal style={{ "--d": "0.08s", display: "grid", gap: 10, alignContent: "start" } as React.CSSProperties}>
              <h3 className="h-sm">AquaCRM</h3>
              <p>The business operating system for when you&apos;re ready to systemise and scale.</p>
              <a className="text-link" href={AQUACRM_PUBLIC_URL} target="_blank" rel="noopener noreferrer">Visit AquaCRM <Icon name="arrow" /></a>
            </article>
            <article className="card" data-reveal style={{ "--d": "0.16s", display: "grid", gap: 10, alignContent: "start" } as React.CSSProperties}>
              <h3 className="h-sm">Zimante Group</h3>
              <p>The parent company, coordinating bigger projects and, when the time comes, exit options.</p>
              <a className="text-link" href={ZIMANTE_URL} target="_blank" rel="noopener noreferrer">Visit Zimante Group <Icon name="arrow" /></a>
            </article>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
