import Link from "next/link";
import { AquaPageHero } from "@/components/AquaPageHero";
import { AquaPageShell } from "@/components/AquaPageShell";

const solutions = [
  {
    title: "Local visibility",
    copy: "Google Business Profile, reviews, service information and local trust built into a clear route to enquire.",
    href: "/local-visibility",
  },
  {
    title: "Websites and ecommerce",
    copy: "From a focused first website to bookings, memberships, ecommerce and content-rich customer journeys.",
    href: "/websites",
  },
  {
    title: "Bespoke software",
    copy: "Customer portals, internal tools, automation and operational systems designed around the work itself.",
    href: "/software",
  },
  {
    title: "Campaigns and growth",
    copy: "Search, content, social, paid campaigns and conversion improvements guided by useful evidence.",
    href: "/growth",
  },
  {
    title: "Enterprise partnerships",
    copy: "A joined-up digital partner for larger programmes, established teams and connected customer experiences.",
    href: "/enterprise",
  },
];

export default function SolutionsPage() {
  return (
    <AquaPageShell>
      <AquaPageHero
        eyebrow="One connected digital partner"
        title="Start with the problem. Build only what earns its place."
        copy="Aqua brings visibility, websites, commerce, campaigns and bespoke software together. Choose one useful step or let us connect the whole journey."
        image="/images/aquaoasis-hero-luxury.png"
        imageAlt="A connected digital landscape representing websites and software"
        secondaryLabel="See the work"
        secondaryHref="/work"
      />
      <section className="aqua3-section">
        <div className="aqua3-heading">
          <div>
            <p className="aqua2-kicker">Capabilities</p>
            <h2>A clear route from being found to running better.</h2>
          </div>
          <p>
            The public experience and the systems behind it should support one
            another. We can solve one immediate gap without losing sight of the
            complete operation.
          </p>
        </div>
        <div className="aqua3-solution-list">
          {solutions.map((solution, index) => (
            <article className="aqua3-solution" key={solution.title}>
              <span>0{index + 1}</span>
              <h3>{solution.title}</h3>
              <p>{solution.copy}</p>
              <Link href={solution.href}>Explore solution →</Link>
            </article>
          ))}
        </div>
      </section>
      <section className="aqua3-closing">
        <p className="aqua2-kicker">Not sure where to begin?</p>
        <h2>Show us the situation. We will make the next step clear.</h2>
        <p>
          You do not need a technical brief or a finished plan. Bring the
          bottleneck, ambition or customer problem and we will work back from it.
        </p>
        <Link href="/#contact">Start the conversation →</Link>
      </section>
    </AquaPageShell>
  );
}
