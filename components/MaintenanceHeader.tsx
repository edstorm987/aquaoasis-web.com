import Link from "next/link";

export function MaintenanceHeader() {
  return (
    <header className="maintenance-header">
      <nav className="container maintenance-nav" aria-label="Maintenance navigation">
        <Link className="maintenance-nav-logo" href="/">
          AquaOasis-Web
        </Link>
        <div className="maintenance-nav-actions">
          <a
            className="maintenance-nav-button maintenance-phone-button"
            href="tel:07305410203"
            aria-label="Call AquaOasis-Web on 07305410203"
          >
            <span className="nav-phone-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" role="img">
                <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7A2 2 0 0 1 22 16.9Z" />
              </svg>
            </span>
            <span className="nav-phone-text">07305410203</span>
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
