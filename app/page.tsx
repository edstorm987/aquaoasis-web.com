import Image from "next/image";
import Link from "next/link";
import { aquaWork } from "@/app/portfolio-data";
import { EnquiryForm } from "@/components/EnquiryForm";
import { DigitalAgeSlider } from "@/components/site/DigitalAgeSlider";
import { Icon } from "@/components/site/Icon";
import { Aurora, Faq, ServiceCard, Steps } from "@/components/site/blocks";
import { AQUACRM_PUBLIC_URL, MILESYMEDIA_URL, ZIMANTE_URL, services } from "@/lib/site";

const steps = [
  { title: "Have a chat", copy: "Tell us about the business and where you're stuck. Ten minutes, no jargon, no obligation." },
  { title: "Get a clear plan", copy: "We come back with what we'd do first, why, and exactly what it costs." },
  { title: "We do the work", copy: "Website, profiles, posts, listings, campaigns. You approve, we handle the rest." },
  { title: "You grow", copy: "More people find you, trust you and get in touch. We keep improving what works." },
];

const faqs = [
  { q: "Who is AquaOasis-Web for?", a: "Small and growing businesses that want to look the part online and get more customers from it: trades, shops, cafés, salons, studios, venues, makers and local services." },
  { q: "I'm not techy. Is that a problem?", a: "Not at all. That's the point of us. We explain things in plain English and handle the technical side." },
  { q: "How much does it cost?", a: "Focused first websites start from £899. Everything else is quoted on what you actually need, and you'll always see the price before anything starts." },
  { q: "Do I have to sign up for everything?", a: "No. Start with one thing, like a website or your Google profile, and add more when it makes sense." },
];

