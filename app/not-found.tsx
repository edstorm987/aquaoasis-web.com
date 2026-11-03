import Link from "next/link";
import { Icon } from "@/components/site/Icon";
import { PageHero } from "@/components/site/blocks";

export default function NotFound() {
  return (
    <PageHero
      kicker="404"
      title={<>This page has gone <span className="gradient-text">offline.</span></>}
      lede="Even we can't sort a page that doesn't exist. Try one of these instead."
      actions={
        <>
          <Link className="btn btn-aqua" href="/">Back to home <Icon name="arrow" /></Link>
          <Link className="btn btn-ghost" href="/free-tools">Try a free tool</Link>
        </>
      }
    />
  );
}
