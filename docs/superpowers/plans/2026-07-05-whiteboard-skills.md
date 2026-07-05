# whiteboard Skills Repo Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and publish `Damsara/whiteboard` — six agent skills (2 interrogation disciplines, 3 command wrappers, 1 canon updater) installable via `npx skills@latest add Damsara/whiteboard`.

**Architecture:** Markdown-only repo following the Agent Skills standard. Two deep model-invoked disciplines (`ux-flow`, `ui-craft`) carry interrogation protocols and distilled-canon `references/`; three thin `disable-model-invocation` wrappers are the user surface; `update-canon` refreshes references from a vetted source table. All canon content is *transformed* from the two research digests already committed at `docs/superpowers/research/` — no new research during implementation.

**Tech Stack:** Markdown + YAML frontmatter, git, GitHub (`gh` CLI), skills.sh installer (`npx skills`).

## Global Constraints

- Repo root: `/Users/damsaraperera/Desktop/Projects/whiteboard` (exists; contains `docs/superpowers/{specs,research}`).
- Spec: `docs/superpowers/specs/2026-07-05-whiteboard-skills-design.md`. Source digests: `docs/superpowers/research/canonical-sources-digest.md` (D1), `docs/superpowers/research/modern-principles-distribution-digest.md` (D2). Reference files distill from D1/D2 only — never fetch the web during implementation.
- Skill layout: `skills/design/<name>/SKILL.md` (+ `references/` where specified). Every SKILL.md: `name` (lowercase-hyphen) + `description` frontmatter; wrappers and update-canon add `disable-model-invocation: true`. Descriptions are single-line routing rules with trigger phrases, < 1536 chars.
- Every reference file opens with `> canon-version: 2026-07` plus a one-line purpose statement.
- Copyright rule: distilled principles in our own words with attribution; never verbatim book excerpts (paraphrase Refactoring UI rules especially).
- Hard numbers must agree everywhere: WCAG floor 24×24px targets; touch recommendation 44pt (HIG) / 48dp (M3); text contrast 4.5:1 (3:1 large ≥24px or 19px bold); non-text 3:1; INP < 200ms; Doherty < 400ms; motion 150–300ms.
- Commit convention: Conventional Commits (`feat(skills): …`, `docs: …`). New unshared repo: scaffold commits land directly on `main` until first push; after publish, branch-per-change.
- Do NOT push to GitHub without explicit user confirmation (Task 10 has a confirm gate).

---

### Task 1: Repo scaffold (git init, LICENSE, commit existing docs)

**Files:**
- Create: `LICENSE`
- Commit: `docs/superpowers/specs/2026-07-05-whiteboard-skills-design.md`, `docs/superpowers/research/*.md`, `docs/superpowers/plans/2026-07-05-whiteboard-skills.md`

**Interfaces:**
- Produces: a git repo on `main` with docs committed; all later tasks commit on top.

- [ ] **Step 1: Init repo**

```bash
cd /Users/damsaraperera/Desktop/Projects/whiteboard && git init -b main
```

Expected: `Initialized empty Git repository`.

- [ ] **Step 2: Write LICENSE**

Write `LICENSE` with the standard MIT license text, year `2026`, holder `Damsara Perera`:

```
MIT License

Copyright (c) 2026 Damsara Perera

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

- [ ] **Step 3: Commit**

```bash
git add LICENSE docs/ && git commit -m "chore: scaffold repo with spec, research digests, and MIT license"
```

Expected: 1 commit on `main`; `git log --oneline` shows it.

---

### Task 2: `ux-flow/references/flow-canon.md` (classic flow canon + brief format)

**Files:**
- Create: `skills/design/ux-flow/references/flow-canon.md`

**Interfaces:**
- Consumes: D1 sections §1 (Norman DOET), §2 (Krug), §3 (Nielsen), §4 (Laws of UX — behavioral/cognitive subset only), §6 (Cooper), §9 (Emotional Design + Hooked-as-lens).
- Produces: the file `ux-flow`'s SKILL.md (Task 5) points at; the **Design Brief Format** section that Tasks 6–8 wrappers reference by the exact heading `## Design Brief Format`.

