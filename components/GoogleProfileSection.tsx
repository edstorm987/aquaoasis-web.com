export function GoogleProfileSection() {
  return (
    <section className="section" id="google-profile" aria-labelledby="google-profile-title">
      <div className="container profile-grid">
        <div className="profile-card reveal" aria-label="Google Business Profile preview">
          <div className="profile-topline">
            <span className="google-dot blue" />
            <span className="google-dot red" />
            <span className="google-dot yellow" />
            <span className="google-dot green" />
          </div>
          <div className="profile-search">AquaOasis-Web near me</div>
          <div className="profile-result">
            <p className="rating" aria-label="Five star local profile">★★★★★</p>
            <h3>Your business, ready to be found.</h3>
            <p>
              Calls, directions, reviews, services, photos, and website links
              arranged so customers know exactly what to do next.
            </p>
          </div>
        </div>

        <div className="reveal reveal-delay-1">
          <p className="eyebrow">Google profile included</p>
          <h2 id="google-profile-title">Local search starts before the website is finished.</h2>
          <p className="section-copy">
            We set up or repair your Google Business Profile, connect your
            contact points, and make sure your online presence points customers
            toward action from day one.
          </p>
          <div className="mini-features">
            <span>Profile setup or audit</span>
            <span>Review path</span>
            <span>Website and socials linked</span>
          </div>
        </div>
      </div>
    </section>
  );
}
