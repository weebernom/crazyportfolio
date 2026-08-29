# Navbar Specification

## Overview
- **Target file:** `src/components/sites/www-abhirammangipudi-tech-b8d20eae/shared/Navbar.tsx` (client component)
- **Interaction model:** click-driven smooth scroll to section id, active-link highlight on click
- **Data import:** `import { navLinks } from "../root-8a5edab2/data"` — array `["Home","About","Skills","Experience","Projects","Education","Contact"]`. Map link label → lowercase section id (`"Home"→"home"`, etc).

## DOM Structure
```
<nav class="fixed top-0 left-0 right-0 z-50 bg-[#282828] border-b border-[#3c3836] backdrop-blur-sm">
  <div class="max-w-7xl mx-auto px-6 py-4">
    <div class="flex justify-between items-center">
      <div class="text-2xl font-bold text-[#fbf1c7]">Abhiram Mangipudi</div>
      <div class="hidden md:flex space-x-8">
        <button class="text-sm font-medium transition-colors duration-200 hover:text-[#fe8019] {active ? 'text-[#fe8019]' : 'text-[#ebdbb2]'}">Home</button>
        ... (one per navLinks entry)
      </div>
    </div>
  </div>
</nav>
```

## Computed Styles (exact, from getComputedStyle)
- nav: `background-color: rgb(40,40,40)` (`#282828`), height 64.8px, `position: fixed`, `z-index: 50`, border-bottom `1px solid #3c3836`, `backdrop-filter: blur(4px)` (Tailwind `backdrop-blur-sm`)
- font: IBM Plex Sans, base 16px / line-height 25.6px
- logo text: `text-2xl font-bold text-[#fbf1c7]` → 24px, weight 700, color `#fbf1c7`
- nav links: `text-sm font-medium` (14px/500), inactive color `#ebdbb2`, active/hover color `#fe8019`, `transition-colors duration-200`

## States & Behaviors
### Active link
- **Trigger:** click on a nav button
- **State A (inactive):** `text-[#ebdbb2]`
- **State B (active):** `text-[#fe8019]`
- **Transition:** `transition-colors duration-200`
- **Implementation:** local `useState<string>("home")`, set on click, compare against each link's id for className.

### Click → scroll
- On click, call `document.getElementById(id)?.scrollIntoView({behavior: "smooth", block: "start"})`. Global `html { scroll-behavior: smooth }` already set in `globals.css` — scrollIntoView will honor it. Account for the fixed nav's 64.8px height by adding `scroll-margin-top: 65px` (or similar) to each `<section>` so content isn't hidden under the navbar after scrolling — apply this via a shared class the section components use, e.g. give every `<section id="...">` `className="scroll-mt-16"`.

### Hover
- Nav link hover: `hover:text-[#fe8019]`, `transition-colors duration-200` (200ms color transition).

### Mobile
- The link row is `hidden md:flex` — below `md` (768px) it disappears entirely with no hamburger observed in this pass. Implement a simple hamburger + slide-down menu using an inline `useState` toggle (Menu/X icon from `lucide-react`) as a reasonable default since the mobile menu wasn't directly captured; keep desktop pixel-exact as the priority.

## Assets
- Icons: none in the nav bar itself (mobile hamburger icon: `Menu` / `X` from `lucide-react`, your addition).

## Text Content (verbatim)
- Logo: "Abhiram Mangipudi"
- Links: Home, About, Skills, Experience, Projects, Education, Contact

## Responsive Behavior
- **Desktop (≥768px / `md`):** full horizontal link row visible, `justify-between` layout.
- **Mobile (<768px):** link row hidden; add a hamburger toggle (best-effort, not directly observed).
- **Breakpoint:** `md` = 768px (Tailwind default).
