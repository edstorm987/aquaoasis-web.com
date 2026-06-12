import { CookieSettingsButton } from "@/components/CookieSettingsButton";

export function MaintenanceFooter() {
  return (
    <footer className="maintenance-footer">
      <div className="container maintenance-footer-inner">
        <div className="maintenance-footer-brand">
          <strong>AquaOasis-Web</strong>
          <p>
            Helping small businesses, creators, and local teams enter the
            digital age with websites, Google Profile support, and clearer ways
            to be found online.
          </p>
          <div className="maintenance-footer-links">
            <a className="maintenance-footer-about" href="/about">
              Learn about us
            </a>
            <a
              className="maintenance-footer-social"
              href="https://www.instagram.com/aquaoasis_web/"
              aria-label="AquaOasis-Web on Instagram"
              target="_blank"
              rel="noreferrer"
            >
              <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1.1" />
              </svg>
              <span>Instagram</span>
            </a>
          </div>
        </div>

        <div className="maintenance-footer-card" aria-label="AquaOasis-Web contact details">
          <div className="footer-card-call">
            <span className="footer-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" role="img">
                <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7A2 2 0 0 1 22 16.9Z" />
              </svg>
            </span>
            <span>Call</span>
            <a href="tel:+447305410203">07305410203</a>
          </div>
          <div className="footer-card-email">
            <span className="footer-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" role="img">
                <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
                <path d="m22 7-10 6L2 7" />
              </svg>
            </span>
            <span>Email</span>
            <a href="mailto:aquaoasis-web@gmail.com">aquaoasis-web@gmail.com</a>
          </div>
          <div className="footer-card-built">
            <span className="footer-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" role="img">
                <path d="M12 3 3 8l9 5 9-5-9-5Z" />
                <path d="M3 14l9 5 9-5" />
                <path d="M3 11l9 5 9-5" />
              </svg>
            </span>
            <span>Built by our founder</span>
            <a href="https://www.edward-hallam.com">Edward Hallam</a>
          </div>
          <div className="footer-card-support">
            <span className="footer-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" role="img">
                <path d="M12 3a8 8 0 0 0-8 8v3" />
                <path d="M20 14v-3a8 8 0 0 0-8-8" />
                <path d="M4 14h3v5H4a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2Z" />
                <path d="M20 14h-3v5h3a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2Z" />
                <path d="M17 19c-.8 1.2-2.4 2-5 2" />
              </svg>
            </span>
            <span>Support</span>
            <a href="/customer-support">Customer support</a>
          </div>
        </div>
      </div>
      <div className="container maintenance-footer-bottom">
        <p>Copyright © 2026 AquaOasis-Web. All rights reserved.</p>
        <div className="maintenance-footer-legal">
          <a href="/privacy-policy">Privacy Policy</a>
          <CookieSettingsButton />
        </div>
      </div>
    </footer>
  );
}
