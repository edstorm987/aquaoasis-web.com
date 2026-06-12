import Link from "next/link";

const navItems = [
  { href: "/#process", label: "Process" },
  { href: "/#google-profile", label: "Google Profile" },
  { href: "/#mobile", label: "Mobile" },
  { href: "/about", label: "About" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <nav className="nav container" aria-label="Main navigation">
        <Link className="brand" href="/" aria-label="AquaOasis-Web home">
          AquaOasis-Web
        </Link>
        <div className="nav-links" aria-label="Primary pages and sections">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
        <Link className="nav-cta" href="/contact">
          Request call back
        </Link>
      </nav>
    </header>
  );
}
