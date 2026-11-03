"use client";

import Link from "next/link";
import { useState } from "react";
import { resetAquaBotChallenge } from "../aquaBotChallenge";
import { submitAquaEnquiry, useSubmissionId } from "../submitAquaEnquiry";

/**
 * The gate in front of every free-tool download or full report. Unlocking
 * sends one enquiry into AquaCRM (brand `aquaoasis-web`) tagged with the tool
 * as its service, and the tool's own output as the message, so the lead
 * arrives with context.
 */
export function LeadGate({
  tool,
  title,
  copy,
  buttonLabel,
  buildMessage,
  onUnlocked,
}: {
  tool: string;
  title: string;
  copy: string;
  buttonLabel: string;
  buildMessage: () => string;
  onUnlocked: (lead: { name: string; email: string }) => void;
}) {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const submission = useSubmissionId();

  return (
    <div className="gate">
      <span className="free-tag">Free</span>
      <h3 className="h-sm">{title}</h3>
      <p>{copy}</p>
      <div className="form-card">
        <form
          className="form"
          data-aqua-form={`Free tool: ${tool}`}
          data-aqua-challenge-action="brand-enquiry"
          onSubmit={async (event) => {
            event.preventDefault();
            const form = event.currentTarget;
            const data = new FormData(form);
            const name = String(data.get("name") ?? "");
            const email = String(data.get("email") ?? "");
            const business = String(data.get("business") ?? "").trim();
            setBusy(true);
            setError("");
            try {
              await submitAquaEnquiry({
                submissionId: submission.current(),
                name,
                email,
                contactMethod: "email",
                services: [`Free tool: ${tool}`],
                message: [`Used the free ${tool} on aquaoasis-web.com.`, business && `Business: ${business}`, buildMessage()]
                  .filter(Boolean)
                  .join("\n\n")
                  .slice(0, 3800),
                website: String(data.get("website") ?? ""),
                captchaToken: String(data.get("captchaToken") ?? ""),
                consent: data.get("consent") === "yes",
                marketingConsent: data.get("marketing") === "yes",
              });
              submission.settle();
              onUnlocked({ name, email });
            } catch (cause) {
              setError(cause instanceof Error ? cause.message : "Unable to send.");
            } finally {
              setBusy(false);
              resetAquaBotChallenge(form);
            }
          }}
        >
          <div className="honeypot" aria-hidden="true">
            <label>Leave this blank<input name="website" tabIndex={-1} autoComplete="off" /></label>
          </div>
          <div className="form-row">
            <label className="field">Your name<input required name="name" autoComplete="name" /></label>
            <label className="field">Email<input required type="email" name="email" autoComplete="email" /></label>
          </div>
          <label className="field">Business name <small>optional</small><input name="business" autoComplete="organization" /></label>
          <label className="check">
            <input required type="checkbox" name="consent" value="yes" />
            <span>Send me this, and let AquaOasis-Web follow up about it. See the <Link href="/privacy-policy">privacy policy</Link>.</span>
          </label>
          <label className="check">
            <input type="checkbox" name="marketing" value="yes" />
            <span>Also send occasional tips and offers. Optional.</span>
          </label>
          <button className="btn btn-primary" type="submit" disabled={busy}>{busy ? "Unlocking…" : buttonLabel}</button>
          {error ? <p className="notice err" role="alert">{error}</p> : null}
        </form>
      </div>
    </div>
  );
}
