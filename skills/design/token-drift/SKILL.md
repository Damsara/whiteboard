---
name: token-drift
description: Scan a codebase for design-system violations — raw hex, off-scale spacing, one-off radii and shadows — against the repo's locked token system. Use when the user asks to audit design tokens, says "token drift", "design-system violations", "inconsistent spacing", "hardcoded colors", or after generated UI lands without a token review.
---

# Token Drift

Read `../ui-craft/references/ui-canon.md` and `../ux-flow/references/principle-map.md` in full before scanning (requires `ui-craft` installed). If `docs/design/whiteboard-setup.md` exists, read it too.

## Establish the truth

The system to scan against, in cascade order — first hit wins:

1. **Brief** — the token decision table in the newest `*-brief.md` under the docs home (default `docs/design/`).
2. **Codebase config** — the repo's own token source: Tailwind config or theme, CSS custom properties or a shadcn theme, Flutter `ThemeData` or theme extensions, or named design-token files (the setup file's Token source, when set, names it).
3. **None** — stop and run a `ui-craft` session to lock a system first; scanning without a truth produces noise, not findings.

Restate the truth as a token table (color roles light+dark, spacing scale, type scale, radius and elevation scales) and get confirmation before scanning.

## Sweep

Scan every UI source file in scope. Each of these is a finding:

1. **Raw color values** — hex/rgb/hsl literals in components instead of a token role; grey text on colored backgrounds. (Token architecture, not raw values; no grey text on color.)
2. **Off-scale spacing** — margins, paddings, and gaps not on the locked scale, including Tailwind arbitrary values (`p-[13px]`) and magic-number `EdgeInsets`/`SizedBox`. (Constrained spacing scale.)
3. **Rogue type** — font sizes or weights outside the type scale's roles; hierarchy hand-rolled per screen. (Disciplined type scale.)
4. **One-off radii and shadows** — radius or shadow values not from the scales; nested corners that don't share a center. (Elevation is a fixed scale; concentric radii.)
5. **Unpaired dark mode** — values defined for light only, or dark derived by inversion instead of a designed pair. (Dark mode designed in pairs.)
6. **State drift** — hover/focus/press styles hand-rolled per component instead of the system's state layer. (State layers, not hand-rolled states.)
7. **Principle fit** — when a token finding changes grouping, salience, target reachability, or interpretation, cite the matching law from `principle-map.md` (for example Proximity, Similarity, Common Region, Uniform Connectedness, Prägnanz, Selective Attention, Von Restorff, or Aesthetic-Usability); do not turn every token mismatch into a UX-law violation.

## Exit

Write the report to `<docs home>/token-drift-report.md`: the confirmed truth table, then a findings table — `file:line | current value | nearest token | rule | principle when applicable` — grouped by sweep. Every scanned directory is listed; anything skipped appears under "Not scanned", never silently dropped. Offer to apply the substitutions, largest cluster first; change nothing without approval.
