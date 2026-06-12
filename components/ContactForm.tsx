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
    window.location.href = `mailto:aquaoasis-web@gmail.com?subject=AquaOasis-Web%20contact&body=${encodeURIComponent(body)}`;
  }

  return (
    <form
      className="callback-form contact-form"
      action="mailto:aquaoasis-web@gmail.com"
      method="post"
      encType="text/plain"
      aria-label="Contact AquaOasis-Web"
      onSubmit={handleSubmit}
    >
      {submitted ? (
        <div className="form-success" role="status">
          <strong>Thanks for submitting.</strong>
          <p>Your message has been prepared. We will come back to you shortly.</p>
        </div>
      ) : null}

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
        <input name="phone" type="tel" autoComplete="tel" placeholder="Best number" required />
      </label>

      <label>
        Email (optional)
        <input name="email" type="email" autoComplete="email" placeholder="Email address" />
      </label>

      <label>
        Best way to get in touch *
        <select name="contactPreference" defaultValue="Phone call" required>
          <option>Phone call</option>
          <option>Text message</option>
          <option>Email</option>
          <option>Other</option>
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

      <button className="primary-button full-width" type="submit">
        Send message
      </button>
    </form>
  );
}
