import Image from "next/image";
import Link from "next/link";
import { AquaEnquiryForm } from "@/components/AquaEnquiryForm";
import { AquaSiteFooter } from "@/components/AquaSiteFooter";
import { AquaSiteHeader } from "@/components/AquaSiteHeader";

const outcomes = [
  {
    number: "01",
    title: "More people find you",
    copy: "A stronger Google presence, a credible website and campaigns that put you in front of the right customers.",
  },
  {
    number: "02",
    title: "More people choose you",
    copy: "Clear offers, original photography and easier journeys that give people a reason to act.",
  },
  {
    number: "03",
    title: "Less work falls through",
    copy: "Connected forms, software and simple systems that keep enquiries, customers and delivery moving.",
  },
];

const services = [
  {
    label: "Get found",
    title: "Google and local visibility",
    copy: "Set up or rebuild your Google Business Profile, make your information accurate and turn local searches into calls, visits and enquiries.",
    includes: "Google profile, local pages, reviews and search foundations",
    href: "/local-visibility",
  },
  {
    label: "Get online",
    title: "Websites and ecommerce",
    copy: "A clear digital home that looks like your business, works on every screen and makes the next step obvious.",
    includes: "Starter sites, bookings, ecommerce and larger web platforms",
    href: "/websites",
  },
  {
    label: "Get noticed",
    title: "Photography and content",
    copy: "Original business photography, film and campaign assets planned with Milesymedia, so the work feels like you rather than a stock template.",
    includes: "People, places, products, events and campaign production",
    href: "/#media",
  },
  {
    label: "Get customers",
    title: "Campaigns and growth",
    copy: "Practical SEO, advertising, email and social campaigns with proper tracking, so you can see what is earning attention and what is not.",
    includes: "SEO, paid campaigns, content, conversion and reporting",
    href: "/growth",
  },
  {
    label: "Run better",
    title: "Software and automation",
    copy: "When off-the-shelf tools stop fitting, we build the portal, dashboard or workflow your team and customers actually need.",
    includes: "Customer portals, internal tools, automation and AquaCRM",
    href: "/software",
  },
];

const work = [
  {
    image: "/work/ocean-boulevard/website.png",
    alt: "Ocean Boulevard public website",
    type: "Hospitality website and operations",
    title: "Ocean Boulevard",
    copy: "A public venue website connected to the operational tools used behind the scenes.",
    href: "/work/ocean-boulevard",
  },
  {
    image: "/work/beast-commerce/storefront.png",
    alt: "Beast Commerce ecommerce storefront",
    type: "Ecommerce and fulfilment",
    title: "Beast Commerce",
    copy: "A customer storefront joined to products, orders and the team responsible for delivery.",
    href: "/work/beast-commerce",
  },
  {
    image: "/work/demo-media/overview.png",
    alt: "Demo Media photography website concept",
    type: "Media website concept",
    title: "Demo Media",
    copy: "An immersive service, gallery and enquiry experience built to show what a media brand could become.",
    href: "/work/demo-media",
  },
];

const principles = [
  "Build what the business needs, not what makes the proposal bigger.",
  "Explain the work plainly and keep the owner close to every decision.",
  "Measure the customer journey, then improve it with evidence.",
  "Leave the business clearer, more capable and easier to run.",
];

