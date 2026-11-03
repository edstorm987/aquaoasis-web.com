import type { Metadata } from "next";
import { Aurora } from "@/components/site/blocks";
import { AQUACRM_ORIGIN, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Client sign in",
  description: "Secure access to your AquaOasis-Web client workspace.",
};

export default async function SignInPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;
  const portalUrl = process.env.NEXT_PUBLIC_PORTAL_URL?.trim() || AQUACRM_ORIGIN;

  return (
    <section className="signin">
      <div className="signin-story dark">
        <Aurora />
        <p className="kicker">Your client workspace</p>
        <h1 className="h-lg">One clear place for everything we&apos;re building.</h1>
        <p className="lede">Follow progress, approve work, share feedback and keep your website, billing and support in one place.</p>
        <ul className="tick-list" style={{ color: "var(--on-dark-muted)" }}>
          <li>Project progress</li>
          <li>Files and approvals</li>
          <li>Billing and support</li>
        </ul>
      </div>
      <div className="signin-panel">
        <div className="form-card">
          <h2 className="h-md">Welcome back.</h2>
          <p>Sign in to continue to your private project home.</p>
          <form
            action={`${portalUrl}/api/auth/login/browser`}
            method="post"
            className="form"
            data-aqua-challenge-action="login"
          >
            <input type="hidden" name="brand" value="aqua" />
            <input type="hidden" name="errorReturn" value={`${SITE_URL}/sign-in`} />
            <label className="field">Username or email<input name="email" autoComplete="username" required /></label>
            <label className="field">Password<input type="password" name="password" autoComplete="current-password" required /></label>
            {error ? <p className="notice err" role="alert">{error}</p> : null}
            <button className="btn btn-primary" type="submit">Sign in</button>
            <a className="text-link" href={`${portalUrl}/login/forgot?brand=aqua`} target="_blank" rel="noopener noreferrer">Forgot password?</a>
          </form>
        </div>
      </div>
    </section>
  );
}
