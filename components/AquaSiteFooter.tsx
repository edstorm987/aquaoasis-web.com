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
          Practical websites, Google visibility, campaigns, business media and
          custom software, joined around the work your business needs next.
        </p>
        <a
          className="aqua2-group"
          href="https://zimante-group.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Part of the Zimante Group family of brands
        </a>
        <a
          className="aqua2-media-link"
          href={milesymediaUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Photography by Milesymedia
        </a>
      </div>
      <nav aria-label="Footer navigation">
        <Link href="/#services">Services</Link>
        <Link href="/websites">Websites</Link>
        <Link href="/local-visibility">Local visibility</Link>
        <Link href="/software">Software</Link>
        <Link href="/growth">Growth</Link>
        <Link href="/work">Work</Link>
        <Link href="/health-check">Business Health Check</Link>
        <Link href="/business-os">Business OS</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/privacy-policy">Privacy</Link>
        <Link href="/cookie-settings">Cookies</Link>
        <Link href="/sign-in">Client login</Link>
      </nav>
      <p>
        © 2026 AquaOasis-Web. AquaOasis-Web is a trading name of{" "}
        <a href="https://edward-hallam.com" target="_blank" rel="noopener noreferrer">
          Edward Hallam
        </a>
        , a sole trader in England and Wales.
      </p>
    </footer>
  );
}
