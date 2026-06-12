"use client";

import { FormEvent, useState } from "react";

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

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const body = Array.from(formData.entries())
      .map(([key, value]) => `${key}: ${value}`)
      .join("\n");

    setSubmitted(true);
    window.location.href = `mailto:aquaoasis-web@gmail.com?subject=Request%20a%20call%20back&body=${encodeURIComponent(body)}`;
  }

  return (
    <form
      id="callback-form"
      className={compact ? "callback-form compact" : "callback-form"}
      action="mailto:aquaoasis-web@gmail.com"
      method="post"
      encType="text/plain"
      aria-label="Request a call back"
      onSubmit={handleSubmit}
    >
      {submitted ? (
        <div className="form-success" role="status">
          <strong>Thanks for submitting.</strong>
          <p>We have your details. AquaOasis-Web will get back to you shortly.</p>
        </div>
      ) : null}

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
        <input name="contactConsent" type="checkbox" required />
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