export default function Home() {
  const milesymediaUrl =
    process.env.NEXT_PUBLIC_MILESYMEDIA_URL ?? "https://milesymedia.com";

  return (
    <main className="aqua2-site oasis-home">
      <AquaSiteHeader />

      <section className="oasis-hero">
        <Image
          src="/work/beast-commerce/operations.png"
          alt="A connected business operations workspace built by AquaOasis-Web"
          fill
          priority
          sizes="100vw"
          className="oasis-hero-image"
        />
        <div className="oasis-hero-shade" />
        <div className="oasis-shell oasis-hero-inner">
          <p className="oasis-kicker">A practical digital agency</p>
          <h1>Get your business online. Then make it work harder.</h1>
          <p className="oasis-hero-copy">
            Websites, Google visibility, campaigns, business photography and
            custom software from one team. Start with the problem in front of
            you. We will make the next step clear.
          </p>
          <div className="oasis-actions">
            <a className="oasis-button oasis-button-primary" href="#contact">
              Start a project <span aria-hidden="true">→</span>
            </a>
            <a className="oasis-button oasis-button-ghost" href="#work">
              See our work
            </a>
          </div>
          <div className="oasis-hero-detail" aria-label="Who AquaOasis-Web works with">
            <span>Suffolk based</span>
            <span>Built for small businesses and growing teams</span>
            <span>Single projects or ongoing support</span>
          </div>
        </div>
      </section>

      <section className="oasis-outcomes" aria-label="What AquaOasis-Web helps improve">
        <div className="oasis-shell oasis-outcome-grid">
          {outcomes.map((outcome) => (
            <article key={outcome.number}>
              <span>{outcome.number}</span>
              <div>
                <h2>{outcome.title}</h2>
                <p>{outcome.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="work" className="oasis-section oasis-work">
        <div className="oasis-shell">
          <div className="oasis-heading">
            <div>
              <p className="oasis-kicker">Selected work</p>
              <h2>See the front door. Then see what runs behind it.</h2>
            </div>
            <div>
              <p>
                We connect the public experience to the practical systems that
                make it useful. These are real builds and clearly labelled
                concepts, not borrowed mockups or invented results.
              </p>
              <Link href="/work">View every project →</Link>
            </div>
          </div>
          <div className="oasis-work-grid">
            {work.map((project) => (
              <Link className="oasis-work-card" href={project.href} key={project.title}>
                <div className="oasis-work-image">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes="(min-width: 900px) 33vw, 100vw"
                  />
                </div>
                <div className="oasis-work-copy">
                  <p className="oasis-card-label">{project.type}</p>
                  <h3>{project.title}</h3>
                  <p>{project.copy}</p>
                  <span>Open project →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="oasis-section oasis-services">
        <div className="oasis-shell">
          <div className="oasis-heading">
            <div>
              <p className="oasis-kicker">What we do</p>
              <h2>Everything needed to get online, get chosen and keep moving.</h2>
            </div>
            <p>
              You do not need every service. We find the smallest useful move,
              make it properly and keep the pieces connected as the business
              grows.
            </p>
          </div>
          <div className="oasis-service-list">
            {services.map((service, index) => (
              <article key={service.title}>
                <div className="oasis-service-index">{String(index + 1).padStart(2, "0")}</div>
                <div>
                  <p className="oasis-card-label">{service.label}</p>
                  <h3>{service.title}</h3>
                </div>
                <p>{service.copy}</p>
                <div className="oasis-service-end">
                  <span>{service.includes}</span>
                  <Link href={service.href} aria-label={`Explore ${service.title}`}>
                    Explore <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="tools" className="oasis-tools">
        <div className="oasis-shell">
          <div className="oasis-tools-intro">
            <p className="oasis-kicker">Start before you buy</p>
            <h2>First, work out what is actually holding the business back.</h2>
            <p>
              Our two starting tools turn a vague feeling that something needs
              fixing into a useful picture of what to do next.
            </p>
          </div>
          <div className="oasis-tool-grid">
            <Link href="/health-check" className="oasis-tool-card">
              <span className="oasis-tool-number">01</span>
              <p className="oasis-card-label">Free starting point</p>
              <h3>Business Health Check</h3>
              <p>
                Review how customers find you, choose you and move through the
                business. Leave with the gaps and priorities in plain English.
              </p>
              <strong>Run the health check →</strong>
            </Link>
            <Link href="/business-os" className="oasis-tool-card oasis-tool-card-dark">
              <span className="oasis-tool-number">02</span>
              <p className="oasis-card-label">For a business ready to organise</p>
              <h3>Business OS</h3>
              <p>
                Bring goals, leads, delivery, money and the repeatable work into
                one operating plan your team can actually follow.
              </p>
              <strong>Explore Business OS →</strong>
            </Link>
          </div>
        </div>
      </section>

      <section className="oasis-method">
        <div className="oasis-shell oasis-method-grid">
          <div>
            <p className="oasis-kicker">How it works</p>
            <h2>We learn how the business moves. Then we improve the part that matters.</h2>
          </div>
          <ol>
            <li>
              <span>01</span>
              <div><strong>Look properly</strong><p>We learn the offer, the customer journey and where time or enquiries are being lost.</p></div>
            </li>
            <li>
              <span>02</span>
              <div><strong>Build the useful thing</strong><p>We agree the clearest scope, create it with you and avoid unnecessary extras.</p></div>
            </li>
            <li>
              <span>03</span>
              <div><strong>Measure and improve</strong><p>Once it is live, the data shows where the next useful improvement belongs.</p></div>
            </li>
          </ol>
        </div>
      </section>

      <section id="media" className="oasis-media">
        <div className="oasis-media-image">
          <Image
            src="/work/demo-media/overview.png"
            alt="A media website experience designed for photography and film"
            fill
            sizes="(min-width: 900px) 52vw, 100vw"
          />
        </div>
        <div className="oasis-media-copy">
          <p className="oasis-kicker">Photography and production by Milesymedia</p>
          <h2>Your website should not look like everybody else&apos;s.</h2>
          <p>
            When the work needs original photography, film or campaign content,
            Milesymedia joins the same brief. The visuals are planned for the
            website, Google profile, advert and places your customers will
            actually see them.
          </p>
          <a href={milesymediaUrl} target="_blank" rel="noopener noreferrer">
            Meet Milesymedia <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <section id="about" className="oasis-section oasis-about">
        <div className="oasis-shell oasis-about-grid">
          <div>
            <p className="oasis-kicker">The mission</p>
            <h2>Good digital work should feel clear, useful and within reach.</h2>
          </div>
          <div className="oasis-about-copy">
            <p className="oasis-about-lead">
              AquaOasis-Web was started by Edward Hallam to give businesses one
              dependable place for the public website and the systems behind it.
              Close enough to understand the details. Capable enough to keep
              building as the opportunity grows.
            </p>
            <ul>
              {principles.map((principle) => <li key={principle}>{principle}</li>)}
            </ul>
            <Link href="/about">More about AquaOasis-Web →</Link>
          </div>
        </div>
      </section>

      <section id="contact" className="oasis-contact">
        <div className="oasis-shell oasis-contact-grid">
          <div>
            <p className="oasis-kicker">Start with the real situation</p>
            <h2>Tell us what is not working yet.</h2>
            <p>
              A half-formed idea is enough. Tell us where the business is now,
              what you want to change and how you would prefer us to get in
              touch. We will make the next step clear.
            </p>
            <div className="oasis-contact-notes">
              <span>No polished brief required</span>
              <span>Single project or ongoing help</span>
              <span>Plain answer, practical next step</span>
            </div>
          </div>
          <AquaEnquiryForm />
        </div>
      </section>

      <AquaSiteFooter milesymediaUrl={milesymediaUrl} />
    </main>
  );
}
