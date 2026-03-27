

## Rebuild Book Mockup as Unified Physical Object

**Problem**: The book is two separate floating cards with individual shadows and a visible gray container behind the cover. No spine, no depth, no physicality.

### Changes in `src/components/HeroSection.tsx` — BookSpread component only

**1. Remove ambient glow div** (lines 308-315) — the gray/gold circle behind the book. Background should be the dark hero only.

**2. Restructure the spread container** (line 318-321) into a unified book object:
- Outer wrapper: `perspective: 1400px`
- Inner book div: `transform: rotate(-1.5deg) rotateX(3deg)`, `transformStyle: preserve-3d`, unified drop shadow `0px 32px 80px rgba(0,0,0,0.55), 0px 8px 24px rgba(0,0,0,0.35)`. No gap between children.
- Contains three children in a row: left page, spine, right page.

**3. Add spine element** between the two pages:
- 14px wide vertical div, full height
- Background: `linear-gradient(to right, #1A0A00 0%, #3D1E08 40%, #1A0A00 100%)`

**4. Add bottom edge strip** on the unified book div:
- `::after` pseudo or a 6px tall div at the bottom, background `#1A0A00`, full width

**5. Left page (cover) shadow changes**:
- Remove individual `boxShadow` from the `<img>` (lines 337-339)
- Add `boxShadow: "inset -20px 0 40px rgba(0,0,0,0.25)"` via an overlay div on the cover's right edge
- Add a 4px left-edge strip: `linear-gradient(to left, #0D0600, transparent)` for book thickness

**6. Right page shadow changes**:
- Remove individual `boxShadow` from both the revealed interior page (lines 375-377) and the main chapter page (lines 407-409)
- Add `boxShadow: "inset 20px 0 40px rgba(0,0,0,0.15)"` to the chapter page

**7. Fix border-radius**: Left page gets rounded left corners only (`6px 0 0 6px`), right page gets rounded right corners only (`0 6px 6px 0`). No rounding where pages meet the spine.

**8. Entrance animation** stays on the unified book wrapper instead of individual pages. The 90ms stagger is removed since it's one object now.

### Not changed
- All text content, typography, colors inside pages
- Page turn hover behavior (Layer 1)
- Ambient light overlay (Layer 2) 
- Edition label below the book

### Files
- `src/components/HeroSection.tsx` — single file

