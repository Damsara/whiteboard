# whiteboard-skills

## 0.6.0

### Minor Changes

- [`9769751`](https://github.com/Damsara/whiteboard/commit/97697510c5b77c9907949e59289490dc1f5b1671) Thanks [@Damasu007](https://github.com/Damasu007)! - Add a complete Laws of UX application matrix and route relevant principles through each design discipline.

### Patch Changes

- [`28fef4e`](https://github.com/Damsara/whiteboard/commit/28fef4ec4809dcc020451034c81bd1fbcc45bc2f) Thanks [@Damasu007](https://github.com/Damasu007)! - Make pnpm the canonical repository package manager and add automated guardrails for skill contracts, canon references, packaging, and release metadata.

## 0.5.0

### Minor Changes

- [#11](https://github.com/Damsara/whiteboard/pull/11) [`79cfc6a`](https://github.com/Damsara/whiteboard/commit/79cfc6a86defc84d9bc0ee100b95da543b6bcdea) Thanks [@Damsara](https://github.com/Damsara)! - One-word install: `npx whiteboard-skills`. The package now ships a bin that delegates to the skills.sh installer against `Damsara/whiteboard`, forwarding any flags (`--list`, `--skill`, `--agent`). The standard `npx skills@latest add Damsara/whiteboard` form still works and is documented as the from-source alternative.

- [#10](https://github.com/Damsara/whiteboard/pull/10) [`85cf706`](https://github.com/Damsara/whiteboard/commit/85cf706deb51a526787227d97bb82af19c70e3b6) Thanks [@Damsara](https://github.com/Damsara)! - `ui-craft` now exits with a rendered style guide, not just a token table. The locked system is written as a self-contained HTML page beside the brief — color swatches, type scale at real sizes, spacing bars, radius/elevation on a sample card, light/dark toggle — so the confirmation gate is judged by eye, not by hex code. In environments that support publishing artifacts (Claude Code, Pro+ plans) the page is also published as a private shareable link; everywhere else the local file opens in any browser.

## 0.4.0

### Minor Changes

- [#7](https://github.com/Damsara/whiteboard/pull/7) [`3e208cd`](https://github.com/Damsara/whiteboard/commit/3e208cd7025c2d302d466d699bb56dddcacc9248) Thanks [@Damsara](https://github.com/Damsara)! - Add the **`ask-whiteboard`** skill — a router over the whole catalog. Places you on a map (building new → kickoff skills; something feels wrong → the audit skills; housekeeping → setup/canon), asks at most two placement questions, and disambiguates the confusable pairs (`design-review` vs `token-drift`, `whiteboard-ui` vs `token-drift`). Names exactly one skill and offers to run it.

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
