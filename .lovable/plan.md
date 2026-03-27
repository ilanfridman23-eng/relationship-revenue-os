

## Add Five Interaction Layers to Hero Section

Behavior-only changes to `src/components/HeroSection.tsx`. No layout, copy, spacing, color, or structural modifications.

### Layer 1: Book Page Turn on Hover
- Add `perspective: 1200px` to the spread container (line 212 div).
- Add `useState` for hover state on the right page (chapter page div, line 232).
- On `onMouseEnter`/`onMouseLeave`, toggle a CSS `transform: rotateY(-25deg)` with `transformOrigin: "left center"` and `transition: transform 400ms ease-in-out` / 350ms on leave.
- The back face gets `backfaceVisibility: hidden` and a warmer white (`#faf6ef`).
- Behind the chapter page, render a second div (same dimensions) with darker cream (`#ede5d5`), centered Cormorant Garamond italic quote in muted gold (`rgba(184,147,58,0.5)`): "The market you need to win is already in your CRM."

### Layer 2: Ambient Light on Cover
- Add a `useRef` for the hero `<section>` and a `useState` for cursor position.
- On `onMouseMove` on the section, compute cursor position relative to the book cover image.
- Render an absolutely positioned div over the cover image: `pointerEvents: none`, `mixBlendMode: "overlay"`, `opacity: 0.18`, `zIndex: 2`, with `background: radial-gradient(circle at ${x}% ${y}%, rgba(255,210,120,0.6) 0%, transparent 55%)`.

### Layer 3: Session Counter Pulse
- Change the amber dot animation from `dotPulse 2s infinite` to a custom opacity animation: `1 → 0.3 → 1` over `2.4s infinite`.
- On mount, apply a one-shot scale animation (`1 → 1.03 → 1`, 700ms ease-in-out) to the counter text span via `useEffect` + CSS class toggle. Add `willChange: "transform"` to that span.

### Layer 4: Book Entrance on Load
- Add `useState` for mounted state, triggered by `useEffect` on mount.
- The spread container starts at `opacity: 0, translateY(36px)` and transitions to `opacity: 1, translateY(0)` over 900ms with `cubic-bezier(0.22, 1, 0.36, 1)`.
- The cover (left) animates immediately; the right page has a 90ms `transitionDelay`.

### Layer 5: Stat Counter on Scroll
- Replace static stat numbers with a custom hook using `IntersectionObserver` (threshold 0.4) + `requestAnimationFrame`.
- Animate from 0 to final value over 1400ms with cubic ease-out deceleration.
- `1.3%` always shows one decimal place (`toFixed(1)`). Others show integers.
- Percent sign rendered immediately. Stagger: 0ms, 120ms, 240ms.
- Use a `useRef` on the stat strip container for the observer target.

### Technical notes
- All state/refs added to existing components via React hooks. Import `useState, useEffect, useRef, useCallback`.
- Add `@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital@1&display=swap')` to `index.html` or use inline font-family with Georgia fallback.
- Single file change: `src/components/HeroSection.tsx`.

