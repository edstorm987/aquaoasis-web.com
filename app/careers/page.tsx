import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

const roles = [
  "Freelance photographers for local business shoots",
  "Copywriters who can make offers clear and human",
  "SEO content support for Aqua Maintenance clients",
  "Frontend collaborators who care about speed and polish",
];

export default function CareersPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="page-hero">
          <div className="container narrow reveal">
            <p className="eyebrow">Careers</p>
            <h1>Help small businesses look serious online.</h1>
            <p>
              We are building a tight network of creative and technical people
              who care about calm execution, clean work, and practical results.
            </p>
          </div>
        </section>

        <section className="section muted-band">
          <div className="container two-column">
            <div className="reveal">
              <p className="eyebrow">Open collaboration areas</p>
              <h2>Simple roles. High standards. No noise.</h2>
            </div>
            <ul className="feature-list reveal reveal-delay-1">
              {roles.map((role) => (
                <li key={role}>
                  <span aria-hidden="true">✓</span>
                  {role}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section">
          <div className="container cross-ref reveal">
            <p className="eyebrow">Apply</p>
            <h2>Send a short note and your best relevant work.</h2>
            <p>
              Keep it focused: what you do, where you are based, and one or two
              examples that show taste, clarity, or technical quality.
            </p>
            <a className="secondary-button" href="mailto:careers@aquaoasis-web.com?subject=AquaOasis-Web%20careers">
              Email careers
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
