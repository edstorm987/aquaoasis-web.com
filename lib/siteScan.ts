import dns from "node:dns";
import http from "node:http";
import https from "node:https";
import net from "node:net";

/**
 * Fetches one public web page for the free health check and reports the
 * basics Google and customers look for. It runs on our server with a visitor-
 * supplied URL, so it only ever connects to public addresses: the address is
 * checked inside the socket's own DNS lookup (so a rebinding answer cannot slip
 * past), redirects are followed by hand and re-checked, and size and time are
 * capped.
 */

const MAX_BYTES = 1_500_000;
const TIMEOUT_MS = 9_000;
const MAX_REDIRECTS = 4;

export type CheckStatus = "pass" | "warn" | "fail";
export type SiteCheck = { id: string; label: string; status: CheckStatus; detail: string };
export type SiteScan = { url: string; finalUrl: string; responseMs: number; score: number; checks: SiteCheck[] };

export class ScanError extends Error {}

function isPrivateIp(address: string): boolean {
  if (net.isIPv4(address)) {
    const [a, b] = address.split(".").map(Number);
    return a === 0 || a === 10 || a === 127 || a >= 224
      || (a === 100 && b >= 64 && b <= 127)
      || (a === 169 && b === 254)
      || (a === 172 && b >= 16 && b <= 31)
      || (a === 192 && b === 168)
      || (a === 192 && b === 0)
      || (a === 198 && (b === 18 || b === 19));
  }
  const lower = address.toLowerCase();
  if (lower.startsWith("::ffff:")) return isPrivateIp(lower.slice(7));
  return lower === "::" || lower === "::1" || lower.startsWith("fc") || lower.startsWith("fd")
    || lower.startsWith("fe8") || lower.startsWith("fe9") || lower.startsWith("fea") || lower.startsWith("feb")
    || lower.startsWith("ff");
}

const safeLookup: net.LookupFunction = (hostname, options, callback) => {
  dns.lookup(hostname, { ...options, all: true }, (error, addresses) => {
    if (error) return callback(error, "", 0);
    const list = (addresses as dns.LookupAddress[]).filter((entry) => !isPrivateIp(entry.address));
    if (!list.length) return callback(new ScanError("That address isn't a public website."), "", 0);
    if ((options as dns.LookupOptions).all) {
      (callback as unknown as (err: null, list: dns.LookupAddress[]) => void)(null, list);
    } else {
      callback(null, list[0].address, list[0].family);
    }
  });
};

