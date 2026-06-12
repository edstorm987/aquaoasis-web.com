"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  acceptedCookiePreferences,
  defaultCookiePreferences,
  readCookiePreferences,
  saveCookiePreferences,
} from "@/lib/cookiePreferences";

export function CookieConsent() {
  const [isOpen, setIsOpen] = useState(false);

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
        <Link href="/cookie-settings">Manage choices</Link>
        <button type="button" onClick={() => savePreference("rejected")}>
          Reject non-essential
        </button>
        <button type="button" onClick={() => savePreference("accepted")}>
          Accept all
        </button>
      </div>
    </aside>
  );
}
