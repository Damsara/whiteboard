# whiteboard

[![skills.sh](https://skills.sh/b/Damsara/whiteboard)](https://skills.sh/Damsara/whiteboard)

**AI can generate any UI in seconds — which is exactly why it generates the wrong one.**

The failure mode of AI-built products isn't bad CSS. It's building the wrong screen: flows nobody agreed on, steps that serve the system instead of the user, and interfaces that look like every other generated interface. whiteboard fixes this the way a good design lead does — by pulling you to the whiteboard *before* anything gets built and asking the hard questions, one at a time.

Every question cites its principle. Every session ends in a design brief you can build from.

> ui-ux-pro-max gives you 161 palettes; **whiteboard makes sure you're building the right screen first.**

## Install (30 seconds)

1. Run the installer and pick your coding agent — works with Claude Code, Cursor, Codex, and 70+ others:

   ```bash
   npx whiteboard-skills
   ```

   (Equivalent to `npx skills@latest add Damsara/whiteboard` — use that form if you prefer installing straight from the source repo.)

2. When it asks which skills you want, **take all of them**. They're small, and `design-review` and `token-drift` read `ux-flow`'s and `ui-craft`'s files, so they need those installed alongside.

3. In your agent, type `/whiteboard-me` and describe what you're building. That's it.

Unsure which skill fits a situation later? Type `/ask-whiteboard` and it points you at the right one.

## What a session looks like

> **You:** /whiteboard-me — add checkout to the app
>
> **Agent:** Steps 2 and 3 both ask for the address. I'd merge them — WCAG 3.3.7 Redundant Entry: never make users re-enter information already provided in the same flow. Agreed?
>
> **You:** agreed
>
> **Agent:** Guest checkout: I'd let users pay before creating an account — Cooper calls forced registration "excise", a tax that serves the system, not the user's goal. Account creation moves to the success screen, where motivation is highest — Peak-End Rule. Agreed?

Twenty minutes of this, and the brief that comes out the other end has your flow map, every screen's empty/loading/error/success states, a locked token system in light+dark pairs, and a WCAG 2.2 checklist — with the reasoning cited on every line.

## Which skill do I use?

Skills starting with `/` are ones you type. The rest fire automatically when your agent recognizes the situation — though you can type those too.

**Starting something new** — design it before any code gets generated:

| Skill | Use it for |
|---|---|
| [/whiteboard-me](./skills/design/whiteboard-me/SKILL.md) | The full kickoff: flow questions, then visual direction, ending in a design brief you can build from. |
| [/whiteboard-flow](./skills/design/whiteboard-flow/SKILL.md) | Flow only: screens, steps, and every state — empty, loading, error, success. |
| [/whiteboard-ui](./skills/design/whiteboard-ui/SKILL.md) | Visual direction only: hierarchy, spacing, type, and color tokens in light+dark pairs. |
| [ux-flow](./skills/design/ux-flow/SKILL.md) | The flow-interrogation engine behind the above — fires on its own when you start designing a feature without an agreed flow. |
| [ui-craft](./skills/design/ui-craft/SKILL.md) | The visual-direction engine — fires when UI is about to be styled without an agreed system. |

**Something exists and feels wrong** — audit it:

| Skill | Use it for |
|---|---|
| [design-review](./skills/design/design-review/SKILL.md) | "Why does this feel off?" — a cited audit of existing screens: flow, states, hierarchy, and a WCAG 2.2 pass, with findings ranked blocker → polish. |
| [copy-craft](./skills/design/copy-craft/SKILL.md) | The words: button labels, error messages, empty states, confirmations — every rewrite shown with its reasoning. |
| [token-drift](./skills/design/token-drift/SKILL.md) | The code drifted from the design system: hardcoded colors, off-scale spacing, one-off shadows — each found and mapped to its nearest token. |

**Utilities:**

| Skill | Use it for |
|---|---|
| [/ask-whiteboard](./skills/design/ask-whiteboard/SKILL.md) | Not sure which of the above fits? This routes you. |
| [/setup-whiteboard](./skills/design/setup-whiteboard/SKILL.md) | Optional, once per repo: where briefs live, platforms, WCAG target, token source. Everything works without it. |
| [/update-canon](./skills/design/update-canon/SKILL.md) | Maintainer tool: refresh the distilled design canon from its vetted sources. |

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
