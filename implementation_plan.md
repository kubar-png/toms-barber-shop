# Implementation Plan — Tom's Barber Shop landing site

## Goal
Single-page Next.js 16 marketing site for **Tom's Barbershop** (Brno-Žabovřesky), in **Czech**, mirroring all content from the existing tomsbarbershop.cz. Deploy preview to Vercel. No backend, no booking integration in v1 — content-only landing page.

## Source content (locked)
- Tagline: *Profesionalita · Osobní přístup · Precizní stříhání · Doporučení střihu*
- Address: **Minská 98, Brno-Žabovřesky, 616 00**
- Parking note: modrá zóna na Minské nebo Doležalově
- Email: `[email protected]`
- Instagram: `@_tomsbarbershop_`
- Maps: `https://mapy.cz/s/dogudoreka`
- Team: Tomáš Pelán, Denisa Daňková
- Owner copy: "Svou práci odvádím vždy na maximum" / klient odchází "s úsměvem na tváři"
- Services & prices — two barbers, two columns:

| Služba | Délka | Tomáš | Denisa |
|---|---|---:|---:|
| Střih | 45–60 min | 800 Kč | 750 Kč |
| Střih + Vousy | 75–90 min | 1 350 Kč | 1 300 Kč |
| Vousy | 30–45 min | 650 Kč | 600 Kč |
| Střih + Péče o pleť | 75–90 min | 1 350 Kč | 1 300 Kč |
| Kompletní péče | 105–120 min | 1 750 Kč | 1 700 Kč |

- Footer: © 2024–2026 tomsbarbershop.cz · Všechna práva vyhrazena

## Aesthetic direction (LOCKED)
- **Background**: Midnight Ink `#070B14` (off-black, tinted toward deep blue)
- **Foreground**: Warm Paper `#F1ECDC` (off-white)
- **CTA accent**: Champagne `#E0C49C` (premium, restrained, near-mono)
- **Display font**: Bodoni Moda (italic 900 for hero, 700/400 elsewhere)
- **Body + button font**: Inter Tight
- **Button labels**: UPPERCASE, letter-spaced (`tracking-[0.2em]`), 12px, weight 600
- **Layout language**: magazine-style, asymmetric, generous rule lines.

## Hero entrance animation (LOCKED — "Slash-Emerge A")
On first paint, orchestrated reveal over ~1.9s:
1. Top shop-sign band fades in (0ms · 350ms · ease-out-cubic)
2. Eyebrow fades in (150ms · 380ms · ease-out-cubic)
3. **Champagne slash line draws horizontally** across the heading centerline (350ms · 340ms · ease-out-expo)
4. **"Tom's" emerges vertically** from the centerline (clip-path inset 50%→0) (700ms · 600ms · ease-out-quart)
5. Slash line fades out, sweeping right (900ms · 380ms · ease-in-expo)
6. "Barbershop" sub fades in (1100ms · 400ms · ease-out-cubic)
7. Body text fades up from below (1250ms · 550ms · `power3.out`) — `y: 24 → 0`, `autoAlpha: 0 → 1`, whole paragraph as a single unit
8. Primary CTA rises up (1400ms · 320ms · ease-out-quart) — translateY(20px → 0) + opacity
9. Ghost CTA rises up (1460ms · 320ms · ease-out-quart) — staggered 60ms after primary
10. Pillars row fades in (1600ms · 400ms · ease-out-cubic)
11. Bottom shop-sign band fades in (1750ms · 350ms · ease-out-cubic)

Implementation: GSAP timeline (via `lib/gsap.ts` and `useGSAP` hook from `@gsap/react`) inside the hero client component. All animations gated by `prefers-reduced-motion: reduce`. Hair particles in background continue infinite drift independently.

## Files

| File | Action | Purpose |
|---|---|---|
| `app/layout.tsx` | [MODIFY] (already applied) | Bodoni Moda + Fraunces fonts, metadata, body shell |
| `app/globals.css` | [MODIFY] | Color tokens (`@theme inline`), scroll-driven `@keyframes`, `prefers-reduced-motion`, barber-pole stripe utility |
| `app/page.tsx` | [MODIFY] | Replace boilerplate with hero + services + hours + visit + footer sections |
| `app/icons.tsx` | [NEW] | 3–4 inline SVG icons (scissors, razor, comb, marker pin) — no emojis, no icon library |
| `public/og.svg` | [NEW] | Static OG/social card placeholder |
| `next.config.ts` | [LEAVE] | Defaults are fine |
| `package.json` | [LEAVE] | No new deps. Uses `next/font/google` (already a Next dep). |
| `README.md` | [MODIFY] | Replace boilerplate with project-specific dev/deploy notes |
| `.vercel/` | [NEW via CLI] | Created by `vercel link` during deploy step |

## Section blueprint for `app/page.tsx` (Czech copy)

1. **Hero** (`#information`) — top rule, eyebrow "BRNO-ŽABOVŘESKY · BARBERSHOP", oversized italic display "Tom's", subhead "Barbershop", four-pillar tagline (Profesionalita · Osobní přístup · Precizní stříhání · Doporučení střihu), CTA buttons: "Rezervovat" (mailto) and "Prohlédnout ceník" (#services). Corner meta: "Minská 98 · Brno"
2. **O nás** — short paragraph using owner copy ("Svou práci odvádím vždy na maximum…"), names of both barbers as a quiet line beneath
3. **Ceník** (`#services`) — newspaper-style table, two price columns (Tomáš / Denisa), dotted leader lines, sticky column headers on mobile
4. **Portfolio / vibe** (`#portfolio`) — minimal placeholder grid using CSS gradients + barber-pole stripes (no external images yet — note in README that real photos go here)
5. **Kontakt** (`#contact`) — address (semantic `<address>`), email (mailto:), Instagram link, "Otevřít v Mapách" link to mapy.cz/s/dogudoreka, parking note
6. **Footer** — barber-pole stripe band, © line, "Web by Claude · Powered by Vercel"

## Accessibility & quality gates (from ui-ux-pro-max)
- Body ≥16px, line-height 1.6, line-length ≤72ch
- All interactive elements ≥44×44px, `cursor-pointer`, visible `:focus-visible` ring
- Color contrast verified ≥4.5:1 (cream on warm-black is ≈14:1 ✓)
- `prefers-reduced-motion: reduce` disables all `animation-timeline` reveals
- No emoji icons; SVG only
- `tel:` link for phone, semantic `<address>`, `<time datetime>` for hours

## Build & verify
1. `pnpm build` — must succeed with zero TS / ESLint errors
2. `pnpm dev` — quick visual smoke check on localhost:3000

## Deploy
1. `vercel link` (project name `toms-barber-shop`, scope = user's personal account)
2. `vercel deploy` → preview URL
3. Report URL to user; do NOT promote to production without explicit approval

## Out of scope for v1
- Real booking system
- CMS
- Multi-page routing
- Internationalization
- Custom domain

---

**Halting for approval.** Reply `yes` to execute, or tell me what to change.
