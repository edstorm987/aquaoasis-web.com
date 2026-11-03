import Link from "next/link";
import { Icon } from "@/components/site/Icon";
import { CtaBand, Faq, PageHero } from "@/components/site/blocks";

export const metadata = {
  title: "Pricing",
  description: "Focused first websites from £899. Everything else quoted on what you actually need.",
};

// Only the starter website price is published today. Everything else is quoted.
const packages = [
  {
    name: "First website",
    price: "£899",
    from: true,
    copy: "A credible, fast website for getting online properly and making the next step obvious.",
    points: ["Mobile-first design", "Clear copy written with you", "Enquiry routes that land", "Google-ready foundations"],
    href: "/services/websites",
    featured: true,
  },
  {
    name: "Google & local",
    price: null,
    copy: "Google Business Profile set up or rebuilt, reviews, listings and local search foundations.",
    points: ["Profile and photos", "Review requests", "Listings clean-up", "Monthly reporting"],
    href: "/services/google-seo",
  },
  {
    name: "Social media",
    price: null,
    copy: "Profiles set up, content planned and posts created and published for you, every month.",
    points: ["Monthly content plan", "Posts, reels and captions", "Scheduling", "Plain-English results"],
    href: "/services/social-media",
  },
  {
    name: "Shops & campaigns",
    price: null,
    copy: "Online shops, bookings, ads and email campaigns, scoped around your products and goals.",
    points: ["Ecommerce and bookings", "Google and social ads", "Email campaigns", "Tracking that proves it"],
    href: "/services/ecommerce",
  },
];

const faqs = [
  { q: "Why don't you list every price?", a: "Because a café and a 500-product shop need very different things. We'd rather give you a real number than a misleading one. Quotes are quick and free." },
  { q: "Are there hidden costs?", a: "No. You'll see everything in writing before anything starts, including things like domain names or ad spend that go to third parties." },
  { q: "Can I spread the cost?", a: "Ask us. We'll always try to find a sensible way to get you started." },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        kicker="Pricing"
        title={<>Clear prices. <span className="gradient-text">No surprises.</span></>}
        lede="Focused first websites start from £899. Everything else is quoted on what you actually need, and you'll always see the price before any work starts."
        crumbs={[{ href: "/pricing", label: "Pricing" }]}
      />
      <section className="section">
        <div className="wrap">
          <div className="grid grid-4">
            {packages.map((item, index) => (
              <article key={item.name} className={`card price-card${item.featured ? " featured" : ""}`} data-reveal style={{ "--d": `${index * 0.06}s` } as React.CSSProperties}>
                <h2 className="h-sm">{item.name}</h2>
                <p className="price">
                  {item.price ? <>{item.from ? <small>from</small> : null}{item.price}</> : <span style={{ fontSize: "0.7em" }}>Get a quote</span>}
                </p>
                <p>{item.copy}</p>
                <ul className="tick-list">{item.points.map((point) => <li key={point}>{point}</li>)}</ul>
                <Link className={`btn ${item.featured ? "btn-aqua" : "btn-primary"}`} href={item.price ? item.href : "/contact"}>
                  {item.price ? "See what's included" : "Get a quote"} <Icon name="arrow" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section paper-2">
        <div className="wrap"><div className="section-head"><p className="kicker">Pricing questions</p><h2 className="h-lg">Straight answers.</h2></div><Faq items={faqs} /></div>
      </section>
      <CtaBand title="Get a free, no-pressure quote." primary={{ href: "/contact", label: "Get my quote" }} />
    </>
  );
}
