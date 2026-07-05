---
"whiteboard-skills": minor
---

Add the **`token-drift`** skill — a design-system violation scanner. Establishes the token truth by cascade (brief token table → codebase token config → refuse and run `ui-craft`), then sweeps for raw color literals, off-scale spacing, rogue type, one-off radii/shadows, unpaired dark mode, and hand-rolled states. Reports `file:line | current | nearest token | rule` and applies fixes only on approval. Requires `ui-craft` installed.
