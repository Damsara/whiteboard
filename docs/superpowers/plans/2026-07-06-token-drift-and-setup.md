# token-drift + setup-whiteboard Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add two skills to `Damsara/whiteboard`: `token-drift` (model-invoked design-system violation scanner with a cascade truth source) and `setup-whiteboard` (user-invoked lean per-repo config writing `docs/design/whiteboard-setup.md`), wired into the existing disciplines. Release as 0.3.0.

**Architecture:** Unchanged layout. `token-drift` leans on `ui-craft`'s canon (install dependency, like `design-review`); truth cascade: brief token table → codebase token config → refuse-and-run-ui-craft. `setup-whiteboard` writes a key/value config file that every discipline reads when present and every default survives without — setup stays optional everywhere.

**Tech Stack:** Markdown + YAML frontmatter, git, `gh` CLI, changesets, skills.sh installer.

## Global Constraints

- Repo root: `/Users/damsaraperera/Desktop/Projects/whiteboard`, branch `feat/token-drift-and-setup` cut from `main` (currently `a3cc485`, v0.2.0). NEVER commit on main; NEVER stash/restore.
- Obey the repo's `CLAUDE.md` invariants (frontmatter rules, single source of truth, no-op hunt, changeset per behaviour change).
- Every SKILL.md: `name` lowercase-hyphen matching folder; single-line `description` < 1536 chars. `setup-whiteboard` adds `disable-model-invocation: true`; `token-drift` does not.
- House voice: terse imperative rungs, inline principle citations in parentheses, leading words (truth, sweep, drift, lock).
- Config file contract (both tasks depend on it): `docs/design/whiteboard-setup.md`, a short key/value table with keys **Docs home**, **Platforms**, **WCAG target**, **Token source**. Absent file = all defaults apply.

---

### Task 1: setup-whiteboard skill + wiring into existing skills

**Files:**
- Create: `skills/design/setup-whiteboard/SKILL.md`, `.changeset/add-setup-whiteboard.md`
- Modify: `CLAUDE.md`, `skills/design/ux-flow/SKILL.md`, `skills/design/ui-craft/SKILL.md`, `skills/design/design-review/SKILL.md`, `skills/design/copy-craft/SKILL.md`, `skills/design/ux-flow/references/flow-canon.md`

**Interfaces:**
- Produces: the `docs/design/whiteboard-setup.md` contract (Global Constraints) that Task 2's token-drift reads for docs home and token source.

Run in parallel with Task 2 — disjoint files; commit immediately.

- [ ] **Step 1: Write `skills/design/setup-whiteboard/SKILL.md`**

```markdown
---
name: setup-whiteboard
description: One-time per-repo configuration for whiteboard skills — where briefs live, platform targets, WCAG target, and the token source of truth.
disable-model-invocation: true
---

# Setup Whiteboard

Configure this repo for whiteboard sessions. Ask one question at a time with a recommended default; explore the codebase first and ask only what it can't answer.

1. **Docs home** — where briefs and reports are written. Default: `docs/design/`.
2. **Platforms** — web, iOS, Android, desktop; which window-size classes matter.
3. **WCAG target** — 2.2 AA is the default and the canon's floor; record anything stricter.
4. **Token source** — where the design system's tokens live: Tailwind config, CSS variables/shadcn theme, Flutter `ThemeData`, or a whiteboard brief's token table. If none exists yet, record "none — run /whiteboard-ui first".

Write the answers to `docs/design/whiteboard-setup.md` as a key/value table (keys exactly: Docs home, Platforms, WCAG target, Token source) with the date. Skills read this file when present; every default above applies when it is absent, so setup is optional everywhere.
```

- [ ] **Step 2: Edit `CLAUDE.md`** — two exact replacements:

Replace:
```
- **Disciplines** (`ux-flow`, `ui-craft`, `design-review`, `copy-craft`) are model-invoked: no `disable-model-invocation`; the description is a routing rule with trigger phrases, one trigger per genuinely distinct branch.
```
with:
```
- **Disciplines** (`ux-flow`, `ui-craft`, `design-review`, `copy-craft`, `token-drift`) are model-invoked: no `disable-model-invocation`; the description is a routing rule with trigger phrases, one trigger per genuinely distinct branch.
```

Replace:
```
- **Wrappers** (`whiteboard-*`) and `update-canon` are user-invoked: `disable-model-invocation: true`, human-facing one-line description, body ≤ 10 lines of pure orchestration. A wrapper that grows content is a bug — move the content into the discipline it wraps.
```
with:
```
- **Wrappers** (`whiteboard-*`) and **tools** (`update-canon`, `setup-whiteboard`) are user-invoked: `disable-model-invocation: true`, human-facing one-line description. Wrapper bodies are ≤ 10 lines of pure orchestration — a wrapper that grows content is a bug; move the content into the discipline it wraps.
```

