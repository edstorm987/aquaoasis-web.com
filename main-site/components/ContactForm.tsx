"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const body = Array.from(formData.entries())
      .map(([key, value]) => `${key}: ${value}`)
      .join("\n");

    setSubmitted(true);
    window.location.href = `mailto:aquaoasis-web@gmail.com?subject=AquaOasis-Web%20main%20site%20enquiry&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} aria-label="AquaOasis-Web enquiry form">
      {submitted ? (
        <div className="form-success" role="status">
          <strong>Thanks, we have got it.</strong>
          <p>We will get back to you and point you towards the right next step.</p>
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
      <button className="primary-button full-width" type="submit">
        Send enquiry
      </button>
    </form>
  );
}
