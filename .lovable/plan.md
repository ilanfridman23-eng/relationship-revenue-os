

# Update Richard Ashbaugh Photo

## Changes

1. **Copy uploaded image** to `src/assets/richard-ashbaugh.png`

2. **AuthorsSection.tsx** — Replace Richard's initials circle with an `<img>` tag:
   - Import the image from `@/assets/richard-ashbaugh.png`
   - Replace the `<div className="w-24 h-24 rounded-full bg-warm ...">` placeholder with `<img src={richardPhoto} alt="Richard Ashbaugh" className="w-24 h-24 rounded-full object-cover mx-auto md:mx-0" />`
   - Remove the HTML comment about replacing with headshot

