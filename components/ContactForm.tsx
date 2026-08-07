"use client";

import { FormEvent, useState } from "react";
import { submitAquaEnquiry } from "./submitAquaEnquiry";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    setError("");

    try {
      await submitAquaEnquiry({
        name: String(formData.get("name") ?? ""),
        phone: String(formData.get("phone") ?? ""),
        email: String(formData.get("email") ?? ""),
        contactMethod: String(formData.get("contactPreference") ?? ""),
        services: ["Contact form"],
        message: [
          String(formData.get("message") ?? ""),
          String(formData.get("otherContactMethod") ?? "")
            ? `Other contact method: ${String(formData.get("otherContactMethod"))}`
            : "",
        ].filter(Boolean).join("\n"),
        consent: formData.get("contactConsent") === "yes",
      });
      form.reset();
      setSubmitted(true);
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Unable to send.");
    }
  }

  return (
    <form
      className="callback-form contact-form"
      aria-label="Contact AquaOasis-Web"
      onSubmit={handleSubmit}
      data-aqua-form="Contact form"
    >
      {submitted ? (
        <div className="form-success" role="status">
          <strong>Thanks for submitting.</strong>
          <p>Your message has been prepared. We will come back to you shortly.</p>
        </div>
      ) : null}
      {error ? <div className="form-success form-error" role="alert"><strong>Could not send.</strong><p>{error}</p></div> : null}

      <div className="form-heading">
        <p className="eyebrow">Contact us</p>
        <h2>Leave a message</h2>
        <p>Send the essentials and we will come back to you clearly.</p>
      </div>

      <label>
        Name *
        <input name="name" type="text" autoComplete="name" placeholder="Your name" required />
      </label>

      <label>
        Number *
        <input
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="Best number"
          pattern="[0-9+().\s-]{7,25}"
          title="Please enter a valid phone number with no letters."
          required
        />
      </label>

      <label>
        Email *
        <input name="email" type="email" autoComplete="email" placeholder="Email address" required />
      </label>

      <label>
        Best way to get in touch *
        <select name="contactPreference" defaultValue="call" required>
          <option value="call">Phone call</option>
          <option value="text">Text message</option>
          <option value="email">Email</option>
          <option value="other">Other</option>
        </select>
      </label>

      <label>
        Other contact method (optional)
        <input
          name="otherContactMethod"
          type="text"
          placeholder="Type another way to reach you"
        />
      </label>

      <label>
        How can we help? *
        <textarea
          name="message"
          placeholder="Tell us what you need"
          rows={5}
          required
        />
      </label>

      <label className="form-consent">
        <input name="contactConsent" type="checkbox" value="yes" required />
        <span>
          I agree that AquaOasis-Web can contact me back about my enquiry. See
          our <a href="/privacy-policy">Privacy Policy</a>.
        </span>
      </label>

      <button className="primary-button full-width" type="submit">
        Send message
      </button>
    </form>
  );
}
