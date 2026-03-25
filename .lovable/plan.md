

# Redesign Book Cover Image

## What
Generate a new, crisper version of the GTM for Professional Services book cover using AI image generation, then replace `src/assets/book-cover.png`.

## Design Direction
The current cover has the right elements but feels slightly soft/busy. The redesign will keep the same content and layout concept (gold spine, concentric orbit diagram, stats bar, author names) but push for:
- Sharper typography with more contrast between "GTM" and supporting text
- Cleaner orbit diagram with crisper lines and more breathing room
- Stronger visual hierarchy: bolder gold accents, crisper stat bar separation
- More defined sections with cleaner dividing lines
- Overall more polished, editorial, high-end business book feel

## Technical Steps
1. Use AI image generation (Nano banana 2 for speed + quality) to create a refined book cover matching the existing design language but with sharper execution
2. QA the generated image for clarity, text legibility, and overall impact
3. Iterate if needed
4. Replace `src/assets/book-cover.png` with the new version
5. No code changes needed since both `HeroSection.tsx` and `BookSection.tsx` already import from that path

