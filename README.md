# whiteboard

Design-first UX/UI skills for coding agents. Whiteboard helps you agree on goals, flows, states, copy, and visual direction before AI generates UI.

## Install

```bash
npx whiteboard-skills
```

Select all skills when prompted. Slash commands are user-invoked; the five discipline skills can also fire automatically when relevant work is detected. Use `/whiteboard-me` for a complete design kickoff.

## Which skill do I use?

### Starting something new

| Skill | Use it for |
|---|---|
| [`/whiteboard-me`](./skills/design/whiteboard-me/SKILL.md) | Full kickoff: flow, UI direction, and a principles-cited brief. |
| [`/whiteboard-flow`](./skills/design/whiteboard-flow/SKILL.md) | Screens, steps, states, errors, and recovery only. |
| [`/whiteboard-ui`](./skills/design/whiteboard-ui/SKILL.md) | Hierarchy, spacing, type, color, tokens, and motion only. |
| [`ux-flow`](./skills/design/ux-flow/SKILL.md) | Automatic flow engine for goals, steps, states, and journeys. |
| [`ui-craft`](./skills/design/ui-craft/SKILL.md) | Automatic visual engine for UI direction and systems. |

### Something exists and feels wrong

| Skill | Use it for |
|---|---|
| [`design-review`](./skills/design/design-review/SKILL.md) | Auditing flow, states, hierarchy, accessibility, and AI UX. |
| [`copy-craft`](./skills/design/copy-craft/SKILL.md) | Rewriting labels, errors, empty/loading/success states, and confirmations. |
| [`token-drift`](./skills/design/token-drift/SKILL.md) | Finding raw colors, off-scale spacing, rogue type, and state drift. |

### Utilities

| Skill | Use it for |
|---|---|
| [`/ask-whiteboard`](./skills/design/ask-whiteboard/SKILL.md) | Routing to one appropriate skill. |
| [`/setup-whiteboard`](./skills/design/setup-whiteboard/SKILL.md) | Optional first setup: docs home, platforms, WCAG target, and token source. |
| [`/update-canon`](./skills/design/update-canon/SKILL.md) | Refreshing maintained UX/UI references from vetted sources. |

## Best default: `/whiteboard-me`

Describe what you want to build. The session then:

1. Interrogates the goal, persona, flow, states, errors, and recovery.
2. Locks visual direction, tokens, accessibility, and motion.
3. Writes a brief with decisions, citations, open questions, and a screen/state inventory.

Answer one question at a time. Relevant recommendations explain their principle. Nothing is generated until the relevant decisions are confirmed.

## Laws of UX coverage

All 30 Laws of UX are routed through the [principle application matrix](./skills/design/ux-flow/references/principle-map.md). Skills cite a principle only when its behavior is in scope, then record the resulting decision or evidence. They do not force irrelevant citations into every session.

## What a full `/whiteboard-me` session gives you

- A flow map and screen/state inventory.
- A locked UI system in light and dark modes.
- Principles-cited decisions and open questions.
- WCAG 2.2 AA, performance, and motion checks.
- A reusable brief at `docs/design/<feature>-brief.md` by default, or in the configured Docs home.

## Update installed skills

```bash
npx skills update
```

## Develop this repository

```bash
pnpm install --frozen-lockfile
pnpm validate
pnpm test
pnpm package:check
```

## License

MIT
