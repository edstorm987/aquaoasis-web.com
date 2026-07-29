import { AquaServicePage } from "@/components/AquaServicePage";

export const metadata = {
  title: "Websites and ecommerce | AquaOasis-Web",
  description:
    "Conversion-focused websites, ecommerce and booking experiences built around real customer decisions.",
};

export default function WebsitesPage() {
  return (
    <AquaServicePage
      eyebrow="Websites and ecommerce"
      title="A digital home people understand, trust and act on."
      copy="From a focused first website to a connected ecommerce platform, we combine strategy, creative direction, content and technology around the decision your customer needs to make."
      image="/images/aquaoasis-hero-luxury.png"
      imageAlt="Connected website and ecommerce experiences"
      outcomes={[
        "Look unmistakably like your business",
        "Answer what customers need before they ask",
        "Turn visits into enquiries, bookings or sales",
      ]}
      offerTitle="Start simple or build the complete buying journey."
      offerCopy="The right website is proportionate to the opportunity. We do not add complexity to inflate the project, and we do not under-build something that needs to support serious growth."
      offers={[
        {
          title: "Focused first websites",
          copy: "A credible, fast website for getting online properly and making the next action obvious.",
          points: ["From £899", "Mobile-first design", "Clear copy and enquiry routes"],
        },
        {
          title: "Conversion websites",
          copy: "Research-led journeys for businesses with multiple services, audiences or decisions.",
          points: ["Customer and competitor research", "Creative direction and content", "Measurement from launch"],
        },
        {
          title: "Ecommerce and bookings",
          copy: "Buying and booking experiences connected to what happens after checkout.",
          points: ["Products, payments and accounts", "Bookings and memberships", "Order and fulfilment workflows"],
        },
      ]}
      process={[
        { title: "Understand the decision", copy: "What customers need to see, believe and do." },
        { title: "Shape the journey", copy: "Structure, words, visuals and interactions before decoration." },
        { title: "Build and connect", copy: "A responsive experience joined to the systems behind it." },
        { title: "Measure and improve", copy: "Use real behaviour to decide what changes next." },
      ]}
      closingTitle="Bring the current site, a rough idea or nothing at all."
      closingCopy="We will help work out the smallest useful next step and show what a larger version could become."
    />
  );
}
