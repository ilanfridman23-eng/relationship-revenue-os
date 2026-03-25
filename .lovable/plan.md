

# Fix Empty Space in BookSection

## Problem
The BookSection shows "THE FRAMEWORK / GTM for Professional Services / The Relationship Revenue OS" at the top, then a large empty cream area. The book covers and content below (pull quote, chapter cards, timeline) are likely invisible because `scroll-reveal` elements haven't triggered, or the book cover images aren't rendering properly.

## Root Cause
The `scroll-reveal` class sets `opacity: 0` by default, relying on IntersectionObserver to add `.visible`. The book display, pull quote, chapter cards, and timeline all have `scroll-reveal` — if the observer doesn't fire (e.g., timing issue), everything below the heading is invisible, creating a large blank area.

## Fix
1. **BookSection.tsx**: Remove `scroll-reveal` from the book display container (line 57) so the book covers are always visible. The book covers are the main visual anchor of this section and should not be hidden by scroll animations.
2. Optionally reduce spacing — the `mt-12` gap between subtitle and book display could be tightened to `mt-8`.

## File
- `src/components/BookSection.tsx` — remove `scroll-reveal` class from the book display div (line 57), keep it on other elements.

