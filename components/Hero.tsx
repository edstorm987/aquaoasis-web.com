import { CallbackForm } from "@/components/CallbackForm";

export function Hero() {
  return (
    <header className="hero">
      <div className="container hero-grid" id="top">
        <section className="hero-copy reveal" aria-labelledby="hero-title">
          <p className="eyebrow">Own it forever. No subscriptions.</p>
          <h1 id="hero-title">AquaOasis-Web</h1>
          <p className="hero-subhead">
            Get your business online the right way — own it forever.
          </p>
          <div className="cta-row">
            <a className="primary-button" href="#contact">
              Enter the Digital Age <span aria-hidden="true">🚀</span>
            </a>
          </div>
          <p className="hero-note">
            No subscriptions. One-time payment. A real website for serious
            businesses.
          </p>
        </section>

        <CallbackForm />
      </div>
    </header>
  );
}
