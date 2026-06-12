import { MaintenanceFooter } from "@/components/MaintenanceFooter";
import { MaintenanceHeader } from "@/components/MaintenanceHeader";

export default function SignInPage() {
  return (
    <>
      <MaintenanceHeader />
      <main className="maintenance-page">
        <section className="maintenance-shell signin-page" aria-labelledby="signin-title">
          <div className="container signin-grid">
            <div className="maintenance-copy reveal">
              <p className="eyebrow">Client portal</p>
              <h1 id="signin-title">Sign back into your portal.</h1>
              <p>
                Access your AquaOasis-Web portal to review updates, messages,
                project progress, and support details.
              </p>
            </div>

            <form className="callback-form signin-form reveal reveal-delay-1" aria-label="Portal sign in">
              <div className="form-heading">
                <p className="eyebrow">Portal sign in</p>
                <h2>Welcome back</h2>
                <p>Use your portal details to continue.</p>
              </div>

              <label>
                Email *
                <input name="email" type="email" autoComplete="email" placeholder="Email address" required />
              </label>

              <label>
                Password *
                <input name="password" type="password" autoComplete="current-password" placeholder="Password" required />
              </label>

              <button className="primary-button full-width" type="button">
                Sign in
              </button>
            </form>
          </div>
        </section>
      </main>
      <MaintenanceFooter />
    </>
  );
}
