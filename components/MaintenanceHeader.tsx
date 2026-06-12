import Link from "next/link";

export function MaintenanceHeader() {
  return (
    <header className="maintenance-header">
      <nav className="container maintenance-nav" aria-label="Maintenance navigation">
        <Link className="maintenance-nav-logo" href="/">
          AquaOasis-Web
        </Link>
        <div className="maintenance-nav-actions">
          <a className="maintenance-nav-button" href="tel:07305410203">
            07305410203
          </a>
          <Link className="maintenance-nav-button" href="/contact">
            Contact us
          </Link>
          <Link className="maintenance-nav-button" href="/sign-in">
            Sign in
          </Link>
        </div>
      </nav>
    </header>
  );
}
