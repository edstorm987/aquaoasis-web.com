import { ScanError, scanSite } from "@/lib/siteScan";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// A light, per-instance brake so the scanner can't be used to hammer sites.
const WINDOW_MS = 10 * 60 * 1000;
const LIMIT = 12;
const hits = new Map<string, number[]>();

function allow(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((time) => now - time < WINDOW_MS);
  if (recent.length >= LIMIT) return false;
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return true;
}

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (!allow(ip)) {
    return Response.json({ ok: false, error: "You've run a lot of checks. Please try again in a few minutes." }, { status: 429 });
  }
  const body = await request.json().catch(() => null) as { url?: unknown } | null;
  if (typeof body?.url !== "string") {
    return Response.json({ ok: false, error: "Enter your website address." }, { status: 400 });
  }
  try {
    const scan = await scanSite(body.url);
    return Response.json({ ok: true, scan });
  } catch (error) {
    const message = error instanceof ScanError ? error.message : "We couldn't check that website just now. Please try again.";
    return Response.json({ ok: false, error: message }, { status: 422 });
  }
}
