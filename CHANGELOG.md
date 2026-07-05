# whiteboard-skills

## 0.3.0

### Minor Changes

- [#5](https://github.com/Damsara/whiteboard/pull/5) [`f408f2e`](https://github.com/Damsara/whiteboard/commit/f408f2eab54d5ff19121d54214cc991edc4d96cb) Thanks [@Damsara](https://github.com/Damsara)! - Add the **`setup-whiteboard`** skill — lean one-time per-repo configuration: docs home, platform targets, WCAG target, and the token source of truth, written to `docs/design/whiteboard-setup.md`. Every discipline now reads the setup file when present; all defaults survive without it, so setup stays optional.

- [#5](https://github.com/Damsara/whiteboard/pull/5) [`f408f2e`](https://github.com/Damsara/whiteboard/commit/f408f2eab54d5ff19121d54214cc991edc4d96cb) Thanks [@Damsara](https://github.com/Damsara)! - Add the **`token-drift`** skill — a design-system violation scanner. Establishes the token truth by cascade (brief token table → codebase token config → refuse and run `ui-craft`), then sweeps for raw color literals, off-scale spacing, rogue type, one-off radii/shadows, unpaired dark mode, and hand-rolled states. Reports `file:line | current | nearest token | rule` and applies fixes only on approval. Requires `ui-craft` installed.

## 0.2.0

### Minor Changes

- [#3](https://github.com/Damsara/whiteboard/pull/3) [`673eca9`](https://github.com/Damsara/whiteboard/commit/673eca960f78b0434caf3217e1c69ed33f9c58eb) Thanks [@Damsara](https://github.com/Damsara)! - Add the **`copy-craft`** skill — a microcopy interrogation discipline with its own distilled UX-writing canon (`references/copy-canon.md`): voice, verbs-as-buttons, error anatomy (what happened → why → fix), state copy, consequence-stating confirmations, a Krug word-count pass, and a WCAG copy-gates table. Exits with a full surface | current | proposed | principle table.

- [#3](https://github.com/Damsara/whiteboard/pull/3) [`673eca9`](https://github.com/Damsara/whiteboard/commit/673eca960f78b0434caf3217e1c69ed33f9c58eb) Thanks [@Damsara](https://github.com/Damsara)! - Add the **`design-review`** skill — the retrospective counterpart to `ux-flow`/`ui-craft`. A principles-cited heuristic audit of existing UI: flow and excise sweep, four-states check, hierarchy and token discipline, the WCAG 2.2 hard-gates table with explicit verdicts, and severity-ranked findings (blocker/major/minor/polish), written to `docs/design/<surface>-review.md`. Requires `ux-flow` and `ui-craft` installed — it reads their canon.

### Patch Changes

- [#1](https://github.com/Damsara/whiteboard/pull/1) [`98ae10d`](https://github.com/Damsara/whiteboard/commit/98ae10dbe098cf2b57063993864e844cfb6061c5) Thanks [@Damsara](https://github.com/Damsara)! - Pruning pass: the brief-section mapping and brief output path now live only in the Design Brief Format (`ux-flow/references/flow-canon.md`); wrappers and Exit sections point there instead of restating them. Cut no-op justification prose from the grill rules.

## 0.1.0

### Minor Changes

- Initial release ([v0.1.0](https://github.com/Damsara/whiteboard/releases/tag/v0.1.0)): six skills — the `ux-flow` and `ui-craft` interrogation disciplines with distilled, cited canon (`canon-version: 2026-07`); the `whiteboard-me`, `whiteboard-flow`, and `whiteboard-ui` command wrappers; and the `update-canon` maintainer tool.
