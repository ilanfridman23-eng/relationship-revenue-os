

# Replace Book Cover Placeholders with Actual Cover Image

## Changes

1. **Copy uploaded cover image** from `user-uploads://Screenshot_2026-03-25_at_8.24.35_AM.png` to `src/assets/book-cover.png`

2. **HeroSection.tsx — BookDisplay component**
   - Import `bookCover` from `@/assets/book-cover.png`
   - Replace front cover placeholder div (lines 163-182) with `<img src={bookCover} alt="GTM for Professional Services" />` keeping rotation (-4deg), shadow, width 160px, aspect-ratio 2/3, z-index 2
   - Replace back cover placeholder div (lines 210-230) with same `<img>` tag, keeping rotation (4deg), offset, shadow, z-index 0
   - Remove dashed borders and placeholder text

3. **BookSection.tsx — Book display**
   - Import `bookCover` from `@/assets/book-cover.png`
   - Replace front cover placeholder div (lines 52-68) with `<img>` tag, keeping rotation (-3deg), shadow, positioning
   - Replace back cover placeholder div (lines 88-104) with `<img>` tag, keeping rotation (3deg), shadow, positioning
   - Remove dashed borders and placeholder text

