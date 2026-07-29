import Image from "next/image";

export function AquaPageHero({
  eyebrow,
  title,
  copy,
  image,
  imageAlt,
  primaryLabel = "Tell us what you need",
  primaryHref = "/#contact",
  secondaryLabel,
  secondaryHref,
}: {
  eyebrow: string;
  title: string;
  copy: string;
  image: string;
  imageAlt: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="aqua3-hero">
      <Image
        src={image}
        alt={imageAlt}
        fill
        loading="eager"
        sizes="100vw"
        className="aqua2-cover"
      />
      <div className="aqua3-hero-shade" />
      <div className="aqua3-hero-inner">
        <p className="aqua2-kicker">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{copy}</p>
        <div className="aqua2-actions">
          <a href={primaryHref}>{primaryLabel} <span aria-hidden="true">→</span></a>
          {secondaryLabel && secondaryHref ? (
            <a href={secondaryHref}>{secondaryLabel}</a>
          ) : null}
        </div>
      </div>
    </section>
  );
}
