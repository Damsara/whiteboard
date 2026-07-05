# whiteboard

[![skills.sh](https://skills.sh/b/Damsara/whiteboard)](https://skills.sh/Damsara/whiteboard)

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

- **[/whiteboard-me](./skills/design/whiteboard-me/SKILL.md)** — the full kickoff: UX-flow interrogation, then visual direction, then the design brief.
- **[/whiteboard-flow](./skills/design/whiteboard-flow/SKILL.md)** — flow only: screens, steps, states, errors.
- **[/whiteboard-ui](./skills/design/whiteboard-ui/SKILL.md)** — visual direction only: hierarchy, spacing, type, color tokens.
- **[/update-canon](./skills/design/update-canon/SKILL.md)** — maintainer tool: refresh the distilled canon from its vetted sources.
- **[/setup-whiteboard](./skills/design/setup-whiteboard/SKILL.md)** — optional one-time repo config: docs home, platforms, WCAG target, token source.

## Model-invoked skills

- **[ux-flow](./skills/design/ux-flow/SKILL.md)** — the flow-interrogation discipline. Triggers when you start designing a feature or are about to generate UI without an agreed flow.
- **[ui-craft](./skills/design/ui-craft/SKILL.md)** — the visual-direction discipline. Triggers when you're styling UI without an agreed system.
- **[design-review](./skills/design/design-review/SKILL.md)** — the retrospective counterpart: a principles-cited audit of existing UI, from excise hunt to the WCAG hard-gates table, with severity-ranked findings. Requires `ux-flow` and `ui-craft` installed — it reads their canon.
- **[copy-craft](./skills/design/copy-craft/SKILL.md)** — microcopy interrogation: labels, errors, empty states, and confirmations rewritten against a cited UX-writing canon.
- **[token-drift](./skills/design/token-drift/SKILL.md)** — design-system violation scanner: raw hex, off-scale spacing, rogue radii and shadows, reported against the repo's locked token truth. Requires `ui-craft` installed.

## Where the questions come from

The interrogation ladders and every citation are distilled (in our own words, with attribution) from the canon:

Norman — *The Design of Everyday Things* · Nielsen — *10 Usability Heuristics* (2024 revision) · Krug — *Don't Make Me Think* · Cooper — *About Face* · Yablonski — *Laws of UX* (all 30) · Wathan & Schoger — *Refactoring UI* · Rams — *10 Principles* · Apple HIG · Material 3 (incl. Expressive) · WCAG 2.2 AA

…plus a modern layer that most design resources don't have yet: AI-product UX patterns (streaming states, probabilistic output, agentic transparency), the EU Accessibility Act baseline, INP, and the 2025 expressive turn from both platform vendors.

**canon-version: 2026-07**

## Staying current

Design principles evolve; skill files don't — unless you refresh them. The distilled canon carries a `canon-version` stamp, and `/update-canon` re-checks a vetted source list (NN/g, W3C, Apple, Google, web.dev, Shape of AI, Growth.Design), proposes a diff, and re-stamps the files. We run it periodically and commit; every release is documented in [`CHANGELOG.md`](./CHANGELOG.md) and published as a GitHub release. You get updates with:

```bash
npx skills update
```

Installed skills are static copies — that command is how the refreshed canon reaches you.

## License

MIT
