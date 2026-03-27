

## Restructure Hero: Big Title Left, Book Cover + Chapter Page Right

**Current layout**: Left column has headline + book page preview + CTAs + stats. Right column has the book cover only.

**New layout**: 
- **Left column (~45%)**: Just the eyebrow, the massive headline "The First GTM Book for Professional Services.", urgency strip, CTA buttons, and stat strip. No book page here anymore.
- **Right column (~55%)**: The book cover and the Chapter One page side by side, like an open book spread. Book cover on the left, chapter page on the right, both slightly angled toward each other to create a premium "open book" feel. Matched heights so they look like a cohesive pair.

### Changes in `src/components/HeroSection.tsx`

1. **Remove** the book page preview from the left column (lines 105-242, the entire `mt-7 relative` div with the cream page)

2. **Move the chapter page into a new `BookSpread` component** rendered in the right column alongside the book cover:
   - Wrap both in a flex row with slight gap
   - Book cover: slight `rotateY(4deg)` lean (spine side)
   - Chapter page: slight `rotateY(-3deg)` lean (open page side)
   - Both ~260px wide on desktop, matched aspect ratio
   - The chapter page keeps its cream styling, serif fonts, all content intact

3. **Update the right column** (line 329): replace `<BookDisplay large />` with the new `BookSpread` layout showing cover + page side by side

4. **Mobile**: Stack vertically (book cover on top, chapter page below), both centered, slightly smaller

5. **Keep**: All background layers, definition callout block, the `BookDisplay` component for the mobile-only top display (but update it to show both pieces stacked)

### Visual result
```text
┌─────────────────────────────────────────────────┐
│  EYEBROW                                        │
│                                                 │
│  The First GTM        ┌──────┐ ┌──────────────┐ │
│  Book for             │ BOOK │ │ CHAPTER ONE  │ │
│  Professional         │COVER │ │ The Wrong Map│ │
│  Services.            │      │ │ body text... │ │
│                       │      │ │ pull quote   │ │
│  ● 46 of 50 left      └──────┘ └──────────────┘ │
│  [Apply] [Learn]        Q4 2026 · First Edition  │
│  96%  70%  1.3%                                  │
└─────────────────────────────────────────────────┘
```

### Files
- `src/components/HeroSection.tsx` — single file

