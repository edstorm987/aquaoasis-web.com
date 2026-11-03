import { CookieSettingsPanel } from "@/components/CookieSettingsPanel";
import { PageHero } from "@/components/site/blocks";

export const metadata = {
  title: "Cookie settings",
  description: "Choose what AquaOasis-Web can store or use on this device.",
};

export default function CookieSettingsPage() {
  return (
    <>
      <PageHero
        kicker="Cookie settings"
        title="Manage cookie choices"
        lede="Necessary cookies are always on because the site needs them to work. Analytics and marketing cookies stay off unless you allow them."
        crumbs={[{ href: "/cookie-settings", label: "Cookies" }]}
      />
      <section className="section">
        <div className="wrap" style={{ maxWidth: 820 }}>
          <div className="form-card"><CookieSettingsPanel /></div>
        </div>
      </section>
    </>
  );
}
