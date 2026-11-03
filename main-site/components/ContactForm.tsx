"use client";

import { FormEvent, useRef, useState } from "react";
import { resetAquaBotChallenge } from "./aquaBotChallenge";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  // AquaCRM refuses production enquiries without a submissionId; one per submission, reused on retry.
  const submissionId = useRef<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const product = String(formData.get("product") || "Not sure yet").trim();
    const message = String(formData.get("message") || "").trim();
    const consent = formData.get("consent") === "yes";

    submissionId.current ??= `aqua_sub_${crypto.randomUUID().replace(/-/g, "")}`;

    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_ENQUIRY_ENDPOINT
          ?? (process.env.NODE_ENV === "production"
            ? "https://www.aqua-crm.co.uk/api/public/brand-enquiry"
            : "http://localhost:3032/api/public/brand-enquiry"),
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            brand: "aquaoasis-web",
            submissionId: submissionId.current,
            name,
            phone,
            email: email || undefined,
            contactMethod: phone ? "call" : "email",
            services: [product],
            message,
            sourceUrl: window.location.href,
            campaign: "AquaOasis-Web main site enquiry",
            consent,
            captchaToken: formData.get("captchaToken"),
          }),
        },
      );

      if (!response.ok) throw new Error("Could not send enquiry.");

      submissionId.current = null;
      setSubmitted(true);
      form.reset();
    } catch {
      setError("Sorry, that did not send. Please email us directly.");
    } finally {
      resetAquaBotChallenge(form);
    }
  }

  return (
    <form
      className="contact-form"
      onSubmit={handleSubmit}
      aria-label="AquaOasis-Web enquiry form"
      data-aqua-form="AquaOasis-Web enquiry"
      data-aqua-challenge-action="brand-enquiry"
    >
      {submitted ? (
        <div className="form-success" role="status">
          <strong>Thanks, we have got it.</strong>
          <p>We will get back to you and point you towards the right next step.</p>
        </div>
      ) : null}
      {error ? (
        <div className="form-success" role="alert">
          <strong>{error}</strong>
        </div>
      ) : null}

      <label>
        Name *
        <input name="name" type="text" autoComplete="name" required />
      </label>
      <label>
        Phone *
        <input
          name="phone"
          type="tel"
          autoComplete="tel"
          pattern="[0-9+().\s-]{7,25}"
          title="Please enter a valid phone number with no letters."
          required
        />
      </label>
      <label>
        Email (optional)
        <input name="email" type="email" autoComplete="email" />
      </label>
      <label>
        What do you need?
        <select name="product" defaultValue="Not sure yet">
          <option>Not sure yet</option>
          <option>Getting You Online</option>
          <option>Website Build</option>
          <option>Creator Setup</option>
          <option>Growth support</option>
        </select>
      </label>
      <label>
        Message
        <textarea
          name="message"
          rows={4}
          placeholder="Tell us what you have now and what you want to improve."
        />
      </label>
      <label className="consent-field">
        <input name="consent" type="checkbox" value="yes" required />
        <span>I agree that my details can be used to reply to this enquiry.</span>
      </label>
      <button className="primary-button full-width" type="submit">
        Send enquiry
      </button>
    </form>
  );
}
