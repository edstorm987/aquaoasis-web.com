import { AquaServicePage } from "@/components/AquaServicePage";

export const metadata = {
  title: "Google and local visibility | AquaOasis-Web",
  description:
    "Google Business Profile, reviews, local visibility and websites working together so nearby customers can find and choose you.",
};

export default function LocalVisibilityPage() {
  return (
    <AquaServicePage
      eyebrow="Google and local visibility"
      title="Be present where nearby customers are already deciding."
      copy="We organise your Google presence, proof, services, photography and website so people can find accurate information and feel confident taking the next step."
      image="/images/aquaoasis-card-profile.png"
      imageAlt="Local search profile and customer visibility"
      outcomes={[
        "Appear with accurate, useful information",
        "Build trust through proof and reviews",
        "Connect searchers to a clear next action",
      ]}
      offerTitle="A joined-up local foundation, not an abandoned listing."
      offerCopy="Google Business Profile works best when the details, visual proof, review activity and website agree. We set up the foundation and make it maintainable."
      offers={[
        {
          title: "Profile foundation",
          copy: "Create, reclaim or rebuild the core profile around what customers actually search for.",
          points: ["Categories, services and areas", "Contact and conversion routes", "Accurate business information"],
        },
        {
          title: "Proof and reviews",
          copy: "Make the result feel active, credible and worth choosing.",
          points: ["Review journey and responses", "Photography with Milesymedia", "Posts and useful updates"],
        },
        {
          title: "Local website connection",
          copy: "Give profile visitors somewhere convincing to continue the decision.",
          points: ["Location and service journeys", "Consistent tracking", "Search and conversion improvement"],
        },
      ]}
      process={[
        { title: "Audit the footprint", copy: "Find missing, inaccurate and underused opportunities." },
        { title: "Build the foundation", copy: "Organise profile, proof, services and contact routes." },
        { title: "Connect the website", copy: "Keep the customer journey consistent after the click." },
        { title: "Maintain the signal", copy: "Reviews, updates and evidence stay active over time." },
      ]}
      closingTitle="Start with Google. Grow when the evidence supports it."
      closingCopy="A strong foundation can be a complete first step or the beginning of a larger website and campaign."
    />
  );
}
