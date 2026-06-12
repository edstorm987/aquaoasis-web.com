import { BottomCta } from "@/components/BottomCta";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="page-hero">
          <div className="container narrow reveal">
            <p className="eyebrow">About AquaOasis-Web</p>
            <h1>Premium websites without the subscription trap.</h1>
            <p>
              AquaOasis-Web exists for small businesses and creators who need a
              serious online presence without agency theatre, bloated retainers,
              or confusing tech language.
            </p>
          </div>
        </section>

        <section className="section muted-band">
          <div className="container two-column">
            <div className="reveal">
              <p className="eyebrow">How we work</p>
              <h2>Clear foundations first. Beautiful website second.</h2>
            </div>
            <div className="rich-copy reveal reveal-delay-1">
              <p>
                We start with visibility: Google profile, contact routes,
                social consistency, and a fast temporary page if needed. Then we
                build the final website around what customers need to see,
                trust, and do.
              </p>
              <p>
                If a project needs advanced software, custom systems, ads, or
                complex growth infrastructure, we route it to Milesymedia so
                the client gets the right solution instead of a forced one.
              </p>
            </div>
          </div>
        </section>

        <BottomCta />
      </main>
      <SiteFooter />
    </>
  );
}
