import Image from "next/image";
import Link from "next/link";
import { AquaEnquiryForm } from "@/components/AquaEnquiryForm";
import { AquaPageShell } from "@/components/AquaPageShell";

const system = [
  ["Direction", "Goals, targets and the few numbers that show whether the business is moving."],
  ["Customers", "Leads, conversations, follow-up and the information your team needs in one history."],
  ["Delivery", "Clear stages, responsibilities and repeatable work without relying on memory."],
  ["Money", "A practical view of income, costs, commitments and what each piece of work is worth."],
  ["Improvement", "A regular way to spot friction, learn from the data and decide what changes next."],
];

export const metadata = {
  title: "Business OS | AquaOasis-Web",
  description: "A practical operating system that connects goals, customers, delivery, money and improvement.",
};

export default function BusinessOsPage() {
  return (
    <AquaPageShell>
      <section className="oasis-tool-hero oasis-tool-hero-os">
        <Image
          src="/work/beast-commerce/operations.png"
          alt="An operational workspace bringing business information together"
          fill
          priority
          sizes="100vw"
        />
        <div className="oasis-tool-hero-shade" />
        <div className="oasis-shell oasis-tool-hero-inner">
          <p className="oasis-kicker">Business OS</p>
          <h1>Run the business from one clear operating picture.</h1>
          <p>
            Bring the goals, customers, delivery, money and repeatable work
            together. Start with a practical operating plan, then add software
            only where it removes real friction.
          </p>
          <a href="#request">Talk through your operation <span aria-hidden="true">→</span></a>
        </div>
      </section>

      <section className="oasis-tool-page-section">
        <div className="oasis-shell">
          <div className="oasis-tool-page-heading">
            <div>
              <p className="oasis-kicker">One working system</p>
              <h2>Replace scattered knowledge with a business people can follow.</h2>
            </div>
            <p>
              Business OS is not another app you have to feed. We first make the
              operation clear, then decide whether documents, dashboards,
              automation or custom software will make it easier.
            </p>
          </div>
          <div className="oasis-os-list">
            {system.map(([title, copy], index) => (
              <article key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="oasis-tool-result">
        <div className="oasis-shell oasis-tool-result-grid">
          <div>
            <p className="oasis-kicker">Designed around the business</p>
            <h2>Documentation first. Systems second. Software when it earns its place.</h2>
          </div>
          <div className="oasis-result-copy">
            <p>
              Some teams need a simple operating playbook. Others need a client
              portal, CRM, forecasting view or connected internal tool. The
              system should fit the work, not force the work into a template.
            </p>
            <Link href="/software">See how we build custom software →</Link>
          </div>
        </div>
      </section>

      <section id="request" className="oasis-contact oasis-tool-contact">
        <div className="oasis-shell oasis-contact-grid">
          <div>
            <p className="oasis-kicker">Map the operation</p>
            <h2>Tell us where the business feels harder to run.</h2>
            <p>
              Start with the handovers, blind spots and repeated work that cause
              the most friction. We will help you decide what needs documenting,
              connecting or building.
            </p>
            <Link href="/health-check">Need the wider picture first? Start with the Health Check →</Link>
          </div>
          <AquaEnquiryForm defaultService="Business OS" />
        </div>
      </section>
    </AquaPageShell>
  );
}
