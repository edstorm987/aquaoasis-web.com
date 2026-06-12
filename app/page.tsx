import { CallbackForm } from "@/components/CallbackForm";
import { MaintenanceFooter } from "@/components/MaintenanceFooter";
import { MaintenanceHeader } from "@/components/MaintenanceHeader";

export default function Home() {
  return (
    <>
      <MaintenanceHeader />
      <main className="maintenance-page">
        <section className="maintenance-shell" aria-labelledby="maintenance-title">
          <div className="container maintenance-grid">
            <div className="maintenance-copy reveal">
              <p className="eyebrow">AquaOasis-Web</p>
              <h1 id="maintenance-title">Website currently being updated.</h1>
              <p>
                We are polishing the AquaOasis-Web experience. Request a call
                back below and we will get back to you as soon as possible.
              </p>
            </div>

            <div className="callback-stack" id="callback">
              <div className="maintenance-info-card reveal reveal-delay-1">
                <p className="eyebrow">What we do</p>
                <h2>Get found online, made simple.</h2>
                <p>
                  Simple websites, social presence, and Google Profile setup
                  for small businesses and creators. Built to help customers
                  find you before the competition, stand out from the rest, and
                  enter the digital age with a clear first step.
                </p>
                <p>
                  If you are a local business owner, a new startup, or someone
                  with an outdated site, the online world can feel confusing.
                  AquaOasis-Web makes it easier to look professional, compete
                  for first-page visibility, outrank local competition, and turn
                  searches into real enquiries. No confusing jargon. No
                  subscription lock-in. Just the essentials, made simple.
                </p>
                <a className="primary-button info-cta" href="#callback-form">
                  Enter the Digital Age <span aria-hidden="true">🚀</span>
                </a>
              </div>
              <div className="lead-magnet-card reveal reveal-delay-2">
                <p className="eyebrow">Already online?</p>
                <h3>Your website can do more than you think.</h3>
                <p>
                  If you already have a website, social page, or Google Profile
                  but you are not seeing enquiries, growth, or clear results,
                  let us take a free look at what is already there.
                </p>
                <p>
                  Our team will highlight quick-fire changes, missed
                  opportunities, and small fixes that could help more customers
                  find you and contact you. Sometimes the problem is not a full
                  rebuild. Sometimes one missing detail is holding everything
                  back.
                </p>
                <p>
                  Why is it free? Because we would rather plant the seed first:
                  give you real value, show you what is possible, and start the
                  relationship by helping before asking you to commit.
                </p>
                <ul aria-label="Audit includes">
                  <li>Find why enquiries may not be coming through</li>
                  <li>Spot missed trust and visibility signals</li>
                  <li>Get simple next steps before you commit to anything</li>
                </ul>
                <a className="survive-thrive-cta lead-magnet-cta" href="#callback-form">
                  <span className="survive-word">Survive</span>
                  <span className="thrive-word">
                    Thrive <span aria-hidden="true">🌱</span>
                  </span>
                </a>
              </div>
              <CallbackForm compact />
            </div>
          </div>
        </section>
      </main>
      <MaintenanceFooter />
    </>
  );
}
