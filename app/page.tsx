import Image from "next/image";
import { AquaEnquiryForm } from "@/components/AquaEnquiryForm";
import { AquaSiteFooter } from "@/components/AquaSiteFooter";
import { AquaSiteHeader } from "@/components/AquaSiteHeader";

const stages = [
  {
    number: "01",
    href: "/local-visibility",
    label: "Get found",
    title: "Google and local visibility",
    copy: "Put the right details, proof, photography and contact routes where nearby customers are already searching.",
    points: ["Google Business Profile setup or rebuild", "Reviews and local trust", "Accurate services, areas and contact routes"],
  },
  {
    number: "02",
    href: "/#media",
    label: "Look the part",
    title: "Photography, film and creative production",
    copy: "Original work from Milesymedia gives the website, campaign and brand something real to say and something worth noticing.",
    points: ["Commercial photography and film", "Events, people, property and products", "One brief across production and digital delivery"],
  },
  {
    number: "03",
    href: "/websites",
    label: "Get online",
    title: "Simple websites that do the job",
    copy: "A focused, credible website for businesses that need to look right, explain the offer and start receiving enquiries.",
    points: ["Website builds from £899", "Mobile-first design and copy", "Accessible, fast and easy to manage"],
  },
  {
    number: "04",
    href: "/websites",
    label: "Get chosen",
    title: "Conversion websites and ecommerce",
    copy: "Deeper strategy, customer journeys, booking or buying flows and creative direction shaped around what helps people decide.",
    points: ["Research-led structure and messaging", "Bookings, payments and ecommerce", "Measurement built in from launch"],
  },
  {
    number: "05",
    href: "/software",
    label: "Get connected",
    title: "Software, portals and automation",
    copy: "When a website is only the front door, we build the systems behind it: customer portals, internal tools and connected workflows.",
    points: ["Bespoke portals and operational software", "Automations and integrations", "One connected customer experience"],
  },
  {
    number: "06",
    href: "/growth",
    label: "Keep growing",
    title: "Campaigns and optimisation",
    copy: "SEO, content, social and paid campaigns supported by real conversion data, so effort follows evidence instead of opinion.",
    points: ["Campaign direction and delivery", "Conversion testing and reporting", "Ongoing improvements across the journey"],
  },
];

const builds = [
  {
    image: "/images/aquaoasis-card-profile.png",
    href: "/local-visibility",
    alt: "Local visibility, profile and performance interfaces",
    eyebrow: "Local businesses",
    title: "From invisible to easy to choose",
    copy: "Google presence, reviews, a convincing website and clear enquiry routes working as one.",
  },
  {
    image: "/images/aquaoasis-hero.png",
    href: "/websites",
    alt: "Website planning and management workspace on a laptop",
    eyebrow: "Websites and commerce",
    title: "A digital home built around the decision",
    copy: "From a sharp first website to ecommerce, bookings, memberships and content-rich platforms.",
  },
  {
    image: "/images/aquaoasis-card-audit.png",
    href: "/software",
    alt: "Website audit and performance dashboard",
    eyebrow: "Software and growth",
    title: "The systems behind the screen",
    copy: "Portals, dashboards, automations and campaigns that remove busywork and reveal what needs attention.",
  },
  {
    image: "/work/demo-media/experience.jpg",
    href: "/#media",
    alt: "Original Milesymedia photography and visual production",
    eyebrow: "Photography and film",
    title: "Creative production built for the campaign",
    copy: "Original photography, film and aerial work planned alongside the website, launch and places it needs to perform.",
  },
];

