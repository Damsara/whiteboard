# whiteboard — repo invariants

Skills live under `skills/design/<name>/SKILL.md` (+ `references/` where the skill carries canon). Draft skills incubate in `skills/in-progress/<name>/` — never listed in the README and never announced in a changeset until promoted to `skills/design/`.

## Skill rules

- Every `SKILL.md` has `name` (lowercase-hyphen, matching its folder) and a single-line `description` under 1536 chars.
- **Disciplines** (`ux-flow`, `ui-craft`, `design-review`, `copy-craft`, `token-drift`) are model-invoked: no `disable-model-invocation`; the description is a routing rule with trigger phrases, one trigger per genuinely distinct branch.
- **Wrappers** (`whiteboard-*`) and **tools** (`update-canon`, `setup-whiteboard`, `ask-whiteboard`) are user-invoked: `disable-model-invocation: true`, human-facing one-line description. Wrapper bodies are ≤ 10 lines of pure orchestration — a wrapper that grows content is a bug; move the content into the discipline it wraps.
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

- Every promoted skill has a linked entry in the top-level `README.md`'s "Which skill do I use?" tables, grouped by situation (starting new / something feels wrong / utilities), kept current on add/rename/remove. Typed skills carry the `/` prefix; auto-firing ones don't.
- `ask-whiteboard` is the router over every skill. Whenever a skill is added, renamed, removed, or changes what it's for, re-sync the router's map — a router that lies is worse than none.
- Every behaviour-changing branch adds a changeset (`npx changeset`; package `whiteboard-skills`): patch = wording/pruning, minor = new skill or new rung, major = removed or renamed skill.
- Releasing: `GITHUB_TOKEN=$(gh auth token) npx changeset version`, commit, `git tag v<version>`, `gh release create v<version>` with the new CHANGELOG section as notes. Installed users then pick up the release via `npx skills update`.