- [ ] **Step 1: Write the file**

Structure (every section required; content = the distilled rules from the mapped D1 section, rewritten tight — one bold-titled rule per bullet, each ≤ 2 lines, our own words):

```markdown
> canon-version: 2026-07
> Distilled classic UX-flow canon. Read in full before running a ux-flow interrogation.

# Flow Canon

## Norman — The Design of Everyday Things
[All 10 rules from D1 §1. Format example:]
- **Signifiers over labels** — every interactive element must visibly signal how it's used; if it needs a "click here" label, the signifier failed.
- **Feedback within the action** — every action gets immediate, proportionate confirmation of *what* happened, not just that something happened.
[...remaining 8 rules: mapping, conceptual model, two gulfs, knowledge in the world, constraints, slips vs mistakes, reversibility, seven stages...]

## Nielsen — 10 Usability Heuristics (NN/g, 2024 revision)
[All 10, numbered, name bolded + one-line rule, from D1 §3.]

## Krug — Don't Make Me Think
[All 10 rules from D1 §2: self-evidence, scanning/satisficing, omit needless words, mindless clicks, visual hierarchy, defined areas, conventions, navigation questions, page names, cheap frequent testing.]

## Cooper — About Face
[All 10 rules from D1 §6: goals not tasks, one primary persona, scenarios first, perpetual intermediates, less interface, don't make users feel stupid, kill excise, do-don't-ask, considerate software, input is sacred.]

## Laws of UX — behavioral & cognitive (Yablonski)
[From D1 §4, laws 1–10 and 16–30 (SKIP Gestalt laws 11–15 — they live in ui-canon.md). One line each, law name bolded. Format example:]
- **Tesler's Law** — complexity can't be eliminated, only moved; the system absorbs it (smart defaults, inference), never the user.

## Emotional layers & retention (calibrated)
[From D1 §9: Norman's visceral/behavioral/reflective audit; Peak-End engineering of the success moment; the Hook model (Trigger → Action → Variable Reward → Investment) **as an analytical lens only**, with the mandatory ethics check: "would the user consent to this loop if they saw it?"]

## Design Brief Format
Write briefs to `docs/design/<feature>-brief.md` with exactly these sections:
1. **Goal & primary persona** — one paragraph each.
2. **Flow map** — a mermaid flowchart of steps and decision points.
3. **Screen & state inventory** — table: screen × {empty, loading, error, success}, one-line behavior each.
4. **UI direction** — token decision table (role → light → dark; spacing/type/radius/elevation scales) + the one distinctive move.
5. **Decisions & citations** — every non-obvious decision as a `decision — principle` bullet.
6. **Accessibility checklist** — the WCAG 2.2 hard gates, each checked or flagged.
7. **Open questions** — anything deferred.
Flow-only sessions write sections 1–3 + 5–7; UI-only sessions write 4–7.
```

- [ ] **Step 2: Verify structure and completeness**

```bash
cd /Users/damsaraperera/Desktop/Projects/whiteboard
grep -c '^## ' skills/design/ux-flow/references/flow-canon.md   # expect 7
grep -c '^- \*\*' skills/design/ux-flow/references/flow-canon.md # expect >= 55 (10+10+10+10+25 laws minimum, minus merged framing concepts is acceptable: >= 50)
head -1 skills/design/ux-flow/references/flow-canon.md | grep 'canon-version: 2026-07'
```

Spot-check against D1: all 10 Nielsen heuristics present; Gestalt laws (Proximity, Common Region, Similarity, Uniform Connectedness, Prägnanz) ABSENT from this file.

- [ ] **Step 3: Commit**

```bash
git add skills/design/ux-flow/references/flow-canon.md && git commit -m "feat(ux-flow): add distilled classic flow canon and design brief format"
```

---

### Task 3: `ux-flow/references/modern-ux.md` (2024–2026 principles)

