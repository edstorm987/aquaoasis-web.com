"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { mainNav } from "@/lib/site";
import { Icon } from "./Icon";

export function Brand() {
  return (
    <Link className="brand" href="/" aria-label="AquaOasis-Web home">
      <span className="brand-mark" aria-hidden="true">A</span>
      <span className="brand-name">AquaOasis<span>-Web</span></span>
    </Link>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [lastPath, setLastPath] = useState(pathname);

  // Close the menu whenever the route changes.
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const isCurrent = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      <header className="site-header">
        <div className="wrap">
          <Brand />
          <nav className="nav-desktop" aria-label="Main">
            {mainNav.map((item) => (
              <Link key={item.href} href={item.href} aria-current={isCurrent(item.href) ? "page" : undefined}>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="header-actions">
            <Link className="header-login" href="/sign-in">Client login</Link>
            <Link className="btn btn-aqua" href="/contact">Get sorted</Link>
            <button
              className="menu-toggle"
              type="button"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((value) => !value)}
            >
              <span aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>
      {/* Outside <header>: its backdrop-filter would otherwise become this fixed panel's containing block. */}
      {open ? (
        <nav className="nav-mobile" id="mobile-nav" aria-label="Mobile">
          {mainNav.map((item) => (
            <Link key={item.href} href={item.href} aria-current={isCurrent(item.href) ? "page" : undefined}>
              {item.label} <Icon name="arrow" />
            </Link>
          ))}
          <Link href="/contact">Contact <Icon name="arrow" /></Link>
          <Link href="/sign-in">Client login <Icon name="arrow" /></Link>
          <Link className="btn btn-aqua" href="/contact">Get sorted</Link>
          <small>Call 07305410203 or use the chat. A real person replies.</small>
        </nav>
      ) : null}
    </>
  );
}
