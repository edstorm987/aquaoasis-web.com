import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AquaPageHero } from "@/components/AquaPageHero";
import { AquaPageShell } from "@/components/AquaPageShell";
import { aquaWork } from "@/app/portfolio-data";

const galleries: Record<string, string[]> = {
  "ocean-boulevard": [
    "/work/ocean-boulevard/website.png",
    "/work/ocean-boulevard/overview.png",
  ],
  "beast-commerce": [
    "/work/beast-commerce/storefront.png",
    "/work/beast-commerce/operations.png",
  ],
  aquacrm: ["/work/beast-commerce/operations.png"],
  "demo-media": [
    "/work/demo-media/overview.png",
    "/work/demo-media/experience.jpg",
  ],
};

export function generateStaticParams() {
  return aquaWork.map((work) => ({ slug: work.slug }));
}

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const work = aquaWork.find((item) => item.slug === slug);

  if (!work) {
    notFound();
  }

  return (
    <AquaPageShell>
      <AquaPageHero
        eyebrow={work.type}
        title={work.title}
        copy={work.summary}
        image={work.image}
        imageAlt={work.imageAlt}
        primaryLabel="Discuss a related build"
        secondaryLabel="All work"
        secondaryHref="/work"
      />
      <section className="aqua3-case-lead">
        <div>
          <p className="aqua2-kicker">The connected system</p>
          <h2>Designed beyond the first screen.</h2>
          <p>
            This case is included to show the breadth of the product and
            operational thinking. It connects what the customer sees with the
            tools, information and decisions required behind it.
          </p>
        </div>
        <ul>
          {work.areas.map((area) => <li key={area}>{area}</li>)}
        </ul>
      </section>
      <div className="aqua3-case-gallery">
        {galleries[work.slug].map((image, index) => (
          <figure key={image}>
            <Image
              src={image}
              alt={`${work.title} interface view ${index + 1}`}
              fill
              sizes="(min-width: 800px) 55vw, 100vw"
              className="aqua2-cover"
            />
          </figure>
        ))}
      </div>
      <section className="aqua3-closing">
        <p className="aqua2-kicker">Build the right version</p>
        <h2>Use the pattern. Keep the solution yours.</h2>
        <p>
          Existing work gives us proven foundations and faster learning. Your
          brand, operation and customer journey still shape the final product.
        </p>
        <Link href="/#contact">Start with your workflow →</Link>
      </section>
    </AquaPageShell>
  );
}
