import { PostCreator } from "@/components/tools/PostCreator";
import { PageHero } from "@/components/site/blocks";

export const metadata = {
  title: "Free social post creator",
  description: "Create a social media post for Instagram, Facebook, LinkedIn, X or Google in minutes. Free, with a live preview.",
};

export default function PostCreatorPage() {
  return (
    <>
      <PageHero
        kicker="Free tool · Social post creator"
        title={<>Make a scroll-stopping post in <span className="gradient-text">two minutes.</span></>}
        lede="Choose a platform and what you want to say. We'll write the caption, suggest hashtags and design the image. Edit anything, then copy it or unlock the download."
        crumbs={[{ href: "/free-tools", label: "Free tools" }, { href: "/free-tools/post-creator", label: "Post creator" }]}
      />
      <section className="section">
        <div className="wrap">
          <PostCreator />
        </div>
      </section>
    </>
  );
}
