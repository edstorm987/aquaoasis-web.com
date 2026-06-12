"use client";

import { FormEvent, useState } from "react";

export function SupportForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const body = Array.from(formData.entries())
      .map(([key, value]) => `${key}: ${value}`)
      .join("\n");

    setSubmitted(true);
    window.location.href = `mailto:aquaoasis-web@gmail.com?subject=AquaOasis-Web%20support&body=${encodeURIComponent(body)}`;
  }

  return (
    <form
      className="callback-form contact-form"
      action="mailto:aquaoasis-web@gmail.com"
      method="post"
      encType="text/plain"
      aria-label="Customer support form"
      onSubmit={handleSubmit}
    >
      {submitted ? (
        <div className="form-success" role="status">
          <strong>Thanks for submitting.</strong>
          <p>Your support request has been prepared. We will get back to you directly.</p>
        </div>
      ) : null}

      <div className="form-heading">
        <p className="eyebrow">Customer support</p>
        <h2>How can we help?</h2>
        <p>Send the details and we will come back to you directly.</p>
      </div>

      <label>
        Name *
        <input name="name" type="text" autoComplete="name" placeholder="Your name" required />
      </label>

      <label>
        Telephone *
        <input name="telephone" type="tel" autoComplete="tel" placeholder="Best number" required />
      </label>

      <label>
        Email *
        <input name="email" type="email" autoComplete="email" placeholder="Email address" required />
      </label>

      <label>
        What do you need support with? *
        <textarea
          name="supportRequest"
          placeholder="Tell us what you need help with"
          rows={5}
          required
        />
      </label>

      <button className="primary-button full-width" type="submit">
        Send support request
      </button>
    </form>
  );
}
