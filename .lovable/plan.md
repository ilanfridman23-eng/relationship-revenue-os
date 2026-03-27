

## Fix Hero Section Layout: Book Spread Too Large, Text Cut Off

**Problem**: The book cover and chapter page are oversized, pushing the headline ("Professional Services") off the left edge of the screen. The 42%/58% column split combined with large book dimensions creates overflow.

### Changes in `src/components/HeroSection.tsx`

1. **Reduce book spread dimensions**: `bookW` from 260→220, `pageW` from 280→240 for `large` variant. Cap `maxWidth` at `24vw` and `26vw` respectively so they shrink on smaller desktops.

2. **Adjust column split**: Change left column from `lg:w-[42%]` to `lg:w-[45%]` and right column from `w-[58%]` to `w-[55%]` to give the headline more breathing room.

3. **Reduce headline font size slightly**: Change `clamp(48px, 6vw, 84px)` to `clamp(44px, 5.5vw, 76px)` so it doesn't overflow on medium-large screens.

4. **Add `overflow-hidden`** to the main flex container to prevent any residual bleed.

5. **Tighten the gap** between the spread items: reduce `gap-1` to `gap-px` for a tighter spine feel.

### Result
The headline stays fully visible, the book spread scales proportionally, and the two pieces sit side by side without pushing content off-screen.

### Files
- `src/components/HeroSection.tsx` — single file

