import { AquaServicePage } from "@/components/AquaServicePage";

export default function EnterprisePage() {
  return (
    <AquaServicePage
      eyebrow="Enterprise and delivery partnerships"
      title="A digital partner that can see the whole system."
      copy="Bring Aqua into a new platform, transformation programme or established delivery team. We can lead the customer experience, build the operational product or strengthen the link between both."
      image="/images/aquaoasis-hero-luxury.png"
      imageAlt="A connected digital platform representing an enterprise partnership"
      outcomes={[
        "One accountable digital partner",
        "Customer and operation considered together",
        "Clear delivery visibility",
      ]}
      offerTitle="Flexible enough to fit the programme."
      offerCopy="We can own a defined outcome, work beside internal teams or coordinate a connected package across Aqua, Milesymedia and the wider Zimante Group."
      offers={[
        {
          title: "Digital experience",
          copy: "Research, structure, creative direction and delivery for complex public-facing journeys.",
          points: ["Discovery and journey mapping", "Accessible interface design", "Web and product delivery"],
        },
        {
          title: "Operational software",
          copy: "Internal tools, portals and automation that support the service behind the experience.",
          points: ["Workflow and role mapping", "Bespoke system delivery", "Integration planning"],
        },
        {
          title: "Joined-up production",
          copy: "A coordinated route across technology, content, photography and video when the programme needs more than one discipline.",
          points: ["One shared brief", "Specialist production", "Clear ownership and handovers"],
        },
      ]}
      process={[
        { title: "Frame the outcome", copy: "Agree what must change, who it serves and how progress will be judged." },
        { title: "Shape the team", copy: "Define Aqua's role, internal ownership, partner responsibilities and decision routes." },
        { title: "Deliver visibly", copy: "Work in clear stages with review points, working previews and documented decisions." },
        { title: "Launch and learn", copy: "Support adoption, measure the experience and improve the areas that matter." },
      ]}
      closingTitle="Bring us the difficult, connected problem."
      closingCopy="We will tell you where we can create leverage, where we should collaborate and where a simpler answer would serve you better."
    />
  );
}
