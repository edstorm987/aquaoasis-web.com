"use client";

import Link from "next/link";
import { useState } from "react";

export function AquaSiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="aqua2-header">
      <div className="aqua2-announcement">
        <p>
          Not sure what you need yet? Start with the free Business Health Check.
        </p>
        <Link href="/health-check">
          Check the business
          <span aria-hidden="true">→</span>
        </Link>
      </div>
      <div className="aqua2-nav">
        <Link className="aqua2-brand" href="/" aria-label="AquaOasis-Web home">
          <span aria-hidden="true">A</span>
          <strong>AquaOasis-Web</strong>
        </Link>

        <button
          type="button"
          className="aqua2-menu-button"
          onClick={() => setOpen((current) => !current)}
          aria-expanded={open}
          aria-controls="aqua-navigation"
        >
          {open ? "Close" : "Menu"}
        </button>

        <nav
          id="aqua-navigation"
          className={open ? "aqua2-links is-open" : "aqua2-links"}
          aria-label="Main navigation"
        >
          <Link href="/#services" onClick={() => setOpen(false)}>Services</Link>
          <Link href="/work" onClick={() => setOpen(false)}>Work</Link>
          <Link href="/#tools" onClick={() => setOpen(false)}>Free tools</Link>
          <Link href="/about" onClick={() => setOpen(false)}>About</Link>
          <Link href="/sign-in">Client login</Link>
          <Link className="aqua2-nav-cta" href="/#contact" onClick={() => setOpen(false)}>
            Start a project
          </Link>
        </nav>
      </div>
    </header>
  );
}
