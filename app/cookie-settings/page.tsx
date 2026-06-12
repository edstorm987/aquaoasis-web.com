import { CookieSettingsPanel } from "@/components/CookieSettingsPanel";
import { MaintenanceFooter } from "@/components/MaintenanceFooter";
import { MaintenanceHeader } from "@/components/MaintenanceHeader";

export default function CookieSettingsPage() {
  return (
    <>
      <MaintenanceHeader />
      <main className="maintenance-page">
        <section className="maintenance-shell" aria-labelledby="cookie-settings-title">
          <div className="container privacy-card reveal">
            <p className="eyebrow">Cookie settings</p>
            <h1 id="cookie-settings-title">Manage Cookie Choices</h1>
            <p>
              Choose what AquaOasis-Web can store or use. Necessary cookies are
              always on because the site needs them to work. Analytics and
              marketing cookies stay off unless you allow them.
            </p>
            <CookieSettingsPanel />
          </div>
        </section>
      </main>
      <MaintenanceFooter />
    </>
  );
}
