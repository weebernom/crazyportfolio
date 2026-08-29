# DESIGN.md — Momin (momibat) Portfolio

## 0. Research Log

- **Personal content research:** 3 parallel agents read `G:\git version\momibat-terminal` (Go TUI source), `G:\git version\momibat-portfolio` (older static site), and `D:\portfolio` (canonical/current static site — has dated experience entry + certifications, confirmed via CNAME `momibat.me` this is the live site). `D:\portfolio` treated as source of truth where entries conflict; others fill gaps (e.g. terminal repo's fuller project descriptions).
- **Skill/palette research:** `ui-ux-pro-max` skill's `--design-system` search for "cybersecurity portfolio dark technical edgy" returned a Cyberpunk-UI system (matrix green `#00FF41` + red `#FF3333` on black) — rejected as too literal/gamer-cliché for "professional but funky pretty." Supplementary `--domain color` and `--domain style` searches surfaced `dark-mode-oled` (true-black base, vibrant neon accents used sparingly) and `motion-driven` (scroll-triggered reveals, portfolio-appropriate) as the better-fitting components. Synthesized a custom palette (below) rather than taking any single search result verbatim, per the "don't apply a Layer B brand verbatim" principle — extracted the *approach* (near-black base + restrained neon accent, motion-driven reveals) not literal Cyberpunk-UI tokens.
- **Existing brand consistency:** all 3 source repos independently converged on Space Grotesk (display) + IBM Plex Sans (body) + IBM Plex Mono (labels/code) — kept as-is rather than replacing with `ui-ux-pro-max`'s generic Inter suggestion, since this is the user's own established cross-property type system (terminal app, momibat.me, and its predecessor all use it).

## 1. Direction (one paragraph)

A near-black, high-contrast "ops console" aesthetic — not a literal terminal/matrix pastiche, but a premium dark surface (think Linear/Raycast-grade polish) carrying the technical identity through an electric violet + neon-lime two-accent system, IBM Plex Mono for labels/tags/timestamps, and subtle scan-line/glow texture used sparingly as a signature material rather than a background gimmick. The one moment a visitor remembers: the hero's "system status" badge and skill bars glow and settle into place on load, and cards lift with a violet rim-light on hover — precision and a little bit of danger, not cartoon hacker-green.

## 2. Color Tokens

| Token | Hex | Use |
|---|---|---|
| `--bg` | `#08090b` | page background (true near-black, slightly cool) |
| `--bg-alt` | `#0c0d10` | alternating section background |
| `--panel` | `#131418` | card/panel surface |
| `--panel-hover` | `#181a1f` | card hover surface |
| `--border` | `#24262c` | default border |
| `--border-hover` | `#3a3d46` | hovered border (pre-accent) |
| `--text` | `#f2f1ec` | primary text (warm off-white, not pure #fff) |
| `--text-dim` | `#a3a3ad` | secondary text |
| `--text-faint` | `#6b6b74` | tertiary/meta text |
| `--accent` | `#8b5cf6` | primary accent — electric violet (links, primary CTA, focus ring, glow) |
| `--accent-hover` | `#a78bfa` | violet hover state |
| `--accent-pop` | `#baff29` | secondary accent — neon lime (status/active indicators, skill-bar fill, "funky" pop) |
| `--accent-warn` | `#ff4d6d` | tertiary accent — used sparingly (destructive/alert-style badges only) |
| `--success` | `#39d98a` | success/available state |

Perceptual ramp for the violet accent (used for glow/gradient depth, not flat reuse of one hex):
`#8b5cf6` (500, base) → `#a78bfa` (400, hover) → `#c4b5fd` (300, glow highlight) → `#6d28d9` (700, pressed/deep shadow).

## 3. Typography

- **Display/headings:** Space Grotesk (600/700) — `next/font/google`
- **Body:** IBM Plex Sans (400/500/600) — `next/font/google`
- **Mono (labels, tags, timestamps, status strings, code-like content):** IBM Plex Mono (400/500) — `next/font/google`
- Base 16px, line-height 1.6 body / 1.15 display.

## 4. Elevation & Material

Cards are not a flat fill + flat border. Recipe: `--panel` background, 1px `--border`, `shadow-[0_1px_0_rgba(255,255,255,0.03)_inset,0_8px_24px_-12px_rgba(0,0,0,0.6)]` at rest. On hover: border shifts toward `--accent` at 40% opacity, plus a soft outer violet glow (`box-shadow: 0 0 0 1px rgba(139,92,246,0.35), 0 0 32px -8px rgba(139,92,246,0.45)`), and a 1-2px translateY lift. This is the signature "rim-light" material — apply consistently to all interactive cards (skills, projects, timeline entries, contact cards).

Background texture: a very low-opacity (`4-6%`) fixed-position dot-grid (radial-gradient repeating pattern) across dark sections for the "ops console" atmosphere — never a loud scanline overlay, never full-opacity grid lines.

## 5. Primitives

- **Badge/pill:** `rounded-md border px-3 py-1 text-xs font-mono font-semibold` — neutral (`border-[--border] text-[--text-dim]`), accent (`border-[--accent]/50 text-[--accent]`), success (`border-[--success]/50 text-[--success]`).
- **Button primary:** filled `--accent` bg, `--bg` text, hover → `--accent-hover` + glow.
- **Button outline:** `--accent` border/text, transparent bg, hover → `--accent`/10 bg fill.
- **Card:** per Elevation recipe above.
- **Skill bar:** track `--border`, fill gradient `--accent` → `--accent-pop` sized by proficiency, mono numeric label.
- **Section eyebrow:** `font-mono text-xs uppercase tracking-[0.2em] text-[--accent-pop]`.

## 6. Motion

GSAP-driven (via `gsap-react`/`gsap-scrolltrigger` skills), `prefers-reduced-motion` respected throughout (skip to end-state, no scroll-triggered transforms):
- Section entrance: fade + 24px translateY, ScrollTrigger `start: "top 85%"`, stagger 0.06s across siblings, 0.5s duration, `power2.out`.
- Skill bar fill: width tween 0 → target on scroll-into-view, 0.8s `power3.out`.
- Card hover: handled by CSS transition (150-250ms), not GSAP — GSAP owns scroll-triggered choreography only, CSS owns hover states, per interaction-skill discipline (motion serves meaning, no redundant JS hover listeners).
- Hero status badge: a single signature moment — subtle pulse glow loop (`opacity 0.7→1`, 2s, `ease-in-out`, `repeat: -1`), respects reduced-motion (static at full opacity).

## 7. Responsive

Breakpoints: 375 / 768 / 1024 / 1440. Mobile-first. Card grids collapse `lg:grid-cols-*` → `md:grid-cols-2` → 1-col. Nav collapses to hamburger below `md`.

## 8. Accessibility & Accepted Debt

- Text contrast: `--text` (#f2f1ec) on `--bg` (#08090b) = ~17.9:1 (AAA). `--text-dim` on `--bg` = ~7.4:1 (AAA). `--accent` (#8b5cf6) on `--bg` = ~5.1:1 (AA for large text/UI; body copy uses `--text`/`--text-dim`, never accent-on-bg for paragraph text).
- Focus rings: visible `--accent` 2px ring on all interactive elements, never removed.
- `prefers-reduced-motion`: all GSAP scroll reveals and the hero pulse glow check `window.matchMedia('(prefers-reduced-motion: reduce)')` and render end-state directly.
- **Accepted debt:** full Lighthouse/Playwright dual-oracle audit loop and multi-lane greenfield research (lazyweb screen research, imagen concept drafts, stylegallery pattern fetch) were skipped for this redesign pass — this is a redesign of an existing structurally-sound clone, not a greenfield build, and the `redesign-skill.md`/brand-file portions of the locally-installed `frontend` skill's reference library were not present in this install (router referenced files that don't exist on disk). Manual visual QA (Playwright screenshots at 3 breakpoints, console-error check) substitutes for the automated audit gate.
