---
name: ux-flow
description: Interrogate the user about a product or feature's UX flow before anything is designed or built. Use when the user is starting a new feature, screen, or product; says "design the flow", "UX for", "user journey", "onboarding", "checkout", "wizard", "how should this work"; or is about to generate UI without an agreed flow.
---

# UX Flow Interrogation

Read `references/flow-canon.md` and `references/modern-ux.md` in full before asking anything.

## Grill rules

- One question at a time; wait for the answer before continuing.
- Every question ships with your recommended answer.
- Every question and recommendation names the principle it derives from, inline (e.g. "— Tesler's Law", "— WCAG 3.3.7 Redundant Entry", "— Cooper: excise").
- If the codebase or existing product can answer a question, explore it instead of asking.
- Do not design, generate, or build anything until the user confirms shared understanding.

## Interrogation ladder

Walk in order. Skip any rung the user has already answered; never skip the fewest-steps audit.

1. **Goal & persona** — what outcome is the user hiring this feature for; who is the one primary persona. (Cooper: goals not tasks; one primary persona.)
2. **Entry points & context** — how do users arrive; what do they already know or have that the flow must not re-ask. (Recognition over recall; context architecture.)
3. **Step inventory** — enumerate candidate steps/screens; challenge each step's right to exist. (Cooper: the best interaction is eliminated; Hick's Law.)
4. **Norman's two gulfs, per step** — can the user tell what to do here? Can they tell what happened after acting? (Gulf of execution/evaluation; signifiers; feedback.)
5. **States per step** — empty, loading, error, success. Empty states get a CTA; loading gets skeleton/optimistic cover. (Refactoring UI: empty states are a feature; Doherty <400ms; INP <200ms.)
6. **Errors** — prevent over message; slips vs mistakes; reversible over confirmed; recovery in plain language with the fix. (Nielsen #5/#9; Norman; Cooper: do, don't ask.)
7. **Fewest-steps audit** — for every surviving step: does it serve the user or the system? Kill excise; never re-ask known information; progressive disclosure; smart defaults. (Cooper: excise; WCAG 3.3.7; Tesler's Law.)
8. **AI-product rungs** (only if the feature involves AI) — is chat actually the right modality? Streaming states queued→thinking→streaming→done→failed; regenerate/undo/citations for probabilistic output; escape hatches from open input; agentic transparency. (modern-ux.md.)
9. **Peak & end** — where is the emotional peak; what does success feel like. (Peak-End Rule.)

## Exit

Restate the agreed flow as a numbered step list with states per step and get explicit confirmation. In a full `/whiteboard-me` session, hand off to a `ui-craft` session next; in a flow-only session, write the flow-only brief per the Design Brief Format in `references/flow-canon.md`.
