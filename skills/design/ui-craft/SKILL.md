---
name: ui-craft
description: Interrogate the user about visual direction, then lock a clean UI system (hierarchy, spacing, type, color tokens) before any UI is generated. Use when the user is styling or building UI, choosing colors/fonts/layout, says "make it look good", "clean UI", "design system", "theme", or is about to generate frontend code without an agreed visual direction.
---

# UI Craft Interrogation

Read `references/ui-canon.md`, `../ux-flow/references/principle-map.md`, and `../ux-flow/references/gates.md` in full before asking anything. If `docs/design/whiteboard-setup.md` exists, read it too.

## Grill rules

Same as a `ux-flow` session: one question at a time, each with a recommended answer, each citing its principle inline; explore the codebase instead of asking when possible; lock nothing without user confirmation; generate no UI until the system below is locked.

## Interrogation ladder

1. **Commitment questions** (anti-slop) — purpose of the surface, audience, tone in three adjectives, existing brand constraints, and the one distinctive move this UI will own. (Aesthetic-Usability Effect; NN/g: sameness is the failure mode; Rams: honest, unobtrusive. Apply Jakob's Law or Mental Model when novelty changes familiar behavior, and name Cognitive Bias plus the ethics check when the visual direction persuades.)
2. **Density & platform** — data-dense tool or content-first consumer surface; which window-size classes it must serve and which information deserves attention. (Cognitive Load; Working Memory; Selective Attention; HIG: deference; M3: size classes, not devices.)
3. **Lock the system** — one decision per question, recommended defaults offered:
   - Text hierarchy: 2–3 levels via weight + color, not size alone. (Law of Similarity; Law of Prägnanz; Refactoring UI.)
   - Spacing scale: constrained (e.g. 4/8/12/16/24/32/48/64); start too generous. (Law of Proximity; apply Chunking when content needs meaningful groups; Refactoring UI.)
   - Type scale with roles (display/headline/body/label sizes from a fixed scale; 45–75ch line length). (Refactoring UI; M3 type roles.)
   - Color as token roles in light+dark pairs — background/foreground, surface/on-surface, primary, muted, destructive; restrained palette; shades shift hue/saturation with lightness; never raw hex in components. (M3 tokens; shadcn norm; Refactoring UI shade systems.)
   - Radius + elevation scales; shadow means elevation, elevation means something. (Law of Common Region; Law of Uniform Connectedness; Refactoring UI; M3 state layers.)
   - Motion follows the shared motion gate, feels physical, and remains interruptible. (See `../ux-flow/references/gates.md`.)
4. **Emphasis audit** — exactly one primary action per screen; place it near the working context, at a memorable edge where appropriate, and make only it visually distinct. (Von Restorff; Fitts's Law; Serial Position Effect; Selective Attention; Law of Proximity; Law of Common Region.)
5. **Principle fit sweep** — consult `../ux-flow/references/principle-map.md`; record triggered visual laws in the UI brief and leave non-visual laws to the owning discipline. Check Similarity, Connectedness, Prägnanz, Aesthetic-Usability, or Cognitive Load only when the composition or token system is doing that work; mark the rest not applicable.
6. **Hard gates** — state, don't ask: the shared table in `../ux-flow/references/gates.md` is non-negotiable; flag any locked decision that violates it and propose the nearest compliant alternative.

## Exit

Restate the locked system as a token decision table (role → light value → dark value; scales as lists) plus the one distinctive move. Then render it so the user judges the system by eye, not by hex code: write a fully self-contained HTML style guide (inline CSS/JS only — no external requests) as `<feature>-style-guide.html` beside the brief — color roles as swatches, the type scale at real sizes, spacing as bars, radius and elevation on a sample card, with a light/dark toggle showing both halves of every pair. Where the environment can publish the page as a shareable artifact, publish it and share the link; otherwise the local file opens in any browser.

Get explicit confirmation on the rendered system. Include a principle-coverage note naming triggered visual laws and marking the rest not applicable. Then: in a full `/whiteboard-me` session, proceed to the brief; in a UI-only session, write the UI-only brief per the Design Brief Format in `ux-flow/references/flow-canon.md`.