- [ ] **Step 3: Wire the four disciplines** — one exact replacement each (append the setup pointer to the read-first line):

`skills/design/ux-flow/SKILL.md` — replace:
```
Read `references/flow-canon.md` and `references/modern-ux.md` in full before asking anything.
```
with:
```
Read `references/flow-canon.md` and `references/modern-ux.md` in full before asking anything. If `docs/design/whiteboard-setup.md` exists, read it too.
```

`skills/design/ui-craft/SKILL.md` — replace:
```
Read `references/ui-canon.md` in full before asking anything.
```
with:
```
Read `references/ui-canon.md` in full before asking anything. If `docs/design/whiteboard-setup.md` exists, read it too.
```

`skills/design/design-review/SKILL.md` — replace:
```
Requires both installed — read `../ux-flow/references/flow-canon.md`, `../ux-flow/references/modern-ux.md`, and `../ui-craft/references/ui-canon.md` in full before auditing.
```
with:
```
Requires both installed — read `../ux-flow/references/flow-canon.md`, `../ux-flow/references/modern-ux.md`, and `../ui-craft/references/ui-canon.md` in full before auditing. If `docs/design/whiteboard-setup.md` exists, read it too.
```

`skills/design/copy-craft/SKILL.md` — replace:
```
Read `references/copy-canon.md` in full before touching any copy.
```
with:
```
Read `references/copy-canon.md` in full before touching any copy. If `docs/design/whiteboard-setup.md` exists, read it too.
```

- [ ] **Step 4: Edit `skills/design/ux-flow/references/flow-canon.md`** — brief path honors the docs home. Replace:

```
Write briefs to `docs/design/<feature>-brief.md` with exactly these sections:
```
with:
```
Write briefs to `docs/design/<feature>-brief.md` (or the Docs home set in `docs/design/whiteboard-setup.md`) with exactly these sections:
```

- [ ] **Step 5: Write `.changeset/add-setup-whiteboard.md`**

```markdown
---
"whiteboard-skills": minor
---

Add the **`setup-whiteboard`** skill — lean one-time per-repo configuration: docs home, platform targets, WCAG target, and the token source of truth, written to `docs/design/whiteboard-setup.md`. Every discipline now reads the setup file when present; all defaults survive without it, so setup stays optional.
```

- [ ] **Step 6: Verify and commit**

```bash
grep -c "whiteboard-setup.md" skills/design/ux-flow/SKILL.md skills/design/ui-craft/SKILL.md skills/design/design-review/SKILL.md skills/design/copy-craft/SKILL.md skills/design/ux-flow/references/flow-canon.md
```
Expected: `1` for each file.
```bash
git add skills/design/setup-whiteboard/ skills/design/ux-flow/ skills/design/ui-craft/ skills/design/design-review/SKILL.md skills/design/copy-craft/SKILL.md CLAUDE.md .changeset/add-setup-whiteboard.md
git commit -m "feat(setup-whiteboard): add per-repo config skill wired into disciplines"
```

---

### Task 2: token-drift skill

**Files:**
- Create: `skills/design/token-drift/SKILL.md`, `.changeset/add-token-drift.md`

**Interfaces:**
- Consumes: `../ui-craft/references/ui-canon.md` (install dependency) and the `docs/design/whiteboard-setup.md` contract from Global Constraints.

Run in parallel with Task 1 — disjoint files; commit immediately.

- [ ] **Step 1: Write `skills/design/token-drift/SKILL.md`**

