import { AquaEnquiryForm } from "@/components/AquaEnquiryForm";
import { AquaPageHero } from "@/components/AquaPageHero";
import { AquaPageShell } from "@/components/AquaPageShell";

export default function ContactPage() {
  return (
    <AquaPageShell>
      <AquaPageHero
        eyebrow="Start with the real situation"
        title="Tell us where you are. We will make the next step clear."
        copy="You do not need a technical brief. Tell us what is not working, what you want to make possible or where customers are getting stuck."
        image="/images/aquaoasis-hero-luxury.png"
        imageAlt="A connected digital landscape"
        primaryLabel="Start your enquiry"
        primaryHref="#contact"
        secondaryLabel="See our work"
        secondaryHref="/work"
      />
      <section id="contact" className="aqua2-section aqua2-contact">
        <div>
          <p className="aqua2-kicker">A useful first conversation</p>
          <h2>Bring the goal, the problem or the rough idea.</h2>
          <p>
            We will help separate what matters now from what can wait, then give
            you a clear route forward.
          </p>
          <div className="aqua2-contact-points">
            <span>Google visibility and websites</span>
            <span>Ecommerce, portals and bespoke software</span>
            <span>Campaigns, content and ongoing growth</span>
            <span>Enterprise and cross-company projects</span>
          </div>
        </div>
        <AquaEnquiryForm />
      </section>
    </AquaPageShell>
  );
}
