# ProjectsSection Specification

## Overview
- **Target file:** `src/components/sites/www-abhirammangipudi-tech-b8d20eae/root-8a5edab2/ProjectsSection.tsx` (client component — needs `useState`)
- **Data import:** `import { projects } from "./data"` (8 total projects)
- **Interaction model:** **click-driven pagination.** Initial render shows first **4** projects. Each click on "Load More Projects" reveals 4 more (confirmed via live testing: 4 → 8 → 12 DOM nodes as clicks accumulate, all 8 projects are visible after 2 clicks since 8 is the full dataset — implement as `visibleCount` state starting at 4, `+= 4` per click, clamped to `projects.length`). Button disappears once `visibleCount >= projects.length`.
- **Screenshot:** `docs/design-references/.../root-8a5edab2/projects-*.png`

## DOM Structure
```
<section id="projects" class="bg-[#282828] scroll-mt-16 py-24">
  <div class="container max-w-6xl mx-auto px-6">
    <p class="text-[#fe8019] text-sm font-semibold tracking-wide uppercase text-center mb-2">PROJECTS</p>
    <h2 class="text-4xl md:text-5xl font-bold text-center text-[#fbf1c7] mb-4">Systems I Built</h2>
    <p class="text-center text-[#a89984] mb-12">Here's how I used all the above mentioned skills.</p>

    <div class="grid md:grid-cols-2 gap-6">
      {projects.slice(0, visibleCount).map(p => (
        <div class="rounded-xl text-card-foreground shadow bg-[#1d2021] border-2 border-[#3c3836] hover:border-[#fe8019] transition-all duration-200 hover:scale-105 animate-fadeInUp relative p-6">
          <span class="inline-block rounded-full px-3 py-1 text-xs font-semibold mb-3 {status pill}">{p.status}</span>
          <h3 class="text-xl font-bold text-[#fbf1c7] mb-2">{p.name}</h3>
          <p class="text-[#a89984] mb-4">{p.description}</p>
          <div class="flex flex-wrap gap-2 mb-4">
            {p.tech.map(t => <span class="tech-pill">{t}</span>)}
          </div>
          <div class="flex items-center justify-between">
            <span class="text-sm text-[#a89984]">{p.date}</span>
            <button class="view-code-btn"><Github size={16}/> View Code</button>
          </div>
        </div>
      ))}
    </div>

    {visibleCount < projects.length && (
      <div class="flex justify-center mt-12">
        <button class="load-more-btn">Load More Projects</button>
      </div>
    )}
  </div>
</section>
```

## Computed Styles (exact)
- Card className (verbatim from live DOM): `rounded-xl text-card-foreground shadow bg-[#1d2021] border-2 border-[#3c3836] hover:border-[#fe8019] transition-all duration-200 hover:scale-105 animate-fadeInUp relative`, inner padding `p-6`.
- Status pill — **"Completed"**: small rounded-full pill, green background tint, e.g. `bg-[#b8bb26] text-[#1d2021] text-xs font-semibold px-3 py-1 rounded-full` (solid green fill with dark text, matches screenshot's bright green "Completed" pill). **"Ongoing"** status (only K0MPLEXinary): use the orange accent instead, e.g. `bg-[#fe8019] text-[#1d2021]` — same shape/size, swap color per `p.status === "Ongoing" ? "#fe8019" : "#b8bb26"`.
- Project name: `text-xl font-bold text-[#fbf1c7] mb-2`.
- Description: `text-[#a89984] mb-4`.
- Tech pills: outline style, `border border-[#fe8019] text-[#fe8019] text-xs font-semibold px-3 py-1 rounded-md` (matches screenshot: orange-outlined small tags like "JavaScript", "Express").
- Footer row: date `text-sm text-[#a89984]` on the left; "View Code" button on the right — outline style matching Hero's GitHub button: `inline-flex items-center gap-2 rounded-md border border-[#fe8019] text-[#fe8019] hover:bg-[#fe8019]/10 px-4 py-2 text-sm font-semibold transition-colors`, `Github` icon (16px) + "View Code" label.
- "Load More Projects" button (verbatim classes from live DOM): `inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md ... shadow h-9 bg-[#fe8019] hover:bg-[#d65d0e] text-[#1d2021] font-semibold px-8 py-6 text-base` (same filled-primary recipe as Hero's "Resume" button).

## States & Behaviors
### Load More (click-driven, NOT scroll-driven)
- **Trigger:** click on "Load More Projects" button
- **Before:** `visibleCount = 4` (or current value)
- **After:** `visibleCount = Math.min(visibleCount + 4, projects.length)`
- **Effect:** newly revealed cards get `animate-fadeInUp` entrance (they mount fresh into the grid). Button unmounts entirely once `visibleCount === projects.length` (confirmed: after loading all, "Load More" button was no longer present in DOM).

### Hover (card)
- **Before:** `border-[#3c3836]`, `scale(1)`
- **After:** `border-[#fe8019]`, `scale(1.05)`
- **Transition:** `transition-all duration-200`

### Hover (Load More / View Code buttons)
- Load More: `hover:bg-[#d65d0e]`.
- View Code: `hover:bg-[#fe8019]/10`.

## Assets
- Icon: lucide-react `Github` (16px, used in every "View Code" button).

## Text Content (verbatim)
- Eyebrow "PROJECTS", H2 "Systems I Built", sub "Here's how I used all the above mentioned skills."
- All 8 projects' name/status/description/tech/date — import from `projects` in `data.ts`, do not retype.
- Button label: "Load More Projects"; per-card button label: "View Code" (all `codeUrl` are placeholder `"#"` — real site links to individual GitHub repos not captured in this pass).

## Responsive Behavior
- **Desktop (1440px):** 2-column grid (`md:grid-cols-2`), confirmed exactly 2 cards per row in every screenshot.
- **Mobile (390px):** collapses to 1 column (Tailwind default below `md`).
- **Breakpoint:** `md`=768px.
