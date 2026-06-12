type FeatureListProps = {
  features: string[];
};

export function FeatureList({ features }: FeatureListProps) {
  return (
    <ul className="feature-list reveal reveal-delay-1" aria-label="What is included">
      {features.map((feature) => (
        <li key={feature}>
          <span aria-hidden="true">✓</span>
          {feature}
        </li>
      ))}
    </ul>
  );
}
