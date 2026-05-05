"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { Hairs } from "./hairs";

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const hero = heroRef.current;
      if (!hero) return;

      // ── Entrance timeline ──────────────────────────────
      const tl = gsap.timeline({ paused: true });

      tl.from(hero.querySelector(".top"),     { autoAlpha: 0, duration: 0.35, ease: "power2.out" }, 0)
        .from(hero.querySelector(".eyebrow"), { autoAlpha: 0, duration: 0.38, ease: "power2.out" }, 0.15)
        .fromTo(
          hero.querySelector(".slash-line"),
          { scaleX: 0, transformOrigin: "left center" },
          { scaleX: 1, duration: 0.34, ease: "expo.out" },
          0.35,
        )
        .fromTo(
          hero.querySelector(".display-xl"),
          { clipPath: "inset(62% 0 38% 0)" },
          { clipPath: "inset(0% 0 0% 0)", duration: 0.6, ease: "power3.out" },
          0.7,
        )
        .to(
          hero.querySelector(".slash-line"),
          { scaleX: 0, autoAlpha: 0, duration: 0.38, ease: "expo.in", transformOrigin: "right center" },
          0.9,
        )
        .from(hero.querySelector(".display-sub"), { autoAlpha: 0, duration: 0.4,  ease: "power2.out" }, 1.1)
        .from(hero.querySelector(".body-text"),   { autoAlpha: 0, y: 24, duration: 0.55, ease: "power3.out" }, 1.25)
        .from(hero.querySelector(".btn-primary"), { autoAlpha: 0, y: 20, duration: 0.32, ease: "power3.out" }, 1.5)
        .from(hero.querySelector(".btn-ghost"),   { autoAlpha: 0, y: 20, duration: 0.32, ease: "power3.out" }, 1.56)
        .from(hero.querySelector(".pillars"),     { autoAlpha: 0, duration: 0.4,  ease: "power2.out" }, 1.7)
        .from(hero.querySelector(".meta-row"),    { autoAlpha: 0, duration: 0.35, ease: "power2.out" }, 1.85);

      // Reveal hero (was hidden via data-anim="pending" to prevent FOUC)
      hero.dataset.anim = "playing";
      tl.play();

      // ── Hair dodge ─────────────────────────────────────
      const wraps = Array.from(hero.querySelectorAll<HTMLElement>(".hair-wrap"));
      const handlers = wraps.map((wrap) => ({
        wrap,
        setX: gsap.quickTo(wrap, "x", { duration: 0.55, ease: "power3.out" }),
        setY: gsap.quickTo(wrap, "y", { duration: 0.55, ease: "power3.out" }),
        setRot: gsap.quickTo(wrap, "rotation", { duration: 0.7, ease: "power3.out" }),
      }));

      let mx = -9999;
      let my = -9999;
      let scheduled = false;
      const RADIUS = 140;
      const FORCE = 95;

      function tick() {
        scheduled = false;
        const heroRect = hero!.getBoundingClientRect();
        const localMx = mx - heroRect.left;
        const localMy = my - heroRect.top;

        const positions = handlers.map(({ wrap }) => {
          const r = wrap.getBoundingClientRect();
          return {
            cx: r.left + r.width / 2 - heroRect.left,
            cy: r.top + r.height / 2 - heroRect.top,
          };
        });

        handlers.forEach((h, i) => {
          const { cx, cy } = positions[i];
          const dx = cx - localMx;
          const dy = cy - localMy;
          const dist = Math.hypot(dx, dy);
          if (dist < RADIUS) {
            const factor = Math.pow(1 - dist / RADIUS, 1.4);
            const force = FORCE * factor;
            const angle = Math.atan2(dy, dx);
            h.setX(Math.cos(angle) * force);
            h.setY(Math.sin(angle) * force);
            h.setRot(Math.cos(angle) * 30 * factor);
          } else {
            h.setX(0);
            h.setY(0);
            h.setRot(0);
          }
        });
      }

      function schedule() {
        if (!scheduled) {
          scheduled = true;
          requestAnimationFrame(tick);
        }
      }

      function onMove(e: PointerEvent) {
        mx = e.clientX;
        my = e.clientY;
        schedule();
      }
      function onLeave() {
        mx = -9999;
        my = -9999;
        schedule();
      }

      hero.addEventListener("pointermove", onMove, { passive: true });
      hero.addEventListener("pointerleave", onLeave);

      return () => {
        hero.removeEventListener("pointermove", onMove);
        hero.removeEventListener("pointerleave", onLeave);
        tl.kill();
      };
    },
    { scope: heroRef },
  );

  return (
    <section ref={heroRef} className="hero" data-anim="pending" id="information">
      <Hairs />

      <div className="rule" />
      <div className="top">
        <span className="corner">
          <span className="open-dot" />
          Otevřeno · do 19:00
        </span>
        <span className="corner">Minská 98 · Brno</span>
      </div>
      <div className="rule" />

      <div className="stack">
        <div className="eyebrow">EST. 2024 · BRNO-ŽABOVŘESKY</div>
        <div className="head-wrap">
          <span className="slash-line" aria-hidden="true" />
          <h1 className="display-xl">Tom&apos;s</h1>
        </div>
        <div className="display-sub">Barbershop</div>
        <p className="body-text" style={{ marginTop: 28, marginBottom: 28, marginInline: "auto" }}>
          Klasické pánské střihy, péče o vousy a holení horkým ručníkem v Brně-Žabovřeskách.
        </p>
        <div className="ctas" style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
          <a className="btn btn-primary btn-arrow" href="#cenik">
            Rezervovat
          </a>
          <a className="btn btn-ghost" href="#cenik">
            Ceník
          </a>
        </div>
        <div className="pillars" role="list" style={{ marginTop: 40 }}>
          <span>Profesionalita</span>
          <span>Osobní přístup</span>
          <span>Precizní stříhání</span>
          <span>Doporučení střihu</span>
        </div>
      </div>

      <div className="rule" style={{ marginTop: 32 }} />
      <div className="meta-row">
        <span className="corner">Po — Pá · 09:00 — 19:00</span>
        <span className="corner">@_tomsbarbershop_</span>
        <span className="corner">[email protected]</span>
      </div>
    </section>
  );
}
