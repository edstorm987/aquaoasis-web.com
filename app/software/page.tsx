import Image from "next/image";
import { AquaPageHero } from "@/components/AquaPageHero";
import { AquaPageShell } from "@/components/AquaPageShell";
import { aquaWork } from "@/app/portfolio-data";

const capabilities = [
  {
    title: "Customer portals",
    copy: "A clear home for onboarding, files, feedback, invoices, project stages and support.",
  },
  {
    title: "Internal tools",
    copy: "Purpose-built workspaces that replace fragmented sheets, inboxes and manual handovers.",
  },
  {
    title: "Ecommerce",
    copy: "Storefronts connected to the products, orders, fulfilment and customer context behind them.",
  },
  {
    title: "Automation",
    copy: "Reliable workflows that move information, create actions and keep people in the loop.",
  },
  {
    title: "Operational dashboards",
    copy: "One view of performance, risks, workload and decisions, designed for the people using it.",
  },
  {
    title: "Connected websites",
    copy: "Public experiences joined properly to booking, payments, portals and internal operations.",
  },
];

export default function SoftwarePage() {
  const defaultPortalUrl =
    process.env.NODE_ENV === "production" ? "https://aqua-crm.com" : "http://localhost:3032";
  const portalUrl =
    process.env.NEXT_PUBLIC_AQUACRM_URL ?? process.env.NEXT_PUBLIC_PORTAL_URL ?? defaultPortalUrl;

  return (
    <AquaPageShell>
      <AquaPageHero
        eyebrow="Bespoke software by Aqua"
        title="Software shaped around the way the work should run."
        copy="We build portals, ecommerce, automations and operational systems for businesses that have outgrown generic tools or need the customer experience to connect properly behind the scenes."
        image="/work/ocean-boulevard/overview.png"
        imageAlt="A connected hospitality website and operational software workspace"
        primaryLabel="Discuss a system"
        secondaryLabel="Explore our work"
        secondaryHref="/work"
      />

      <section className="aqua3-outcomes" aria-label="Software outcomes">
        <p>Remove repeated admin</p>
        <p>Connect the customer journey</p>
        <p>See what needs attention</p>
      </section>

      <section className="aqua3-section">
        <div className="aqua3-heading">
          <div>
            <p className="aqua2-kicker">What we build</p>
            <h2>Not software for its own sake. Useful systems with a job to do.</h2>
          </div>
          <p>
            We begin with the decisions, handovers and customer moments that
            matter. The technology follows the operation, not the other way
            around.
          </p>
        </div>
        <div className="aqua3-offer-grid">
          {capabilities.map((capability, index) => (
            <article key={capability.title}>
              <span>0{index + 1}</span>
              <h3>{capability.title}</h3>
              <p>{capability.copy}</p>
              <ul>
                <li>Designed around your roles and workflows</li>
                <li>Responsive, accessible and production-minded</li>
                <li>Built to connect with the wider experience</li>
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="aqua3-work-intro">
        <div>
          <p className="aqua2-kicker">Evidence</p>
          <h2>See the systems in context.</h2>
        </div>
        <p>
          These examples show different kinds of connected work: public
          experiences, commerce operations and the AquaCRM agency platform.
          Explore the thinking and the working areas behind each one.
        </p>
      </section>
      <div className="aqua3-work-grid">
        {aquaWork.map((work) => (
          <a className="aqua3-work-card" href={`/work/${work.slug}`} key={work.slug}>
            <div className="aqua3-work-image">
              <Image
                src={work.image}
                alt={work.imageAlt}
                fill
                sizes="(min-width: 800px) 50vw, 100vw"
                className="aqua2-cover"
              />
            </div>
            <div className="aqua3-work-card-content">
              <p className="aqua2-kicker">{work.type}</p>
              <h3>{work.title}</h3>
              <p>{work.summary}</p>
              <span>Explore the system →</span>
            </div>
          </a>
        ))}
      </div>

      <section className="aqua3-closing">
        <p className="aqua2-kicker">AquaCRM</p>
        <h2>The operating platform we use is part of the proof.</h2>
        <p>
          AquaCRM brings leads, clients, delivery, finance, support and
          development visibility into one connected workspace. It is also a
          practical example of how we approach complex operational software.
        </p>
        <a href={`${portalUrl}/login?next=/portal`}>Open AquaCRM →</a>
      </section>
    </AquaPageShell>
  );
}
