> canon-version: 2026-07
> Distilled visual-craft canon. Read in full before running a ui-craft interrogation.

# UI Canon

## Refactoring UI — tactical rules (Wathan & Schoger, paraphrased)
- **Feature-first, low-fidelity start** — design the real functionality before the shell; sketch loose and rough so iteration stays cheap.
- **Hierarchy over uniformity** — content isn't equally important; mute secondary and tertiary elements instead of only boosting the lead one.
- **Hierarchy via weight and color, not size** — 2–3 text levels (dark/medium/light grey at 400–700 weight) beat a ladder of font sizes.
- **One primary action per screen** — every secondary action gets a quieter style; a destructive action isn't automatically the loud one.
- **Constrained spacing scale** — pick from a fixed scale (4/8/12/16/24/32/48/64); start too generous, remove; never arbitrary values.
- **Disciplined type scale** — hold body copy to 45–75 characters per line and let line-height grow as font size shrinks.
- **Full shade systems, not opacity fades** — build 8–10 steps per hue and shift hue/saturation with lightness so shades stay vivid.
- **No grey text on color** — pair a colored background with a hand-tinted lighter shade of that hue, never a flat grey.
- **Elevation is a fixed scale** — a small set of shadow depths, applied consistently, so "raised" and "floating" carry real meaning.
- **Never color alone** — every color-coded meaning also gets an icon, label, or weight change.
- **Emphasize by de-emphasizing** — mute the neighbors of the thing you want noticed instead of amplifying it further.
- **Labels are a last resort** — let data self-describe ("12 left in stock") before reaching for a caption.
- **Depth without gradients** — overlap, offset borders, and background shifts read as depth without decoration.
- **Empty states are a feature** — design the zero-content state with a call to action, not a blank table.
- **Diagnose "looks off" in order** — check spacing consistency, then alignment, then contrast, before touching color.

## Gestalt laws (Yablonski 11–15)
- **Proximity** — spacing alone should do the grouping work before borders.
- **Common Region** — a shared background/boundary binds related content (cards).
- **Similarity** — style same-kind things identically; never style unrelated things alike.
- **Uniform Connectedness** — visual connection (lines, containers) reads as relation.
- **Prägnanz** — the eye wants the simplest form; ambiguity costs cognition.

## Rams — 10 principles of good design
- **Innovative** — but only where it follows genuine technical opportunity, never novelty for its own sake.
- **Useful** — usefulness comes first; anything not serving the function gets cut.
- **Aesthetic** — aesthetic quality is part of usefulness, not decoration layered on top.
- **Understandable** — a design should explain its own structure; ideally self-explanatory.
- **Unobtrusive** — neutral and restrained; products are tools, leaving room for the user's own content.
- **Honest** — never make a product look more capable or valuable than it is (the anti-dark-pattern principle).
- **Long-lasting** — skip trend-chasing; design that dates fast was never actually good.
- **Thorough to the last detail** — nothing arbitrary; care in details is respect for the user.
- **Environmentally friendly** — minimize waste; for software that means attention, battery, and bandwidth.
- **As little design as possible** — less, but better: concentrate on the essentials and remove the rest.

## Platform canon — HIG + Material 3
- **Clarity, deference, depth** — legible content at every size, chrome that never competes with content, layered depth conveying structure (HIG).
- **Content over chrome, direct manipulation** — the UI serves content; manipulating on-screen objects directly beats abstract controls.
- **System components before invention** — reach for the platform's own components and patterns first; familiar is learnable.
- **Token architecture, not raw values** — color roles carry guaranteed on-X contrast pairs, type roles run display→label, shape/spacing come from named tokens — never hex in components.
- **Window-size classes, not devices** — layout adapts by compact/medium/expanded class; content reflows, it doesn't fork per device.
- **State layers, not hand-rolled states** — hover/focus/press/drag are a systematized layer on every component, never bespoke per instance.
- **Motion carries meaning** — physics-based, interruptible easing explains state changes and spatial relationships; function, not flourish.
- **Expressive contrast is a usability tool** — M3 Expressive found bold contrast on key actions locates them up to 4× faster; reserve it for hero moments over a quiet consistent base.

## Current texture notes (2025–2026)
- **Liquid Glass legibility contract** — separate content and control layers; contrast, dimming, and foreground emphasis guarantee legibility despite blur.
- **Concentric radii signal quality** — nested corners should share a center; mismatched radii are the detail-quality tell of a rushed design.
- **shadcn token-role norm** — background/foreground/primary/muted/accent/destructive, each defined for light and dark, plus radius and shadow scales.
- **Dark mode designed in pairs** — every palette decision made for light and dark together from the start; never a simple inversion filter.

## Hard Gates (WCAG 2.2 AA + platform floors)

Use the shared accessibility, performance, and motion table in `../../ux-flow/references/gates.md`. It is the single source of truth; this canon supplies the visual interpretation of those gates.
