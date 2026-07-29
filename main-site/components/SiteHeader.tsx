export function SiteHeader() {
  return (
    <header className="site-header">
      <nav className="container nav" aria-label="Main navigation">
        <a className="brand" href="#">
          AquaOasis-Web
        </a>
        <div className="nav-links">
          <a href="#products">Products</a>
          <a href="#contact">Contact</a>
          <a className="nav-phone" href="tel:+447305410203">
            07305410203
          </a>
        </div>
      </nav>
    </header>
  );
}
