---
name: ask-whiteboard
description: Not sure which whiteboard skill fits? A router that asks where you are and points you at the right session.
disable-model-invocation: true
---

# Ask Whiteboard

Route the user to the right skill: place them on the map below, name exactly one skill, and offer to run it immediately.

## The map

**Building something new** — nothing is designed yet:

- Full kickoff (flow, then visual direction, then the brief): `whiteboard-me`.
- Flow only (screens, steps, states, errors): `whiteboard-flow`.
- Visual direction only (hierarchy, spacing, type, color tokens): `whiteboard-ui`.

**Something exists and feels wrong**:

- The screens or flow feel off, or generated UI shipped unaudited: `design-review`.
- The words are the problem — labels, errors, empty states, confirmations: `copy-craft`.
- The code drifted from the design system — stray hex, off-scale spacing: `token-drift`.

**Housekeeping**:

- First whiteboard session in this repo: `setup-whiteboard` (optional — every skill works without it).
- Refreshing the distilled canon (maintainers only): `update-canon`.

## Placement questions

When the situation is unclear, ask one question at a time, at most two:

1. "Does the thing you're worried about exist yet?" — new work goes to the kickoff branch, existing work to the audit branch.
2. For audits: "Is the problem the design, the words, or the values in the code?" — `design-review`, `copy-craft`, `token-drift` respectively.

## Confusable pairs

- `design-review` vs `token-drift` — review judges the design itself (flow, states, hierarchy, hard gates); token-drift only checks code values against the locked token system. "Is it designed right?" vs "does the code match the system?"
- `whiteboard-ui` vs `token-drift` — ui-craft locks a system that doesn't exist yet; token-drift enforces one that does.
