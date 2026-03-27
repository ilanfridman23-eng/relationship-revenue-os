

## Fix Framework Overlay Positioning

**Problem**: The overlay is positioned `absolute` with `top: -20` inside a small relative container (the "See Our Framework" button wrapper). This causes it to render too narrow and overlap the content above it, as seen in the screenshot where it covers the book and quote text.

### Fix in two files

**`src/components/FrameworkOverlay.tsx`**
- Change positioning from `top: -20` to `bottom: 100%` with `marginBottom: 12` so the overlay appears **above** the trigger button instead of overlapping content
- Add `pointer-events-auto` when visible so hover interactions work properly within the card

**`src/components/BookSection.tsx`**
- Move the `relative` container (the hover wrapper around the button + overlay) to have proper width so the overlay can expand to its full 720px max-width
- Add `overflow: visible` and sufficient width context by making the wrapper `w-full` or setting a min-width, so the centered overlay has room to render at full size
- Alternatively, move the overlay outside the small button wrapper and position it relative to the larger book display container (the `flex flex-col items-center` div) — this gives it the full section width to center within

### Recommended approach
Move `onMouseEnter`/`onMouseLeave` and the `FrameworkOverlay` to the outer book display container (line 60), and position the overlay with `bottom: -20px` or similar so it appears below the book area without overlapping content. The trigger button stays where it is but the overlay anchors to the wider parent.

