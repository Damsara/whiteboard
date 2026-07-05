# whiteboard — Design Spec

**Date:** 2026-07-05
**Status:** Approved design, pre-implementation
**Research inputs:** `docs/superpowers/research/canonical-sources-digest.md`, `docs/superpowers/research/modern-principles-distribution-digest.md`

## 1. What this is

A public, stack-agnostic set of agent skills that runs an **interrogation-first design kickoff**: before any UI is built, the agent grills the user about the UX flow and the visual direction — one question at a time, every question and recommendation citing a named principle from the UI/UX canon — and ends by writing a design brief that any human or agent can build from.

**Positioning line (used verbatim in README):** *ui-ux-pro-max gives you 161 palettes; whiteboard makes sure you're building the right screen first.*

**The gap it fills** (verified against the landscape, July 2026): existing design skills are either style *databases* (ui-ux-pro-max) or self-answering aesthetic prompts (Anthropic frontend-design). Nobody combines (a) grill-style user interrogation at design kickoff, (b) principles-cited flow design, and (c) current-canon awareness (WCAG 2.2/EAA, M3 Expressive, Liquid Glass, AI-product UX patterns).

## 2. Goals / Non-goals

**Goals**
- Force alignment on UX flow and UI direction *before* generation, via relentless one-question-at-a-time interrogation.
- Ground every question and recommendation in a **named, cited principle** (heuristic, law, WCAG criterion, book rule). This is the differentiator — no existing skill does it.
- Produce a durable, buildable **design brief** artifact.
- Stay current: distilled canon is versioned; a maintainer-run skill refreshes it from vetted sources.
- Dead-simple user surface: install one repo, remember one command, zero setup.
- Stack-agnostic: outputs token *decisions* (roles, scales), never CSS/framework code.

**Non-goals (v1)**
- No code generation of any kind.
- No style/palette/font database (complementary to ui-ux-pro-max, not competing).
- No data-viz rules (Tufte digest kept in research for a future skill).
- No separate a11y-gate or ai-product-ux skills — that content lives *inside* the two disciplines.
- No GitHub Action automation for canon updates (manual `/update-canon` runs; automation is a possible v2).

## 3. Repo layout & distribution

```
whiteboard/
├── README.md
├── LICENSE                      (MIT)
├── docs/
│   └── superpowers/             (specs + research; not installed by the skills CLI)
└── skills/
    └── design/
        ├── ux-flow/
        │   ├── SKILL.md
        │   └── references/
        │       ├── flow-canon.md
        │       └── modern-ux.md
        ├── ui-craft/
        │   ├── SKILL.md
        │   └── references/
        │       └── ui-canon.md
        ├── whiteboard-me/
        │   └── SKILL.md
        ├── whiteboard-flow/
        │   └── SKILL.md
        ├── whiteboard-ui/
        │   └── SKILL.md
        └── update-canon/
            ├── SKILL.md
            └── references/
                └── sources.md
```

- Install: `npx skills@latest add Damsara/whiteboard`. Verified: the installer supports the catalog layout `skills/<category>/<name>/SKILL.md`, installs entire skill directories including `references/`, requires no registry/metadata file, and auto-lists the repo on skills.sh once installs occur.
- License: MIT.
- Versioning: plain git tags + a `CHANGELOG.md` added when the first post-launch change lands (no changesets tooling for a markdown-only repo — YAGNI).

## 4. Skill specs

### 4.1 `ux-flow` (discipline — model-invoked)

The flow-interrogation protocol. Frontmatter:

```yaml
name: ux-flow
description: Interrogate the user about a product or feature's UX flow before anything
  is designed or built. Use when the user is starting a new feature, screen, or product;
  says "design the flow", "UX for", "user journey", "onboarding", "checkout", "wizard",
  "how should this work"; or is about to generate UI without an agreed flow.
```

