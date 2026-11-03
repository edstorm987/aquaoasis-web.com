import Link from "next/link";
import { Icon } from "@/components/site/Icon";
import { CtaBand, Faq, PageHero, Steps } from "@/components/site/blocks";
import { AQUACRM_PUBLIC_URL, MILESYMEDIA_URL, ZIMANTE_URL } from "@/lib/site";

export const metadata = {
  title: "How it works",
  description: "How AquaOasis-Web gets your business online and growing: a quick chat, a clear plan, done-for-you work and ongoing improvement.",
};

const steps = [
  { title: "A quick chat", copy: "Ten to fifteen minutes on the phone, video or in person. What you do, who you serve, what's not working." },
  { title: "A clear plan and price", copy: "We send back what we'd do first and why, in plain English, with a fixed price or a clear monthly fee." },
  { title: "We build and set up", copy: "Website, profiles, listings, content and tracking. You get previews to approve, never surprises." },
  { title: "Launch and look after", copy: "We go live, then keep an eye on things, improve what works and tell you how it's going." },
];

const promises = [
  { title: "Plain English", copy: "No acronyms, no waffle. If we can't explain it simply, we shouldn't be charging for it." },
  { title: "Price before work", copy: "You'll always know what something costs before it starts." },
  { title: "You own it", copy: "Your domain, your accounts, your content. Always in your name." },
  { title: "A real person", copy: "You talk to the people doing the work, not a ticket queue." },
];

const faqs = [
  { q: "How quickly can you start?", a: "Usually within a week or two of saying yes. A focused website is often live within a few weeks." },
  { q: "What do you need from me?", a: "Some time for the first chat, any logos or photos you already have, and quick replies when we send things to approve." },
  { q: "Do you lock me into a contract?", a: "Builds are one-off projects. Ongoing services like social media are monthly, and we'll agree the notice period up front." },
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        kicker="How it works"
        title={<>Simple for you. <span className="gradient-text">Sorted by us.</span></>}
        lede="You run the business. We handle the digital side, from first chat to launch and beyond, and keep you in the loop without burying you in detail."
        crumbs={[{ href: "/how-it-works", label: "How it works" }]}
        actions={<Link className="btn btn-aqua" href="/contact">Book the quick chat <Icon name="arrow" /></Link>}
      />
      <section className="section">
        <div className="wrap">
          <div className="section-head"><p className="kicker">The process</p><h2 className="h-lg">Four steps from stuck to sorted.</h2></div>
          <Steps steps={steps} />
        </div>
      </section>
      <section className="section paper-2">
        <div className="wrap">
          <div className="section-head"><p className="kicker">Our promises</p><h2 className="h-lg">What you can count on.</h2></div>
          <div className="grid grid-4">
            {promises.map((promise, index) => (
              <article className="card" key={promise.title} data-reveal style={{ "--d": `${index * 0.06}s`, display: "grid", gap: 10, alignContent: "start" } as React.CSSProperties}>
                <span className="icon-tile accent-aqua"><Icon name="check" /></span>
                <h3 className="h-sm">{promise.title}</h3>
                <p style={{ color: "var(--muted)" }}>{promise.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section dark" id="next">
        <div className="wrap">
          <div className="section-head">
            <p className="kicker">After you&apos;re online</p>
            <h2 className="h-lg">Growing fast? There&apos;s a next step.</h2>
            <p className="lede">Once you&apos;re online, our sister companies help you look the part, run the business smoothly and, one day, step back from it.</p>
          </div>
          <div className="grid grid-3">
            <article className="card" data-reveal style={{ display: "grid", gap: 12 }}>
              <span className="stage-label">Look the part</span>
              <h3 className="h-md">Milesymedia</h3>
              <p>Our sister studio for original photography, video and ads, so everything we build for you looks like your business, not stock imagery.</p>
              <a className="text-link" href={MILESYMEDIA_URL} target="_blank" rel="noopener noreferrer">Visit Milesymedia <Icon name="arrow" /></a>
            </article>
            <article className="card" data-reveal style={{ "--d": "0.08s", display: "grid", gap: 12 } as React.CSSProperties}>
              <span className="stage-label">Systemise and scale</span>
              <h3 className="h-md">AquaCRM</h3>
              <p>A bespoke business operating system: leads, clients, projects, invoices, bookings and automation in one place, so growth doesn&apos;t mean chaos. It&apos;s the same system that powers our free tools.</p>
              <a className="text-link" href={AQUACRM_PUBLIC_URL} target="_blank" rel="noopener noreferrer">Explore AquaCRM <Icon name="arrow" /></a>
            </article>
            <article className="card" data-reveal style={{ "--d": "0.16s", display: "grid", gap: 12 } as React.CSSProperties}>
              <span className="stage-label">When it&apos;s time to exit</span>
              <h3 className="h-md">Zimante Group</h3>
              <p>Our parent company. When you&apos;re ready to step back, Zimante Group can talk through your options, which may include buying the business. It&apos;s an option to explore, never a promise.</p>
              <a className="text-link" href={ZIMANTE_URL} target="_blank" rel="noopener noreferrer">Visit Zimante Group <Icon name="arrow" /></a>
            </article>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap"><div className="section-head"><p className="kicker">FAQ</p><h2 className="h-lg">Before you ask.</h2></div><Faq items={faqs} /></div>
      </section>
      <CtaBand />
    </>
  );
}
