

## Bring Back the Definition Quote Block

The screenshot shows a dark banner between the hero and the social proof bar containing:
- Gold label: "THE DEFINITION THAT CHANGES EVERYTHING"
- A gold horizontal rule above the quote
- Italic serif quote: "GTM for professional services is not a plan for entering a new market. It is a system for activating the one you already own."
- Dark background matching the hero section tone

This block was likely removed during recent hero edits. It needs to be re-added.

### Implementation

**Add a new `DefinitionBanner` section** either as a separate component or inline in `Index.tsx`, placed between `<HeroSection />` and `<SocialProofBar />`.

Structure:
- Full-width section with dark background (`#2a2520` or similar warm charcoal)
- Subtle gold top border line
- Gold uppercase mono label: "THE DEFINITION THAT CHANGES EVERYTHING"
- Large italic Playfair Display quote text in warm cream/gold
- Generous vertical padding (py-16 to py-20)
- Max-width container centered, text centered

### Files
1. **`src/components/DefinitionBanner.tsx`** — new component with the quote block
2. **`src/pages/Index.tsx`** — import and place between HeroSection and SocialProofBar

