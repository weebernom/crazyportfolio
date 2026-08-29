# Page Topology — abhirammangipudi.tech (root `/`)

Single-page React SPA (CRA build, not Next.js on the source site). Tailwind v3 arbitrary-value classes + shadcn/ui (Button, Card, Badge) + lucide-react icons. Font: **IBM Plex Sans** (all weights used, fallback Roboto/-apple-system/Segoe UI). Theme: **Gruvbox Dark** palette, no light mode.

## Global Layout
- `<body>` — `overflow: hidden auto` (body is the scroll container, not `html`/`window`). Our clone can use ordinary page scroll; no functional difference to replicate.
- `html`/body have `scroll-behavior: smooth` (smooth-scrolls to anchors on nav click).
- No smooth-scroll library (no Lenis/Locomotive). No scroll-snap.
- Fixed navbar `<nav>` at `top:0`, `z-50`, height 64.8px, background `#282828`, border-bottom `#3c3836`, `backdrop-blur-sm`. **Does not change on scroll** (verified: identical classes/background/shadow at scrollY 0 and 6700+).

## Section Order (top → bottom), all full-bleed `<section>` blocks, alternating bg `#1d2021` / `#282828`:

| # | id | bg | approx height (1440 vp) | Component |
|---|----|----|----|-----------|
| 0 | (nav, fixed overlay) | `#282828` | 64.8px | Navbar |
| 1 | `home` | `#1d2021` | 639px | HeroSection |
| 2 | `about` | `#282828` | 754px | AboutSection |
| 3 | `skills` | `#1d2021` | 3695px (tallest — 5 tech categories × many badges) | SkillsSection |
| 4 | `experience` | `#1d2021` | 1127px | ExperienceSection |
| 5 | `projects` | `#282828` | 966px (collapsed, grows on Load More) | ProjectsSection |
| 6 | `education` | `#282828` | 639px | EducationSection |
| 7 | `contact` | `#1d2021` | 809px | ContactSection |
| 8 | (footer, in-flow) | `#1d2021`/darker | ~180px | Footer |

Total document height ≈ 8857px at 1440×900 with all projects collapsed.

## Interaction model per section
- **Navbar**: click-driven smooth-scroll to section id + active-tab highlight (state set on click, not scrollspy — confirmed clicking "About" updates its own text color to `#ebdbb2`→ active isn't proven scrollspy-driven from raw scroll, treat as click-set active state; safe default: highlight the clicked link, and optionally recompute on scroll via IntersectionObserver for parity but not required for pixel match at rest states captured).
- **Hero (`home`)**: static, content animates in once on mount (`animate-fadeInUp` / `animate-slideInLeft`).
- **About (`about`)**: static content + 4 "Core Skills" colored stat cards with `hover:scale-105` hover only. No scroll-driven change beyond initial fade-in.
- **Skills (`skills`)**: static grid of skill cards (name + 5-dot proficiency indicator + progress bar). `hover:border-[#fe8019]` per card. No tabs — all 5 categories render simultaneously stacked vertically (NOT a tabbed/click-switch UI — confirmed by content dump showing all categories present at once).
- **Experience (`experience`)**: static vertical timeline, 3 entries, each a bordered card with icon, role, company (orange), date range (right-aligned, muted), bullet list.
- **Projects (`projects`)**: **click-driven pagination** — "Load More Projects" button. Initial render shows 4 cards; each click reveals 4 more (confirmed 4→8→12 in DOM query, 8 total distinct projects; button disappears once all loaded). Cards: `hover:scale-105` + `hover:border-[#fe8019]`, `animate-fadeInUp` entrance for newly revealed cards.
- **Education (`education`)**: static, single card, year badge + degree + institution + coursework tag list (11 tags).
- **Contact (`contact`)**: static contact-method cards (GitHub/LinkedIn/Email, `hover:scale-105`) + a **custom animated inline SVG diagram** (viewBox `0 0 600 400`) showing 4 "System" boxes (System1 API Server, System2 Database, System3 Queue, System4 Cache) connected by lines, with an orange dot ("data packet") that flows along the connections using native SVG SMIL animation (`animateMotion`/`animate`, `dur="1s"` per hop, 13 animate elements total, continuously looping). Time-driven, not scroll/click driven.
- **Footer**: static, plus a small emoji that **cycles randomly on each render/interval** (observed 🎓, 🚀, 💻, 🔧, ⚙️, ✨ across repeated captures at the same scroll position) — implement as a `setInterval`-driven random pick from an emoji list. "Back to Top" button scrolls to top.

## Responsive
- Nav: `hidden md:flex` link list — collapses below `md` (768px), likely to a hamburger/mobile menu (not yet click-tested; default to a simple slide-down menu using shadcn patterns already in scaffold, since only the desktop state was captured in this session — flag as best-effort in QA).
- Skills/Core-skills/Project grids: 2-column desktop → 1-column mobile (standard Tailwind `md:grid-cols-2` pattern implied by paired-card layout seen in screenshots).
