import Link from "next/link";
import { Icon } from "@/components/site/Icon";
import { CtaBand, PageHero } from "@/components/site/blocks";

export const metadata = {
  title: "Free tools",
  description: "Free tools for small businesses: a social post creator and a website & Google health check.",
};

export default function FreeToolsPage() {
  return (
    <>
      <PageHero
        kicker="Free tools"
        title={<>Free tools. <span className="gradient-text">Genuinely useful.</span></>}
        lede="Built on the same system we use for our clients. Use them as much as you like with no sign-up. If you want the download or full report, tell us where to send it."
        crumbs={[{ href: "/free-tools", label: "Free tools" }]}
      />
      <section className="section">
        <div className="wrap">
          <div className="grid grid-2">
            <Link href="/free-tools/post-creator" className="card tool-card" data-reveal>
              <div className="tool-visual post">
                <div className="mini-post" aria-hidden="true"><div>New<br />menu<br />Friday</div><p>Book your table now 🍽️</p></div>
              </div>
              <div className="tool-body">
                <span className="free-tag">Free</span>
                <h2 className="h-md">Social post creator</h2>
                <p style={{ color: "var(--muted)" }}>
                  Pick a platform and a post type, add your business, and get a ready-to-go caption, hashtags and a
                  branded image with a live preview. Unlock the image download and a 4-week content plan for free.
                </p>
                <span className="text-link">Make a post <Icon name="arrow" /></span>
              </div>
            </Link>
            <Link href="/free-tools/health-check" className="card tool-card" data-reveal style={{ "--d": "0.1s" } as React.CSSProperties}>
              <div className="tool-visual health">
                <div className="gauge" aria-hidden="true"><span><span>84<small>/ 100</small></span></span></div>
              </div>
              <div className="tool-body">
                <span className="free-tag">Free</span>
                <h2 className="h-md">Website &amp; Google health check</h2>
                <p style={{ color: "var(--muted)" }}>
                  We scan your website for the basics Google and customers look for, then ask ten quick questions
                  about your Google profile, socials and enquiries. Get your score instantly and unlock a
                  personal action plan.
                </p>
                <span className="text-link">Check my business <Icon name="arrow" /></span>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <CtaBand title="Rather we just did it for you?" copy="That's what we're here for. Tell us what you need and we'll sort it." secondary={null} />
    </>
  );
}
