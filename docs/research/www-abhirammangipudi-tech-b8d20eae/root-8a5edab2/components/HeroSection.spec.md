# HeroSection Specification

## Overview
- **Target file:** `src/components/sites/www-abhirammangipudi-tech-b8d20eae/root-8a5edab2/HeroSection.tsx`
- **Interaction model:** static; content fades/slides in once on mount (CSS animation, not scroll-triggered — fires immediately since it's the first viewport).

## DOM Structure
```
<section id="home" class="bg-[#1d2021] flex items-center justify-center scroll-mt-16 min-h-screen">
  <div class="container max-w-4xl text-center animate-fadeInUp">
    <div class="inline-flex items-center rounded-md border text-xs font-semibold transition-colors mb-6 border-[#b8bb26] text-[#b8bb26] px-4 py-2">Available for Work</div>
    <h1 class="text-5xl md:text-7xl font-bold mb-6 text-[#fbf1c7]">Hi, I am <span class="text-[#fe8019]">Abhiram Mangipudi</span>.</h1>
    <p class="text-xl md:text-2xl text-[#a89984] mb-12 max-w-2xl mx-auto">I am a server-side programmer, who can engineer scalable and secure systems that can communicate effectively.</p>
    <div class="flex flex-wrap gap-4 justify-center">
      <!-- 3 buttons: Resume (filled), GitHub (outline), LinkedIn (outline) -->
    </div>
  </div>
</section>
```

## Computed Styles (exact values)
- Section: `bg-[#1d2021]`, `flex items-center justify-center`, fills viewport height (approx 639-900px depending on viewport — use `min-h-screen` minus nav or a fixed section min-height matching source ~ use `min-h-screen` for simplicity, it reads visually correct).
- Badge ("Available for Work"): `inline-flex items-center rounded-md border text-xs font-semibold px-4 py-2`, border color `#b8bb26`, text color `#b8bb26`, no fill background.
- H1: `text-5xl md:text-7xl font-bold mb-6 text-[#fbf1c7]` (48px→72px responsive, weight 700). The name "Abhiram Mangipudi" is wrapped in `<span class="text-[#fe8019]">` (orange), rest of heading (`Hi, I am` and trailing `.`) stays `#fbf1c7`.
- Subtitle p: `text-xl md:text-2xl text-[#a89984] mb-12 max-w-2xl mx-auto` (20px→24px, color `#a89984`, centered, max-width constrained).
- Button row: `flex flex-wrap gap-4 justify-center`.

### Buttons (all shadcn-Button-shaped, but hand-build with these exact classes — do NOT use the scaffold's `src/components/ui/button.tsx`, its class recipe differs from source):
Base shared classes: `inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow h-9 px-8 py-6 text-base font-semibold transition-colors`

1. **Resume** (primary/filled): add `bg-[#fe8019] hover:bg-[#d65d0e] text-[#1d2021]`. Icon: `FileText` (lucide-react) before label.
2. **GitHub** (outline): add `border border-[#fe8019] text-[#fe8019] hover:bg-[#fe8019]/10 bg-transparent`. Icon: `Github` (lucide-react) before label.
3. **LinkedIn** (outline): same outline recipe as GitHub. Icon: `Linkedin` (lucide-react) before label.

## States & Behaviors
### Mount animation
- **Trigger:** on page load (not scroll — this is above-the-fold)
- **Effect:** `animate-fadeInUp` (defined in `globals.css`: opacity 0→1, translateY 30px→0, 0.6s ease-out, applied once, `both` fill-mode so it stays at end state)
- **Implementation:** just apply the `animate-fadeInUp` class directly on the wrapping `<div class="container ...">` — no JS/IntersectionObserver needed since it's always in view on load.

### Hover
- Resume button: `hover:bg-[#d65d0e]` (darker orange), standard `transition-colors`.
- GitHub/LinkedIn buttons: `hover:bg-[#fe8019]/10` (10% orange tint background appears).

## Assets
- Icons (lucide-react): `FileText`, `Github`, `Linkedin`. No images.

## Text Content (verbatim)
- Badge: "Available for Work"
- Heading: "Hi, I am " + (orange) "Abhiram Mangipudi" + "."
- Subtitle: "I am a server-side programmer, who can engineer scalable and secure systems that can communicate effectively."
- Buttons: "Resume", "GitHub", "LinkedIn" (all link to `href="#"` placeholders — real target site links to `/resume.pdf`, `https://github.com/...`, `https://linkedin.com/in/...`; use `#` since these aren't in scope to discover further, or leave as `<button>` with no-op onClick).

## Responsive Behavior
- **Desktop (1440px):** H1 at `text-7xl` (72px), subtitle `text-2xl`.
- **Mobile (390px):** H1 drops to `text-5xl` (48px), subtitle `text-xl`; buttons wrap via `flex-wrap`.
- **Breakpoint:** `md` = 768px.
