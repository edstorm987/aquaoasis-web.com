import { ContactForm } from "@/components/ContactForm";
import { ProductCard } from "@/components/ProductCard";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

const products = [
  {
    eyebrow: "Baby tier",
    title: "Getting You Online",
    price: "Foundation package",
    description:
      "For physical businesses that need to be found, trusted, and contactable before anything fancy happens.",
    points: [
      "Google Business Profile setup or rebuild",
      "Photos, service copy, opening details, and contact routes",
      "Review setup plus a simple review landing page",
      "Local visibility foundations so customers can find you",
    ],
    cta: "Start with foundation",
    href: "#contact",
  },
  {
    eyebrow: "Main offer",
    title: "Website Build",
    price: "From £899",
    description:
      "Once the basics are fixed, we build the website that turns attention into enquiries.",
    points: [
      "Clear pages, sharp copy, and enquiry-focused layout",
      "Built around your offer, area, trust signals, and next step",
      "No subscription lock-in for the website itself",
      "Scoped properly after a quick discovery call",
    ],
    cta: "Talk about a website",
    href: "#contact",
    featured: true,
  },
  {
    eyebrow: "Creators",
    title: "Creator Setup",
    price: "Presence package",
    description:
      "For creators and personal brands that need clean accounts, consistent profiles, and a professional starting point.",
    points: [
      "Social account setup and profile cleanup",
      "Bios, links, profile structure, and brand consistency",
      "Simple content direction so the account has a purpose",
      "Optional setup support for contact routes and enquiries",
    ],
    cta: "Build my presence",
    href: "#contact",
  },
];

const ladder = [
  "Get visible with Google and trust signals.",
  "Turn that visibility into enquiries with a proper website.",
  "Build social proof and presence around the brand.",
  "Increase traffic with SEO, social, and ads when the foundation is ready.",
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">AquaOasis-Web</p>
              <h1 id="hero-title">Enter the digital age without getting lost in it.</h1>
              <p>
                We help physical businesses, startups, and creators get found,
                look professional, and build the online foundation that leads to
                real customers.
              </p>
              <div className="hero-actions">
                <a className="primary-button" href="#products">
                  View products
                </a>
                <a className="secondary-button" href="#contact">
                  Get in touch
                </a>
              </div>
            </div>
            <aside className="hero-panel" aria-label="AquaOasis-Web product ladder">
              <p className="eyebrow">The ladder</p>
              <ol>
                {ladder.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
              <p className="panel-note">
                Start simple. Build properly. Then push traffic when there is
                something worth sending people to.
              </p>
            </aside>
          </div>
        </section>

        <section className="section intro-section" aria-labelledby="why-title">
          <div className="container split">
            <div>
              <p className="eyebrow">Why it exists</p>
              <h2 id="why-title">Most businesses know they need to be online. They just do not know where to start.</h2>
            </div>
            <div className="intro-copy">
              <p>
                AquaOasis-Web is built for people who want the next sensible
                step, not a confusing pitch. Maybe your Google profile is weak.
                Maybe your website is outdated. Maybe you are starting from
                zero. We find the shortest path to getting you seen, trusted,
                and contacted.
              </p>
              <p>
                After the foundation is strong, growth becomes easier. That is
                where ongoing SEO, content, social media, and ads can come in.
                Not before the basics are ready.
              </p>
            </div>
          </div>
        </section>

        <section className="section products-section" id="products" aria-labelledby="products-title">
          <div className="container section-heading">
            <p className="eyebrow">Products</p>
            <h2 id="products-title">Choose the stage you are at.</h2>
            <p>
              Three clear ways to start, depending on whether you need local
              visibility, a website, or a creator presence.
            </p>
          </div>
          <div className="container product-grid">
            {products.map((product) => (
              <ProductCard key={product.title} {...product} />
            ))}
          </div>
        </section>

        <section className="section growth-section" aria-labelledby="growth-title">
          <div className="container growth-card">
            <div>
              <p className="eyebrow">After launch</p>
              <h2 id="growth-title">Then we help you boost traffic.</h2>
            </div>
            <p>
              Once your profile, website, and contact routes are ready, the next
              game is attention: SEO, social media, content, and ads. This can
              be structured around performance, commission, or a plan that makes
              sense for the business.
            </p>
          </div>
        </section>

        <section className="section contact-section" id="contact" aria-labelledby="contact-title">
          <div className="container contact-grid">
            <div>
              <p className="eyebrow">Start here</p>
              <h2 id="contact-title">Tell us where you are now. We will tell you the cleanest next step.</h2>
              <p>
                No pressure to buy the biggest thing. If you only need the Google
                foundation fixed first, we will say that. If you are ready for a
                website, we will scope it properly.
              </p>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
