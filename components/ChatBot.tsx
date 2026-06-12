"use client";

import { FormEvent, useState } from "react";

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [phoneError, setPhoneError] = useState("");

  function isValidPhoneNumber(value: string) {
    const digitCount = value.replace(/\D/g, "").length;
    return /^[0-9+().\s-]+$/.test(value) && digitCount >= 7 && digitCount <= 15;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const phone = String(formData.get("phone") ?? "");

    if (!isValidPhoneNumber(phone)) {
      setPhoneError("Please enter a valid phone number with no letters.");
      return;
    }

    setPhoneError("");
    const body = Array.from(formData.entries())
      .map(([key, value]) => `${key}: ${value}`)
      .join("\n");

    setSubmitted(true);
    window.location.href = `mailto:aquaoasis-web@gmail.com?subject=Website%20chat%20message&body=${encodeURIComponent(body)}`;
  }

  return (
    <div className="chat-widget">
      {isOpen ? (
        <section className="chat-panel" aria-label="AquaOasis-Web chat">
          <div className="chat-panel-header">
            <div>
              <strong>AquaOasis-Web</strong>
              <p>Leave a message and we will come back to you.</p>
            </div>
            <button
              aria-label="Close chat"
              className="chat-close"
              type="button"
              onClick={() => setIsOpen(false)}
            >
              ×
            </button>
          </div>

          {submitted ? (
            <div className="chat-success" role="status">
              <strong>Thanks for your message.</strong>
              <p>We will get back to you as soon as we can.</p>
              <a className="chat-call-button" href="tel:+447305410203">
                Call us now
              </a>
              <button
                className="chat-secondary-button"
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setPhoneError("");
                }}
              >
                Send another message
              </button>
            </div>
          ) : (
            <form className="chat-form" onSubmit={handleSubmit}>
              <label>
                First name *
                <input name="firstName" autoComplete="given-name" placeholder="Your first name" required />
              </label>
              <label>
                Phone number *
                <input
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="Best number"
                  pattern="[0-9+().\s-]{7,25}"
                  aria-describedby={phoneError ? "chat-phone-error" : undefined}
                  title="Please enter a valid phone number with no letters."
                  required
                />
                {phoneError ? (
                  <span className="chat-field-error" id="chat-phone-error">
                    {phoneError}
                  </span>
                ) : null}
              </label>
              <label>
                Email (optional)
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Email address"
                />
              </label>
              <label>
                Message *
                <textarea
                  name="message"
                  placeholder="Tell us what you need help with."
                  rows={4}
                  required
                />
              </label>
              <label className="chat-consent">
                <input name="contactConsent" type="checkbox" required />
                <span>
                  I agree that AquaOasis-Web can contact me back about my
                  message. See our <a href="/privacy-policy">Privacy Policy</a>.
                </span>
              </label>
              <button className="chat-send-button" type="submit">
                Send message
              </button>
              <a className="chat-call-link" href="tel:+447305410203">
                Need us faster? Call 07305410203
              </a>
            </form>
          )}
        </section>
      ) : null}

      <button
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close chat" : "Open chat"}
        className="chat-toggle"
        type="button"
        onClick={() => setIsOpen((current) => !current)}
      >
        <span aria-hidden="true">
          <svg viewBox="0 0 24 24" role="img">
            <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5A8.5 8.5 0 0 1 21 11v.5Z" />
          </svg>
        </span>
        Chat
      </button>
    </div>
  );
}
