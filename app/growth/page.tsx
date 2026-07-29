import { AquaServicePage } from "@/components/AquaServicePage";

export const metadata = {
  title: "Campaigns and growth | AquaOasis-Web",
  description:
    "SEO, content, social and paid campaigns guided by conversion data and connected to the full customer journey.",
};

export default function GrowthPage() {
  return (
    <AquaServicePage
      eyebrow="Campaigns and optimisation"
      title="Growth where the evidence says it belongs."
      copy="We connect campaigns to the website, forms, sales journey and customer outcome, so activity is judged by what it helps happen rather than how busy the dashboard looks."
      image="/images/aquaoasis-card-audit.png"
      imageAlt="Campaign and conversion performance dashboard"
      outcomes={[
        "Know which sources create useful demand",
        "Improve the journey after the click",
        "Spend and effort follow evidence",
      ]}
      offerTitle="Campaigns, content and conversion working as one system."
      offerCopy="We can run a focused campaign or coordinate the complete journey across search, social, email, website and follow-up."
      offers={[
        {
          title: "Search and content",
          copy: "Build useful visibility around the questions and intent that matter.",
          points: ["SEO and content direction", "Google and local campaigns", "Landing journeys"],
        },
        {
          title: "Social and paid media",
          copy: "Create and distribute work with a clear purpose after the impression.",
          points: ["Campaign creative", "Audience and offer testing", "Spend and outcome tracking"],
        },
        {
          title: "Conversion optimisation",
          copy: "Use actual behaviour to improve pages, forms, offers and follow-up.",
          points: ["Journey analytics", "Testing and iteration", "Lead quality feedback"],
        },
      ]}
      process={[
        { title: "Set the outcome", copy: "Define the customer action and business value." },
        { title: "Connect the journey", copy: "Campaign, page, form and follow-up agree." },
        { title: "Launch with visibility", copy: "Track the signals needed to make decisions." },
        { title: "Move the effort", copy: "Keep, change or stop work based on evidence." },
      ]}
      closingTitle="Do more of what works. Stop carrying what does not."
      closingCopy="Bring your current campaigns and reporting, or begin with one measurable route to market."
    />
  );
}
