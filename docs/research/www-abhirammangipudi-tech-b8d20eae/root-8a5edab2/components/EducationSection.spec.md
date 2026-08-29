# EducationSection Specification

## Overview
- **Target file:** `src/components/sites/www-abhirammangipudi-tech-b8d20eae/root-8a5edab2/EducationSection.tsx`
- **Data import:** `import { coursework } from "./data"` (11 items)
- **Interaction model:** fully static, single card, no hover/click behavior observed.
- **Screenshot:** `docs/design-references/.../root-8a5edab2/education-*.png`

## DOM Structure
```
<section id="education" class="bg-[#282828] scroll-mt-16 py-24">
  <div class="container max-w-4xl mx-auto px-6">
    <p class="text-[#fe8019] text-sm font-semibold tracking-wide uppercase text-center mb-2">EDUCATION</p>
    <h2 class="text-4xl md:text-5xl font-bold text-center text-[#fbf1c7] mb-4">Academia</h2>
    <p class="text-center text-[#a89984] mb-12">Here's how I gained those skills</p>

    <div class="rounded-xl border border-[#3c3836] bg-[#1d2021] p-8">
      <span class="inline-block text-sm font-semibold text-[#fe8019] mb-3">2021 - 2025</span>
      <h3 class="text-xl font-bold text-[#fbf1c7] mb-1">Bachelors In Technology, Computer Science Engineering (Specialized In AI &amp; ML)</h3>
      <p class="text-[#fe8019] font-semibold mb-6">Institute Of Aeronautical Engineering</p>
      <p class="text-sm text-[#a89984] font-semibold mb-3">Coursework:</p>
      <div class="flex flex-wrap gap-2">
        {coursework.map(c => <span class="tech-pill">{c}</span>)}
      </div>
    </div>
  </div>
</section>
```

## Computed Styles (exact)
- Section bg `#282828`. Card bg `#1d2021` (darker, matches contrast pattern of other cards-on-tinted-section), `border border-[#3c3836] rounded-xl p-8`.
- Year badge: small orange label above the degree title, `text-sm font-semibold text-[#fe8019]`.
- Degree title: `text-xl font-bold text-[#fbf1c7]`.
- Institution: `text-[#fe8019] font-semibold`.
- "Coursework:" label: `text-sm text-[#a89984] font-semibold`.
- Coursework tags: same outline pill recipe as Projects' tech pills — `border border-[#fe8019] text-[#fe8019] text-xs font-semibold px-3 py-1 rounded-md`.

## States & Behaviors
- N/A — no hover, click, or scroll-triggered behavior distinct from the page-wide entrance fade (`animate-fadeInUp` on the card is a reasonable default).

## Assets
- No icons/images.

## Text Content (verbatim)
- Eyebrow "EDUCATION", H2 "Academia", sub "Here's how I gained those skills"
- Year: "2021 - 2025"
- Degree: "Bachelors In Technology, Computer Science Engineering (Specialized In AI & ML)"
- Institution: "Institute Of Aeronautical Engineering"
- "Coursework:" label
- 11 coursework tags — import from `coursework` in `data.ts`: Data Structures And Algorithms, Operating Systems, Computer Networks, Database Management Systems, Theory Of Computation, Computer Organization And Architecture, Compiler Design, Machine Learning, Artificial Engineering, Deep Neural Networks, Computer Vision.

## Responsive Behavior
- **Desktop (1440px):** card content at `max-w-4xl`, coursework tags wrap in a single flex-wrap row spanning multiple lines as needed.
- **Mobile (390px):** card padding likely reduces (`p-8` → consider `p-6` at small breakpoints for safety, not directly captured), tags still wrap normally via `flex-wrap`.
- **Breakpoint:** none structurally significant beyond global container padding.
