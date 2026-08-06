import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AquaSiteFooter } from "@/components/AquaSiteFooter";
import { AquaSiteHeader } from "@/components/AquaSiteHeader";

export const metadata: Metadata = {
  title: "Client sign in | AquaOasis-Web",
  description: "Secure access to your AquaOasis-Web client workspace.",
};

export default async function SignInPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;
  const defaultPortalUrl =
    process.env.NODE_ENV === "production" ? "https://aqua-crm.com" : "http://localhost:3032";
  const portalUrl =
    process.env.NEXT_PUBLIC_AQUACRM_URL ?? process.env.NEXT_PUBLIC_PORTAL_URL ?? defaultPortalUrl;
  const websiteUrl =
    process.env.NEXT_PUBLIC_AQUAOASIS_URL ?? "https://aquaoasis-web.com";
  const milesymediaUrl =
    process.env.NEXT_PUBLIC_MILESYMEDIA_URL ?? "https://milesymedia.com";

  return (
    <main className="aqua2-site">
      <AquaSiteHeader />
      <section className="aqua-login">
        <div className="aqua-login-visual">
          <Image
            src="/images/aquaoasis-hero-luxury.png"
            alt="Connected digital experiences by AquaOasis-Web"
            fill
            priority
            sizes="55vw"
            className="aqua-login-image"
          />
          <div className="aqua-login-shade" />
          <div className="aqua-login-story">
            <p className="aqua2-kicker">Your digital workspace</p>
            <h1>One clear place for everything we are building.</h1>
            <p>
              Follow progress, review decisions, share feedback and keep your
              website, software, billing and support connected.
            </p>
            <div>
              <span>Project progress</span>
              <span>Files and approvals</span>
              <span>Billing and support</span>
            </div>
          </div>
        </div>

        <div className="aqua-login-panel">
          <div className="aqua-login-card">
            <Link className="aqua-login-back" href="/">← Back to AquaOasis-Web</Link>
            <div className="aqua-login-brand">
              <span aria-hidden="true">A</span>
              <div>
                <strong>AquaOasis-Web</strong>
                <small>Client workspace</small>
              </div>
            </div>
            <h2>Welcome back.</h2>
            <p>Sign in to continue to your private project home.</p>

            <form
              action={`${portalUrl}/api/auth/login/browser`}
              method="post"
              className="aqua-login-form"
            >
              <input type="hidden" name="brand" value="aqua" />
              <input type="hidden" name="errorReturn" value={`${websiteUrl}/sign-in`} />
              <label>
                Username or email
                <input name="email" autoComplete="username" required />
              </label>
              <label>
                Password
                <input
                  type="password"
                  name="password"
                  autoComplete="current-password"
                  required
                />
              </label>
              {error ? <p className="aqua-login-error" role="alert">{error}</p> : null}
              <div className="aqua-login-meta">
                <a href={`${portalUrl}/login/forgot?brand=aqua`}>Forgot password?</a>
                <span>Secure client access</span>
              </div>
              <button type="submit">Sign in <span aria-hidden="true">→</span></button>
            </form>
          </div>
        </div>
      </section>
      <AquaSiteFooter milesymediaUrl={milesymediaUrl} />
    </main>
  );
}
