

## Fix: Episode Section Text Alignment

The text (eyebrow, headline, paragraph) is left-aligned while the YouTube embed and link pills are centered (`mx-auto`, `justify-center`). This creates a visual disconnect visible in the screenshot.

### Changes in `src/components/EpisodeSection.tsx`

1. **Center-align the text content** to match the centered video and link pills:
   - Add `text-center` to the wrapper div or to each text element
   - Center the paragraph by adding `mx-auto` to it (it already has `maxWidth: 560`)

2. **Remove `scroll-reveal`** from the eyebrow, headline, and paragraph to prevent blank content (consistent with the reliability fixes applied to other sections)

This is a small alignment fix, no layout or design changes.

