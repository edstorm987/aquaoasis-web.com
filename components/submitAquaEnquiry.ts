"use client";

import { useCallback, useRef } from "react";
import { readCookiePreferences } from "@/lib/cookiePreferences";
import { AQUACRM_ORIGIN } from "@/lib/site";

/**
 * Every form, chat and free tool on the site reaches AquaCRM through this one
 * call: `POST {AquaCRM}/api/public/brand-enquiry` with brand `aquaoasis-web`.
 *
 * AquaCRM's contract (portal `src/app/api/public/brand-enquiry/route.ts`):
 * - `submissionId` must match `aqua_sub_[a-z0-9_-]{12,100}`. Production answers
 *   503 without one, so it is always sent. One id per submission: a retry of
 *   the same submission reuses it (AquaCRM de-duplicates on it), a new
 *   submission gets a new one. `useSubmissionId` manages that.
 * - `captchaToken` comes from `aqua-bot-challenge.js`, which mounts on every
 *   `form[data-aqua-challenge-action]`.
 * - `campaign` is only kept when `attributionConsent` is true, which follows
 *   the visitor's analytics cookie choice.
 */
export const ENQUIRY_ENDPOINT = process.env.NEXT_PUBLIC_ENQUIRY_ENDPOINT?.trim()
  || `${AQUACRM_ORIGIN}/api/public/brand-enquiry`;

export type SubmitAquaEnquiryInput = {
  submissionId: string;
  channel?: "form" | "chatbot" | "support";
  name: string;
  email?: string;
  phone?: string;
  contactMethod?: string;
  services?: string[];
  message?: string;
  campaign?: string;
  sourceUrl?: string;
  website?: string;
  captchaToken: string;
  consent: boolean;
  marketingConsent?: boolean;
};

export function createSubmissionId() {
  const random = typeof crypto !== "undefined" && "randomUUID" in crypto
    ? crypto.randomUUID().replace(/-/g, "")
    : `${Date.now().toString(36)}${Math.random().toString(36).slice(2)}${Math.random().toString(36).slice(2)}`;
  return `aqua_sub_${random.toLowerCase()}`;
}

/** One id per submission: kept across retries, replaced once a submission lands. */
export function useSubmissionId() {
  const id = useRef<string | null>(null);
  const current = useCallback(() => {
    if (!id.current) id.current = createSubmissionId();
    return id.current;
  }, []);
  const settle = useCallback(() => {
    id.current = null;
  }, []);
  return { current, settle };
}

export async function submitAquaEnquiry(input: SubmitAquaEnquiryInput) {
  const attributionConsent = readCookiePreferences()?.analytics === true;
  const response = await fetch(ENQUIRY_ENDPOINT, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      brand: "aquaoasis-web",
      submissionId: input.submissionId,
      channel: input.channel ?? "form",
      services: input.services ?? [],
      name: input.name,
      email: input.email ?? "",
      phone: input.phone ?? "",
      contactMethod: input.contactMethod ?? "",
      message: input.message ?? "",
      sourceUrl: input.sourceUrl ?? window.location.href,
      attributionConsent,
      campaign: input.campaign ?? new URLSearchParams(window.location.search).get("utm_campaign") ?? "",
      consent: input.consent,
      ...(input.marketingConsent === undefined ? {} : { marketingConsent: input.marketingConsent }),
      website: input.website ?? "",
      captchaToken: input.captchaToken,
    }),
  });
  const result = await response.json().catch(() => ({})) as { ok?: boolean; error?: string };
  if (!response.ok || !result.ok) {
    throw new Error(result.error ?? "We couldn't send that just now. Please try again, or call 07305410203.");
  }
}
