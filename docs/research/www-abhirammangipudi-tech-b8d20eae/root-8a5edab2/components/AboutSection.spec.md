# AboutSection Specification

## Overview
- **Target file:** `src/components/sites/www-abhirammangipudi-tech-b8d20eae/root-8a5edab2/AboutSection.tsx`
- **Data import:** `import { coreSkills } from "./data"` (4 items: title, description, color hex)
- **Interaction model:** static; core-skill cards have hover-only scale effect. No scroll animation confirmed beyond generic entrance fade (apply `animate-fadeInUp` to the section content wrapper for consistency with rest of page).

## DOM Structure
```
<section id="about" class="bg-[#282828] scroll-mt-16 py-24">
  <div class="container max-w-6xl mx-auto px-6">
    <!-- eyebrow + heading -->
    <p class="text-[#fe8019] text-sm font-semibold tracking-wide uppercase text-center mb-2">ABOUT ME</p>
    <h2 class="text-4xl md:text-5xl font-bold text-center text-[#fbf1c7] mb-4">About Me</h2>
    <p class="text-center text-[#a89984] mb-12">Here's me, but in short.</p>

    <!-- 4 pill tags row -->
    <div class="flex flex-wrap gap-3 justify-center mb-8">
      <!-- Server-Side Engineering / Machine Learning / DevOps / Software And Systems Engineering -->
    </div>

    <p class="text-lg text-[#ebdbb2] mb-12 max-w-3xl mx-auto text-center">Server-Side Engineer, who can engineer systems that scale beautifully, follow modern-day security standard and communicate with each other effectively.</p>

    <h3 class="text-2xl font-bold text-[#fbf1c7] mb-6">Core Skills</h3>
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      <!-- 4 CoreSkill cards, mapped from coreSkills -->
    </div>
  </div>
</section>
```
Note: exact heading/eyebrow copy pattern ("ABOUT ME" eyebrow, "About Me" H2, "Here's me, but in short." sub) matches the pattern reused for every later section (Skills: "TECHNOLOGY"/"Skills And Tech"; Experience: "EXPERIENCE"/"Professional Journey"; Projects: "PROJECTS"/"Systems I Built"; Education: "EDUCATION"/"Academia"; Contact: "CONTACT ME"/"Get In Touch"). Keep this exact 3-line header pattern (eyebrow uppercase orange / H2 cream bold / muted subtitle) reusable — feel free to extract a small local `SectionHeader` helper inside this file or duplicate inline; either is fine since each section owns different copy.

## Computed Styles
- Section bg: `#282828`.
- Eyebrow: `text-[#fe8019] text-sm font-semibold uppercase tracking-wide` (matches "TECHNOLOGY" styling seen in Skills screenshot: small orange uppercase label flanked by horizontal rules in that section — for About, keep centered, no rules needed since not directly observed there).
- H2: `text-4xl md:text-5xl font-bold text-[#fbf1c7]`.
- 4 pill tags ("Server-Side Engineering", "Machine Learning", "DevOps", "Software And Systems Engineering"): same badge recipe as Hero's "Available for Work" badge but neutral color — `inline-flex items-center rounded-md border text-xs font-semibold px-4 py-2 border-[#3c3836] text-[#ebdbb2] bg-[#1d2021]`.
- Core Skill cards: className exactly (per-card, from live DOM):
  - Scalability: `rounded-xl text-card-foreground shadow bg-[#fb4934]/10 border-2 border-[#fb4934] hover:scale-105 transition-all duration-200`
  - Security: `rounded-xl text-card-foreground shadow bg-[#b8bb26]/10 border-2 border-[#b8bb26] hover:scale-105 transition-all duration-200`
  - Communication: `rounded-xl text-card-foreground shadow bg-[#fabd2f]/10 border-2 border-[#fabd2f] hover:scale-105 transition-all duration-200`
  - Engineering: `rounded-xl text-card-foreground shadow bg-[#d3869b]/10 border-2 border-[#d3869b] hover:scale-105 transition-all duration-200`
  - Card inner padding: `p-6`. Title: `font-bold text-lg mb-2` in the card's own accent color (e.g. `text-[#fb4934]` for Scalability). Description: `text-sm text-[#a89984]`.
  - Build this generically: `className={`rounded-xl text-card-foreground shadow p-6 border-2 transition-all duration-200 hover:scale-105`} style={{ backgroundColor: `${color}1a`, borderColor: color }}` OR use Tailwind arbitrary value interpolation per-card since Tailwind can't dynamically build arbitrary-value classes from JS variables at runtime — **use inline `style` for the color-derived bg/border and Tailwind for the rest**, since the 4 known hex values won't survive Tailwind's static class extraction if built dynamically as `bg-[${color}]/10`.

## States & Behaviors
### Hover (Core Skill cards)
- **Before:** `scale(1)`
- **After:** `scale(1.05)`
- **Transition:** `transition-all duration-200`

## Assets
- No icons/images used in this section (pure typography + colored cards).

## Text Content (verbatim)
- Eyebrow: "ABOUT ME"
- H2: "About Me"
- Sub: "Here's me, but in short."
- Pills: "Server-Side Engineering", "Machine Learning", "DevOps", "Software And Systems Engineering"
- Body: "Server-Side Engineer, who can engineer systems that scale beautifully, follow modern-day security standard and communicate with each other effectively."
- "Core Skills" heading
- Cards (title / description) — from `coreSkills` data: Scalability / "Creating consistent and optimized systems that perform well under load"; Security / "Building systems that are security first"; Communication / "Ensuring that systems communicate properly"; Engineering / "Designing and testing systems in a disciplined and timely manner".

## Responsive Behavior
- **Desktop (1440px):** Core Skills grid 4 columns (`lg:grid-cols-4`).
- **Tablet (768px):** 2 columns (`md:grid-cols-2`).
- **Mobile (390px):** 1 column (grid default).
- **Breakpoint:** `md`=768px, `lg`=1024px.
