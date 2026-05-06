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

    // Enable reveal mode (CSS hides content only when this class is present,
    // so any JS / hydration failure leaves content visible by default).
    document.body.classList.add("reveal-ready");

    let observedAny = false;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io.unobserve(entry.target);
            observedAny = true;
          }
        });
      },
      { rootMargin: "0px 0px -40px 0px", threshold: 0 },
    );

    targets.forEach((el) => io.observe(el));

    // Safety net — if the observer never fired (broken environment), drop
    // reveal-ready so content shows naturally instead of staying hidden.
    // We do NOT mass-add .in-view here: that would skip the animation for
    // sections the user later scrolls to.
    const safety = window.setTimeout(() => {
      if (!observedAny) {
        document.body.classList.remove("reveal-ready");
      }
    }, 2500);

    return () => {
      window.clearTimeout(safety);
      io.disconnect();
    };
  }, []);

  return null;
}