**Files:**
- Create: `skills/design/ux-flow/references/modern-ux.md`

**Interfaces:**
- Consumes: D2 §1 subsections A–D (the 25 modern principles).
- Produces: second reference file `ux-flow` SKILL.md points at.

- [ ] **Step 1: Write the file**

```markdown
> canon-version: 2026-07
> Modern (2024–2026) UX principles beyond the classic canon. Read alongside flow-canon.md.

# Modern UX Canon

## AI-product UX
[D2 §1.A, all 8 principles. Format example:]
- **Trust quartet** — transparency, user control, consistency, graceful failure are the foundation of any AI-mediated experience (NN/g State of UX 2026).
- **Chat is over-applied** — match modality to intent and cognitive load; default to task-appropriate UI (buttons, forms, canvas); open-input chat only for genuinely open-ended problem spaces.
[...streaming states queued→thinking→streaming→done→failed with first token <~800ms; probabilistic-output controls (regenerate, refine-region, citations, undo); escape hatches (templates, suggested actions); agentic transparency (plan, tool use, memory, progress, recovery routing); agents-as-users (semantic structure serves machines too); outcome-oriented over average-user...]

## Accessibility is law
[D2 §1.B, all 4: EAA enforceable 2025-06-28 → WCAG 2.2 AA is the EU legal baseline; the nine new 2.2 criteria as table stakes (Focus Not Obscured, Target Size 24px, Dragging alternative, Consistent Help, Redundant Entry, Accessible Authentication); accessibility built into generation not audited after; honor prefers-reduced-motion/contrast/transparency.]

## Expressive-but-disciplined visual turn
[D2 §1.C, all 6 — kept here in one-line form for flow-level awareness; full visual detail lives in ui-canon.md: expressive contrast finds key actions up to 4× faster (M3 Expressive); physics-based functional motion; translucency legibility contract (Liquid Glass); anti-slop distinctive point of view; token-based systems as infrastructure; dark mode as first-class pair.]

## Behavior, performance, flow
[D2 §1.D, all 7: psychology-grounded flows ethically applied (Growth.Design 106, cite the principle, no dark patterns); INP < 200ms at p75 + perceived-performance patterns; fewest-steps (redundant-entry, progressive disclosure, deferred sign-up — every step needs a justified reason); 3–7 named product design principles as kickoff artifact; context architecture; recovery over prevention in agentic UX; restraint under expressiveness.]
```

- [ ] **Step 2: Verify**

```bash
grep -c '^## ' skills/design/ux-flow/references/modern-ux.md   # expect 4
grep -c '^- \*\*' skills/design/ux-flow/references/modern-ux.md # expect >= 25
head -1 skills/design/ux-flow/references/modern-ux.md | grep 'canon-version: 2026-07'
grep -q 'INP' skills/design/ux-flow/references/modern-ux.md && grep -q '24' skills/design/ux-flow/references/modern-ux.md
```

- [ ] **Step 3: Commit**

```bash
git add skills/design/ux-flow/references/modern-ux.md && git commit -m "feat(ux-flow): add modern 2024-2026 UX principles reference"
```

---

### Task 4: `ui-craft/references/ui-canon.md` (visual canon)

**Files:**
- Create: `skills/design/ui-craft/references/ui-canon.md`

**Interfaces:**
- Consumes: D1 §5 (Refactoring UI), §4 laws 11–15 (Gestalt), §10 (Rams), §11 (HIG), §12 (M3), §13 (WCAG 2.2 shortlist); D2 §1.C items 15 (Liquid Glass contract, concentric radii) and 17–18 (shadcn token norm, dark-mode pairs).
- Produces: the reference `ui-craft` SKILL.md (Task 6) points at, including the exact heading `## Hard Gates (WCAG 2.2 AA + platform floors)` that the SKILL.md cites.

- [ ] **Step 1: Write the file**

