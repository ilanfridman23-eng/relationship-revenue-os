

## Add "See Our Framework" Hover Reveal to Book Section

**What**: Add a "See Our Framework" button/link below the book in the BookSection. On hover (desktop) or tap (mobile), it reveals an overlay/popover showing the RROS framework diagram from the uploaded HTML — the 5-stage process (Discover → Prove → Design → Activate → Compound), the 5 orbits, and the formula bar.

### Changes

**`src/components/BookSection.tsx`** (single file)

1. Add React `useState` for hover/active state
2. Below the "First Edition · Q4 2026" label, add a styled "See Our Framework →" text link with `onMouseEnter`/`onMouseLeave` (and `onClick` toggle for mobile)
3. When active, render a framework card that appears with a smooth scale/opacity transition, positioned overlaying or replacing the book area. The card contains:
   - **Header**: "THE RROS PROCESS™" eyebrow + "The Relationship Revenue OS" title + subtitle line
   - **5 Stages row**: Dark espresso-colored cards (Discover, Prove, Design, Activate, Compound) with stage numbers, names, tags, and notes — matching the uploaded HTML's color scheme (dark bg, cream/gold text, coral accents)
   - **5 Orbits row**: Pill-shaped items (Core/Proof, Active/Current, Dead Zone/Dormant in coral, Adjacent/Warm, Gravity/New) with gold borders
   - **Formula bar**: Dark strip with "SIGNAL + PROOF + CONTEXT = RESPONSE, NOT PITCH"
4. Style uses the existing CSS variables (`--gold`, `--cream`, etc.) and keeps the cream section's aesthetic. The framework panel uses dark (`#1A0A00` / `#281200`) backgrounds for the stages to create contrast, matching the uploaded design.
5. Transition: `opacity` + `scale` with 300ms ease for smooth reveal.

### Technical notes
- All content is hardcoded (matches the uploaded HTML exactly)
- No new files or dependencies needed
- Framework card is absolutely positioned over the book display area
- Uses Tailwind + minimal inline styles consistent with existing patterns

