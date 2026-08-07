export const COOKIE_PREFERENCE_KEY = "aqua-cookie-preferences";
export const COOKIE_PREFERENCE_COOKIE = "aqua_cookie_preferences";
const LEGACY_COOKIE_PREFERENCE_KEY = "aquaoasis-cookie-preferences";

export type CookiePreferences = {
  necessary: true;
  preferences: boolean;
  analytics: boolean;
  marketing: boolean;
};

export type StoredCookiePreferences = CookiePreferences & {
  updatedAt: string;
  version: 1;
};

export const defaultCookiePreferences: CookiePreferences = {
  necessary: true,
  preferences: false,
  analytics: false,
  marketing: false,
};

export const acceptedCookiePreferences: CookiePreferences = {
  necessary: true,
  preferences: true,
  analytics: true,
  marketing: true,
};

export function readCookiePreferences(): StoredCookiePreferences | null {
  try {
    const storedPreference = window.localStorage.getItem(COOKIE_PREFERENCE_KEY)
      ?? window.localStorage.getItem(LEGACY_COOKIE_PREFERENCE_KEY);

    if (!storedPreference) {
      return null;
    }

    const parsed = JSON.parse(storedPreference) as StoredCookiePreferences;
    if (parsed.version !== 1 || parsed.necessary !== true) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function saveCookiePreferences(preferences: CookiePreferences) {
  const storedPreference: StoredCookiePreferences = {
    ...preferences,
    necessary: true,
    updatedAt: new Date().toISOString(),
    version: 1,
  };

  const encodedPreference = encodeURIComponent(JSON.stringify(storedPreference));

  window.localStorage.setItem(COOKIE_PREFERENCE_KEY, JSON.stringify(storedPreference));
  window.localStorage.removeItem(LEGACY_COOKIE_PREFERENCE_KEY);
  document.cookie = `${COOKIE_PREFERENCE_COOKIE}=${encodedPreference}; Max-Age=31536000; Path=/; SameSite=Lax${window.location.protocol === "https:" ? "; Secure" : ""}`;
  window.dispatchEvent(new CustomEvent("aqua:consent-updated", { detail: storedPreference }));

  return storedPreference;
}
