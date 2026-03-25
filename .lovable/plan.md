

# 7 Content Updates to discover.mabbly.com

All changes are text/content only. No layout, design, or structural changes.

## Change 1 — Hero Subhead (HeroSection.tsx, lines 71-73)
Replace subhead text with the longer version starting with "GTM has one universally accepted definition..."

## Change 2 — Definition Callout Block (HeroSection.tsx, after line 146)
Insert a new callout block between the stat strip and the right-column book display. Placed inside the left column div, after the stats grid. Styled with gold border top/bottom, semi-transparent gold background, centered text. Label in DM Mono 9px uppercase, statement in Cormorant Garamond italic 26px desktop / 20px mobile.

## Change 3 — Fix Duplicate Text in Mission Section (MissionSection.tsx, lines 27-32)
Replace the two body paragraphs with three clean paragraphs:
- P1: "Every GTM framework..." (same as current but with em-dash notation kept as the user provided)
- P2 (new): "GTM for professional services is not a plan for entering a new market..."
- P3: "GTM for Professional Services is the first system..." (clean, no duplicates)

Note: The user's provided text uses " — " (spaced em-dashes). Per memory rules, no hyphens/dashes. Will use commas instead.

## Change 4 — Pillar 01 Extra Sentence (MissionSection.tsx, line 41)
Append "It also gives professional services GTM its first correct definition." to pillar 01 body.

## Change 5 — Framework Section Subtitle (BookSection.tsx, after line 50)
Add one line of Instrument Sans 15px text below "The Relationship Revenue OS" subtitle: "The first GTM system built for the market you already own. Not for finding strangers. For activating relationships."

## Change 6 — Apply Section Italic Line (ApplySection.tsx, after line 69)
Add italic Cormorant Garamond 16px line: "If your firm has ever wondered why every GTM playbook you have tried was built for someone else — this research session is the answer." (Will use comma instead of em-dash per memory rules.)

## Change 7 — Footer Tagline (Footer.tsx, line 32)
Replace "Signal Activated Growth for Professional Services" with "GTM for the market you already own."

## Files Modified
- `src/components/HeroSection.tsx` (changes 1, 2)
- `src/components/MissionSection.tsx` (changes 3, 4)
- `src/components/BookSection.tsx` (change 5)
- `src/components/ApplySection.tsx` (change 6)
- `src/components/Footer.tsx` (change 7)

