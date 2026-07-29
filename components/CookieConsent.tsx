"use client";

import { useEffect, useState } from "react";
import { CookieSettingsPanel } from "@/components/CookieSettingsPanel";
import {
  acceptedCookiePreferences,
  defaultCookiePreferences,
  readCookiePreferences,
  saveCookiePreferences,
} from "@/lib/cookiePreferences";

export function CookieConsent() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const bannerTimer = window.setTimeout(() => {
      const storedPreference = readCookiePreferences();
      setIsOpen(!storedPreference);
    }, 0);

    return () => {
      window.clearTimeout(bannerTimer);
    };
  }, []);

  function savePreference(value: "accepted" | "rejected") {
    saveCookiePreferences(
      value === "accepted" ? acceptedCookiePreferences : defaultCookiePreferences,
    );
    setIsOpen(false);
    setIsModalOpen(false);
  }

  if (!isOpen) {
    return null;
  }

  return (
    <aside className="cookie-banner" aria-label="Cookie notice">
      <div>
        <strong>Cookie choices</strong>
        <p>
          We only use essential site storage right now. When analytics, Google
          tags, or pixels are added, they will only run if you accept
          non-essential cookies.
        </p>
      </div>
      <div className="cookie-actions">
        <button type="button" onClick={() => savePreference("rejected")}>
          Reject non-essential
        </button>
        <button
          className="cookie-accept-button"
          type="button"
          onClick={() => savePreference("accepted")}
        >
          Accept all
        </button>
        <button
          className="cookie-manage-button"
          type="button"
          onClick={() => setIsModalOpen(true)}
        >
          Manage cookies
        </button>
      </div>

      {isModalOpen ? (
        <div
          className="cookie-modal-backdrop"
          aria-labelledby="cookie-modal-title"
          aria-modal="true"
          role="dialog"
        >
          <div className="cookie-modal-card">
            <div className="cookie-modal-header">
              <div>
                <p className="eyebrow">Cookie settings</p>
                <h2 id="cookie-modal-title">Choose what we can use.</h2>
              </div>
              <button
                className="cookie-modal-close"
                type="button"
                aria-label="Close cookie settings"
                onClick={() => setIsModalOpen(false)}
              >
                x
              </button>
            </div>
            <p className="cookie-modal-copy">
              Your choices are saved on this device so the site remembers them
              next time.
            </p>
            <CookieSettingsPanel
              onSaved={() => {
                window.setTimeout(() => {
                  setIsOpen(false);
                  setIsModalOpen(false);
                }, 650);
              }}
            />
          </div>
        </div>
      ) : null}
    </aside>
  );
}
