"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { SiteScan } from "@/lib/siteScan";
import { Icon } from "../site/Icon";
import { LeadGate } from "./LeadGate";
import { areas, questions, scoreLabel } from "./healthQuestions";

const statusMark = { pass: "✓", warn: "!", fail: "✕" } as const;
const checkFixes: Record<string, string> = {
  https: "Switch your website to HTTPS so browsers stop showing a 'Not secure' warning.",
  speed: "Speed up your website: lighter images, better hosting and fewer heavy plugins.",
  mobile: "Add a mobile viewport and a responsive layout so the site works properly on phones.",
  title: "Write a clear page title with what you do and where, in 15–65 characters.",
  description: "Add a Google description (meta description) that sells the click in 50–160 characters.",
  h1: "Give the homepage one clear main heading saying what you do.",
  schema: "Add structured business data so Google can show your hours, location and reviews.",
  share: "Add a social sharing image so links look great on WhatsApp, Facebook and LinkedIn.",
  contact: "Add click-to-call and a simple enquiry or booking form near the top of the page.",
  alt: "Describe your images (alt text) for accessibility and image search.",
};

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]!);
}

export function HealthCheck() {
  const [url, setUrl] = useState("");
  const [scan, setScan] = useState<SiteScan | null>(null);
  const [scanError, setScanError] = useState("");
  const [scanning, setScanning] = useState(false);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [unlocked, setUnlocked] = useState<{ name: string } | null>(null);

  const answered = Object.keys(answers).length;
  const complete = answered === questions.length;

  const result = useMemo(() => {
    const byArea = areas.map((area) => {
      const qs = questions.filter((question) => question.area === area);
      const scores = qs.map((question) => (answers[question.id] === undefined ? null : question.options[answers[question.id]].score));
      const known = scores.filter((score): score is number => score !== null);
      return { area, answered: known.length > 0, score: known.length ? Math.round(known.reduce((a, b) => a + b, 0) / known.length) : 0 };
    });
    // Only areas with at least one answer count, so a half-finished quiz isn't dragged down by blanks.
    const answeredAreas = byArea.filter((item) => item.answered);
    const quiz = answeredAreas.length ? answeredAreas.reduce((sum, item) => sum + item.score, 0) / answeredAreas.length : null;
    const overall = Math.round(quiz === null ? scan?.score ?? 0 : scan ? quiz * 0.65 + scan.score * 0.35 : quiz);
    const weakAnswers = questions
      .filter((question) => answers[question.id] !== undefined && question.options[answers[question.id]].score < 70)
      .sort((a, b) => a.options[answers[a.id]].score - b.options[answers[b.id]].score)
      .map((question) => question.fix);
    const weakChecks = (scan?.checks ?? []).filter((check) => check.status !== "pass").sort((a, b) => (a.status === b.status ? 0 : a.status === "fail" ? -1 : 1)).map((check) => checkFixes[check.id]);
    const recommendations = [...weakChecks.slice(0, 3), ...weakAnswers].slice(0, 7);
    return { byArea, overall, recommendations };
  }, [answers, scan]);

  async function runScan() {
    setScanning(true);
    setScanError("");
    try {
      const response = await fetch("/api/site-check", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ url }),
      });
      const data = await response.json() as { ok: boolean; scan?: SiteScan; error?: string };
      if (!data.ok || !data.scan) throw new Error(data.error ?? "We couldn't check that website.");
      setScan(data.scan);
    } catch (cause) {
      setScan(null);
      setScanError(cause instanceof Error ? cause.message : "We couldn't check that website.");
    } finally {
      setScanning(false);
    }
  }

  function summary() {
    return [
      `Overall score: ${result.overall}/100 (${scoreLabel(result.overall).label}).`,
      `Areas: ${result.byArea.map((item) => `${item.area} ${item.answered ? item.score : "not answered"}`).join(", ")}.`,
      scan ? `Website: ${scan.finalUrl} scored ${scan.score}/100. Issues: ${scan.checks.filter((check) => check.status !== "pass").map((check) => check.label).join("; ") || "none"}.` : "Website: not scanned.",
      `Answers:\n${questions.map((question) => `- ${question.prompt} ${answers[question.id] === undefined ? "(skipped)" : question.options[answers[question.id]].label}`).join("\n")}`,
    ].join("\n");
  }

  function downloadReport() {
    const html = `<!doctype html><html lang="en-GB"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Health check report – AquaOasis-Web</title>
<style>body{font-family:system-ui,sans-serif;max-width:760px;margin:40px auto;padding:0 20px;color:#0b1020;line-height:1.6}h1{font-size:34px;margin:0 0 8px}.score{font-size:64px;font-weight:800}li{margin-bottom:10px}.muted{color:#4a5068}table{border-collapse:collapse;width:100%}td{padding:8px;border-bottom:1px solid #ddd}</style></head><body>
<p class="muted">AquaOasis-Web · Website &amp; Google health check · ${new Date().toLocaleDateString("en-GB")}</p>
<h1>${escapeHtml(unlocked?.name ? `${unlocked.name}'s` : "Your")} health check</h1>
<p class="score">${result.overall}<span style="font-size:24px">/100</span></p><p><b>${scoreLabel(result.overall).label}</b></p>
<table>${result.byArea.map((item) => `<tr><td>${item.area}</td><td><b>${item.answered ? `${item.score}/100` : "Not answered"}</b></td></tr>`).join("")}${scan ? `<tr><td>Website scan (${escapeHtml(scan.finalUrl)})</td><td><b>${scan.score}/100</b></td></tr>` : ""}</table>
${scan ? `<h2>Website checks</h2><ul>${scan.checks.map((check) => `<li><b>${statusMark[check.status]} ${escapeHtml(check.label)}</b>: ${escapeHtml(check.detail)}</li>`).join("")}</ul>` : ""}
<h2>Your action plan</h2><ol>${result.recommendations.map((rec) => `<li>${escapeHtml(rec)}</li>`).join("")}</ol>
<p>Want this done for you? Call 07305410203 or visit https://aquaoasis-web.com/contact</p></body></html>`;
    const blob = new Blob([html], { type: "text/html" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "aquaoasis-health-check.html";
    link.click();
    window.setTimeout(() => URL.revokeObjectURL(link.href), 2000);
  }

  const label = scoreLabel(result.overall);

  return (
    <div className="tool-shell">
      <div style={{ display: "grid", gap: 24, minWidth: 0 }}>
        <div className="tool-panel">
          <h2>1. Scan your website <small style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--muted)", fontWeight: 600 }}>optional</small></h2>
          <form
            className="form"
            onSubmit={(event) => { event.preventDefault(); void runScan(); }}
          >
            <label className="field">Website address
              <input value={url} onChange={(event) => setUrl(event.target.value)} placeholder="yourbusiness.co.uk" inputMode="url" autoComplete="url" required />
            </label>
            <button className="btn btn-primary" type="submit" disabled={scanning}>{scanning ? "Scanning…" : "Scan my website"}</button>
          </form>
          {scanError ? <p className="notice err" role="alert">{scanError}</p> : null}
          {scan ? (
            <div style={{ display: "grid", gap: 12 }} aria-live="polite">
              <p><b>Website score: {scan.score}/100</b> <span style={{ color: "var(--muted)" }}>· {scan.finalUrl}</span></p>
              <ul className="site-checks">
                {scan.checks.map((check) => (
                  <li key={check.id}>
                    <span className={`dot ${check.status}`} aria-label={check.status}>{statusMark[check.status]}</span>
                    <span><b>{check.label}</b><small>{check.detail}</small></span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>

        <div className="tool-panel">
          <h2>2. Ten quick questions</h2>
          <div className="progress" role="progressbar" aria-valuenow={answered} aria-valuemin={0} aria-valuemax={questions.length} aria-label="Questions answered">
            <i style={{ width: `${(answered / questions.length) * 100}%` }} />
          </div>
          <div className="q-list">
            {questions.map((question) => (
              <fieldset className="q" key={question.id}>
                <legend><span className="area">{question.area}</span>{question.prompt}</legend>
                <div className="q-opts seg">
                  {question.options.map((option, index) => (
                    <button
                      key={option.label}
                      type="button"
                      aria-pressed={answers[question.id] === index}
                      onClick={() => setAnswers((current) => ({ ...current, [question.id]: index }))}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </fieldset>
            ))}
          </div>
        </div>
      </div>

      <div style={{ display: "grid", gap: 24, alignContent: "start", minWidth: 0 }}>
        <div className="tool-panel" aria-live="polite">
          <h2>Your score</h2>
          {answered === 0 && !scan ? (
            <p style={{ color: "var(--muted)" }}>Scan your website and answer the questions. Your score builds as you go.</p>
          ) : (
            <>
              <div className="score-ring" style={{ "--val": result.overall, "--ring": label.color } as React.CSSProperties}>
                <span><span>{result.overall}<small>out of 100</small></span></span>
              </div>
              <p style={{ textAlign: "center", fontWeight: 700 }}>{label.label}</p>
              <div className="area-bars">
                {result.byArea.map((item) => (
                  <div className="area-bar" key={item.area}>
                    <div><span>{item.area}</span><span>{item.answered ? item.score : "–"}</span></div>
                    <div className="progress"><i style={{ width: `${item.score}%` }} /></div>
                  </div>
                ))}
              </div>
              {!complete ? <p style={{ color: "var(--muted)", fontSize: 15 }}>{questions.length - answered} questions to go for an accurate score.</p> : null}
            </>
          )}
        </div>

        {unlocked ? (
          <div className="unlocked" role="status">
            <h3 className="h-sm">Your action plan</h3>
            {result.recommendations.length ? (
              <ol className="recs">{result.recommendations.map((rec) => <li key={rec}>{rec}</li>)}</ol>
            ) : (
              <p>You&apos;re in great shape. Next step: keep it consistent and start measuring what brings customers in.</p>
            )}
            <button className="btn btn-primary" type="button" onClick={downloadReport}><Icon name="download" /> Download my report</button>
            <p>We&apos;ve got your details and will be in touch with a few pointers. Want it all fixed? <Link className="text-link" href="/contact">Get sorted <Icon name="arrow" /></Link></p>
          </div>
        ) : answered >= 5 || scan ? (
          <LeadGate
            tool="Website & Google health check"
            title="Unlock your personal action plan"
            copy="Free. Get the fixes that will make the biggest difference to your business, ranked, plus a downloadable report."
            buttonLabel="Show my action plan"
            buildMessage={summary}
            onUnlocked={(lead) => setUnlocked({ name: lead.name })}
          />
        ) : (
          <div className="gate">
            <span className="free-tag">Free</span>
            <h3 className="h-sm">Your action plan unlocks here</h3>
            <p>Answer at least five questions or scan your website to see your personal, ranked list of fixes.</p>
          </div>
        )}
      </div>
    </div>
  );
}
