---
name: ux-flow
description: Interrogate the user about a product or feature's UX flow before anything is designed or built. Use when the user is starting a new feature, screen, or product; says "design the flow", "UX for", "user journey", "onboarding", "checkout", "wizard", "how should this work"; or is about to generate UI without an agreed flow.
---

# UX Flow Interrogation

Read `references/flow-canon.md`, `references/principle-map.md`, `references/modern-ux.md`, and `references/gates.md` in full before asking anything. If `docs/design/whiteboard-setup.md` exists, read it too.

## Grill rules

- One question at a time; wait for the answer before continuing.
- Every question ships with your recommended answer.
- Every question and recommendation names the principle it derives from, inline (e.g. "— Tesler's Law", "— WCAG 3.3.7 Redundant Entry", "— Cooper: excise").
- If the codebase or existing product can answer a question, explore it instead of asking.
- Do not design, generate, or build anything until the user confirms shared understanding.

## Interrogation ladder

Walk in order. Skip any rung the user has already answered; never skip the fewest-steps audit.

1. **Goal & persona** — what outcome is the user hiring this feature for; who is the one primary persona. (Cooper: goals not tasks; use Mental Model when the user's understanding may differ; name Cognitive Bias and run the ethics check when framing or motivation may distort the choice; use Pareto Principle when scope is constrained.)
2. **Entry points & context** — how do users arrive; what do they already know or have that the flow must not re-ask. (Recognition over recall; apply Jakob's Law to convention changes, Working Memory to carried context, and Paradox of the Active User to onboarding.)
3. **Step inventory** — enumerate candidate steps/screens; challenge each step's right to exist. (Cooper: the best interaction is eliminated; apply Hick's Law, Choice Overload, Cognitive Load, Miller's Law, Occam's Razor, or Parkinson's Law when choices, memory, complexity, or duration are present.)
4. **Norman's two gulfs, per step** — can the user tell what to do here? Can they tell what happened after acting? (Gulf of execution/evaluation; apply Fitts's Law to controls, Mental Model to predictability, Uniform Connectedness to relationships, and Flow to challenge/feedback balance.)
5. **States per step** — empty, loading, error, success. Empty states get a CTA; loading gets skeleton/optimistic cover; incomplete work gets a resume path. (Doherty Threshold; Goal-Gradient Effect; Zeigarnik Effect; Peak-End Rule.)
6. **Errors** — prevent over message; slips vs mistakes; accept recoverable input; reversible over confirmed; recovery in plain language with the fix. (Postel's Law; Cognitive Bias; Working Memory; Nielsen #5/#9; Norman; Cooper: do, don't ask.)
7. **Fewest-steps audit** — for every surviving step: does it serve the user or the system? Kill excise; never re-ask known information; progressive disclosure; smart defaults; prioritize the high-value path. (Cooper: excise; Tesler's Law; Occam's Razor; Pareto Principle; WCAG 3.3.7.)
8. **AI-product rungs** (only if the feature involves AI) — is chat actually the right modality? Streaming states queued→thinking→streaming→done→failed; regenerate/undo/citations for probabilistic output; escape hatches from open input; agentic transparency. (modern-ux.md.)
9. **Peak & end** — where is the emotional peak; what does success feel like; which first/last actions must be memorable. (Peak-End Rule; Serial Position Effect.)
10. **Principle fit sweep** — consult `references/principle-map.md`; record every triggered law in the brief's Decisions & citations section and mark laws with no trigger as not applicable. Never add a citation without a concrete flow decision.

## Exit

Restate the agreed flow as a numbered step list with states per step and get explicit confirmation. In a full `/whiteboard-me` session, hand off to a `ui-craft` session next; in a flow-only session, write the flow-only brief per the Design Brief Format in `references/flow-canon.md`.
