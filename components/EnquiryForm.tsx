"use client";

import Link from "next/link";
import { useState } from "react";
import { resetAquaBotChallenge } from "./aquaBotChallenge";
import { submitAquaEnquiry, useSubmissionId } from "./submitAquaEnquiry";

const serviceChoices = [
  "Website or ecommerce",
  "Social media",
  "Google & local visibility",
  "Advertising & campaigns",
  "Photography, video or content",
  "Not sure yet",
];

export function EnquiryForm({
  defaultService,
  heading = "Tell us what you need",
  intro = "Two minutes now saves a lot of back and forth. A real person reads every message, usually within a working day.",
}: {
  defaultService?: string;
  heading?: string;
  intro?: string;
}) {
  const [status, setStatus] = useState<"idle" | "busy" | "sent" | "error">("idle");
  const [error, setError] = useState("");
  const submission = useSubmissionId();

  return (
    <div className="form-card" id="enquiry">
      <h2 className="h-sm">{heading}</h2>
      <p>{intro}</p>
      {status === "sent" ? (
        <div className="notice ok" role="status">
          Thanks, that&apos;s with us. We&apos;ll be in touch soon. If it&apos;s urgent, call 07305410203.
        </div>
      ) : (
        <form
          className="form"
          data-aqua-form="Project enquiry"
          data-aqua-challenge-action="brand-enquiry"
          onSubmit={async (event) => {
            event.preventDefault();
            const form = event.currentTarget;
            const data = new FormData(form);
            setStatus("busy");
            setError("");
            try {
              await submitAquaEnquiry({
                submissionId: submission.current(),
                name: String(data.get("name") ?? ""),
                email: String(data.get("email") ?? ""),
                phone: String(data.get("phone") ?? ""),
                contactMethod: String(data.get("contactMethod") ?? ""),
                services: data.getAll("services").map(String),
                message: [String(data.get("business") ?? "").trim() && `Business: ${data.get("business")}`, String(data.get("message") ?? "")]
                  .filter(Boolean)
                  .join("\n\n"),
                website: String(data.get("website") ?? ""),
                captchaToken: String(data.get("captchaToken") ?? ""),
                consent: data.get("consent") === "yes",
                marketingConsent: data.get("marketing") === "yes",
              });
              submission.settle();
              form.reset();
              setStatus("sent");
            } catch (cause) {
              setError(cause instanceof Error ? cause.message : "Unable to send.");
              setStatus("error");
            } finally {
              resetAquaBotChallenge(form);
            }
          }}
        >
          <div className="honeypot" aria-hidden="true">
            <label>Leave this blank<input name="website" tabIndex={-1} autoComplete="off" /></label>
          </div>
          <div className="form-row">
            <label className="field">Your name<input required name="name" autoComplete="name" /></label>
            <label className="field">Business name <small>optional</small><input name="business" autoComplete="organization" /></label>
          </div>
          <div className="form-row">
            <label className="field">Email<input required type="email" name="email" autoComplete="email" /></label>
            <label className="field">Phone <small>optional</small><input type="tel" name="phone" autoComplete="tel" /></label>
          </div>
          <label className="field">Best way to reach you
            <select required name="contactMethod" defaultValue="">
              <option value="" disabled>Choose one</option>
              <option value="call">Phone call</option>
              <option value="email">Email</option>
              <option value="whatsapp">WhatsApp</option>
              <option value="text">Text</option>
              <option value="in-person">In person</option>
            </select>
          </label>
          <fieldset className="chips">
            <legend>What can we help with? <small style={{ fontWeight: 500, color: "var(--muted)" }}>pick any</small></legend>
            {serviceChoices.map((service) => (
              <label className="chip" key={service}>
                <input type="checkbox" name="services" value={service} defaultChecked={service === defaultService} />
                <span>{service}</span>
              </label>
            ))}
          </fieldset>
          <label className="field">Where are you now, and where do you want to be?
            <textarea name="message" rows={4} placeholder="e.g. We're a café in Ipswich with an old website and an Instagram we never post on." />
          </label>
          <label className="check">
            <input required type="checkbox" name="consent" value="yes" />
            <span>I agree AquaOasis-Web can use these details to reply to my enquiry. Enquiries are managed centrally by Zimante Group. See the <Link href="/privacy-policy">privacy policy</Link>.</span>
          </label>
          <label className="check">
            <input type="checkbox" name="marketing" value="yes" />
            <span>Send me occasional tips and offers. Optional, unsubscribe any time.</span>
          </label>
          <button className="btn btn-primary" type="submit" disabled={status === "busy"}>
            {status === "busy" ? "Sending…" : "Send my enquiry"}
          </button>
          {status === "error" ? <p className="notice err" role="alert">{error}</p> : null}
        </form>
      )}
    </div>
  );
}
