import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { aquaWork } from "@/app/portfolio-data";
import { Icon } from "@/components/site/Icon";
import { CtaBand, PageHero } from "@/components/site/blocks";

const galleries: Record<string, string[]> = {
  "ocean-boulevard": ["/work/ocean-boulevard/website.png", "/work/ocean-boulevard/overview.png"],
  "beast-commerce": ["/work/beast-commerce/storefront.png", "/work/beast-commerce/operations.png"],
  aquacrm: ["/work/beast-commerce/operations.png"],
  "demo-media": ["/work/demo-media/overview.png", "/work/demo-media/experience.jpg"],
};

export function generateStaticParams() {
  return aquaWork.map((work) => ({ slug: work.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const work = aquaWork.find((item) => item.slug === slug);
  return work ? { title: work.title, description: work.summary } : {};
}

export default async function WorkDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const work = aquaWork.find((item) => item.slug === slug);
  if (!work) notFound();
  const index = aquaWork.findIndex((item) => item.slug === slug);
  const next = aquaWork[(index + 1) % aquaWork.length];

  return (
    <>
      <PageHero
        kicker={work.type}
        title={work.title}
        lede={work.summary}
        crumbs={[{ href: "/work", label: "Work" }, { href: `/work/${work.slug}`, label: work.title }]}
        actions={<Link className="btn btn-aqua" href="/contact">Discuss a similar build <Icon name="arrow" /></Link>}
        aside={
          <>
            <h2>What we built</h2>
            <ul className="tick-list">{work.areas.map((area) => <li key={area}>{area}</li>)}</ul>
          </>
        }
      />
      <section className="section">
        <div className="wrap">
          <div className="gallery">
            {(galleries[work.slug] ?? [work.image]).map((image, imageIndex) => (
              <figure key={image} data-reveal style={{ "--d": `${imageIndex * 0.08}s` } as React.CSSProperties}>
                <Image src={image} alt={`${work.title} view ${imageIndex + 1}`} fill sizes="(min-width: 900px) 55vw, 100vw" priority={imageIndex === 0} />
              </figure>
            ))}
          </div>
          <p style={{ marginTop: 40 }}>
            <Link className="text-link" href={`/work/${next.slug}`}>Next: {next.title} <Icon name="arrow" /></Link>
          </p>
        </div>
      </section>
      <CtaBand title="Use the pattern. Keep it yours." copy="Existing work gives us proven foundations. Your brand, customers and way of working still shape the result." />
    </>
  );
}
