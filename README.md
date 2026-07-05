# whiteboard

```bash
npx skills@latest add Damsara/whiteboard
```

**AI can generate any UI in seconds — which is exactly why it generates the wrong one.**

The failure mode of AI-built products isn't bad CSS. It's building the wrong screen: flows nobody agreed on, steps that serve the system instead of the user, and interfaces that look like every other generated interface. whiteboard fixes this the way a good design lead does — by pulling you to the whiteboard *before* anything gets built and asking the hard questions, one at a time.

Every question cites its principle. Every session ends in a design brief you can build from.

> ui-ux-pro-max gives you 161 palettes; **whiteboard makes sure you're building the right screen first.**

## What a session looks like

> **You:** /whiteboard-me — add checkout to the app
>
> **Agent:** Steps 2 and 3 both ask for the address. I'd merge them — WCAG 3.3.7 Redundant Entry: never make users re-enter information already provided in the same flow. Agreed?
>
> **You:** agreed
>
> **Agent:** Guest checkout: I'd let users pay before creating an account — Cooper calls forced registration "excise", a tax that serves the system, not the user's goal. Account creation moves to the success screen, where motivation is highest — Peak-End Rule. Agreed?

Twenty minutes of this, and the brief that comes out the other end has your flow map, every screen's empty/loading/error/success states, a locked token system in light+dark pairs, and a WCAG 2.2 checklist — with the reasoning cited on every line.

## User-invoked skills

- **/whiteboard-me** — the full kickoff: UX-flow interrogation, then visual direction, then the design brief.
- **/whiteboard-flow** — flow only: screens, steps, states, errors.
- **/whiteboard-ui** — visual direction only: hierarchy, spacing, type, color tokens.
- **/update-canon** — maintainer tool: refresh the distilled canon from its vetted sources.

## Model-invoked skills

- **ux-flow** — the flow-interrogation discipline. Triggers when you start designing a feature or are about to generate UI without an agreed flow.
- **ui-craft** — the visual-direction discipline. Triggers when you're styling UI without an agreed system.

## Where the questions come from

The interrogation ladders and every citation are distilled (in our own words, with attribution) from the canon:

Norman — *The Design of Everyday Things* · Nielsen — *10 Usability Heuristics* (2024 revision) · Krug — *Don't Make Me Think* · Cooper — *About Face* · Yablonski — *Laws of UX* (all 30) · Wathan & Schoger — *Refactoring UI* · Rams — *10 Principles* · Apple HIG · Material 3 (incl. Expressive) · WCAG 2.2 AA

…plus a modern layer that most design resources don't have yet: AI-product UX patterns (streaming states, probabilistic output, agentic transparency), the EU Accessibility Act baseline, INP, and the 2025 expressive turn from both platform vendors.

**canon-version: 2026-07**

## Staying current

Design principles evolve; skill files don't — unless you refresh them. The distilled canon carries a `canon-version` stamp, and `/update-canon` re-checks a vetted source list (NN/g, W3C, Apple, Google, web.dev, Shape of AI, Growth.Design), proposes a diff, and re-stamps the files. We run it periodically and commit; you get updates with:

```bash
npx skills update
```

Installed skills are static copies — that command is how the refreshed canon reaches you.

## License

MIT