```markdown
---
name: token-drift
description: Scan a codebase for design-system violations — raw hex, off-scale spacing, one-off radii and shadows — against the repo's locked token system. Use when the user asks to audit design tokens, says "token drift", "design-system violations", "inconsistent spacing", "hardcoded colors", or after generated UI lands without a token review.
---

# Token Drift

Read `../ui-craft/references/ui-canon.md` in full before scanning (requires `ui-craft` installed). If `docs/design/whiteboard-setup.md` exists, read it too.

## Establish the truth

The system to scan against, in cascade order — first hit wins:

1. **Brief** — the token decision table in the newest `*-brief.md` under the docs home (default `docs/design/`).
2. **Codebase config** — the repo's own token source: Tailwind config or theme, CSS custom properties or a shadcn theme, Flutter `ThemeData` or theme extensions, or named design-token files (the setup file's Token source, when set, names it).
3. **None** — stop and run a `ui-craft` session to lock a system first; scanning without a truth produces noise, not findings.

Restate the truth as a token table (color roles light+dark, spacing scale, type scale, radius and elevation scales) and get confirmation before scanning.

## Sweep

Scan every UI source file in scope. Each of these is a finding:

1. **Raw color values** — hex/rgb/hsl literals in components instead of a token role; grey text on colored backgrounds. (Token architecture, not raw values; no grey text on color.)
2. **Off-scale spacing** — margins, paddings, and gaps not on the locked scale, including Tailwind arbitrary values (`p-[13px]`) and magic-number `EdgeInsets`/`SizedBox`. (Constrained spacing scale.)
3. **Rogue type** — font sizes or weights outside the type scale's roles; hierarchy hand-rolled per screen. (Disciplined type scale.)
4. **One-off radii and shadows** — radius or shadow values not from the scales; nested corners that don't share a center. (Elevation is a fixed scale; concentric radii.)
5. **Unpaired dark mode** — values defined for light only, or dark derived by inversion instead of a designed pair. (Dark mode designed in pairs.)
6. **State drift** — hover/focus/press styles hand-rolled per component instead of the system's state layer. (State layers, not hand-rolled states.)

## Exit

Write the report to `<docs home>/token-drift-report.md`: the confirmed truth table, then a findings table — `file:line | current value | nearest token | rule` — grouped by sweep. Every scanned directory is listed; anything skipped appears under "Not scanned", never silently dropped. Offer to apply the substitutions, largest cluster first; change nothing without approval.
```

- [ ] **Step 2: Write `.changeset/add-token-drift.md`**

```markdown
---
"whiteboard-skills": minor
---

Add the **`token-drift`** skill — a design-system violation scanner. Establishes the token truth by cascade (brief token table → codebase token config → refuse and run `ui-craft`), then sweeps for raw color literals, off-scale spacing, rogue type, one-off radii/shadows, unpaired dark mode, and hand-rolled states. Reports `file:line | current | nearest token | rule` and applies fixes only on approval. Requires `ui-craft` installed.
```

- [ ] **Step 3: Verify and commit**

```bash
head -4 skills/design/token-drift/SKILL.md | grep -c "name: token-drift"
```
Expected: `1`.
```bash
git add skills/design/token-drift/ .changeset/add-token-drift.md
git commit -m "feat(token-drift): add design-system violation scanner"
```

---

### Task 3: README catalog + installer verification

**Files:**
- Modify: `README.md`

- [ ] **Step 1:** After the `copy-craft` bullet in `## Model-invoked skills`, append:

```markdown
- **[token-drift](./skills/design/token-drift/SKILL.md)** — design-system violation scanner: raw hex, off-scale spacing, rogue radii and shadows, reported against the repo's locked token truth. Requires `ui-craft` installed.
```

- [ ] **Step 2:** After the `/update-canon` bullet in `## User-invoked skills`, append:

```markdown
- **[/setup-whiteboard](./skills/design/setup-whiteboard/SKILL.md)** — optional one-time repo config: docs home, platforms, WCAG target, token source.
```

- [ ] **Step 3:** Verify installer discovers all 10 skills: `npx skills@latest add ./ --list` → 10 skills including `token-drift` and `setup-whiteboard`.

- [ ] **Step 4:** Commit: `git add README.md && git commit -m "docs: add token-drift and setup-whiteboard to catalog"`

---

### Task 4: Land & release 0.3.0

- [ ] Push branch, open PR (title `feat: add token-drift and setup-whiteboard skills`), squash-merge (now permitted by local settings; fall back to asking the user if the classifier still blocks).
- [ ] On updated main: branch `chore/release-0.3.0`, `GITHUB_TOKEN=$(gh auth token) npx changeset version` (expect 0.3.0), commit `chore: version 0.3.0`, push, PR, squash-merge.
- [ ] `git tag v0.3.0 && git push --tags`, then `gh release create v0.3.0 --title "v0.3.0"` with the 0.3.0 CHANGELOG section as notes.

## Self-Review

- Coverage: cascade truth (T2 Step 1), lean setup with exact config keys (T1 Step 1 + Global Constraints contract), wiring (T1 Steps 2–4), catalog (T3), release (T4).
- No placeholders; all file contents and old→new pairs inline.
- Consistency: config keys (Docs home/Platforms/WCAG target/Token source) identical in setup-whiteboard and token-drift; `token-drift` added to CLAUDE.md disciplines list; skill count 10 = 8 + 2.