```markdown
> canon-version: 2026-07
> Distilled visual-craft canon. Read in full before running a ui-craft interrogation.

# UI Canon

## Refactoring UI — tactical rules (Wathan & Schoger, paraphrased)
[All 15 rules from D1 §5, own words. Format example:]
- **Hierarchy via weight and color, not size** — 2–3 text levels (dark/medium/light grey at 400–700 weight) beat a ladder of font sizes.
- **Constrained spacing scale** — pick from a fixed scale (4/8/12/16/24/32/48/64); start too generous, remove; never arbitrary values.
[...feature-first low-fi start, de-emphasize to emphasize, one primary button per screen, type scale + 45–75ch + inverse line-height, full shade systems (never opacity-lighten; shift hue/saturation with lightness), no grey text on color, elevation scale = meaning, never color alone, labels last resort, depth without gradients, empty states are a feature, looks-off checklist (spacing → alignment → contrast)...]

## Gestalt laws (Yablonski 11–15)
- **Proximity** — spacing alone should do the grouping work before borders.
- **Common Region** — a shared background/boundary binds related content (cards).
- **Similarity** — style same-kind things identically; never style unrelated things alike.
- **Uniform Connectedness** — visual connection (lines, containers) reads as relation.
- **Prägnanz** — the eye wants the simplest form; ambiguity costs cognition.

## Rams — 10 principles of good design
[All 10 from D1 §10, one line each, with the software readings (honest = anti-dark-pattern; environmentally friendly = attention/battery/bandwidth; "less, but better").]

## Platform canon — HIG + Material 3
[From D1 §11 + §12: clarity/deference/depth; content over chrome; direct manipulation; system components before invention; token architecture (color roles with guaranteed on-X contrast pairs, type roles display→label, shape/spacing tokens — never raw hex in components); window-size classes not devices; state layers for hover/focus/press; meaningful physics motion; M3 Expressive finding: expressive contrast on the important elements = up to 4× faster key-action location — expressiveness is a usability tool, reserved for hero moments over a quiet consistent base.]

## Current texture notes (2025–2026)
[From D2 §1.C: Liquid Glass legibility contract — content layer vs control layer with guaranteed contrast/dimming; concentric radii (nested corners share a center) as the detail-quality tell; shadcn token-role norm (background/foreground/primary/muted/accent/destructive in light+dark pairs, radius + shadow scales); dark mode designed in pairs, never an inversion filter.]

## Hard Gates (WCAG 2.2 AA + platform floors)
| Gate | Number | Source |
|---|---|---|
| Text contrast | ≥ 4.5:1 (≥ 3:1 for large: ≥24px or 19px bold) | WCAG 1.4.3 |
| Non-text contrast (icons, borders, focus) | ≥ 3:1 | WCAG 1.4.11 |
| Target size | ≥ 24×24 CSS px floor; 44pt (HIG) / 48dp (M3) on touch | WCAG 2.5.8 / HIG / M3 |
| Focus | visible and not obscured by sticky UI | WCAG 2.4.7 / 2.4.11 |
| Color | never the only carrier of meaning | WCAG 1.4.1 |
| Reflow | survives 200% text zoom and 320px width | WCAG 1.4.4 / 1.4.10 |
| Keyboard | everything operable; errors named in text with a fix | WCAG 2.1.1 / 3.3.1 / 3.3.3 |
| Motion | 150–300ms, meaningful, honors prefers-reduced-motion | M3 / HIG / WCAG 2.3.3 |
```

- [ ] **Step 2: Verify**

```bash
grep -c '^## ' skills/design/ui-craft/references/ui-canon.md    # expect 6
grep -q 'Hard Gates (WCAG 2.2 AA + platform floors)' skills/design/ui-craft/references/ui-canon.md
grep -q '4.5:1' skills/design/ui-craft/references/ui-canon.md && grep -q '24×24' skills/design/ui-craft/references/ui-canon.md
head -1 skills/design/ui-craft/references/ui-canon.md | grep 'canon-version: 2026-07'
```

Spot-check: all 15 Refactoring UI rules present and paraphrased (no sentence copied from the book); all 5 Gestalt laws here and only here.