export default function Home() {
  const milesymediaUrl =
    process.env.NEXT_PUBLIC_MILESYMEDIA_URL ?? "http://localhost:3030";

  return (
    <main className="aqua2-site">
      <AquaSiteHeader />

      <section className="aqua2-hero">
        <Image
          src="/images/aquaoasis-hero-luxury.png"
          alt="Connected website experiences emerging from a digital landscape"
          fill
          priority
          sizes="100vw"
          className="aqua2-hero-image"
        />
        <div className="aqua2-hero-shade" />
        <div className="aqua2-hero-inner">
          <p className="aqua2-kicker">Media · websites · marketing · software</p>
          <h1>The all-in-one digital agency.</h1>
          <p className="aqua2-hero-copy">
            Get found, look unmistakably like yourself and turn attention into
            action. AquaOasis-Web joins strategy, Milesymedia production,
            converting websites, campaigns and bespoke software around one
            commercial goal.
          </p>
          <div className="aqua2-actions">
            <a href="#contact">Tell us what you need <span aria-hidden="true">→</span></a>
            <a href="#solutions">Explore the journey</a>
          </div>
          <div className="aqua2-hero-note">
            <span>Accessible from day one</span>
            <span>Built around real customers</span>
            <span>Ready to grow when you are</span>
          </div>
        </div>
      </section>

      <section className="aqua2-promise" aria-label="AquaOasis-Web approach">
        <p>Enter the digital age.</p>
        <p>Become the obvious choice.</p>
        <p>Stay ahead without carrying it all yourself.</p>
      </section>

      <section id="solutions" className="aqua2-section aqua2-solutions">
        <div className="aqua2-section-heading">
          <div>
            <p className="aqua2-kicker">Start where you are</p>
          <h2>One partner from first impression to full digital operation.</h2>
          </div>
          <p>
            You do not need to buy everything. We identify the shortest useful
            next step, build it properly and leave room for what comes next.
          </p>
        </div>

        <div className="aqua2-stage-list">
          {stages.map((stage) => (
            <article key={stage.number} className="aqua2-stage">
              <div className="aqua2-stage-number">{stage.number}</div>
              <div>
                <p className="aqua2-stage-label">{stage.label}</p>
                <h3>{stage.title}</h3>
              </div>
              <p className="aqua2-stage-copy">{stage.copy}</p>
              <ul>
                {stage.points.map((point) => <li key={point}>{point}</li>)}
              </ul>
              <a href={stage.href} aria-label={`Explore ${stage.title}`}>Explore this stage →</a>
            </article>
          ))}
        </div>
      </section>

      <section id="method" className="aqua2-data">
        <div className="aqua2-data-copy">
          <p className="aqua2-kicker">Data decides design</p>
          <h2>Good-looking is the baseline. Useful is the point.</h2>
          <p>
            Creative direction gives the brand character. Customer evidence gives
            the experience purpose. We combine both, then measure what people find,
            understand and act on.
          </p>
          <ol>
            <li><span>01</span><div><strong>Understand</strong><p>Your offer, customers, competition and current blind spots.</p></div></li>
            <li><span>02</span><div><strong>Build</strong><p>The clearest journey, with the right words, visuals and technology.</p></div></li>
            <li><span>03</span><div><strong>Learn</strong><p>Track real behaviour and improve what matters after launch.</p></div></li>
          </ol>
        </div>
        <div className="aqua2-data-visual">
          <Image
            src="/images/aquaoasis-card-audit.png"
            alt="Website experience and performance audit"
            fill
            sizes="(min-width: 900px) 50vw, 100vw"
            className="aqua2-cover"
          />
        </div>
      </section>

      <section id="work" className="aqua2-section aqua2-builds">
        <div className="aqua2-section-heading">
          <div>
            <p className="aqua2-kicker">What we build</p>
            <h2>Simple when simple is enough. Serious when it needs to scale.</h2>
          </div>
          <p>
            Every build should feel true to the business, clear to the customer
            and proportionate to the opportunity.
          </p>
        </div>
        <div className="aqua2-build-grid">
          {builds.map((build) => (
            <article key={build.title}>
              <div className="aqua2-build-image">
                <Image src={build.image} alt={build.alt} fill sizes="(min-width: 900px) 33vw, 100vw" className="aqua2-cover" />
              </div>
              <p className="aqua2-kicker">{build.eyebrow}</p>
              <h3>{build.title}</h3>
              <p>{build.copy}</p>
              <a href={build.href}>Explore this work →</a>
            </article>
          ))}
        </div>
      </section>

      <section id="media" className="aqua2-media-partner" aria-labelledby="media-partner-title">
        <div className="aqua2-media-partner-icon" aria-hidden="true">
          M
        </div>
        <div>
          <p className="aqua2-kicker">Milesymedia photography and production</p>
          <h2 id="media-partner-title">
            Original visuals are part of the system, not an afterthought.
          </h2>
          <p>
            The people behind Milesymedia plan photography, film and aerial work
            alongside your website and campaigns. That means one direction, one
            joined-up brief and assets created for the exact places they need to
            earn attention.
          </p>
        </div>
        <a href={milesymediaUrl}>
          Explore Milesymedia
          <span aria-hidden="true">↗</span>
        </a>
      </section>

      <section className="aqua2-access">
        <div>
          <p className="aqua2-kicker">Built for real people</p>
          <h2>Accessible is not an upgrade.</h2>
        </div>
        <div>
          <p>
            Clear language, readable contrast, keyboard access, sensible motion
            and responsive layouts are part of the build. The web should work for
            more people, on more devices, in more situations.
          </p>
          <p>
            Our starting options keep professional digital foundations within
            reach. Larger work is scoped around the value and complexity involved,
            not dressed up with unnecessary features.
          </p>
        </div>
      </section>

      <section id="enterprise" className="aqua2-enterprise">
        <Image
          src="/images/aquaoasis-hero-luxury.png"
          alt=""
          fill
          sizes="100vw"
          className="aqua2-cover"
        />
        <div className="aqua2-enterprise-shade" />
        <div className="aqua2-enterprise-inner">
          <p className="aqua2-kicker">Enterprise and partnerships</p>
          <h2>Need a team that can see the whole system?</h2>
          <p>
            Bring us into a new platform, a transformation programme or an
            established delivery team. We can lead the digital experience or work
            alongside internal, creative and technical partners.
          </p>
          <a href="#contact">Start a partnership conversation →</a>
        </div>
      </section>

      <section id="contact" className="aqua2-section aqua2-contact">
        <div>
          <p className="aqua2-kicker">Start with the real situation</p>
          <h2>Tell us where you are. We will make the next step clear.</h2>
          <p>
            Choose everything that may be relevant. You do not need a polished
            brief, and we will not force a larger solution when a smaller one will
            do the job.
          </p>
          <div className="aqua2-contact-points">
            <span>For new and established businesses</span>
            <span>Single projects or ongoing partnership</span>
            <span>One connected team across media, marketing, web and software</span>
          </div>
        </div>
        <AquaEnquiryForm />
      </section>

      <AquaSiteFooter
        milesymediaUrl={milesymediaUrl}
      />
    </main>
  );
}
