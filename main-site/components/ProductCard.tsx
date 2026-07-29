type ProductCardProps = {
  eyebrow: string;
  title: string;
  price: string;
  description: string;
  points: string[];
  cta: string;
  href: string;
  featured?: boolean;
};

export function ProductCard({
  eyebrow,
  title,
  price,
  description,
  points,
  cta,
  href,
  featured = false,
}: ProductCardProps) {
  return (
    <article className={featured ? "product-card featured" : "product-card"}>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h3>{title}</h3>
        <p className="product-price">{price}</p>
        <p>{description}</p>
      </div>
      <ul>
        {points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
      <a className={featured ? "primary-button" : "secondary-button"} href={href}>
        {cta}
      </a>
    </article>
  );
}