export function normaliseUrl(raw: string): URL {
  const trimmed = raw.trim();
  if (!trimmed || trimmed.length > 300) throw new ScanError("Enter your website address, like yourbusiness.co.uk.");
  let url: URL;
  try {
    url = new URL(/^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`);
  } catch {
    throw new ScanError("That doesn't look like a website address.");
  }
  if (!["http:", "https:"].includes(url.protocol)) throw new ScanError("Only http and https websites can be checked.");
  if (url.username || url.password) throw new ScanError("That doesn't look like a website address.");
  if (url.port && !["80", "443"].includes(url.port)) throw new ScanError("Only standard website ports can be checked.");
  if (!url.hostname.includes(".") || net.isIP(url.hostname)) throw new ScanError("Enter your website's domain name, like yourbusiness.co.uk.");
  url.hash = "";
  return url;
}

function getOnce(url: URL): Promise<{ status: number; location?: string; body: string; contentType: string }> {
  return new Promise((resolve, reject) => {
    const client = url.protocol === "https:" ? https : http;
    const request = client.request(url, {
      method: "GET",
      lookup: safeLookup,
      timeout: TIMEOUT_MS,
      headers: {
        "user-agent": "Mozilla/5.0 (compatible; AquaOasisHealthCheck/1.0; +https://aquaoasis-web.com/free-tools/health-check)",
        accept: "text/html,application/xhtml+xml",
        "accept-encoding": "identity",
      },
    }, (response) => {
      const status = response.statusCode ?? 0;
      const location = response.headers.location;
      if (status >= 300 && status < 400 && location) {
        response.resume();
        resolve({ status, location, body: "", contentType: "" });
        return;
      }
      const chunks: Buffer[] = [];
      let size = 0;
      response.on("data", (chunk: Buffer) => {
        size += chunk.length;
        if (size > MAX_BYTES) {
          response.destroy();
          resolve({ status, body: Buffer.concat(chunks).toString("utf8"), contentType: String(response.headers["content-type"] ?? "") });
          return;
        }
        chunks.push(chunk);
      });
      response.on("end", () => resolve({ status, body: Buffer.concat(chunks).toString("utf8"), contentType: String(response.headers["content-type"] ?? "") }));
      response.on("error", reject);
    });
    request.on("timeout", () => request.destroy(new ScanError("Your website took too long to respond.")));
    request.on("error", (error) => reject(error instanceof ScanError ? error : new ScanError("We couldn't reach that website. Check the address and try again.")));
    request.end();
  });
}

const attr = (tag: string, name: string) => tag.match(new RegExp(`${name}\\s*=\\s*["']([^"']*)["']`, "i"))?.[1] ?? "";
const metaContent = (html: string, key: string, value: string) => {
  const tag = html.match(new RegExp(`<meta[^>]+${key}\\s*=\\s*["']${value}["'][^>]*>`, "i"))?.[0] ?? "";
  return attr(tag, "content").trim();
};
const text = (value: string) => value.replace(/<[^>]+>/g, " ").replace(/&amp;/g, "&").replace(/\s+/g, " ").trim();

export async function scanSite(raw: string): Promise<SiteScan> {
  let url = normaliseUrl(raw);
  const startUrl = url.toString();
  const started = Date.now();
  let result = await getOnce(url);
  let redirects = 0;
  while (result.location && redirects < MAX_REDIRECTS) {
    redirects += 1;
    url = normaliseUrl(new URL(result.location, url).toString());
    result = await getOnce(url);
  }
  const responseMs = Date.now() - started;
  if (result.location) throw new ScanError("That website redirects too many times to check.");
  if (result.status >= 400 || !result.status) throw new ScanError(`That website answered with an error (${result.status}).`);
  if (result.contentType && !/html/i.test(result.contentType)) throw new ScanError("That address isn't a web page we can check.");

  const html = result.body;
  const head = html.slice(0, 200_000);
  const title = text(head.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] ?? "");
  const description = metaContent(head, "name", "description");
  const viewport = metaContent(head, "name", "viewport");
  const ogImage = metaContent(head, "property", "og:image");
  const h1s = [...html.matchAll(/<h1[\s>][\s\S]*?<\/h1>/gi)].map((match) => text(match[0])).filter(Boolean);
  const hasSchema = /application\/ld\+json/i.test(html) && /"@type"\s*:\s*"[^"]*(LocalBusiness|Organization|Store|Restaurant|Service|Corporation)/i.test(html);
  const hasTel = /href\s*=\s*["']tel:/i.test(html);
  const hasForm = /<form[\s>]/i.test(html) || /calendly|booking|book now|book online/i.test(html);
  const imgs = [...html.matchAll(/<img\b[^>]*>/gi)].map((match) => match[0]);
  const missingAlt = imgs.filter((img) => !/\balt\s*=/i.test(img)).length;
  const secure = url.protocol === "https:";

  const checks: SiteCheck[] = [
    { id: "https", label: "Secure connection (HTTPS)", status: secure ? "pass" : "fail", detail: secure ? "Visitors see the padlock." : "Browsers warn visitors that your site is 'Not secure'." },
    { id: "speed", label: "Response speed", status: responseMs < 1500 ? "pass" : responseMs < 3500 ? "warn" : "fail", detail: `Your server answered in ${(responseMs / 1000).toFixed(1)}s.${responseMs >= 1500 ? " Slow sites lose visitors and rank lower." : ""}` },
    { id: "mobile", label: "Set up for mobile", status: /width\s*=\s*device-width/i.test(viewport) ? "pass" : "fail", detail: viewport ? "Your page tells phones how to display it." : "No mobile viewport set, so phones may show a zoomed-out desktop page." },
    { id: "title", label: "Page title", status: !title ? "fail" : title.length < 15 || title.length > 65 ? "warn" : "pass", detail: title ? `“${title.slice(0, 80)}” (${title.length} characters, aim for 15–65).` : "No page title. This is the headline Google shows." },
    { id: "description", label: "Google description", status: !description ? "fail" : description.length < 50 || description.length > 165 ? "warn" : "pass", detail: description ? `${description.length} characters (aim for 50–160).` : "No meta description, so Google guesses what to show under your link." },
    { id: "h1", label: "Main heading", status: h1s.length === 1 ? "pass" : h1s.length ? "warn" : "fail", detail: h1s.length === 1 ? `“${h1s[0].slice(0, 80)}”` : h1s.length ? `${h1s.length} main headings found. One clear one is best.` : "No main (H1) heading telling people and Google what the page is about." },
    { id: "schema", label: "Business details for Google", status: hasSchema ? "pass" : "warn", detail: hasSchema ? "Structured business data found." : "No structured business data, which helps Google show your details." },
    { id: "share", label: "Social sharing image", status: ogImage ? "pass" : "warn", detail: ogImage ? "Links shared on social media show an image." : "Links shared on WhatsApp or Facebook show no picture." },
    { id: "contact", label: "Easy to contact", status: hasTel && hasForm ? "pass" : hasTel || hasForm ? "warn" : "fail", detail: hasTel && hasForm ? "Click-to-call and a form or booking option found." : `${hasTel ? "" : "No click-to-call link. "}${hasForm ? "" : "No enquiry form or booking option on this page."}`.trim() },
    { id: "alt", label: "Image descriptions", status: !imgs.length || missingAlt === 0 ? "pass" : missingAlt / imgs.length < 0.3 ? "warn" : "fail", detail: imgs.length ? `${imgs.length - missingAlt} of ${imgs.length} images have descriptions.` : "No images found on this page." },
  ];
  const points = { pass: 10, warn: 5, fail: 0 } as const;
  const score = Math.round((checks.reduce((sum, check) => sum + points[check.status], 0) / (checks.length * 10)) * 100);
  return { url: startUrl, finalUrl: url.toString(), responseMs, score, checks };
}
