import Link from "next/link";
import { AquaPageHero } from "./AquaPageHero";
import { AquaPageShell } from "./AquaPageShell";

export function AquaServicePage({
  eyebrow,
  title,
  copy,
  image,
  imageAlt,
  outcomes,
  offerTitle,
  offerCopy,
  offers,
  process,
  closingTitle,
  closingCopy,
}: {
  eyebrow: string;
  title: string;
  copy: string;
  image: string;
  imageAlt: string;
  outcomes: string[];
  offerTitle: string;
  offerCopy: string;
  offers: Array<{ title: string; copy: string; points: string[] }>;
  process: Array<{ title: string; copy: string }>;
  closingTitle: string;
  closingCopy: string;
}) {
  return (
    <AquaPageShell>
      <AquaPageHero
        eyebrow={eyebrow}
        title={title}
        copy={copy}
        image={image}
        imageAlt={imageAlt}
        secondaryLabel="See our work"
        secondaryHref="/work"
      />

      <section className="aqua3-outcomes" aria-label="What this helps achieve">
        {outcomes.map((outcome) => <p key={outcome}>{outcome}</p>)}
      </section>

      <section className="aqua3-section">
        <div className="aqua3-heading">
          <div>
            <p className="aqua2-kicker">What we can do</p>
            <h2>{offerTitle}</h2>
          </div>
          <p>{offerCopy}</p>
        </div>
        <div className="aqua3-offer-grid">
          {offers.map((offer, index) => (
            <article key={offer.title}>
              <span>0{index + 1}</span>
              <h3>{offer.title}</h3>
              <p>{offer.copy}</p>
              <ul>
                {offer.points.map((point) => <li key={point}>{point}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="aqua3-process">
        <div>
          <p className="aqua2-kicker">How it moves</p>
          <h2>Clear stages. No mystery.</h2>
        </div>
        <ol>
          {process.map((item, index) => (
            <li key={item.title}>
              <span>0{index + 1}</span>
              <div>
                <strong>{item.title}</strong>
                <p>{item.copy}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="aqua3-closing">
        <p className="aqua2-kicker">Start at the useful point</p>
        <h2>{closingTitle}</h2>
        <p>{closingCopy}</p>
        <Link href="/#contact">Tell us what you need →</Link>
      </section>
    </AquaPageShell>
  );
}
