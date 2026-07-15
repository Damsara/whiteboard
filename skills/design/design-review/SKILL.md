---
name: design-review
description: Audit an existing screen, flow, or component against the whiteboard canon — a principles-cited heuristic evaluation with severity-ranked findings. Use when the user asks to review, audit, or critique existing UI or UX, says "design review", "why does this feel off", "accessibility audit", or when UI was generated without a whiteboard session.
---

# Design Review

The retrospective counterpart to `ux-flow` and `ui-craft`: those interrogate before anything is built; this audits what already exists. Requires both installed — read `../ux-flow/references/flow-canon.md`, `../ux-flow/references/principle-map.md`, `../ux-flow/references/modern-ux.md`, `../ux-flow/references/gates.md`, and `../ui-craft/references/ui-canon.md` in full before auditing. If `docs/design/whiteboard-setup.md` exists, read it too.

## Scope first

Establish from the codebase, or by asking one question at a time:

1. **Surface** — which screens or flows are under review, what outcome the user hires them for, and what mental model or bias could distort the evidence. (Cooper: goals not tasks; Mental Model; Cognitive Bias.)
2. **Evidence** — audit the real thing: rendered UI or screenshots first, source code second. Never audit from code alone when the UI can be seen.
3. **Depth** — quick pass (hard gates + top findings) or full audit (every sweep below).

## Sweep order

Walk in order; earlier sweeps often explain later findings.

1. **Flow** — challenge each step's right to exist; hunt excise, choice overload, and task inflation; check both gulfs per screen: can users tell what to do and what happened? (Cooper: excise; Hick's Law; Choice Overload; Parkinson's Law; Norman: two gulfs; Tesler's Law; WCAG 3.3.7 Redundant Entry.)
2. **States** — every screen: empty, loading, error, success all designed? Check feedback speed, honest progress, interruption/resume, and the emotional ending. (Doherty Threshold; Goal-Gradient Effect; Zeigarnik Effect; Peak-End Rule; Refactoring UI: empty states are a feature.)
3. **Errors** — plain language, precise problem, constructive fix; tolerate recoverable input; reversible over confirmed; never blaming. (Postel's Law; Cognitive Bias; Working Memory; Nielsen #5/#9; Norman: slips vs mistakes.)
4. **Hierarchy & emphasis** — exactly one primary action per screen; hierarchy via weight, color, proximity, and connectedness; diagnose "looks off" in order: spacing → alignment → contrast → color. (Von Restorff; Fitts's Law; Selective Attention; Serial Position Effect; Law of Proximity; Law of Common Region; Law of Uniform Connectedness.)
5. **Token discipline** — raw hex in components, off-scale spacing, one-off radii or shadows, inconsistent same-role states, and ambiguous visual forms: each is a finding. Dark mode designed in pairs, never inverted. (Law of Similarity; Law of Prägnanz; Aesthetic-Usability Effect; M3 tokens; shadcn norm.)
6. **Hard gates** — walk every row in `../ux-flow/references/gates.md`; every row gets an explicit pass/fail verdict. Gates are non-negotiable: flag violations and propose the nearest compliant alternative.
7. **AI-product sweep** (only if the surface involves AI) — modality fit, streaming states, regenerate/undo/citations for probabilistic output, escape hatches from open input, agentic transparency. (modern-ux.md.)
8. **Principle coverage** — use `../ux-flow/references/principle-map.md` to list every triggered law with evidence, verdict, and fix. List laws that are out of scope under “Not applicable”; never silently omit a relevant law.

## Findings

Every finding carries: severity, screen, a one-line defect, the principle violated (inline citation), and a concrete fix — never "improve X".

- **Blocker** — a hard-gate failure, or a broken gulf: the user cannot proceed or cannot tell what happened.
- **Major** — a canon violation that costs task success or trust: a missing state, a destructive action without recovery, excise on the critical path.
- **Minor** — a canon violation with a workaround: off-scale spacing, weak hierarchy, inconsistent wording.
- **Polish** — an inconsistency a careful user would notice: mismatched radii, uneven padding.

## Exit

Write the report to `docs/design/<surface>-review.md`: a summary paragraph, findings grouped by severity, the principle-coverage table, and the hard-gates table with verdicts. The review is complete only when every triggered law has a verdict, every hard-gate row has a verdict, and every screen in scope has all four states accounted for — anything skipped is listed under "Not reviewed", never silently dropped.
