import { HealthCheck } from "@/components/tools/HealthCheck";
import { PageHero } from "@/components/site/blocks";

export const metadata = {
  title: "Free website & Google health check",
  description: "Scan your website and answer ten quick questions to see how well your business shows up online. Free, instant score and action plan.",
};

export default function HealthCheckPage() {
  return (
    <>
      <PageHero
        kicker="Free tool · Health check"
        title={<>How healthy is your business <span className="gradient-text">online?</span></>}
        lede="Scan your website, answer ten quick questions about Google, social media and enquiries, and get an instant score. Unlock your personal action plan for free."
        crumbs={[{ href: "/free-tools", label: "Free tools" }, { href: "/free-tools/health-check", label: "Health check" }]}
      />
      <section className="section">
        <div className="wrap">
          <HealthCheck />
        </div>
      </section>
    </>
  );
}
