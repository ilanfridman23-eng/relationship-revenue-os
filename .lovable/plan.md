

## Make the Book Display 100x More Impactful

The current book display is small (320px container), static, and flat. Two identical covers side by side with a thin spine. It reads like a placeholder, not a centerpiece.

### The Vision

Transform the book display into a cinematic, 3D "open book" presentation with depth, light, and motion that commands attention.

### Changes to `src/components/BookSection.tsx`

**1. Dramatically larger book presentation**
- Increase container from `max-w-[320px] h-[220px]` to `max-w-[600px] h-[420px]` (desktop)
- Single hero book cover at ~280px wide, centered, with strong perspective transform (`perspective(1000px) rotateY(-8deg)`) for a 3D feel
- Remove the redundant second cover and flat spine. One book, presented with authority.

**2. Cinematic lighting and depth**
- Large radial gold glow behind the book (`rgba(184,147,58,0.12)`) to create a spotlight effect
- Layered shadow system: close shadow for grounding + distant spread shadow for depth
- Subtle surface reflection below the book (a faded, flipped copy at 15% opacity with a gradient mask)

**3. Motion on scroll**
- Use `IntersectionObserver` to trigger a reveal animation: book scales from 0.9 to 1.0 and fades in with a slight upward drift
- Keep the existing `bookFloat` keyframe for gentle hovering after reveal
- Gold glow pulses subtly behind the book using the existing `glowPulse` animation

**4. Flanking accent details**
- Small decorative gold horizontal rules on either side of the book, like editorial brackets
- "First Edition · Q4 2026" label below the book in `font-mono` at 9px, gold at 50% opacity

### Changes to `src/index.css`

- Add a `@keyframes bookReveal` animation (scale + fade + translateY)
- Add a `.book-reflection` utility class for the mirrored effect below

### No changes to other files. The book cover asset stays the same.

