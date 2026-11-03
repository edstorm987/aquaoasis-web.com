import Link from "next/link";
import type { ReactNode } from "react";
import type { Service } from "@/lib/site";
import { Icon } from "./Icon";

export function Aurora() {
  return (
    <>
      <div className="aurora" aria-hidden="true"><i /><i /><i /><i /></div>
      <div className="grid-lines" aria-hidden="true" />
    </>
  );
}

export function PageHero({
  kicker,
  title,
  lede,
  crumbs,
  actions,
  aside,
}: {
  kicker: string;
  title: ReactNode;
  lede?: ReactNode;
  crumbs?: { href: string; label: string }[];
  actions?: ReactNode;
  aside?: ReactNode;
}) {
  return (
    <section className="page-hero dark">
      <Aurora />
      <div className="wrap">
        {crumbs ? (
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            {crumbs.map((crumb) => (
              <span key={crumb.href} style={{ display: "contents" }}>
                <span aria-hidden="true" style={{ alignSelf: "center" }}>/</span>
                <Link href={crumb.href}>{crumb.label}</Link>
              </span>
            ))}
          </nav>
        ) : null}
        <div className={`page-hero-grid${aside ? " with-aside" : ""}`}>
          <div>
            <p className="kicker">{kicker}</p>
            <h1 className="h-lg">{title}</h1>
            {lede ? <p className="lede">{lede}</p> : null}
            {actions ? <div className="btn-row">{actions}</div> : null}
          </div>
          {aside ? <div className="page-hero-aside">{aside}</div> : null}
        </div>
      </div>
    </section>
  );
}

export function CtaBand({
  title = "Ready to get sorted?",
  copy = "Tell us where you are now. We'll come back with a clear, honest plan and a price. No jargon, no hard sell.",
  primary = { href: "/contact", label: "Start a conversation" },
  secondary = { href: "/free-tools", label: "Try a free tool" },
}: {
  title?: string;
  copy?: string;
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string } | null;
}) {
  return (
    <section className="section tight">
      <div className="wrap">
        <div className="cta-band dark" data-reveal>
          <div className="aurora" aria-hidden="true"><i /><i /><i /><i /></div>
          <div>
            <h2 className="h-lg">{title}</h2>
            <p>{copy}</p>
          </div>
          <div className="btn-row">
            <Link className="btn btn-aqua" href={primary.href}>{primary.label} <Icon name="arrow" /></Link>
            {secondary ? <Link className="btn btn-ghost" href={secondary.href}>{secondary.label}</Link> : null}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServiceCard({ service, featured = false, delay = 0 }: { service: Service; featured?: boolean; delay?: number }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className={`card service-card accent-${service.accent}${featured ? " featured" : ""}`}
      data-reveal
      style={{ "--d": `${delay}s` } as React.CSSProperties}
    >
      <span className="icon-tile"><Icon name={service.icon} /></span>
      <h3>{service.name}</h3>
      <p>{service.short}</p>
      <span className="text-link">Find out more <Icon name="arrow" /></span>
    </Link>
  );
}

export function Steps({ steps }: { steps: { title: string; copy: string }[] }) {
  return (
    <ol className="steps">
      {steps.map((step, index) => (
        <li className="card step" key={step.title} data-reveal style={{ "--d": `${index * 0.08}s` } as React.CSSProperties}>
          <h3>{step.title}</h3>
          <p>{step.copy}</p>
        </li>
      ))}
    </ol>
  );
}

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="faq">
      {items.map((item) => (
        <details key={item.q} data-reveal>
          <summary>{item.q}</summary>
          <p>{item.a}</p>
        </details>
      ))}
    </div>
  );
}
