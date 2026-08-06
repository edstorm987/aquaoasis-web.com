import Link from "next/link";

export function AquaSiteFooter({
  milesymediaUrl,
}: {
  milesymediaUrl: string;
}) {
  return (
    <footer className="aqua2-footer">
      <div>
        <Link className="aqua2-brand" href="/">
          <span aria-hidden="true">A</span>
          <strong>AquaOasis-Web</strong>
        </Link>
        <p>
          An all-in-one digital agency for visibility, original media,
          converting websites, campaigns and bespoke software.
        </p>
        <a className="aqua2-group" href="https://zimante-group.com">
          A Zimante Group company
        </a>
        <a className="aqua2-media-link" href={milesymediaUrl}>
          Photography by Milesymedia
        </a>
      </div>
      <nav aria-label="Footer navigation">
        <Link href="/solutions">Solutions</Link>
        <Link href="/websites">Websites</Link>
        <Link href="/local-visibility">Local visibility</Link>
        <Link href="/software">Software</Link>
        <Link href="/growth">Growth</Link>
        <Link href="/work">Work</Link>
        <Link href="/enterprise">Enterprise</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/privacy-policy">Privacy</Link>
        <Link href="/cookie-settings">Cookies</Link>
        <Link href="/sign-in">Client login</Link>
      </nav>
      <p>© 2026 AquaOasis-Web. Digital work that earns its place.</p>
    </footer>
  );
}