export default function HomePage() {
  return (
    <>
      <section className="hero dark">
        <Aurora />
        <div className="wrap hero-grid">
          <div>
            <Link className="hero-badge" href="/free-tools">
              <b>NEW</b> Free post creator and health check <Icon name="arrow" />
            </Link>
            <h1 className="h-xl">
              <span className="line">Enter the</span>
              <span className="line gradient-text">digital age.</span>
            </h1>
            <p className="sort-line">
              We sort your
              <span className="word-cycle" aria-hidden="true">
                <span>website.</span>
                <span>socials.</span>
                <span>Google.</span>
                <span>online shop.</span>
                <span>campaigns.</span>
              </span>
              <span className="sr-only">website, socials, Google, online shop and campaigns.</span>
            </p>
            <p className="lede">
              Websites, social media, Google and online shops for small and growing businesses.
              Done for you, in plain English, so you can get back to the work you love.
            </p>
            <div className="btn-row">
              <Link className="btn btn-aqua" href="/contact">Get sorted <Icon name="arrow" /></Link>
              <Link className="btn btn-ghost" href="/free-tools/health-check">Free health check</Link>
            </div>
            <div className="hero-proof">
              <span><Icon name="check" /> Plain English, no jargon</span>
              <span><Icon name="check" /> Websites from £899</span>
              <span><Icon name="check" /> A real person replies</span>
            </div>
          </div>
          <div>
            <DigitalAgeSlider />
            <p className="ba-hint"><Icon name="spark" /> Drag the handle: this is what we do.</p>
          </div>
        </div>
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[0, 1].map((copy) => (
            <ul key={copy}>
              <li>Websites</li><li>Social media</li><li>Google Business Profile</li><li>Local SEO</li>
              <li>Online shops</li><li>Campaigns</li><li>Reviews</li><li>Content</li>
            </ul>
          ))}
        </div>
      </div>

      <section className="section">
        <div className="wrap">
          <div className="section-head split">
            <div>
              <p className="kicker">What we do</p>
              <h2 className="h-lg">Everything online. <span className="gradient-text">Sorted.</span></h2>
            </div>
            <p className="lede">
              Pick one thing or hand us the lot. Either way you get one friendly team that
              looks after how your business shows up online.
            </p>
          </div>
          <div className="grid grid-3 services-grid">
            {services.map((service, index) => (
              <ServiceCard key={service.slug} service={service} featured={index === 0} delay={index * 0.06} />
            ))}
            <Link href="/services" className="card service-card accent-aqua" data-reveal style={{ "--d": "0.3s" } as React.CSSProperties}>
              <span className="icon-tile"><Icon name="layers" /></span>
              <h3>Not sure where to start?</h3>
              <p>See how it all fits together, or just tell us what&apos;s bugging you and we&apos;ll suggest the first step.</p>
              <span className="text-link">See all services <Icon name="arrow" /></span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section dark">
        <Aurora />
        <div className="wrap">
          <div className="section-head split">
            <div>
              <p className="kicker">Free tools</p>
              <h2 className="h-lg">Try before you buy. Seriously, it&apos;s free.</h2>
            </div>
            <p className="lede">
              Two tools straight from the system we use for our own clients. Use them now,
              no sign-up needed. Want the full report or the download? Just tell us where to send it.
            </p>
          </div>
          <div className="grid grid-2">
            <Link href="/free-tools/post-creator" className="card tool-card" data-reveal>
              <div className="tool-visual post">
                <div className="mini-post"><div>Summer<br />sale<br />-20%</div><p>Tap to shop the range ✨</p></div>
              </div>
              <div className="tool-body">
                <span className="free-tag">Free tool</span>
                <h3>Social post creator</h3>
                <p>Write and design a post for Instagram, Facebook, LinkedIn, X or Google in minutes, with a live preview.</p>
                <span className="text-link">Make a post <Icon name="arrow" /></span>
              </div>
            </Link>
            <Link href="/free-tools/health-check" className="card tool-card" data-reveal style={{ "--d": "0.1s" } as React.CSSProperties}>
              <div className="tool-visual health">
                <div className="gauge" aria-hidden="true"><span><span>72<small>/ 100</small></span></span></div>
              </div>
              <div className="tool-body">
                <span className="free-tag">Free tool</span>
                <h3>Website &amp; Google health check</h3>
                <p>Scan your website and answer a few quick questions. Get a score and the fixes that matter most.</p>
                <span className="text-link">Check my business <Icon name="arrow" /></span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <p className="kicker">How it works</p>
            <h2 className="h-lg">Four steps. Zero headaches.</h2>
          </div>
          <Steps steps={steps} />
          <p style={{ marginTop: 28 }}><Link className="text-link" href="/how-it-works">More on how we work <Icon name="arrow" /></Link></p>
        </div>
      </section>

      <section className="section white">
        <div className="wrap">
          <div className="section-head split">
            <div>
              <p className="kicker">Our work</p>
              <h2 className="h-lg">Built for real businesses.</h2>
            </div>
            <p className="lede">From venue websites to online stores and full operating systems, here&apos;s a taste of what we build.</p>
          </div>
          <div className="grid grid-2">
            {aquaWork.map((work, index) => (
              <Link className="work-card" href={`/work/${work.slug}`} key={work.slug} data-reveal style={{ "--d": `${(index % 2) * 0.08}s` } as React.CSSProperties}>
                <figure><Image src={work.image} alt={work.imageAlt} fill sizes="(min-width: 700px) 50vw, 100vw" /></figure>
                <div>
                  <span className="work-type">{work.type}</span>
                  <h3>{work.title}</h3>
                  <p>{work.summary}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark">
        <Aurora />
        <div className="wrap">
          <div className="section-head center">
            <p className="kicker">The road ahead</p>
            <h2 className="h-lg">We start you online. We can take you much further.</h2>
            <p className="lede">AquaOasis-Web is the front door to a small family of companies that grow with you: get online, look the part, systemise, and one day step back.</p>
          </div>
          <ol className="journey">
            <li className="card here" data-reveal>
              <span className="stage-label">Step 1 · You are here</span>
              <h3>AquaOasis-Web</h3>
              <p>Get online and get noticed: website, Google, social media, shop and campaigns.</p>
            </li>
            <li className="card" data-reveal style={{ "--d": "0.08s" } as React.CSSProperties}>
              <span className="stage-label">Step 2 · Look the part</span>
              <h3>Milesymedia</h3>
              <p>Our sister studio for original photography, video and ads, so your new website and socials look like you, not stock.</p>
              <a className="text-link" href={MILESYMEDIA_URL} target="_blank" rel="noopener noreferrer">Visit Milesymedia <Icon name="arrow" /></a>
            </li>
            <li className="card" data-reveal style={{ "--d": "0.16s" } as React.CSSProperties}>
              <span className="stage-label">Step 3 · Systemise</span>
              <h3>AquaCRM</h3>
              <p>When enquiries pile up, AquaCRM runs the business side: leads, clients, bookings, invoices and automation in one place.</p>
              <a className="text-link" href={AQUACRM_PUBLIC_URL} target="_blank" rel="noopener noreferrer">Visit AquaCRM <Icon name="arrow" /></a>
            </li>
            <li className="card" data-reveal style={{ "--d": "0.24s" } as React.CSSProperties}>
              <span className="stage-label">Step 4 · Your exit</span>
              <h3>Zimante Group</h3>
              <p>When it&apos;s time to step back, Zimante Group can talk to you about what&apos;s next, including the option of buying the business.</p>
              <p className="note">An option to explore, never a promise or an obligation.</p>
              <a className="text-link" href={ZIMANTE_URL} target="_blank" rel="noopener noreferrer">Visit Zimante Group <Icon name="arrow" /></a>
            </li>
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="wrap contact-grid">
          <div>
            <p className="kicker">Questions</p>
            <h2 className="h-lg" style={{ marginBottom: 28 }}>The things people ask first.</h2>
            <Faq items={faqs} />
          </div>
          <div data-reveal>
            <EnquiryForm heading="Let's get you sorted" />
          </div>
        </div>
      </section>
    </>
  );
}
