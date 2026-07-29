import Image from "next/image";
import Link from "next/link";
import { AquaPageHero } from "@/components/AquaPageHero";
import { AquaPageShell } from "@/components/AquaPageShell";
import { aquaWork } from "@/app/portfolio-data";

export default function WorkPage() {
  return (
    <AquaPageShell>
      <AquaPageHero
        eyebrow="Selected systems and experiences"
        title="Work that joins the front door to everything behind it."
        copy="Websites, commerce and operational software are stronger when they are designed as one experience. Explore a growing selection of connected builds and working prototypes."
        image="/work/beast-commerce/storefront.png"
        imageAlt="A connected ecommerce storefront"
        secondaryLabel="Explore software"
        secondaryHref="/software"
      />
      <section className="aqua3-work-intro">
        <div>
          <p className="aqua2-kicker">Portfolio</p>
          <h2>Different businesses. The same insistence on clarity.</h2>
        </div>
        <p>
          The work ranges from hospitality and ecommerce to the system used to
          operate the wider group. Each case is shown honestly as an example of
          the product, interface and operational thinking involved.
        </p>
      </section>
      <div className="aqua3-work-grid">
        {aquaWork.map((work) => (
          <Link className="aqua3-work-card" href={`/work/${work.slug}`} key={work.slug}>
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
              <span>
                {"previewUrl" in work
                  ? "Open interactive case study →"
                  : "Open case study →"}
              </span>
            </div>
          </Link>
        ))}
      </div>
      <section className="aqua3-closing">
        <p className="aqua2-kicker">Your operation will be different</p>
        <h2>That is the point of building it around you.</h2>
        <p>
          Show us where customers get stuck, where the team loses time or where
          the current tools stop fitting. We will map a sensible route forward.
        </p>
        <Link href="/#contact">Talk through the opportunity →</Link>
      </section>
    </AquaPageShell>
  );
}
