# whiteboard Repo Improvements Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Bring `Damsara/whiteboard` up to the maintenance discipline of `mattpocock/skills` — changesets versioning, CLAUDE.md invariants, a pruning pass — and add two new skills: `design-review` (retrospective audit) and `copy-craft` (microcopy interrogation).

**Architecture:** Markdown-only skills repo, unchanged layout (`skills/design/<name>/SKILL.md` + `references/`). New: npm devDependency on `@changesets/cli` for versioning only (repo stays unpublishable, `private: true`). `design-review` carries no references of its own — it reads `ux-flow`'s and `ui-craft`'s canon files via relative path (declared install dependency). `copy-craft` carries its own `references/copy-canon.md`, wired into `update-canon`'s source table.

**Tech Stack:** Markdown + YAML frontmatter, git, `gh` CLI, npm (changesets), skills.sh installer (`npx skills`).

## Global Constraints

- Repo root: `/Users/damsaraperera/Desktop/Projects/whiteboard`. Current state: `main` in sync with `origin/main`, tag `v0.1.0`, clean tree.
- Branching: post-publish convention is branch-per-change; NEVER commit on `main`. Branch 1: `chore/versioning-and-invariants` (Tasks 1–3, cut from `main`). Branch 2: `feat/design-review-and-copy-craft` (Tasks 4–6, cut from Branch 1's tip — stacked).
- Do NOT push, open PRs, or create releases without explicit user confirmation (Task 7 has a confirm gate).
- Commit convention: Conventional Commits, lowercase, imperative, no trailing period.
- Every `SKILL.md`: `name` (lowercase-hyphen, matches folder) + single-line `description` (< 1536 chars). Wrappers and `update-canon` add `disable-model-invocation: true`.
- Every reference file opens with `> canon-version: 2026-07` plus a one-line purpose statement.
- Hard numbers must agree everywhere: text contrast 4.5:1 (3:1 large ≥24px or 19px bold); non-text 3:1; targets ≥24×24 CSS px floor, 44pt (HIG) / 48dp (M3) touch; INP < 200ms; Doherty < 400ms; motion 150–300ms honoring prefers-reduced-motion; WCAG 3.3.7 Redundant Entry.
- Copyright rule: distilled principles in our own words with attribution; never verbatim book excerpts.
- House voice for skills: terse imperative rungs, inline principle citations in parentheses, leading words (excise, gate, ladder, sweep, lock).
- Node v22 / npm 10 are available. `gh` CLI is authenticated.

---

### Task 1: Changesets versioning infrastructure

**Files:**
- Create: `package.json`, `.gitignore`, `.changeset/config.json` (via init, then edit), `CHANGELOG.md`
- Commit: `package-lock.json`

**Interfaces:**
- Produces: `npx changeset` (add a changeset), `GITHUB_TOKEN=$(gh auth token) npx changeset version` (bump + write CHANGELOG). Package name `whiteboard-skills` — later tasks' changeset files reference this exact name.

- [ ] **Step 1: Create branch**

```bash
cd /Users/damsaraperera/Desktop/Projects/whiteboard && git checkout -b chore/versioning-and-invariants main
```

- [ ] **Step 2: Write `package.json`**

```json
{
  "name": "whiteboard-skills",
  "version": "0.1.0",
  "private": true,
  "description": "whiteboard — design-kickoff interrogation skills for coding agents",
  "repository": {
    "type": "git",
    "url": "https://github.com/Damsara/whiteboard"
  },
  "license": "MIT",
  "scripts": {
    "changeset": "changeset",
    "version": "changeset version"
  },
  "devDependencies": {
    "@changesets/changelog-github": "^0.7.0",
    "@changesets/cli": "^2.30.0"
  }
}
```

- [ ] **Step 3: Write `.gitignore`**

```
node_modules/
```

- [ ] **Step 4: Install and init changesets**

```bash
npm install && npx changeset init
```

Expected: `node_modules/` and `package-lock.json` appear; `.changeset/config.json` and `.changeset/README.md` created.

- [ ] **Step 5: Overwrite `.changeset/config.json`**

```json
{
  "$schema": "https://unpkg.com/@changesets/config@3.1.1/schema.json",
  "changelog": ["@changesets/changelog-github", { "repo": "Damsara/whiteboard" }],
  "commit": false,
  "fixed": [],
  "linked": [],
  "access": "restricted",
  "baseBranch": "main",
  "updateInternalDependencies": "patch",
  "ignore": [],
  "privatePackages": { "version": true, "tag": true }
}
```

(If the schema URL version in the generated file is newer, keep the generated URL and change only `changelog` and `privatePackages`.)

- [ ] **Step 6: Seed `CHANGELOG.md`**

```markdown
# whiteboard-skills

## 0.1.0

### Minor Changes

- Initial release ([v0.1.0](https://github.com/Damsara/whiteboard/releases/tag/v0.1.0)): six skills — the `ux-flow` and `ui-craft` interrogation disciplines with distilled, cited canon (`canon-version: 2026-07`); the `whiteboard-me`, `whiteboard-flow`, and `whiteboard-ui` command wrappers; and the `update-canon` maintainer tool.
```

- [ ] **Step 7: Verify changeset CLI works**

```bash
npx changeset status 2>&1 | head -5
```

Expected: reports no changesets present (exit may be non-zero — that's fine); must NOT error with a config-parse failure.

- [ ] **Step 8: Commit**

```bash
git add package.json package-lock.json .gitignore .changeset/ CHANGELOG.md
git commit -m "chore: add changesets versioning with seeded changelog"
```

---

### Task 2: CLAUDE.md repo invariants

**Files:**
- Create: `CLAUDE.md`

**Interfaces:**
- Produces: the invariants later tasks must obey (wrapper thinness, single-source brief mapping, canon-version stamp rules, changeset rules). Task 3's edits make the "defined ONCE" invariant true.

- [ ] **Step 1: Write `CLAUDE.md`**

```markdown
# whiteboard — repo invariants

Skills live under `skills/design/<name>/SKILL.md` (+ `references/` where the skill carries canon). Draft skills incubate in `skills/in-progress/<name>/` — never listed in the README and never announced in a changeset until promoted to `skills/design/`.

## Skill rules

- Every `SKILL.md` has `name` (lowercase-hyphen, matching its folder) and a single-line `description` under 1536 chars.
- **Disciplines** (`ux-flow`, `ui-craft`, `design-review`, `copy-craft`) are model-invoked: no `disable-model-invocation`; the description is a routing rule with trigger phrases, one trigger per genuinely distinct branch.
- **Wrappers** (`whiteboard-*`) and `update-canon` are user-invoked: `disable-model-invocation: true`, human-facing one-line description, body ≤ 10 lines of pure orchestration. A wrapper that grows content is a bug — move the content into the discipline it wraps.
- Which brief sections each session type writes, and where briefs are saved, is defined once — in the Design Brief Format in `ux-flow/references/flow-canon.md`. Wrappers and Exit sections point there; they never restate section numbers or paths.

## Canon rules

- Every `references/*.md` opens with `> canon-version: YYYY-MM` plus a one-line purpose. All reference files carry the same stamp; `update-canon` is the only skill that changes it.
- Hard numbers must agree everywhere they appear: text contrast 4.5:1 (3:1 large ≥24px or 19px bold); non-text 3:1; targets ≥24×24 CSS px floor, 44pt (HIG) / 48dp (M3) touch; INP < 200ms; Doherty < 400ms; motion 150–300ms honoring prefers-reduced-motion. Changing one is a canon update: change every occurrence and the stamp together.
- Distilled principles are paraphrased with attribution — never verbatim book excerpts.
- Every reference file is reachable from `update-canon/references/sources.md`'s Feeds column; a new reference file means a new Feeds mapping.

## Quality bar (run on every skill edit)

- **No-op hunt** — delete any sentence the model already obeys by default; delete whole sentences, don't trim words.
- **Single source of truth** — each rule, number, and mapping lives in exactly one file; everything else points at it.
- **Leading words** — prefer one pretrained concept (excise, gate, ladder, sweep, lock) over a spelled-out triad.
- **Checkable exits** — every skill's Exit states a completion criterion the agent can verify (every gate has a verdict, every string in the table), not "wrap up".

## Sync rules

- Every promoted skill has a linked entry in the top-level `README.md`, grouped under User-invoked / Model-invoked, kept current on add/rename/remove.
- Every behaviour-changing branch adds a changeset (`npx changeset`; package `whiteboard-skills`): patch = wording/pruning, minor = new skill or new rung, major = removed or renamed skill.
- Releasing: `GITHUB_TOKEN=$(gh auth token) npx changeset version`, commit, `git tag v<version>`, `gh release create v<version>` with the new CHANGELOG section as notes. Installed users then pick up the release via `npx skills update`.
```

- [ ] **Step 2: Commit**

```bash
git add CLAUDE.md && git commit -m "docs: add repo invariants for skills, canon, and releases"
```

---

### Task 3: Pruning pass — single-source the brief mapping, cut no-ops

**Files:**
- Modify: `skills/design/ux-flow/SKILL.md`, `skills/design/ui-craft/SKILL.md`, `skills/design/whiteboard-me/SKILL.md`, `skills/design/whiteboard-flow/SKILL.md`, `skills/design/whiteboard-ui/SKILL.md`, `skills/design/update-canon/SKILL.md`, `skills/design/ux-flow/references/flow-canon.md`
- Create: `.changeset/prune-brief-mapping.md`

**Interfaces:**
- Consumes: CLAUDE.md invariants (Task 2). Produces: the "brief-section mapping lives only in flow-canon.md" state that Task 4/5 skill Exits rely on.

The brief-section mapping (which sections a full/flow-only/UI-only session writes) currently appears in **four** places: both wrappers, both discipline Exits, and flow-canon.md. The output path `docs/design/<feature>-brief.md` appears in both whiteboard-me and flow-canon.md. After this task both live only in flow-canon.md's Design Brief Format.

- [ ] **Step 1: Edit `skills/design/ux-flow/SKILL.md`** — two exact replacements:

Replace:
```
- One question at a time. Wait for the answer before continuing — multiple questions at once are bewildering.
```
with:
```
- One question at a time; wait for the answer before continuing.
```

Replace:
```
in a flow-only session, write brief sections 1–3 and 5–7 per the Design Brief Format in `references/flow-canon.md`.
```
with:
```
in a flow-only session, write the flow-only brief per the Design Brief Format in `references/flow-canon.md`.
```

- [ ] **Step 2: Edit `skills/design/ui-craft/SKILL.md`** — one exact replacement:

Replace:
```
in a UI-only session, write brief sections 4–7 per the Design Brief Format in `ux-flow/references/flow-canon.md`.
```
with:
```
in a UI-only session, write the UI-only brief per the Design Brief Format in `ux-flow/references/flow-canon.md`.
```

- [ ] **Step 3: Replace the body (below frontmatter) of `skills/design/whiteboard-me/SKILL.md`** with:

```markdown
Run a `ux-flow` session, then a `ui-craft` session. Then write the full-session brief per the Design Brief Format in `ux-flow`'s `references/flow-canon.md`.
```

- [ ] **Step 4: Replace the body of `skills/design/whiteboard-flow/SKILL.md`** with:

```markdown
Run a `ux-flow` session. Then write the flow-only brief per the Design Brief Format in `ux-flow`'s `references/flow-canon.md`.
```

- [ ] **Step 5: Replace the body of `skills/design/whiteboard-ui/SKILL.md`** with:

```markdown
Run a `ui-craft` session. Then write the UI-only brief per the Design Brief Format in `ux-flow`'s `references/flow-canon.md`.
```

- [ ] **Step 6: Edit `skills/design/ux-flow/references/flow-canon.md`** — make the Design Brief Format the single source. Replace its last line:

```
Flow-only sessions write sections 1–3 + 5–7; UI-only sessions write 4–7.
```
with:
```
Full sessions write all 7 sections; flow-only sessions write sections 1–3 + 5–7; UI-only sessions write sections 4–7.
```

- [ ] **Step 7: Edit `skills/design/update-canon/SKILL.md`** — the reference-file list duplicates `sources.md`'s Feeds column. Replace:

```
2. Fetch every source URL. For each, note guidance that is new, changed, or deprecated relative to the reference file named in its **Feeds** column (`ux-flow/references/flow-canon.md`, `ux-flow/references/modern-ux.md`, `ui-craft/references/ui-canon.md`).
```
with:
```
2. Fetch every source URL. For each, note guidance that is new, changed, or deprecated relative to the reference file named in its **Feeds** column.
```

- [ ] **Step 8: Verify single-sourcing**

```bash
grep -rn "sections 1–3\|sections 4–7\|all 7 sections\|docs/design/<feature>" skills/
```

Expected: hits ONLY in `skills/design/ux-flow/references/flow-canon.md`.

```bash
grep -rn "4.5:1\|400ms\|200ms\|24×24\|150–300" skills/ | grep -v flow-canon | grep -v ui-canon | grep -v modern-ux
```

Expected: hits only in `ux-flow/SKILL.md` step-5 citation line and `ui-craft/SKILL.md` motion line (pre-existing, consistent values) — no NEW occurrences, no conflicting values anywhere.

- [ ] **Step 9: Write `.changeset/prune-brief-mapping.md`**

```markdown
---
"whiteboard-skills": patch
---

Pruning pass: the brief-section mapping and brief output path now live only in the Design Brief Format (`ux-flow/references/flow-canon.md`); wrappers and Exit sections point there instead of restating them. Cut no-op justification prose from the grill rules.
```

- [ ] **Step 10: Commit**

```bash
git add skills/ .changeset/prune-brief-mapping.md
git commit -m "refactor(skills): single-source brief mapping and cut no-ops"
```

---

### Task 4: design-review skill

**Files:**
- Create: `skills/design/design-review/SKILL.md`, `.changeset/add-design-review.md`

**Interfaces:**
- Consumes: `ux-flow/references/flow-canon.md`, `ux-flow/references/modern-ux.md`, `ui-craft/references/ui-canon.md` via relative path `../<skill>/references/...` (works in-repo and when skills are installed side-by-side in `~/.claude/skills/`).
- Produces: model-invoked discipline `design-review`, no wrapper (typed directly as `/design-review`), no references/ of its own. Task 6 lists it in the README under Model-invoked with an install-dependency note.

Run this task in parallel with Task 5 — disjoint files; commit immediately, no stash/restore.

- [ ] **Step 1: Write `skills/design/design-review/SKILL.md`**

```markdown
---
name: design-review
description: Audit an existing screen, flow, or component against the whiteboard canon — a principles-cited heuristic evaluation with severity-ranked findings. Use when the user asks to review, audit, or critique existing UI or UX, says "design review", "why does this feel off", "accessibility audit", or when UI was generated without a whiteboard session.
---

# Design Review

The retrospective counterpart to `ux-flow` and `ui-craft`: those interrogate before anything is built; this audits what already exists. Requires both installed — read `../ux-flow/references/flow-canon.md`, `../ux-flow/references/modern-ux.md`, and `../ui-craft/references/ui-canon.md` in full before auditing.

## Scope first

Establish from the codebase, or by asking one question at a time:

1. **Surface** — which screens or flows are under review, and what outcome the user hires them for. (Cooper: goals not tasks.)
2. **Evidence** — audit the real thing: rendered UI or screenshots first, source code second. Never audit from code alone when the UI can be seen.
3. **Depth** — quick pass (hard gates + top findings) or full audit (every sweep below).

## Sweep order

Walk in order; earlier sweeps often explain later findings.

1. **Flow** — challenge each step's right to exist; hunt excise (taps, dialogs, re-entry serving the system's bookkeeping, not the user's goal); check both gulfs per screen: can they tell what to do, and tell what happened? (Cooper: excise; Norman: two gulfs; Tesler's Law; WCAG 3.3.7 Redundant Entry.)
2. **States** — every screen: empty, loading, error, success all designed? Empty states carry a CTA; loading covered by skeleton or optimistic UI, no bare spinner past 1s. (Refactoring UI: empty states are a feature; Doherty <400ms; INP <200ms.)
3. **Errors** — plain language, precise problem, constructive fix; reversible over confirmed; never blaming. (Nielsen #5/#9; Norman: slips vs mistakes.)
4. **Hierarchy & emphasis** — exactly one primary action per screen; hierarchy via weight and color, not size alone; spacing does the grouping before borders; diagnose "looks off" in order: spacing → alignment → contrast → color. (Refactoring UI; Von Restorff; Proximity.)
5. **Token discipline** — raw hex in components, off-scale spacing, one-off radii or shadows: each is a finding. Dark mode designed in pairs, never inverted. (M3 tokens; shadcn norm.)
6. **Hard gates** — walk the table under `## Hard Gates` in `ui-canon.md`; every row gets an explicit pass/fail verdict. Gates are non-negotiable: flag violations and propose the nearest compliant alternative.
7. **AI-product sweep** (only if the surface involves AI) — modality fit, streaming states, regenerate/undo/citations for probabilistic output, escape hatches from open input, agentic transparency. (modern-ux.md.)

## Findings

Every finding carries: severity, screen, a one-line defect, the principle violated (inline citation), and a concrete fix — never "improve X".

- **Blocker** — a hard-gate failure, or a broken gulf: the user cannot proceed or cannot tell what happened.
- **Major** — a canon violation that costs task success or trust: a missing state, a destructive action without recovery, excise on the critical path.
- **Minor** — a canon violation with a workaround: off-scale spacing, weak hierarchy, inconsistent wording.
- **Polish** — an inconsistency a careful user would notice: mismatched radii, uneven padding.

## Exit

Write the report to `docs/design/<surface>-review.md`: a summary paragraph, findings grouped by severity, and the hard-gates table with verdicts. The review is complete only when every hard-gate row has a verdict and every screen in scope has all four states accounted for — anything skipped is listed under "Not reviewed", never silently dropped.
```

- [ ] **Step 2: Verify frontmatter and cross-skill paths**

```bash
head -4 skills/design/design-review/SKILL.md | grep -c "name: design-review"
ls skills/design/design-review/../ux-flow/references/flow-canon.md skills/design/design-review/../ui-craft/references/ui-canon.md
```

Expected: `1`, then both paths listed (relative traversal resolves in-repo).

- [ ] **Step 3: Write `.changeset/add-design-review.md`**

```markdown
---
"whiteboard-skills": minor
---

Add the **`design-review`** skill — the retrospective counterpart to `ux-flow`/`ui-craft`. A principles-cited heuristic audit of existing UI: flow and excise sweep, four-states check, hierarchy and token discipline, the WCAG 2.2 hard-gates table with explicit verdicts, and severity-ranked findings (blocker/major/minor/polish), written to `docs/design/<surface>-review.md`. Requires `ux-flow` and `ui-craft` installed — it reads their canon.
```

- [ ] **Step 4: Commit**

```bash
git add skills/design/design-review/ .changeset/add-design-review.md
git commit -m "feat(design-review): add retrospective design-audit discipline"
```

---

### Task 5: copy-craft skill

**Files:**
- Create: `skills/design/copy-craft/SKILL.md`, `skills/design/copy-craft/references/copy-canon.md`, `.changeset/add-copy-craft.md`
- Modify: `skills/design/update-canon/references/sources.md` (Feeds column, two rows)

**Interfaces:**
- Produces: model-invoked discipline `copy-craft` with its own canon reference (stamped `canon-version: 2026-07` like all others). Task 6 lists it in the README under Model-invoked.

Run this task in parallel with Task 4 — disjoint files; commit immediately, no stash/restore.

- [ ] **Step 1: Write `skills/design/copy-craft/references/copy-canon.md`**

```markdown
> canon-version: 2026-07
> Distilled UX-writing canon. Read in full before running a copy-craft interrogation.

# Copy Canon

## Voice & register
- **One voice, tuned tone** — voice (the product's character) stays constant; tone flexes with the moment: neutral in forms, warmer in success, calmest in errors. (NN/g: tone-of-voice dimensions.)
- **Speak the user's language** — real-world words from the user's domain, never internal jargon or system terms ("payment method", not "tender type"). (Nielsen #2.)
- **Front-load meaning** — users scan; the first two words of any heading, label, or link carry the meaning. (Krug: design for scanning.)
- **Omit needless words** — cut half the words, then half of what's left; happy-talk intros and instructions nobody reads go first. (Krug.)
- **Sentence case everywhere** — labels, buttons, headings; Title Case slows scanning and ALL CAPS reads as shouting.

## Labels & actions
- **Buttons are verbs** — a button says what it does: "Save changes", "Delete project" — never "Submit", "OK", or "Yes"/"No".
- **Label the outcome, not the mechanism** — "Get receipt" beats "Generate PDF export". (Cooper: goals not tasks.)
- **Links self-describe** — never "click here"; the link text alone states the destination, because screen-reader users navigate by link list. (WCAG 2.4.4.)
- **Trigger matches destination** — the words on the control match the title of what it opens; every page is named exactly what the user clicked. (Krug; Jakob's Law.)

## Errors
- **Anatomy: what happened → why → how to fix** — every error states the problem precisely, in plain language, with a constructive next step; never a bare code. (Nielsen #9.)
- **Never blame the user** — the software failed to accept something; the user did nothing wrong. No "invalid input", no "you entered". (Cooper: never make users feel stupid.)
- **No alarm theatrics** — no exclamation marks, no all-caps, no "FATAL"; calm copy is what a stressed user can actually read.
- **Errors name the field and the fix in text** — color or an icon alone never carries the error. (WCAG 3.3.1/3.3.3/1.4.1.)

## States
- **Empty states onboard** — say what belongs here and give the CTA that creates it; a blank table is a dead end. (Refactoring UI: empty states are a feature.)
- **Loading copy is honest** — say what is happening ("Importing 240 rows…"), never a bare "Please wait".
- **Success confirms the consequence** — state what changed and what is now possible ("Invoice sent to anna@…"), not just "Done". (Norman: feedback; Peak-End Rule.)

## Confirmations & destruction
- **State the consequence, not the question** — "Delete 3 files? They can't be recovered." — never a bare "Are you sure?". (Norman: reversibility.)
- **Confirmation buttons repeat the verb** — "Delete files" / "Cancel", never "Yes"/"No"; each button must be readable without the question above it.
- **Prefer undo to confirm** — where the action is reversible, do it and offer undo instead of interrupting. (Cooper: do, don't ask.)

## Accessibility gates for copy
| Gate | Rule | Source |
|---|---|---|
| Labels & instructions | every input has a visible label or instruction | WCAG 3.3.2 |
| Headings & labels | describe topic or purpose | WCAG 2.4.6 |
| Link purpose | clear from the link text alone | WCAG 2.4.4 |
| Error identification | error described in text, offending item identified | WCAG 3.3.1 |
| Error suggestion | a fix is suggested whenever one is known | WCAG 3.3.3 |
| Redundant entry | never re-ask what the flow already knows | WCAG 3.3.7 |
| Page titles | every page titled with its purpose | WCAG 2.4.2 |
```

- [ ] **Step 2: Write `skills/design/copy-craft/SKILL.md`**

```markdown
---
name: copy-craft
description: Interrogate and rewrite a surface's microcopy — labels, buttons, errors, empty states, confirmations — against a cited UX-writing canon. Use when the user is writing or reviewing interface text, says "microcopy", "UX writing", "error message", "button label", "what should this say", or when generated UI ships with placeholder copy.
---

# Copy Craft Interrogation

Read `references/copy-canon.md` in full before touching any copy.

## Grill rules

One question at a time, each with a recommended answer, each citing its principle inline; read the actual surface (code or screenshots) instead of asking when possible; rewrite nothing until the voice rung is locked.

## Interrogation ladder

Walk in order; skip rungs the user has already settled.

1. **Voice** — three adjectives for the product's character, and who the copy speaks to. Locked once; every later rung inherits it. (One voice, tuned tone.)
2. **Inventory** — collect every string on the surface under review: headings, labels, buttons, links, errors, empty/loading/success states, confirmations. Nothing is rewritten before everything is seen.
3. **Actions pass** — every button a verb naming its outcome; every link self-describing; triggers match destinations. (Buttons are verbs; WCAG 2.4.4.)
4. **Errors pass** — rebuild each error as what happened → why → how to fix, calm and blameless. (Nielsen #9; Cooper.)
5. **States pass** — empty states onboard with a CTA, loading copy honest, success copy confirms the consequence. (copy-canon: States.)
6. **Confirmations pass** — consequences stated, buttons repeat the verb, undo preferred over confirm. (Norman: reversibility; Cooper: do, don't ask.)
7. **Word-count pass** — cut half, then half again, across everything that survived. (Krug.)

## Exit

Present a copy table — surface | current | proposed | principle — covering every string from the inventory; strings deliberately unchanged appear as "keep" with a reason. Walk the accessibility-gates table in `references/copy-canon.md` and give each row a verdict. Apply the rewrites only after explicit approval.
```

- [ ] **Step 3: Edit `skills/design/update-canon/references/sources.md`** — wire copy-canon into the Feeds column. Two exact replacements:

Replace:
```
| NN/g articles feed | https://www.nngroup.com/articles/ | Evidence-based UX; annual State of UX | modern-ux.md |
```
with:
```
| NN/g articles feed | https://www.nngroup.com/articles/ | Evidence-based UX; annual State of UX; UX writing | modern-ux.md + copy-canon.md |
```

Replace:
```
| W3C WCAG overview | https://www.w3.org/WAI/standards-guidelines/wcag/ | WCAG 2.2 → 3.0 progress | flow-canon.md + ui-canon.md |
```
with:
```
| W3C WCAG overview | https://www.w3.org/WAI/standards-guidelines/wcag/ | WCAG 2.2 → 3.0 progress | flow-canon.md + ui-canon.md + copy-canon.md |
```

- [ ] **Step 4: Verify canon-version consistency**

```bash
grep -rn "canon-version" skills/ | grep -v "2026-07" | wc -l
```

Expected: `0`.

- [ ] **Step 5: Write `.changeset/add-copy-craft.md`**

```markdown
---
"whiteboard-skills": minor
---

Add the **`copy-craft`** skill — a microcopy interrogation discipline with its own distilled UX-writing canon (`references/copy-canon.md`): voice, verbs-as-buttons, error anatomy (what happened → why → fix), state copy, consequence-stating confirmations, a Krug word-count pass, and a WCAG copy-gates table. Exits with a full surface | current | proposed | principle table.
```

- [ ] **Step 6: Commit**

```bash
git add skills/design/copy-craft/ skills/design/update-canon/references/sources.md .changeset/add-copy-craft.md
git commit -m "feat(copy-craft): add microcopy interrogation discipline with copy canon"
```

---

### Task 6: README catalog, badge, and installer verification

**Files:**
- Modify: `README.md`

**Interfaces:**
- Consumes: skill names/descriptions exactly as committed in Tasks 4–5.

- [ ] **Step 1: Add the skills.sh badge** — in `README.md`, insert directly under the `# whiteboard` heading (before the install code block):

```markdown
[![skills.sh](https://skills.sh/b/Damsara/whiteboard)](https://skills.sh/Damsara/whiteboard)
```

- [ ] **Step 2: Extend the Model-invoked section** — after the existing `ui-craft` bullet in `## Model-invoked skills`, append:

```markdown
- **design-review** — the retrospective counterpart: a principles-cited audit of existing UI, from excise hunt to the WCAG hard-gates table, with severity-ranked findings. Requires `ux-flow` and `ui-craft` installed — it reads their canon.
- **copy-craft** — microcopy interrogation: labels, errors, empty states, and confirmations rewritten against a cited UX-writing canon.
```

- [ ] **Step 3: Mention the changelog in `## Staying current`** — replace the sentence:

```
We run it periodically and commit; you get updates with:
```
with:
```
We run it periodically and commit; every release is documented in [`CHANGELOG.md`](./CHANGELOG.md) and published as a GitHub release. You get updates with:
```

- [ ] **Step 4: Installer discovery check (all 8 skills)**

```bash
npx skills@latest add ./ --list
```

Expected: lists exactly 8 skills — `ux-flow`, `ui-craft`, `design-review`, `copy-craft`, `whiteboard-me`, `whiteboard-flow`, `whiteboard-ui`, `update-canon` — with their descriptions. Installs nothing.

- [ ] **Step 5: Commit**

```bash
git add README.md
git commit -m "docs: add design-review and copy-craft to catalog with skills.sh badge"
```

---

### Task 7: Landing & release (CONFIRM GATE)

**Files:**
- Modify (via `changeset version`): `package.json`, `CHANGELOG.md`; deletes `.changeset/*.md` entries

**Interfaces:**
- Consumes: both branches complete; the three changeset files from Tasks 3–5 → version lands at `0.2.0`.

- [ ] **Step 1: STOP — confirm with the user before anything leaves the machine.** Present the two branches and ask how to land:
  - **(a) PR flow:** push both branches, open PR 1 (`chore/versioning-and-invariants` → `main`) and PR 2 (`feat/design-review-and-copy-craft` → `main`, retargeted after PR 1 merges), squash-merge in order.
  - **(b) Direct:** merge both into local `main`, push `main`.

- [ ] **Step 2 (after merge, on `main`): Version**

```bash
git checkout main && git pull
GITHUB_TOKEN=$(gh auth token) npx changeset version
```

Expected: `package.json` version → `0.2.0`; `CHANGELOG.md` gains a `## 0.2.0` section with the three entries; `.changeset/*.md` (except README/config) deleted.

- [ ] **Step 3: Commit the version bump** (on a branch if PR flow was chosen, directly if user approved direct pushes):

```bash
git add package.json CHANGELOG.md .changeset/
git commit -m "chore: version 0.2.0"
```

- [ ] **Step 4: Tag and release (only with push approval from Step 1)**

```bash
git tag v0.2.0 && git push && git push --tags
gh release create v0.2.0 --title "v0.2.0" --notes "$(awk '/^## 0.2.0/{flag=1;next}/^## /{flag=0}flag' CHANGELOG.md)"
```

Expected: tag and release visible on GitHub; release notes show the three changeset entries.

---

## Self-Review

- **Coverage:** changesets (T1), CLAUDE.md (T2), pruning (T3), design-review (T4), copy-craft (T5), README (T6), release (T7) — all six approved roadmap items present. In-progress bucket ships as convention-only in CLAUDE.md (YAGNI: no empty dir).
- **Placeholders:** none — every created file's full content is inline; every edit is an exact old→new pair.
- **Consistency:** package name `whiteboard-skills` used in T1 config and all three changeset files; `canon-version: 2026-07` on copy-canon matches existing refs; hard numbers in design-review/copy-craft citations match the Global Constraints list; skill count in T6 verification (8) = 6 existing + 2 new.
