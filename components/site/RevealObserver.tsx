"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Fades `[data-reveal]` elements in as they scroll into view. Content is only
 * hidden once this runs (`reveal-ready` on <html>), so it is always visible
 * without JavaScript, and the CSS turns the effect off for reduced motion.
 */
export function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    if (!("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    const nodes = document.querySelectorAll<HTMLElement>("[data-reveal]:not(.in)");
    nodes.forEach((node) => {
      // Anything already on screen shows straight away rather than popping in.
      const rect = node.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) node.classList.add("in");
      else observer.observe(node);
    });
    root.classList.add("reveal-ready");
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
