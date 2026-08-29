# ExperienceSection Specification

## Overview
- **Target file:** `src/components/sites/www-abhirammangipudi-tech-b8d20eae/root-8a5edab2/ExperienceSection.tsx`
- **Data import:** `import { experience } from "./data"` (3 entries: role, company, dateRange, bullets[])
- **Interaction model:** static vertical timeline/stack, entrance fade only.
- **Screenshot:** `docs/design-references/.../root-8a5edab2/experience-*.png`

## DOM Structure
```
<section id="experience" class="bg-[#1d2021] scroll-mt-16 py-24">
  <div class="container max-w-5xl mx-auto px-6">
    <p class="text-[#fe8019] text-sm font-semibold tracking-wide uppercase text-center mb-2">EXPERIENCE</p>
    <h2 class="text-4xl md:text-5xl font-bold text-center text-[#fbf1c7] mb-4">Professional Journey</h2>
    <p class="text-center text-[#a89984] mb-12">Here's how my skills derived value.</p>

    <div class="space-y-6">
      {experience.map(job => (
        <div class="rounded-xl border border-[#3c3836] bg-[#282828] p-6">
          <div class="flex items-start justify-between gap-4 mb-4">
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 rounded-lg bg-[#fe8019] flex items-center justify-center shrink-0">
                <!-- Briefcase icon, lucide-react, stroke #1d2021, size 24 -->
              </div>
              <div>
                <h3 class="text-xl font-bold text-[#fbf1c7]">{job.role}</h3>
                <p class="text-[#fe8019] font-semibold">{job.company}</p>
              </div>
            </div>
            <span class="text-sm text-[#a89984] whitespace-nowrap">{job.dateRange}</span>
          </div>
          <ul class="space-y-2">
            {job.bullets.map(b => (
              <li class="flex gap-2 text-[#ebdbb2]">
                <span class="text-[#fe8019] mt-1">•</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
</section>
```

## Computed Styles (exact)
- Section bg `#1d2021`. Card bg `#282828`, `border border-[#3c3836] rounded-xl p-6`.
- Icon badge: 48×48px (`w-12 h-12`), `rounded-lg`, filled `bg-[#fe8019]`, centers a `Briefcase` icon (lucide-react) drawn in the card's dark background color (`text-[#1d2021]`) — matches screenshot's solid-orange rounded-square icon chip.
- Role heading: `text-xl font-bold text-[#fbf1c7]`.
- Company: `text-[#fe8019] font-semibold` directly under role.
- Date range: right-aligned, `text-sm text-[#a89984]`, top-aligned with the role/company block (`items-start justify-between`).
- Bullet list: each item is a flex row — orange bullet dot/marker (`•` character, `text-[#fe8019]`) + `text-[#ebdbb2]` body text, `gap-2`, list items `space-y-2` apart.

## States & Behaviors
- No hover/scroll-triggered state changes observed on this section beyond the page-wide entrance fade (apply `animate-fadeInUp` to the section's inner container, or per-card with a slight stagger using inline `animationDelay` — either is acceptable; source did not expose per-card stagger timing distinctly in this pass).

## Assets
- Icon: lucide-react `Briefcase` (one per entry, same icon reused for all 3 — confirmed visually identical icon in every screenshot).

## Text Content (verbatim)
- Eyebrow "EXPERIENCE", H2 "Professional Journey", sub "Here's how my skills derived value."
- All 3 jobs' role/company/dateRange/bullets — import from `experience` in `data.ts`, do not retype.

## Responsive Behavior
- **Desktop (1440px):** date range stays right-aligned on the same row as role/company header.
- **Mobile (390px):** header row should wrap (`flex-wrap` or stack date below) since `justify-between` with long role/company text + date would overflow narrow viewports — add `flex-col sm:flex-row sm:items-start sm:justify-between` to the header row for safety (not directly captured at mobile width this pass, reasonable Tailwind default).
- **Breakpoint:** `sm`=640px assumed for the stacking fallback described above.
