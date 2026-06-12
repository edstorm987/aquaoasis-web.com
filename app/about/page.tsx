import { MaintenanceFooter } from "@/components/MaintenanceFooter";
import { MaintenanceHeader } from "@/components/MaintenanceHeader";
import { VslSection } from "@/components/VslSection";

export default function AboutPage() {
  return (
    <>
      <MaintenanceHeader />
      <main className="maintenance-page">
        <section className="maintenance-shell" aria-labelledby="about-title">
          <div className="container about-maintenance-grid">
            <div className="about-vsl-card reveal">
              <VslSection />
            </div>
            <div className="privacy-card reveal">
              <p className="eyebrow">About AquaOasis-Web</p>
              <h1 id="about-title">About AquaOasis-Web</h1>
              <p>
                AquaOasis-Web was founded by Edward Hallam from Felixstowe,
                Suffolk. Born in Ipswich, Edward started building websites as a
                high school project for family, friends, and school work before
                turning it into a practical service for people who know they
                need to get online but do not know where to start.
              </p>
              <p>
                The idea came from first-hand experience. Edward saw local
                businesses get hit hard when diaries were lost, appointments
                were missed, and physical routes to customers suddenly stopped.
                Covid made the problem impossible to ignore: businesses that
                relied only on paper, walk-ins, and word of mouth were left
                exposed. AquaOasis-Web exists to help protect businesses from
                that kind of risk.
              </p>
              <p>
                Edward made plenty of mistakes early on, then sought
                professional training, completed courses, gained certification,
                and kept improving the way websites are built and delivered. He
                started with platforms such as Squarespace and WordPress, but
                found the limits frustrating: subscriptions, platform lock-in,
                less control, and less ownership for the client.
              </p>
              <p>
                Today AquaOasis-Web uses code-first builds so your website can
                be owned properly, controlled properly, and kept free from
                unnecessary monthly platform subscriptions. If you want help
                with amendments later, we can talk about it, but the goal is
                simple: make your online foundation yours.
              </p>
              <p>
                We know how frustrating it can be when website people disappear,
                take months to reply, or turn simple updates into a headache.
                Business owners should not have to become web experts just to
                look professional online. That is what we are here for.
              </p>
              <p>
                Could you use AI to build a website yourself? Yes. But how do
                you know it will perform? AquaOasis-Web does not build websites
                just for show. We build foundations designed to help people find
                you, trust you, and enquire. You can even try building with AI
                first, then bring it to us for an audit. We will show you the
                gaps and what to fix.
              </p>
              <p>
                This is the future, and AquaOasis-Web is here to help small
                businesses adapt without confusion, lock-in, or unnecessary
                pressure.
              </p>
            </div>
          </div>
        </section>
      </main>
      <MaintenanceFooter />
    </>
  );
}