- [ ] **Step 3: Commit**

```bash
git add skills/design/ui-craft/references/ui-canon.md && git commit -m "feat(ui-craft): add distilled visual canon with WCAG hard gates"
```

---

### Task 5: `ux-flow/SKILL.md`

**Files:**
- Create: `skills/design/ux-flow/SKILL.md`

**Interfaces:**
- Consumes: `references/flow-canon.md`, `references/modern-ux.md` (Tasks 2–3).
- Produces: the `ux-flow` session protocol that wrappers (Task 7) invoke by name.

- [ ] **Step 1: Write the file (complete content, verbatim):**

```markdown
---
name: ux-flow
description: Interrogate the user about a product or feature's UX flow before anything is designed or built. Use when the user is starting a new feature, screen, or product; says "design the flow", "UX for", "user journey", "onboarding", "checkout", "wizard", "how should this work"; or is about to generate UI without an agreed flow.
---

# UX Flow Interrogation

Read `references/flow-canon.md` and `references/modern-ux.md` in full before asking anything.

## Grill rules

- One question at a time. Wait for the answer before continuing — multiple questions at once are bewildering.
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

Restate the agreed flow as a numbered step list with states per step and get explicit confirmation. In a full `/whiteboard-me` session, hand off to a `ui-craft` session next; in a flow-only session, write brief sections 1–3 and 5–7 per the Design Brief Format in `references/flow-canon.md`.
```

- [ ] **Step 2: Verify frontmatter**

```bash
head -4 skills/design/ux-flow/SKILL.md | grep -q 'name: ux-flow'
awk '/^description:/ {print length($0)}' skills/design/ux-flow/SKILL.md  # expect < 1536
```

- [ ] **Step 3: Commit**

```bash
git add skills/design/ux-flow/SKILL.md && git commit -m "feat(ux-flow): add flow interrogation discipline"
```

---

### Task 6: `ui-craft/SKILL.md`

**Files:**
- Create: `skills/design/ui-craft/SKILL.md`

**Interfaces:**
- Consumes: `references/ui-canon.md` (Task 4), incl. the `## Hard Gates (WCAG 2.2 AA + platform floors)` heading.
- Produces: the `ui-craft` session protocol wrappers invoke by name.

- [ ] **Step 1: Write the file (complete content, verbatim):**

```markdown
---
name: ui-craft
description: Interrogate the user about visual direction, then lock a clean UI system (hierarchy, spacing, type, color tokens) before any UI is generated. Use when the user is styling or building UI, choosing colors/fonts/layout, says "make it look good", "clean UI", "design system", "theme", or is about to generate frontend code without an agreed visual direction.
---

# UI Craft Interrogation

Read `references/ui-canon.md` in full before asking anything.

## Grill rules

Same as a `ux-flow` session: one question at a time, each with a recommended answer, each citing its principle inline; explore the codebase instead of asking when possible; lock nothing without user confirmation; generate no UI until the system below is locked.

## Interrogation ladder

1. **Commitment questions** (anti-slop) — purpose of the surface, audience, tone in three adjectives, existing brand constraints, and the one distinctive move this UI will own. (NN/g: sameness is the failure mode; Rams: honest, unobtrusive.)
2. **Density & platform** — data-dense tool or content-first consumer surface; which window-size classes must it serve. (HIG: deference; M3: size classes, not devices.)
3. **Lock the system** — one decision per question, recommended defaults offered:
   - Text hierarchy: 2–3 levels via weight + color, not size alone. (Refactoring UI.)
   - Spacing scale: constrained (e.g. 4/8/12/16/24/32/48/64); start too generous. (Refactoring UI.)
   - Type scale with roles (display/headline/body/label sizes from a fixed scale; 45–75ch line length). (Refactoring UI; M3 type roles.)
   - Color as token roles in light+dark pairs — background/foreground, surface/on-surface, primary, muted, destructive; restrained palette; shades shift hue/saturation with lightness; never raw hex in components. (M3 tokens; shadcn norm; Refactoring UI shade systems.)
   - Radius + elevation scales; shadow means elevation, elevation means something. (Refactoring UI; M3 state layers.)
   - Motion: 150–300ms, physics-feel, honors prefers-reduced-motion. (M3/HIG.)
4. **Emphasis audit** — exactly one primary action per screen (Von Restorff); emphasize by de-emphasizing competitors; group with spacing before borders (Proximity; Common Region).
5. **Hard gates** — state, don't ask: the table under `## Hard Gates (WCAG 2.2 AA + platform floors)` in `references/ui-canon.md` is non-negotiable; flag any locked decision that violates it and propose the nearest compliant alternative.

