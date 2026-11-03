import Image from "next/image";
import Link from "next/link";
import { aquaWork } from "@/app/portfolio-data";
import { CtaBand, PageHero } from "@/components/site/blocks";

export const metadata = {
  title: "Work",
  description: "Websites, ecommerce and connected systems built by AquaOasis-Web.",
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        kicker="Our work"
        title={<>Built for real <span className="gradient-text">businesses.</span></>}
        lede="Venue websites, online stores, media experiences and full business systems. Each one designed around what customers need to see and do."
        crumbs={[{ href: "/work", label: "Work" }]}
      />
      <section className="section">
        <div className="wrap">
          <div className="grid grid-2">
            {aquaWork.map((work, index) => (
              <Link className="work-card" href={`/work/${work.slug}`} key={work.slug} data-reveal style={{ "--d": `${(index % 2) * 0.08}s` } as React.CSSProperties}>
                <figure><Image src={work.image} alt={work.imageAlt} fill sizes="(min-width: 700px) 50vw, 100vw" priority={index < 2} /></figure>
                <div>
                  <span className="work-type">{work.type}</span>
                  <h2 className="h-sm" style={{ fontSize: "clamp(24px, 2.6vw, 32px)", margin: "6px 0 8px" }}>{work.title}</h2>
                  <p>{work.summary}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CtaBand title="Want yours to be next?" />
    </>
  );
}
