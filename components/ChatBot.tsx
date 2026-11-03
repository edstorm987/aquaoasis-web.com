"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { submitAquaEnquiry, useSubmissionId } from "./submitAquaEnquiry";
import { resetAquaBotChallenge } from "./aquaBotChallenge";

/**
 * The site's own chat, used until AquaCRM has an `aquaoasis-web` Aqua Bot.
 * Once it does, set NEXT_PUBLIC_AQUA_BOT_ID=aquaoasis-web and the layout loads
 * the AquaCRM embed instead (see AquaBotEmbed).
 */
export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const submission = useSubmissionId();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const phone = String(formData.get("phone") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();

    if (!phone && !email) {
      setError("Add a phone number or email so we can reply.");
      return;
    }
    if (phone && !/^[+()\d\s.-]{7,25}$/.test(phone)) {
      setError("Please enter a valid phone number with no letters.");
      return;
    }

    setError("");
    setBusy(true);
    try {
      await submitAquaEnquiry({
        submissionId: submission.current(),
        channel: "chatbot",
        name: String(formData.get("firstName") ?? ""),
        phone,
        email,
        contactMethod: "chat",
        services: ["Website chat"],
        message: String(formData.get("message") ?? ""),
        captchaToken: String(formData.get("captchaToken") ?? ""),
        consent: formData.get("contactConsent") === "yes",
      });
      submission.settle();
      form.reset();
      setSubmitted(true);
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Unable to send.");
    } finally {
      setBusy(false);
      resetAquaBotChallenge(form);
    }
  }

  return (
    <div className="chat-widget">
      {isOpen ? (
        <section className="chat-panel" aria-label="Chat with AquaOasis-Web">
          <div className="chat-head">
            <div>
              <strong>AquaOasis-Web</strong>
              <p>Leave a message. A real person replies, usually within a working day.</p>
            </div>
            <button aria-label="Close chat" className="chat-close" type="button" onClick={() => setIsOpen(false)}>×</button>
          </div>
          <div className="chat-body">
            {submitted ? (
              <div className="form" role="status">
                <p className="notice ok">Thanks, your message is with us. We&apos;ll be back to you soon.</p>
                <a className="btn btn-primary" href="tel:+447305410203">Call 07305410203</a>
                <button className="btn btn-ghost" type="button" onClick={() => setSubmitted(false)}>Send another message</button>
              </div>
            ) : (
              <form className="form" onSubmit={handleSubmit} data-aqua-form="Website chat" data-aqua-challenge-action="brand-enquiry">
                <label className="field">First name<input name="firstName" autoComplete="given-name" required /></label>
                <label className="field">Phone<input name="phone" type="tel" autoComplete="tel" /></label>
                <label className="field">Email<input name="email" type="email" autoComplete="email" /></label>
                <label className="field">Message<textarea name="message" rows={3} required placeholder="How can we help?" /></label>
                <label className="check">
                  <input name="contactConsent" type="checkbox" value="yes" required />
                  <span>AquaOasis-Web can contact me about this message. See the <Link href="/privacy-policy">privacy policy</Link>.</span>
                </label>
                {error ? <p className="notice err" role="alert">{error}</p> : null}
                <button className="btn btn-primary" type="submit" disabled={busy}>{busy ? "Sending…" : "Send message"}</button>
              </form>
            )}
          </div>
        </section>
      ) : null}
      <button
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close chat" : "Open chat"}
        className="chat-toggle"
        type="button"
        onClick={() => setIsOpen((current) => !current)}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5A8.5 8.5 0 0 1 21 11v.5Z" />
        </svg>
        <span>Chat</span>
      </button>
    </div>
  );
}
