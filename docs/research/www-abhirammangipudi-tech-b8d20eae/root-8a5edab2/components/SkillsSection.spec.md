# SkillsSection Specification

## Overview
- **Target file:** `src/components/sites/www-abhirammangipudi-tech-b8d20eae/root-8a5edab2/SkillsSection.tsx`
- **Data import:** `import { skillCategories, interests } from "./data"` — `skillCategories` has 4 categories (Server-Side Tech: 20 skills, Machine Learning And AI: 11, DevOps: 13, SDLC And Engineering: 6), each `{title, description, skills:[{name, level}]}`.
- **Interaction model:** static, all categories render simultaneously (NOT a tab switcher — verified all 4 categories' content is present in the DOM at once, no click-to-switch UI). Per-card `hover:border-[#fe8019]` only.
- **Screenshot:** section is the tallest on the page (~3695px) — see `docs/design-references/.../root-8a5edab2/skills-*.png`.

## DOM Structure
```
<section id="skills" class="bg-[#1d2021] scroll-mt-16 py-24">
  <div class="container max-w-6xl mx-auto px-6">
    <!-- header row with flanking horizontal rules around eyebrow -->
    <div class="flex items-center gap-4 mb-2">
      <div class="flex-1 h-px bg-[#3c3836]"></div>
      <p class="text-[#fe8019] text-sm font-bold tracking-widest uppercase">TECHNOLOGY</p>
      <div class="flex-1 h-px bg-[#3c3836]"></div>
    </div>
    <h2 class="text-4xl md:text-5xl font-bold text-center text-[#fbf1c7] mb-4">Skills And Tech</h2>
    <p class="text-center text-[#a89984] mb-16">Here's all the tech I have used in my journey.</p>

    {skillCategories.map(cat => (
      <div class="mb-16">
        <h3 class="text-2xl font-bold text-[#fe8019] mb-1">{cat.title}</h3>
        <p class="text-[#a89984] mb-6">{cat.description}</p>
        <div class="grid md:grid-cols-2 gap-4">
          {cat.skills.map(skill => <SkillBadge .../>)}
        </div>
      </div>
    ))}

    <!-- Interests block, same header pattern, no proficiency dots -->
    <div>
      <h3 class="text-2xl font-bold text-[#fe8019] mb-1">Interests</h3>
      <p class="text-[#a89984] mb-6">This is what I do in my free time.</p>
      <div class="flex flex-wrap gap-3">
        {interests.map(i => <span class="pill">{i}</span>)}
      </div>
    </div>
  </div>
</section>
```

## Computed Styles (exact)
- Section bg `#1d2021`.
- Eyebrow row: horizontal rule `flex-1 h-px bg-[#3c3836]` on each side of "TECHNOLOGY" label (`text-[#fe8019] text-sm font-bold tracking-widest uppercase`, matches screenshot: thin lines extend to container edges with label centered).
- Category title (`h3`): `text-2xl font-bold text-[#fe8019]`.
- Category description: `text-[#a89984]` (regular, sits directly under h3).
- **Skill badge/card** — exact className confirmed from live DOM:
  `bg-[#282828] border border-[#3c3836] p-4 rounded-lg hover:border-[#fe8019] transition-all duration-200`
  Inner structure:
  ```
  <div class="flex justify-between items-center mb-3">
    <span class="text-[#ebdbb2] font-semibold">{skill.name}</span>
    <div class="flex gap-1">
      <!-- 5x lucide Circle icon, width=12 height=12 -->
      <!-- filled: class="lucide lucide-circle text-[#fe8019] fill-[#fe8019]" -->
      <!-- empty: class="lucide lucide-circle text-[#3c3836] fill-none" (unfilled dot uses muted border color, no fill) -->
    </div>
  </div>
  <div class="w-full h-1.5 bg-[#3c3836] rounded-full overflow-hidden">
    <div class="h-full bg-[#fe8019] rounded-full" style={{width: `${(skill.level/5)*100}%`}} />
  </div>
  ```
  Render exactly `skill.level` filled `Circle` icons (12×12, `text-[#fe8019] fill-[#fe8019]`) followed by `5 - skill.level` empty ones (`text-[#3c3836] fill-none`), then a progress bar below at `(level/5)*100%` width in orange on a `#3c3836` track — this matches the screenshots (e.g. NodeJs 5/5 full bar, MySQL 4/5 ~80% bar with 1 hollow dot, Jest 3/5 ~60% bar with 2 hollow dots).

- Grid of skill cards per category: `grid md:grid-cols-2 gap-4` (2 columns desktop, 1 column mobile — matches screenshots showing exactly 2 cards per row).

- Interests pills: reuse the same neutral pill style as About's tag row — `inline-flex items-center rounded-md border text-xs font-semibold px-4 py-2 border-[#3c3836] text-[#ebdbb2] bg-[#282828]`.

## States & Behaviors
### Hover (skill card)
- **Before:** `border-[#3c3836]`
- **After:** `border-[#fe8019]`
- **Transition:** `transition-all duration-200`

## Assets
- Icon: lucide-react `Circle` (used both filled and outline via `fill`/`text` color props — 12px size, `strokeWidth` default 2).

## Text Content (verbatim)
- Eyebrow: "TECHNOLOGY"; H2: "Skills And Tech"; Sub: "Here's all the tech I have used in my journey."
- Category titles/descriptions and every skill name + level: see `skillCategories` in `data.ts` — do not retype, import directly.
- Interests block: title "Interests", sub "This is what I do in my free time.", tags from `interests` array (Music, Philosophy, Bhakti, Innovation, Tinkering).

## Responsive Behavior
- **Desktop (1440px):** skill grid 2 columns per category.
- **Mobile (390px):** skill grid collapses to 1 column.
- **Breakpoint:** `md`=768px.
