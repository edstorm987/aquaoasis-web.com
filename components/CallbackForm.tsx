"use client";

import { FormEvent, useState } from "react";
import { submitAquaEnquiry } from "./submitAquaEnquiry";

type CallbackFormProps = {
  compact?: boolean;
  heading?: string;
  intro?: string;
};

export function CallbackForm({
  compact = false,
  heading = "Request a call back",
  intro = "Leave your name and phone number. Add a good time or note if helpful.",
}: CallbackFormProps) {
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
        contactMethod: "call",
        services: ["Callback request"],
        message: String(formData.get("message") ?? ""),
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
      id="callback-form"
      className={compact ? "callback-form compact" : "callback-form"}
      aria-label="Request a call back"
      onSubmit={handleSubmit}
      data-aqua-form="Callback request"
    >
      {submitted ? (
        <div className="form-success" role="status">
          <strong>Thanks for submitting.</strong>
          <p>We have your details. AquaOasis-Web will get back to you shortly.</p>
        </div>
      ) : null}
      {error ? <div className="form-success form-error" role="alert"><strong>Could not send.</strong><p>{error}</p></div> : null}

      <div className="form-heading">
        <p className="eyebrow">Fastest next step</p>
        <h2>{heading}</h2>
        <p>{intro}</p>
      </div>

      <label>
        Name *
        <input name="name" type="text" autoComplete="name" placeholder="Your name" required />
      </label>

      <label>
        Phone *
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
        Message (optional)
        <textarea
          name="message"
          placeholder="Good time to call, whether you would like to meet in person, or anything useful we should know."
          rows={3}
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
        Request call back
      </button>
      <a className="form-link" href="/contact">
        Contact us
      </a>
    </form>
  );
}