## Exit

Restate the locked system as a token decision table (role → light value → dark value; scales as lists) plus the one distinctive move, and get explicit confirmation. In a full `/whiteboard-me` session, proceed to the brief; in a UI-only session, write brief sections 4–7 per the Design Brief Format in `ux-flow/references/flow-canon.md`.
```

- [ ] **Step 2: Verify frontmatter**

```bash
head -4 skills/design/ui-craft/SKILL.md | grep -q 'name: ui-craft'
awk '/^description:/ {print length($0)}' skills/design/ui-craft/SKILL.md  # expect < 1536
```

- [ ] **Step 3: Commit**

```bash
git add skills/design/ui-craft/SKILL.md && git commit -m "feat(ui-craft): add visual direction discipline"
```

---

### Task 7: The three wrappers (`whiteboard-me`, `whiteboard-flow`, `whiteboard-ui`)

**Files:**
- Create: `skills/design/whiteboard-me/SKILL.md`, `skills/design/whiteboard-flow/SKILL.md`, `skills/design/whiteboard-ui/SKILL.md`

**Interfaces:**
- Consumes: `ux-flow` and `ui-craft` skills by name; the Design Brief Format in `ux-flow/references/flow-canon.md`.

- [ ] **Step 1: Write `whiteboard-me/SKILL.md` (verbatim):**

```markdown
---
name: whiteboard-me
description: A relentless design-kickoff interrogation — UX flow first, then visual direction — ending in a principles-cited design brief.
disable-model-invocation: true
---

