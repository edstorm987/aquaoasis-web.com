"use client";

type SubmitAquaEnquiryInput = {
  name: string;
  email?: string;
  phone?: string;
  contactMethod?: string;
  services?: string[];
  message?: string;
  campaign?: string;
  sourceUrl?: string;
  website?: string;
  consent: boolean;
};

export async function submitAquaEnquiry(input: SubmitAquaEnquiryInput) {
  const response = await fetch(
    process.env.NEXT_PUBLIC_ENQUIRY_ENDPOINT ?? "https://aqua-crm.com/api/public/brand-enquiry",
    {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        brand: "aquaoasis-web",
        services: input.services ?? [],
        name: input.name,
        email: input.email ?? "",
        phone: input.phone ?? "",
        contactMethod: input.contactMethod ?? "",
        message: input.message ?? "",
        sourceUrl: input.sourceUrl ?? window.location.href,
        campaign: input.campaign ?? new URLSearchParams(window.location.search).get("utm_campaign") ?? "",
        consent: input.consent,
        website: input.website ?? "",
      }),
    },
  );
  const result = await response.json() as { ok?: boolean; error?: string };
  if (!response.ok || !result.ok) throw new Error(result.error ?? "Unable to send.");
}