**Session protocol (the SKILL.md body):**
1. Read `references/flow-canon.md` and `references/modern-ux.md` before asking anything.
2. **Grill rules** (inherited from the grilling mechanic): one question at a time; every question ships with a recommended answer; if the codebase/product can answer a question, explore instead of asking; do not design or build until the user confirms shared understanding; **every question and recommendation names the principle it derives from** (e.g. "— Tesler's Law", "— WCAG 3.3.7 Redundant Entry", "— Cooper: excise").
3. **Interrogation ladder** (walk in order, skip rungs that are already answered):
   1. *Goal & persona* — what outcome is the user hiring this for; who is the primary persona (Cooper: goals not tasks; one primary persona).
   2. *Entry points & context* — how do users arrive; what do they already know/have (recognition over recall; context architecture for AI products).
   3. *Step inventory* — enumerate the candidate steps/screens; challenge each one's existence (Cooper: the best interaction is eliminated; Hick's Law).
   4. *Walk each step through Norman's two gulfs* — can the user tell what to do here (execution)? can they tell what happened after acting (evaluation)? Feedback, signifiers, mapping.
   5. *States per step* — empty, loading, error, success; empty states are a feature with a CTA (Refactoring UI); loading follows Doherty/INP <200ms with skeleton/optimistic cover.
   6. *Errors* — prevent over message (Nielsen #5); slips vs mistakes (Norman); reversible over confirmed (Cooper: do, don't ask); recovery path in plain language with the fix.
   7. *Fewest-steps audit* — for every remaining step: who is this for, the user or the system? Kill excise; never re-ask known information (WCAG 3.3.7); progressive disclosure; smart defaults (Tesler).
   8. *AI-product rungs* (only if the feature involves AI): modality check (is chat actually right?); streaming states queued→thinking→streaming→done→failed; regenerate/undo/citations for probabilistic output; escape hatches from open input; agentic transparency surfaces.
   9. *Peak & end* — where is the emotional peak; what does success feel like (Peak-End Rule).
4. **Exit:** restate the agreed flow as a numbered step list with states, and hand off (to `ui-craft` in a full session, or to the brief writer).

### 4.2 `ui-craft` (discipline — model-invoked)

The visual-direction interrogation + clean-execution rules. Frontmatter:

```yaml
name: ui-craft
description: Interrogate the user about visual direction, then lock a clean UI system
  (hierarchy, spacing, type, color tokens) before any UI is generated. Use when the user
  is styling or building UI, choosing colors/fonts/layout, says "make it look good",
  "clean UI", "design system", "theme", or is about to generate frontend code without
  an agreed visual direction.
```

**Session protocol:**
1. Read `references/ui-canon.md` first.
2. Same grill rules as `ux-flow` (one question at a time, recommended answers, cited principles).
3. **Interrogation ladder:**
   1. *Commitment questions* (anti-slop): purpose, audience, tone in 3 adjectives, existing brand constraints, and **one distinctive move** the UI will own (NN/g: sameness is the failure mode; Rams: honest, unobtrusive).
   2. *Density & platform* — data-dense tool vs. content-first consumer surface; window-size classes to support (M3 layout).
   3. *Lock the system, one decision each:* hierarchy (2–3 text levels via weight+color, not size alone — Refactoring UI); spacing scale (constrained, e.g. 4/8/12/16/24/32/48/64, start too generous); type scale with roles; color as **token roles in light+dark pairs** (background/foreground, surface/on-surface, primary, muted, destructive — never raw hex in components; restrained palette, shades adjust hue/saturation not just lightness); radius + elevation scales (shadow = meaning); motion (150–300ms, physics-feel, `prefers-reduced-motion` respected).
   4. *Emphasis audit* — exactly one primary action per screen (Von Restorff); emphasize by de-emphasizing competitors; grouping by spacing before borders (Proximity/Common Region).
   5. *Hard gates (non-negotiable, stated as gates not questions):* text contrast ≥ 4.5:1 (3:1 large); non-text contrast ≥ 3:1; targets ≥ 24×24px (44pt/48dp on touch); visible unobscured focus; never color alone for meaning; survives 200% text zoom. — WCAG 2.2 AA / HIG / M3.
4. **Exit:** restate the locked system as a token decision table (role → light value → dark value; scales as lists).

### 4.3 `whiteboard-me` (flagship — user-invoked)

```yaml
name: whiteboard-me
description: A relentless design-kickoff interrogation — UX flow first, then visual
  direction — ending in a principles-cited design brief.
disable-model-invocation: true
```

Body (thin wrapper, Matt-style):

> Run a `ux-flow` session, then a `ui-craft` session, then write the design brief described in `ux-flow`'s brief format to `docs/design/<feature>-brief.md`.

**Design brief format** (defined once, in `ux-flow/references/flow-canon.md` tail section so both wrappers can cite it):
1. **Goal & primary persona** — one paragraph each.
2. **Flow map** — mermaid flowchart of steps and decision points.
3. **Screen & state inventory** — table: screen × {empty, loading, error, success} with one-line behavior each.
4. **UI direction** — the token decision table + the one distinctive move.
5. **Decisions & citations** — every non-obvious decision as `decision — principle` bullet.
6. **Accessibility checklist** — the hard gates, checked or flagged.
7. **Open questions** — anything deferred.

### 4.4 `whiteboard-flow` / `whiteboard-ui` (partial wrappers — user-invoked)

Same pattern; run only the one discipline; write only the corresponding brief sections (1–3 + 5–7 for flow; 4–7 for UI).

### 4.5 `update-canon` (maintenance — user-invoked)

```yaml
name: update-canon
description: Refresh whiteboard's distilled UI/UX canon from its vetted source list.
  Maintainer tool — fetches each source, diffs against the reference files, proposes edits.
disable-model-invocation: true
```

**Protocol:**
1. Read `references/sources.md` (the vetted stable-source table from research — NN/g, W3C WCAG, EU EAA, Apple HIG/WWDC, M3, web.dev/INP, Shape of AI, Growth.Design, shadcn changelog, Vercel skills FAQ — exact URLs).
2. Fetch each source; compare findings against `ux-flow/references/*.md` and `ui-craft/references/ui-canon.md`.
3. Propose edits as a summarized diff (changed principles, new criteria, deprecated guidance); apply on user approval only.
4. Stamp every touched reference file's header: `canon-version: YYYY-MM`.
5. Remind the maintainer to commit and tag so installed users can refresh via `npx skills update`.

**Honest update mechanics (stated in README):** installed skills are static copies. The maintainer runs `/update-canon` periodically and commits; users run `npx skills update` (or re-add) to get the refreshed canon.

## 5. Reference file content plan

All reference files open with a header: `canon-version: 2026-07` + one line on what the file is. Content is distilled **from the two research digests in `docs/superpowers/research/`** — implementation transforms, it does not re-research.

- **`ux-flow/references/flow-canon.md`** — Norman DOET (10 rules), Nielsen's 10 heuristics (2024 revision), Krug (10 rules), Cooper About Face (10 rules), the behavioral/cognitive half of Laws of UX (Fitts, Hick, Jakob, Miller, Doherty, Tesler, Postel, Occam, Pareto, Parkinson, Peak-End, Serial Position, Von Restorff, Zeigarnik, Goal-Gradient, Choice Overload, Selective Attention, Cognitive Load, Chunking), Emotional Design's three levels, the Hook model **as analytical lens only with the ethics check**, and the design-brief format section. Each rule stated short and actionable with its source name attached.
- **`ux-flow/references/modern-ux.md`** — the 25 modern principles: AI-product UX (trust quartet, chat-modality check, streaming states, probabilistic-output controls, escape hatches, agentic transparency, agents-as-users), accessibility-as-law (EAA enforceable since 2025-06-28, the nine new WCAG 2.2 criteria), INP <200ms and perceived performance, fewest-steps/redundant-entry, design-principles-as-artifact, recovery-over-prevention.
- **`ui-craft/references/ui-canon.md`** — Refactoring UI's 15 tactical rules, Gestalt laws (Proximity, Common Region, Similarity, Uniform Connectedness, Prägnanz), Rams' 10, HIG cross-cutting principles + metrics (44pt targets, Dynamic Type), M3 token architecture + Expressive findings (expressive-but-systematic = up to 4× faster key-action location; restraint under expressiveness), Liquid Glass legibility contract + concentric radii, shadcn token-role norm, dark-mode-in-pairs, WCAG 2.2 hard-gate table with exact numbers.
- **`update-canon/references/sources.md`** — the 17-row vetted source table (source, URL, what it covers, which reference file it feeds).

## 6. README plan

Order: (1) one-line install at the very top; (2) problem-first narrative — "AI can generate any UI in seconds — which is exactly why it generates the wrong one"; (3) the positioning line vs ui-ux-pro-max; (4) skills as Problem → Fix pairs, split **User-invoked** (`/whiteboard-me`, `/whiteboard-flow`, `/whiteboard-ui`, `/update-canon`) vs **Model-invoked** (`ux-flow`, `ui-craft`); (5) a short example exchange showing a cited question ("Do steps 2 and 3 both ask for the address? I'd merge them — WCAG 3.3.7 Redundant Entry."); (6) authority anchors — the canon list with `canon-version` badge; (7) how updates work, honestly; (8) MIT license. A demo GIF is desirable post-launch, not a v1 blocker.

## 7. Verification / success criteria

- `npx skills add Damsara/whiteboard` from a clean machine discovers all 6 skills and installs `references/` alongside (test with the CLI's local/path mode or a scratch GitHub repo before announcing).
- Frontmatter validates: every SKILL.md has `name` + `description`; wrappers carry `disable-model-invocation: true`; descriptions read as routing rules with trigger phrases and stay under the 1,536-char listing truncation.
- Dogfood: run `/whiteboard-me` on a real feature (e.g. a FlikFit or florin screen) end-to-end; confirm one-question-at-a-time behavior, cited principles on every question, and a complete brief written to `docs/design/`.
- Cross-check: no reference file contradicts another (e.g. target-size numbers consistent: WCAG floor 24px, touch recommendation 44pt/48dp).
- `/update-canon` dry-run completes: fetches all 17 sources, produces a diff proposal, changes nothing without approval.

## 8. Risks & mitigations

- **Reference bloat slowing sessions** — keep each reference file distilled (rules, not essays); SKILL.md stays short and points to references (progressive disclosure, per Vercel guidance).
- **Copyright** — reference files contain *distilled principles in our own words with attribution*, never book excerpts. Refactoring UI rules paraphrased, not quoted.
- **Interrogation fatigue** — the ladder explicitly skips already-answered rungs and explores the codebase instead of asking; wrappers for partial sessions exist.
- **Canon drift** — `canon-version` stamps make staleness visible; `/update-canon` makes refresh a 10-minute task.