Run a `ux-flow` session, then a `ui-craft` session. Then write the full design brief (all 7 sections of the Design Brief Format in `ux-flow`'s `references/flow-canon.md`) to `docs/design/<feature>-brief.md`.
```

- [ ] **Step 2: Write `whiteboard-flow/SKILL.md` (verbatim):**

```markdown
---
name: whiteboard-flow
description: A relentless interrogation of a feature's UX flow only — screens, steps, states, errors — ending in a principles-cited flow brief.
disable-model-invocation: true
---

Run a `ux-flow` session. Then write brief sections 1–3 and 5–7 of the Design Brief Format in `ux-flow`'s `references/flow-canon.md` to `docs/design/<feature>-brief.md`.
```

- [ ] **Step 3: Write `whiteboard-ui/SKILL.md` (verbatim):**

```markdown
---
name: whiteboard-ui
description: A relentless interrogation of visual direction only — hierarchy, spacing, type, color tokens — ending in a principles-cited UI brief.
disable-model-invocation: true
---

Run a `ui-craft` session. Then write brief sections 4–7 of the Design Brief Format in `ux-flow`'s `references/flow-canon.md` to `docs/design/<feature>-brief.md`.
```

- [ ] **Step 4: Verify all three**

```bash
for s in whiteboard-me whiteboard-flow whiteboard-ui; do
  grep -q 'disable-model-invocation: true' skills/design/$s/SKILL.md || echo "MISSING flag: $s"
  grep -q "name: $s" skills/design/$s/SKILL.md || echo "BAD name: $s"
done
```

Expected: no output.

- [ ] **Step 5: Commit**

```bash
git add skills/design/whiteboard-* && git commit -m "feat(wrappers): add whiteboard-me, whiteboard-flow, whiteboard-ui commands"
```

---

### Task 8: `update-canon` skill + `sources.md`

**Files:**
- Create: `skills/design/update-canon/SKILL.md`, `skills/design/update-canon/references/sources.md`

**Interfaces:**
- Consumes: the 17-row source table in D2 §1 ("Stable sources to re-check periodically").
- Produces: the maintainer refresh loop.

- [ ] **Step 1: Write `references/sources.md`**

Copy the 17-row table from D2 §1 verbatim (Source | URL | What it covers) and add a fourth column **Feeds** mapping each row to the reference file(s) it updates:

| Feeds value | Rows |
|---|---|
| `modern-ux.md` | NN/g articles, NN/g AI hub, Smashing UX, web.dev blog+patterns, web.dev INP, Shape of AI, aiverse.design, Growth.Design psychology, Growth.Design case studies, EU EAA page |
| `ui-canon.md` | Material Design, Android Developers Blog, Apple HIG, Apple WWDC design sessions, shadcn changelog |
| `flow-canon.md` + `ui-canon.md` | W3C WCAG overview |
| `sources.md` itself / repo docs | Vercel agent-skills FAQ |

Open the file with:

```markdown
> canon-version: 2026-07
> Vetted stable sources for refreshing whiteboard's distilled canon. Used by the update-canon skill.
```

- [ ] **Step 2: Write `SKILL.md` (verbatim):**

```markdown
---
name: update-canon
description: Refresh whiteboard's distilled UI/UX canon from its vetted source list. Maintainer tool — fetches each source, diffs against the reference files, proposes edits for approval.
disable-model-invocation: true
---

# Update Canon

1. Read `references/sources.md`.
2. Fetch every source URL. For each, note guidance that is new, changed, or deprecated relative to the reference file named in its **Feeds** column (`ux-flow/references/flow-canon.md`, `ux-flow/references/modern-ux.md`, `ui-craft/references/ui-canon.md`).
3. Present all proposed edits as one summarized diff — new principles, changed numbers/criteria, deprecated guidance — with the source URL for each. Apply nothing without explicit approval.
4. On approval: apply the edits, update the `canon-version: YYYY-MM` header line of every touched file to the current month, and add newly-discovered stable sources to `references/sources.md` (also subject to approval).
5. Remind the maintainer to commit and tag, so installed users can refresh via `npx skills update`.
```

- [ ] **Step 3: Verify**

```bash
grep -c '^|' skills/design/update-canon/references/sources.md   # expect >= 19 (17 rows + header + separator)
grep -q 'disable-model-invocation: true' skills/design/update-canon/SKILL.md
grep -q 'Feeds' skills/design/update-canon/references/sources.md
```

- [ ] **Step 4: Commit**

```bash
git add skills/design/update-canon && git commit -m "feat(update-canon): add canon refresh skill with vetted source table"
```

---

### Task 9: README

**Files:**
- Create: `README.md`

**Interfaces:**
- Consumes: final skill names/descriptions from Tasks 5–8.

- [ ] **Step 1: Write `README.md` (complete content, verbatim):**

```markdown
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
```

- [ ] **Step 2: Verify**

```bash
head -5 README.md | grep -q 'npx skills@latest add Damsara/whiteboard'
grep -q 'canon-version: 2026-07' README.md
```

- [ ] **Step 3: Commit**

```bash
git add README.md && git commit -m "docs: add README with install, positioning, and skill catalog"
```

---

### Task 10: Repo-wide validation + local installer discovery test

**Files:**
- None created (validation only).

- [ ] **Step 1: Frontmatter + layout validation**

```bash
cd /Users/damsaraperera/Desktop/Projects/whiteboard
ls skills/design/*/SKILL.md | wc -l    # expect 6
for f in skills/design/*/SKILL.md; do
  grep -q '^name: ' "$f" || echo "MISSING name: $f"
  grep -q '^description: ' "$f" || echo "MISSING description: $f"
done
```

Expected: `6`, then no output.

- [ ] **Step 2: Numbers consistency cross-check**

```bash
grep -rn '4.5:1\|24×24\|44pt\|48dp\|200ms\|400ms' skills/ | sort
```

Manually confirm: contrast always 4.5:1 (3:1 large/non-text); target floor 24×24px with 44pt/48dp touch recommendation; INP 200ms; Doherty 400ms. Fix any file that disagrees.

- [ ] **Step 3: Local installer discovery test**

```bash
npx skills@latest add ./ --list 2>/dev/null || npx skills@latest add /Users/damsaraperera/Desktop/Projects/whiteboard
```

Expected: the CLI discovers all 6 skills under `skills/design/`. If the CLI has no local-path mode, defer this check to Task 11 Step 3 (post-push) — do not fail the task on it.

- [ ] **Step 4: Commit any fixes**

```bash
git add -A && git diff --cached --quiet || git commit -m "fix(skills): validation fixes from repo-wide checks"
```

---

### Task 11: Publish to GitHub (CONFIRM GATE) + verify install

**Files:**
- None created.

- [ ] **Step 1: Confirm with the user before pushing**

Ask: "Ready to publish `Damsara/whiteboard` as a public GitHub repo?" Proceed only on yes.

- [ ] **Step 2: Create repo and push**

```bash
cd /Users/damsaraperera/Desktop/Projects/whiteboard
gh repo create Damsara/whiteboard --public --source=. --push \
  --description "Interrogation-first design kickoff skills — UX flow and clean UI, every question cited from the canon"
```

Expected: repo created, `main` pushed.

- [ ] **Step 3: Verify real install end-to-end**

```bash
npx skills@latest add Damsara/whiteboard --yes
ls ~/.claude/skills/ | grep -E 'whiteboard-me|ux-flow|ui-craft|update-canon'
ls ~/.claude/skills/ux-flow/references/  # expect flow-canon.md modern-ux.md
```

Expected: all 6 skills installed with `references/` intact. NOTE: local `~/.claude/skills` already contains Matt Pocock's skills — confirm no name collision (`ls ~/.claude/skills | sort | uniq -d` before installing; our names `ux-flow`, `ui-craft`, `whiteboard-*`, `update-canon` are collision-free against the existing list).

- [ ] **Step 4: Tag**

```bash
git tag v0.1.0 && git push origin v0.1.0
```

---

### Task 12: Dogfood `/whiteboard-me` on a real feature

**Files:**
- Create (as session output): `docs/design/<feature>-brief.md` in whichever project the session runs in.

- [ ] **Step 1: Restart the agent session** (so newly installed skills load), then run `/whiteboard-me` on a real feature the user picks (e.g. a FlikFit or florin screen).

- [ ] **Step 2: Check against acceptance criteria**

- Questions arrive one at a time, each with a recommended answer.
- Every question/recommendation carries an inline principle citation.
- Codebase questions get explored, not asked.
- Session ends with a complete 7-section brief at `docs/design/<feature>-brief.md`.

- [ ] **Step 3: Fix findings**

Any protocol violation traces to SKILL.md wording — tighten the relevant file, commit as `fix(<skill>): <what>`, push, and re-test the changed behavior.

---

## Self-Review (completed at plan time)

- **Spec coverage:** §3 layout → Tasks 1–9; §4.1–4.5 skill specs → Tasks 5–8; §5 references → Tasks 2–4, 8; §6 README → Task 9; §7 verification → Tasks 10–12; §8 risks → copyright rule (Global Constraints + Task 4 spot-check), bloat (distill-tight formats), fatigue (skip-rungs wording in Task 5), drift (canon-version stamps throughout). CHANGELOG deliberately deferred per spec §3.
- **Placeholder scan:** reference-file tasks use explicit D1/D2 section mappings + full skeletons + inclusion checklists (source content is committed in-repo at exact paths); all SKILL.md and README content is verbatim in the plan. No TBDs.
- **Consistency:** brief format defined once (Task 2) and referenced by exact section numbers in Tasks 5–7; `Hard Gates` heading matches between Tasks 4 and 6; skill names match across Tasks 5–9 and the README.
