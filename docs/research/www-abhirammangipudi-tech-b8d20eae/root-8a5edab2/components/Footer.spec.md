# Footer Specification

## Overview
- **Target file:** `src/components/sites/www-abhirammangipudi-tech-b8d20eae/shared/Footer.tsx` (client component — needs `useEffect`/`useState` for the cycling emoji and the scroll-to-top action)
- **Interaction model:** static layout + one **time-driven** element (cycling emoji) + one **click-driven** element ("Back to Top").

## DOM Structure
```
<footer class="bg-[#1d2021] border-t border-[#3c3836] py-12">
  <div class="container max-w-6xl mx-auto px-6 text-center">
    <h3 class="text-2xl font-bold text-[#fbf1c7] mb-2">Abhiram Mangipudi</h3>
    <p class="text-[#a89984] mb-8">Systems Engineering • Systems That Scale • Constant Learner</p>
    <div class="border-t border-[#3c3836] pt-6 flex items-center justify-between flex-wrap gap-4">
      <span class="text-sm text-[#a89984]">© 2026 Abhiram Mangipudi. All rights reserved.</span>
      <span class="text-2xl">{cyclingEmoji}</span>
      <button class="inline-flex items-center gap-2 rounded-md border border-[#fe8019] text-[#fe8019] hover:bg-[#fe8019]/10 px-4 py-2 text-sm font-semibold transition-colors">
        <ArrowUp size={16} /> Back to Top
      </button>
    </div>
  </div>
</footer>
```

## Computed Styles
- bg `#1d2021`, `border-t border-[#3c3836]`.
- Name: `text-2xl font-bold text-[#fbf1c7]`.
- Tagline: `text-[#a89984]` with `•` separators (verbatim: "Systems Engineering • Systems That Scale • Constant Learner").
- Bottom row: 3-way `flex items-center justify-between` — copyright left, emoji center, "Back to Top" button right (matches screenshot layout exactly).
- "Back to Top" button: same outline recipe as other outline buttons (`border-[#fe8019] text-[#fe8019] hover:bg-[#fe8019]/10`), `ArrowUp` icon (lucide-react) + label.

## States & Behaviors
### Cycling emoji
- **Trigger:** time-driven, `setInterval`. Observed emojis across repeated captures at a fixed scroll position: 🚀, 💻, 🔧(or similar tool), ⚙️, ✨, 🎓 — treat as a random pick from a small curated list, re-picked on an interval.
- **Implementation:** 
  ```tsx
  const EMOJIS = ["🚀", "💻", "🔧", "⚙️", "✨", "🎓", "🔥", "💡"];
  const [emoji, setEmoji] = useState(EMOJIS[0]);
  useEffect(() => {
    const id = setInterval(() => {
      setEmoji(EMOJIS[Math.floor(Math.random() * EMOJIS.length)]);
    }, 2000); // exact interval not measured; 2s reads naturally from capture cadence
    return () => clearInterval(id);
  }, []);
  ```
  Note: seed the initial `useState` with `EMOJIS[0]` (not `Math.random()`) to avoid a React hydration mismatch between server and client render.

### Click ("Back to Top")
- `onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}`.

### Hover
- Back to Top button: `hover:bg-[#fe8019]/10`.

## Assets
- Icon: lucide-react `ArrowUp`.

## Text Content (verbatim)
- "Abhiram Mangipudi"
- "Systems Engineering • Systems That Scale • Constant Learner"
- "© 2026 Abhiram Mangipudi. All rights reserved."
- "Back to Top"

## Responsive Behavior
- **Desktop (1440px):** bottom row stays a single line, 3-way justify-between.
- **Mobile (390px):** bottom row should wrap (`flex-wrap gap-4`, already specified above) since copyright text + emoji + button won't fit one line at 390px.
- **Breakpoint:** none load-bearing beyond the global container padding; `flex-wrap` handles the narrow case.
