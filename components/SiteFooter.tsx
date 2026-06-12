import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-main">
          <Link className="footer-brand" href="/">
            AquaOasis-Web
          </Link>
          <p>
            Websites, Google Profile foundations, and clear local launch
            support for businesses ready to get found online.
          </p>
        </div>

        <div className="footer-column">
          <span>Navigate</span>
          <Link href="/about">About</Link>
          <Link href="/careers">Careers</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div className="footer-column">
          <span>Contact</span>
          <a href="mailto:aquaoasis-web@gmail.com">aquaoasis-web@gmail.com</a>
          <p>Aquaoasis-web.com</p>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>Built by Edward Hallam</p>
        <p>Own it forever. No subscriptions.</p>
      </div>
    </footer>
  );
}
