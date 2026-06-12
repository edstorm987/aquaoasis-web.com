"use client";

import { useEffect, useState } from "react";
import {
  defaultCookiePreferences,
  readCookiePreferences,
  saveCookiePreferences,
  type CookiePreferences,
} from "@/lib/cookiePreferences";

const cookieOptions: Array<{
  key: keyof CookiePreferences;
  title: string;
  description: string;
  required?: boolean;
}> = [
  {
    key: "necessary",
    title: "Necessary cookies",
    description:
      "Required for the site to work, including remembering your cookie choices and keeping forms usable.",
    required: true,
  },
  {
    key: "preferences",
    title: "Preference cookies",
    description:
      "Remember useful choices such as display preferences or form convenience settings if we add them later.",
  },
  {
    key: "analytics",
    title: "Analytics cookies",
    description:
      "Help us understand visits, pages viewed, and what needs improving. This is where Google Analytics or Google Tags would sit.",
  },
  {
    key: "marketing",
    title: "Marketing cookies",
    description:
      "Allow ad pixels and remarketing tools, such as Meta or Google Ads pixels, if they are added in future.",
  },
];

export function CookieSettingsPanel() {
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultCookiePreferences);
  const [status, setStatus] = useState("Your current cookie choices are ready to edit.");
  const [lastSavedAt, setLastSavedAt] = useState<string | null>(null);
  const [justSaved, setJustSaved] = useState(false);

  useEffect(() => {
    const preferenceTimer = window.setTimeout(() => {
      const storedPreference = readCookiePreferences();
      setPreferences(storedPreference ?? defaultCookiePreferences);
      setLastSavedAt(storedPreference?.updatedAt ?? null);

      if (storedPreference?.updatedAt) {
        setStatus("Cookie choices loaded.");
      }
    }, 0);

    return () => window.clearTimeout(preferenceTimer);
  }, []);

  function formatSavedTime(value: string) {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const formattedTime = new Intl.DateTimeFormat(undefined, {
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      month: "short",
      timeZoneName: "short",
      year: "numeric",
    }).format(new Date(value));

    return timezone ? `${formattedTime} (${timezone})` : formattedTime;
  }

  function formatSavedStatusTime(value: string) {
    return new Intl.DateTimeFormat(undefined, {
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      month: "short",
      timeZoneName: "short",
      year: "numeric",
    }).format(new Date(value));
  }

  function showSavedFeedback(savedAt: string) {
    setLastSavedAt(savedAt);
    setJustSaved(true);
    window.setTimeout(() => setJustSaved(false), 900);
  }

  function updatePreference(key: keyof CookiePreferences) {
    if (key === "necessary") {
      return;
    }

    setPreferences((currentPreferences) => ({
      ...currentPreferences,
      [key]: !currentPreferences[key],
    }));
    setStatus("You have unsaved cookie changes.");
  }

  function saveCurrentPreferences() {
    const savedPreference = saveCookiePreferences(preferences);
    showSavedFeedback(savedPreference.updatedAt);
    setStatus(`Cookie choices saved at ${formatSavedStatusTime(savedPreference.updatedAt)}.`);
  }

  function rejectNonEssential() {
    setPreferences(defaultCookiePreferences);
    const savedPreference = saveCookiePreferences(defaultCookiePreferences);
    showSavedFeedback(savedPreference.updatedAt);
    setStatus(`Non-essential cookies rejected at ${formatSavedStatusTime(savedPreference.updatedAt)}.`);
  }

  function acceptAll() {
    const allAccepted: CookiePreferences = {
      necessary: true,
      preferences: true,
      analytics: true,
      marketing: true,
    };

    setPreferences(allAccepted);
    const savedPreference = saveCookiePreferences(allAccepted);
    showSavedFeedback(savedPreference.updatedAt);
    setStatus(`All cookie categories accepted at ${formatSavedStatusTime(savedPreference.updatedAt)}.`);
  }

  return (
    <div className="cookie-settings-panel">
      <div className={justSaved ? "cookie-settings-status saved" : "cookie-settings-status"} role="status">
        <p>{status}</p>
        <span>
          {lastSavedAt
            ? `Last saved: ${formatSavedTime(lastSavedAt)}`
            : "No saved cookie choice yet."}
        </span>
      </div>

      <div className="cookie-toggle-list">
        {cookieOptions.map((option) => (
          <div className="cookie-toggle-row" key={option.key}>
            <div>
              <h2>{option.title}</h2>
              <p>{option.description}</p>
            </div>
            <label className="cookie-switch">
              <input
                checked={preferences[option.key]}
                disabled={option.required}
                onChange={() => updatePreference(option.key)}
                type="checkbox"
              />
              <span aria-hidden="true" />
              <span className="sr-only">
                {option.required ? `${option.title} always on` : `Toggle ${option.title}`}
              </span>
            </label>
          </div>
        ))}
      </div>

      <div className="cookie-settings-actions">
        <button type="button" onClick={rejectNonEssential}>
          Reject non-essential
        </button>
        <button type="button" onClick={saveCurrentPreferences}>
          Save choices
        </button>
        <button type="button" onClick={acceptAll}>
          Accept all
        </button>
      </div>
    </div>
  );
}
