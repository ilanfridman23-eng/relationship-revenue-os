

## Fix Book Mockup: Sizing, Transform, and Structure

### Changes in `src/components/HeroSection.tsx`

**1. Constrain book size & prevent overflow**
- Add `overflow-hidden` and `max-w-full` to the right column container (line 244)
- Add `maxWidth: 580` to the BookSpread root wrapper (line 306)

**2. Flatten 3D transforms on static book**
- Line 308: Remove `perspective: 1400` from the outer wrapper (keep it only needed for page-turn hover, move it to the right page's parent instead)
- Line 315: Change `transform: "rotate(-1.5deg) rotateX(3deg)"` to `transform: "rotate(-1deg)"`
- Remove `transformStyle: "preserve-3d"` from the inner book div (line 316) — keep it only on the right page area (line 381) where the page-turn needs it
- Add `perspective: 1400` to the right page area div (line 378) so the hover page-turn still works

**3. Remove inner white rectangle on cover**
- The cover image currently renders at `height: 100%, width: auto` which may show a white background behind it. Change the left page container (line 325) to have `overflow: hidden` and explicit width matching 50% of book width (via `calc(50% - 7px)` to account for half the 14px spine). Remove `width: auto` from the img and use `width: 100%` + `objectFit: cover` so it fills the entire left page area with no white gaps.

**4. Equal-width pages**
- Left page (line 325): set `width: calc(50% - 7px)`, `flexShrink: 0`
- Right page area (line 378-380): replace `width: h * 0.62` with `width: calc(50% - 7px)`, `flexShrink: 0`
- Spine stays at 14px with `flexShrink: 0`

### Files
- `src/components/HeroSection.tsx` — single file

