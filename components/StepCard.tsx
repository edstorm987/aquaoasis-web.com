type StepCardProps = {
  step: string;
  title: string;
  description: string;
  index: number;
};

export function StepCard({ step, title, description, index }: StepCardProps) {
  return (
    <article className={`step-card reveal reveal-delay-${Math.min(index + 1, 3)}`}>
      <div className="step-number">{step}</div>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
}
