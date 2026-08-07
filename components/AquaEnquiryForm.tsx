"use client";

import { useState } from "react";

const services = [
  "Google & local visibility",
  "Website or ecommerce",
  "Advertising & campaigns",
  "Photography, video or content",
  "Custom software or automation",
  "Business systems or Business OS",
];

export function AquaEnquiryForm({ defaultService }: { defaultService?: string } = {}) {
  const [status, setStatus] = useState<"idle" | "busy" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  return (
    <form
      className="aqua-enquiry"
      data-aqua-form="Project enquiry"
      onSubmit={async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const data = new FormData(form);
        setStatus("busy");
        setError("");
        try {
          const response = await fetch(
            process.env.NEXT_PUBLIC_ENQUIRY_ENDPOINT
              ?? "https://aqua-crm.com/api/public/brand-enquiry",
            {
              method: "POST",
              headers: { "content-type": "application/json" },
              body: JSON.stringify({
                brand: "aquaoasis-web",
                services: data.getAll("services"),
                name: data.get("name"),
                email: data.get("email"),
                phone: data.get("phone"),
                contactMethod: data.get("contactMethod"),
                message: data.get("message"),
                sourceUrl: window.location.href,
                campaign: new URLSearchParams(window.location.search).get("utm_campaign") ?? "",
                consent: data.get("consent") === "yes",
                website: data.get("website"),
              }),
            },
          );
          const result = await response.json() as { ok?: boolean; error?: string };
          if (!response.ok || !result.ok) throw new Error(result.error ?? "Unable to send.");
          form.reset();
          setStatus("sent");
        } catch (cause) {
          setError(cause instanceof Error ? cause.message : "Unable to send.");
          setStatus("error");
        }
      }}
    >
      <input className="aqua-trap" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" aria-label="Leave this field blank" />
      {defaultService ? <input type="hidden" name="services" value={defaultService} /> : null}
      <div className="aqua-form-pair">
        <label>Name<input required name="name" autoComplete="name" /></label>
        <label>Email<input required type="email" name="email" autoComplete="email" /></label>
      </div>
      <div className="aqua-form-pair">
        <label>Phone <small>optional</small><input name="phone" autoComplete="tel" /></label>
        <label>Best contact
          <select required name="contactMethod" defaultValue="">
            <option value="" disabled>Choose one</option>
            <option value="call">Call</option><option value="email">Email</option>
            <option value="whatsapp">WhatsApp</option><option value="in-person">In person</option>
            <option value="text">Text</option>
          </select>
        </label>
      </div>
      <fieldset>
        <legend>What would help? <small>choose any</small></legend>
        <div className="aqua-checks">
          {services.map((service) => <label key={service}><input type="checkbox" name="services" value={service} />{service}</label>)}
        </div>
      </fieldset>
      <label>Where are you now?<textarea name="message" rows={4} placeholder="Tell us what you have and what you want to improve." /></label>
      <label className="aqua-consent"><input required type="checkbox" name="consent" value="yes" />I agree that my details can be used to reply to this enquiry and managed centrally by Zimante Group.</label>
      <button disabled={status === "busy"}>{status === "busy" ? "Sending..." : "Send my enquiry"}</button>
      {status === "sent" ? <p className="aqua-notice">Thanks. Your enquiry is safely in our central workspace.</p> : null}
      {status === "error" ? <p className="aqua-notice aqua-error">{error}</p> : null}
    </form>
  );
}
