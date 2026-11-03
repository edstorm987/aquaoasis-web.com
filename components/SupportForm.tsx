"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { submitAquaEnquiry, useSubmissionId } from "./submitAquaEnquiry";
import { resetAquaBotChallenge } from "./aquaBotChallenge";

export function SupportForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const submission = useSubmissionId();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    setError("");
    setBusy(true);
    try {
      await submitAquaEnquiry({
        submissionId: submission.current(),
        channel: "support",
        name: String(formData.get("name") ?? ""),
        phone: String(formData.get("telephone") ?? ""),
        email: String(formData.get("email") ?? ""),
        contactMethod: "support",
        services: ["Support request"],
        message: String(formData.get("supportRequest") ?? ""),
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
    <div className="form-card">
      <h2 className="h-sm">How can we help?</h2>
      <p>Existing clients: send the details and we&apos;ll come back to you directly.</p>
      {submitted ? <p className="notice ok" role="status">Thanks, your support request is with us. We&apos;ll be in touch.</p> : null}
      <form className="form" aria-label="Customer support form" onSubmit={handleSubmit} data-aqua-form="Support request" data-aqua-challenge-action="brand-enquiry">
        <div className="form-row">
          <label className="field">Name<input name="name" autoComplete="name" required /></label>
          <label className="field">Telephone<input name="telephone" type="tel" autoComplete="tel" pattern="[0-9+().\s\-]{7,25}" title="Please enter a valid phone number with no letters." required /></label>
        </div>
        <label className="field">Email<input name="email" type="email" autoComplete="email" required /></label>
        <label className="field">What do you need help with?<textarea name="supportRequest" rows={5} required /></label>
        <label className="check">
          <input name="contactConsent" type="checkbox" value="yes" required />
          <span>AquaOasis-Web can contact me about this request. See the <Link href="/privacy-policy">privacy policy</Link>.</span>
        </label>
        {error ? <p className="notice err" role="alert">{error}</p> : null}
        <button className="btn btn-primary" type="submit" disabled={busy}>{busy ? "Sending…" : "Send support request"}</button>
      </form>
    </div>
  );
}
