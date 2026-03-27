
## Fix the mobile book so the full pages are visible

The problem is not just the outer width. Right now the book is narrower, but the two page panels still size themselves from their content. That means the text block forces the page height and parts of the open book still get clipped on mobile.

### What I would change in `src/components/HeroSection.tsx`

**1. Give the book a real responsive aspect ratio**
- Keep the desktop size strong
- Make mobile much smaller
- Set the main book object to scale from width with a fixed open-book ratio instead of letting content define its height
- Use a mobile first width like `max-w-[160px]` or `max-w-[170px]`, then step up at `sm` and `lg`
- Add an explicit `aspectRatio` on the open-book container so both pages are always fully visible

**2. Make both pages fill the same bounded height**
- Replace the current `minHeight: undefined` and loose `maxHeight: 480` setup
- Put the left page, spine, and right page inside one container with:
  - `width: 100%`
  - `aspectRatio: "2.15 / 1"` or similar
  - `maxHeight: 480`
- Then set each page to `height: 100%`
- This guarantees the full left and right pages stay inside the visible book frame

**3. Prevent the right page content from forcing overflow**
- The chapter page content is currently too dense for the small mobile page
- Reduce the internal page padding and font sizes below `sm`
- Tighten margins between eyebrow, subtitle, title, paragraphs, quote, and page number
- Keep desktop typography unchanged by only scaling the book page internals on smaller breakpoints

**4. Keep the hover turn behavior exactly as is**
- Preserve:
  - `perspective: 1200` on the parent
  - `rotateY(-20deg)` on hover
  - `transition: "transform 400ms ease-in-out"`
- Only apply the sizing fix around it so the animation still works inside a bounded page

**5. Keep desktop larger while mobile becomes truly compact**
- Current desktop can stay near `lg:max-w-[580px]`
- Mobile should be reduced further than the last attempt because the screenshot shows the page still feels oversized for a 390px viewport
- Proposed responsive sizing:
  - mobile: around `160px` to `170px`
  - small screens: around `220px`
  - desktop: around `560px` to `580px`

### Why this will fix it
Shrinking only the wrapper does not solve clipping when the page internals still dictate height. Rebuilding the book around a fixed open-book aspect ratio makes the whole object scale as one unit, so both full pages remain visible on mobile while the desktop version can still feel large.

### Scope
- Only `src/components/HeroSection.tsx`
- No text changes
- No color, typography, CTA, stat, or content changes outside the book sizing behavior
