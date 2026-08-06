import Link from "next/link";
import { AquaPageHero } from "@/components/AquaPageHero";
import { AquaPageShell } from "@/components/AquaPageShell";

export default function AboutPage() {
  return (
    <AquaPageShell>
      <AquaPageHero
        eyebrow="About AquaOasis-Web"
        title="Digital work should leave a business more capable."
        copy="Aqua was started in Suffolk to help businesses enter the digital age without being buried in jargon, locked into unnecessary tools or left carrying the difficult parts alone."
        image="/images/aquaoasis-hero.png"
        imageAlt="A website planning and management workspace"
        secondaryLabel="Explore our work"
        secondaryHref="/work"
      />

      <section className="aqua3-case-lead">
        <div>
          <p className="aqua2-kicker">Built by Edward Hallam</p>
          <h2>Practical first. Ambitious when it earns the right.</h2>
        </div>
        <div>
          <p>
            AquaOasis-Web began with a simple frustration: too many businesses
            know they need to improve online, but the route is made to feel more
            confusing and expensive than it needs to be.
          </p>
          <p>
            Today the work stretches from local visibility and focused websites
            to ecommerce, campaigns, customer portals and bespoke operational
            software. The scale changes. The standard does not: understand the
            people, make the next action clear and build something the business
            can genuinely use.
          </p>
        </div>
      </section>

      <section className="aqua3-process">
        <div>
          <p className="aqua2-kicker">How we think</p>
          <h2>Useful, clear and built to keep moving.</h2>
        </div>
        <ol>
          <li><span>01</span><div><strong>Start with reality</strong><p>Understand the customer, operation, constraints and opportunity before prescribing a build.</p></div></li>
          <li><span>02</span><div><strong>Make it recognisably yours</strong><p>Creative direction should reveal the business, not disguise it with a generic template.</p></div></li>
          <li><span>03</span><div><strong>Let evidence improve it</strong><p>Measure what people find, understand and act on, then focus effort where it matters.</p></div></li>
          <li><span>04</span><div><strong>Keep ownership clear</strong><p>Make responsibilities, files, decisions and next steps visible throughout the relationship.</p></div></li>
        </ol>
      </section>

      <section className="aqua3-closing">
        <p className="aqua2-kicker">Part of the Zimante Group family of brands</p>
        <h2>Specialist digital work, connected when the project needs more.</h2>
        <p>
          Aqua works alongside Milesymedia for original photography and video,
          with Zimante Group coordinating broader projects that cross both
          companies.
        </p>
        <Link href="/#contact">Talk to Aqua →</Link>
      </section>
    </AquaPageShell>
  );
}
