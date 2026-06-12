export const COOKIE_PREFERENCE_KEY = "aquaoasis-cookie-preferences";
export const COOKIE_PREFERENCE_COOKIE = "aquaoasis_cookie_preferences";

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
    const storedPreference = window.localStorage.getItem(COOKIE_PREFERENCE_KEY);

    if (!storedPreference) {
      return null;
    }

    return JSON.parse(storedPreference) as StoredCookiePreferences;
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
  document.cookie = `${COOKIE_PREFERENCE_COOKIE}=${encodedPreference}; Max-Age=31536000; Path=/; SameSite=Lax`;
  window.dispatchEvent(new CustomEvent("aquaoasis:cookie-preferences-updated"));

  return storedPreference;
}
