"use client";

import { useEffect } from "react";

/**
 * Adds `.in-view` to every `.section` and `.site-footer` once it scrolls
 * into view. CSS handles the actual reveal (descendant rules + delays).
 * Lightweight: native IntersectionObserver, single observer for the whole page.
 */
export function ScrollRevealRoot() {
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>(".section, .site-footer");
    if (!targets.length) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || typeof IntersectionObserver === "undefined") {
      targets.forEach((el) => el.classList.add("in-view"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
