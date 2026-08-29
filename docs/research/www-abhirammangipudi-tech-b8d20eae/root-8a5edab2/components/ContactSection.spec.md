# ContactSection Specification

## Overview
- **Target file:** `src/components/sites/www-abhirammangipudi-tech-b8d20eae/root-8a5edab2/ContactSection.tsx` (client component — the SVG animation needs to mount client-side)
- **Interaction model:** static contact cards (hover-only) + a **time-driven, continuously looping** inline animated SVG diagram (native SMIL animation, not scroll/click triggered).
- **Screenshot:** `docs/design-references/.../root-8a5edab2/contact-*.png`

## DOM Structure
```
<section id="contact" class="bg-[#1d2021] scroll-mt-16 py-24">
  <div class="container max-w-6xl mx-auto px-6">
    <p class="text-[#fe8019] text-sm font-semibold tracking-wide uppercase text-center mb-2">CONTACT ME</p>
    <h2 class="text-4xl md:text-5xl font-bold text-center text-[#fbf1c7] mb-4">Get In Touch</h2>
    <p class="text-center text-[#a89984] mb-12">Hey, I am always open to a good chat. Let's talk.</p>

    <div class="grid md:grid-cols-2 gap-8 items-start">
      <!-- LEFT: animated SVG diagram -->
      <SystemDiagram />

      <!-- RIGHT: 3 stacked contact cards -->
      <div class="space-y-4">
        <ContactCard icon={Github} title="GitHub" sub="See what I made" />
        <ContactCard icon={Linkedin} title="LinkedIn" sub="See what I yap about" />
        <ContactCard icon={Mail} title="Email" sub="Shoot me a mail" />
      </div>
    </div>

    <div class="flex justify-center mt-12">
      <button class="talk-to-me-btn">Talk To Me Personally</button>
    </div>
  </div>
</section>
```

## SystemDiagram (inline SVG, `viewBox="0 0 600 400"`)
4 rounded-rect "system" boxes, each with a title + subtitle, connected by thin lines, with orange dot(s) animating along the connections continuously (13 SMIL `animate`/`animateMotion` elements total in source, `dur="1s"` per hop, looping — implement as `repeatCount="indefinite"`).

Layout (approximate positions from screenshots, diamond arrangement):
- **System 1** ("API Server") — top-left box, orange border
- **System 4** ("Cache") — top-right box, orange border
- **System 3** ("Queue") — bottom-center box, **pink/red border** (`#fb4934` or `#d3869b` — screenshots show this one outlined in a rose/pink tone distinct from the other 3's orange, confirm against screenshot and use `#fb4934` if ambiguous)
- **System 2** ("Database") — implied 4th box (top-center, partially cut off in captured screenshots at "System 2" — position it top-center between System 1 and System 4, or bottom-left symmetric to System 3; use a diamond/plus layout: System1 (top-left) — System2 (top-center, above System3) — System4 (top-right), all three connecting down into System3 (bottom-center hub), matching the visible lines converging on the Queue box).

Each system box:
```
<g>
  <rect rx="8" width="140" height="70" stroke="{accentColor}" stroke-width="2" fill="#282828" />
  <text class="title">{System N}</text>
  <text class="subtitle" fill="#a89984">{label}</text>
</g>
```
- Box accent colors: System1/System2/System4 use `#fe8019` (orange) border per screenshots; System3 (Queue, the central hub) uses a distinct rose/pink border (`#fb4934`).
- Connector lines: thin `stroke="#3c3836"` or a subtle gradient (`#pipeGradient` linearGradient was present in source — recreate as a simple 2-stop gradient from `#3c3836` to `#fe8019` if you want the exact flair, or keep it a flat muted line — flat is an acceptable simplification).
- **Animated dot** (`circle r="4" fill="#fe8019"`): travels along each connector line on a loop, using SVG `<animateMotion dur="1s" repeatCount="indefinite" path="M ... L ...">` per connector segment (one dot per connector, or cycle a single dot through all paths sequentially — either reads correctly; prefer one dot per line-segment for a busier "data flowing" look matching the multiple simultaneously-lit connectors seen across the 5 contact-section screenshots, where dots appear at different positions on different lines in each capture, confirming multiple independent looping dots).

## Contact Cards (right column)
- Card className: `rounded-xl border border-[#3c3836] bg-[#282828] p-5 flex items-center gap-4 hover:scale-105 transition-all duration-200 hover:border-[#fe8019]`.
- Icon: 24px, `text-[#fe8019]`, no background chip (plain icon, unlike Experience's filled-square icon).
- Title: `font-bold text-[#fbf1c7]`.
- Subtitle: `text-sm text-[#a89984]`.
- Icons: `Github`, `Linkedin`, `Mail` (lucide-react).

## "Talk To Me Personally" button
- Distinct style from other buttons on the page — screenshots show a **gradient fill** (orange→yellow, `bg-gradient-to-r from-[#fe8019] to-[#fabd2f]`), dark text (`text-[#1d2021]`), large pill/rounded button: `inline-flex items-center justify-center rounded-lg font-bold px-8 py-4 text-base bg-gradient-to-r from-[#fe8019] to-[#fabd2f] text-[#1d2021] hover:opacity-90 transition-opacity`.

## States & Behaviors
### SystemDiagram animation
- **Trigger:** none — runs continuously from mount, time-driven, `repeatCount="indefinite"`.
- **Implementation approach:** native SVG SMIL (`<animateMotion>`) as in source — works in all modern browsers without JS. Alternative: CSS `@keyframes` + `offset-path` if SMIL feels fragile in React SSR; SMIL is simpler here and matches source exactly.

### Hover (contact cards)
- **Before:** `border-[#3c3836]`, `scale(1)`
- **After:** `border-[#fe8019]`, `scale(1.05)`

### Hover (Talk To Me Personally button)
- `hover:opacity-90`.

## Assets
- Icons: lucide-react `Github`, `Linkedin`, `Mail`.
- No raster images — the diagram is 100% inline SVG built by you (not a downloaded asset).

## Text Content (verbatim)
- Eyebrow "CONTACT ME", H2 "Get In Touch", sub "Hey, I am always open to a good chat. Let's talk."
- Diagram labels: "System 1"/"API Server", "System 2"/"Database", "System 3"/"Queue", "System 4"/"Cache"
- Contact cards: "GitHub"/"See what I made", "LinkedIn"/"See what I yap about", "Email"/"Shoot me a mail"
- Button: "Talk To Me Personally"

## Responsive Behavior
- **Desktop (1440px):** 2-column grid — diagram left, contact cards right (`md:grid-cols-2`).
- **Mobile (390px):** stacks to 1 column — diagram above cards (Tailwind default below `md`); the SVG should keep `viewBox` scaling with `width="100%" height="auto"` so it shrinks gracefully.
- **Breakpoint:** `md`=768px.
