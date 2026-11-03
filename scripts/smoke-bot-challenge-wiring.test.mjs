import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const source = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");

test("both AquaOasis document roots load the shared challenge", () => {
  const site = source("lib/site.ts");
  assert.match(site, /https:\/\/www\.aqua-crm\.co\.uk/);
  assert.match(site, /http:\/\/localhost:3032/);
  assert.doesNotMatch(site, /https:\/\/aqua-crm\.com/);

  const layout = source("app/layout.tsx");
  assert.match(layout, /\$\{AQUACRM_ORIGIN\}\/aqua-bot-challenge\.js/);
  assert.match(layout, /id="aqua-bot-challenge"/);
  // afterInteractive: the challenge mutates forms, which must happen after hydration.
  assert.match(layout, /id="aqua-bot-challenge" src=\{aquaBotChallengeSource\} strategy="afterInteractive"/);

  const mainSite = source("main-site/app/layout.tsx");
  assert.match(mainSite, /https:\/\/www\.aqua-crm\.co\.uk\/aqua-bot-challenge\.js/);
  assert.match(mainSite, /strategy="beforeInteractive"/);
});

test("every mounted AquaOasis enquiry form declares the exact action and forwards proof", () => {
  const forms = [
    "components/EnquiryForm.tsx",
    "components/tools/LeadGate.tsx",
    "components/ChatBot.tsx",
    "components/SupportForm.tsx",
    "main-site/components/ContactForm.tsx",
  ];

  for (const path of forms) {
    const contents = source(path);
    assert.match(contents, /data-aqua-challenge-action="brand-enquiry"/, path);
    assert.match(contents, /captchaToken/, path);
    assert.match(contents, /resetAquaBotChallenge\(form\)/, path);
    assert.match(contents, /submissionId/, path);
  }

  const submitter = source("components/submitAquaEnquiry.ts");
  assert.match(submitter, /captchaToken: string/);
  assert.match(submitter, /captchaToken: input\.captchaToken/);
  assert.match(submitter, /submissionId: input\.submissionId/);
  assert.match(submitter, /brand: "aquaoasis-web"/);
});

test("submission ids match AquaCRM's aqua_sub_ format", async () => {
  const pattern = /^aqua_sub_[a-z0-9_-]{12,100}$/i;
  const id = `aqua_sub_${crypto.randomUUID().replace(/-/g, "").toLowerCase()}`;
  assert.match(id, pattern);
  assert.match(source("components/submitAquaEnquiry.ts"), /`aqua_sub_\$\{random\.toLowerCase\(\)\}`/);
});

test("AquaOasis central browser login declares the login action", () => {
  const login = source("app/sign-in/page.tsx");
  assert.match(login, /action=\{`\$\{portalUrl\}\/api\/auth\/login\/browser`\}/);
  assert.match(login, /data-aqua-challenge-action="login"/);
});
