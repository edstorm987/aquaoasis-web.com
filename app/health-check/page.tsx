import Image from "next/image";
import Link from "next/link";
import { AquaEnquiryForm } from "@/components/AquaEnquiryForm";
import { AquaPageShell } from "@/components/AquaPageShell";

const checks = [
  ["Findability", "Can the right people find accurate information when they search for what you do?"],
  ["First impression", "Does the website explain the offer quickly and give people a reason to trust it?"],
  ["Enquiries", "Can a customer take the next step without confusion, delay or a dead end?"],
  ["Follow-up", "Does every enquiry reach the right person and stay visible until it is handled?"],
  ["Delivery", "Are the repeatable parts of the work clear, or do they live in somebody's head?"],
  ["Measurement", "Can you see what is bringing customers in and where time or money is being lost?"],
];

export const metadata = {
  title: "Business Health Check | AquaOasis-Web",
  description: "A practical review of how customers find, choose and move through your business.",
};

export default function HealthCheckPage() {
  return (
    <AquaPageShell>
      <section className="oasis-tool-hero">
        <Image
          src="/work/beast-commerce/operations.png"
          alt="A connected operations dashboard"
          fill
          priority
          sizes="100vw"
        />
        <div className="oasis-tool-hero-shade" />
        <div className="oasis-shell oasis-tool-hero-inner">
          <p className="oasis-kicker">Business Health Check</p>
          <h1>Find the gaps before you spend money fixing the wrong thing.</h1>
          <p>
            A plain-English review of how customers find you, choose you and
            move through the business. We identify the most useful next move,
            whether or not it turns into a project with us.
          </p>
          <a href="#request">Request your health check <span aria-hidden="true">→</span></a>
        </div>
      </section>

      <section className="oasis-tool-page-section">
        <div className="oasis-shell">
          <div className="oasis-tool-page-heading">
            <div>
              <p className="oasis-kicker">What we look at</p>
              <h2>Six parts of the customer journey that should work together.</h2>
            </div>
            <p>
              You do not need software, a marketing department or perfect data
              to start. We work from the business as it exists today.
            </p>
          </div>
          <div className="oasis-check-grid">
            {checks.map(([title, copy], index) => (
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
            <p className="oasis-kicker">What you leave with</p>
            <h2>A useful priority list, not a report built to sell more work.</h2>
          </div>
          <ul>
            <li>The most important gaps we can see now</li>
            <li>What can be corrected quickly</li>
            <li>What needs a proper project</li>
            <li>What should wait until later</li>
            <li>A clear first action and sensible route forward</li>
          </ul>
        </div>
      </section>

      <section id="request" className="oasis-contact oasis-tool-contact">
        <div className="oasis-shell oasis-contact-grid">
          <div>
            <p className="oasis-kicker">Request a review</p>
            <h2>Show us the business as it is.</h2>
            <p>
              Tell us what you sell, where customers currently find you and
              what feels harder than it should. We will get in touch to arrange
              the right kind of review.
            </p>
            <Link href="/business-os">Already know you need a system? Explore Business OS →</Link>
          </div>
          <AquaEnquiryForm defaultService="Business Health Check" />
        </div>
      </section>
    </AquaPageShell>
  );
}
