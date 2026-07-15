> canon-version: 2026-07
> Shared accessibility and performance gates used by every whiteboard discipline.

# Shared Gates

These thresholds are the single source of truth for accessibility, responsiveness, and motion. Skills cite the relevant row rather than repeating the number.

## Accessibility gates

| Gate | Threshold | Source |
|---|---|---|
| Text contrast | ≥ 4.5:1 (≥ 3:1 for large text: ≥24px or 19px bold) | WCAG 1.4.3 |
| Non-text contrast | ≥ 3:1 for icons, borders, and focus indicators | WCAG 1.4.11 |
| Target size | ≥ 24×24 CSS px; 44pt (HIG) / 48dp (M3) on touch | WCAG 2.5.8 / HIG / M3 |
| Focus | Visible and not obscured by sticky UI | WCAG 2.4.7 / 2.4.11 |
| Color | Never the only carrier of meaning | WCAG 1.4.1 |
| Reflow | Survives 200% text zoom and 320px width | WCAG 1.4.4 / 1.4.10 |
| Keyboard | Everything operable; errors named in text with a fix | WCAG 2.1.1 / 3.3.1 / 3.3.3 |
| Redundant entry | Never re-ask information the flow already knows | WCAG 3.3.7 |

## Performance and motion gates

| Gate | Threshold | Source |
|---|---|---|
| Interaction responsiveness | INP < 200ms at p75 | web.dev INP |
| System response | Under 400ms, or covered by skeleton, optimistic UI, or progress | Doherty Threshold |
| AI first token | Under ~800ms when streaming is the chosen modality | Modern AI UX |
| Motion | 150–300ms, meaningful, and honors `prefers-reduced-motion` | M3 / HIG / WCAG 2.3.3 |
| Loading coverage | No bare spinner past 1s; use an honest progress or loading state | Perceived performance |
