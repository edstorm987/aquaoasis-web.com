import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Icon } from "@/components/site/Icon";
import { Faq, PageHero, ServiceCard, Steps } from "@/components/site/blocks";
import { serviceBySlug, services } from "@/lib/site";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) return {};
  return { title: service.name, description: service.short };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) notFound();
  const others = services.filter((item) => item.slug !== service.slug).slice(0, 3);

  return (
    <>
      <PageHero
        kicker={service.kicker}
        title={service.title}
        lede={service.intro}
        crumbs={[{ href: "/services", label: "Services" }, { href: `/services/${service.slug}`, label: service.name }]}
        actions={
          <>
            <a className="btn btn-aqua" href="#enquiry">Get a quote <Icon name="arrow" /></a>
            {service.tool ? <Link className="btn btn-ghost" href={service.tool.href}>{service.tool.label}</Link> : null}
          </>
        }
        aside={
          <>
            <h2>What you get</h2>
            <ul className="tick-list">{service.outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}</ul>
          </>
        }
      />

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <p className="kicker">What&apos;s included</p>
            <h2 className="h-lg">Everything handled. Nothing left half-done.</h2>
          </div>
          <div className={`grid grid-3 accent-${service.accent}`}>
            {service.includes.map((item, index) => (
              <article className="card" key={item.title} data-reveal style={{ "--d": `${(index % 3) * 0.06}s`, display: "grid", gap: 10, alignContent: "start" } as React.CSSProperties}>
                <span className="icon-tile"><Icon name={index === 0 ? service.icon : "check"} /></span>
                <h3 className="h-sm">{item.title}</h3>
                <p style={{ color: "var(--muted)" }}>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section paper-2">
        <div className="wrap">
          <div className="section-head">
            <p className="kicker">How it goes</p>
            <h2 className="h-lg">From hello to handled.</h2>
          </div>
          <Steps steps={service.steps} />
        </div>
      </section>

      <section className="section">
        <div className="wrap contact-grid">
          <div>
            <p className="kicker">Good questions</p>
            <h2 className="h-lg" style={{ marginBottom: 28 }}>{service.name}, answered.</h2>
            <Faq items={service.faqs} />
          </div>
          <div data-reveal>
            <EnquiryForm
              defaultService={service.enquiryService}
              heading={`Talk to us about ${service.name.toLowerCase()}`}
              intro="Tell us a little about the business. We'll come back with honest advice and a clear price."
            />
          </div>
        </div>
      </section>

      <section className="section tight paper-2">
        <div className="wrap">
          <div className="section-head"><p className="kicker">Pairs well with</p><h2 className="h-md">Other ways we can help.</h2></div>
          <div className="grid grid-3">
            {others.map((other) => <ServiceCard key={other.slug} service={other} />)}
          </div>
        </div>
      </section>
    </>
  );
}
