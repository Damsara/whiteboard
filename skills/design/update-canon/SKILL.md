---
name: update-canon
description: Refresh whiteboard's distilled UI/UX canon from its vetted source list. Maintainer tool — fetches each source, diffs against the reference files, proposes edits for approval.
disable-model-invocation: true
---

# Update Canon

1. Read `references/sources.md`.
2. Fetch every source URL. For each, note guidance that is new, changed, or deprecated relative to the reference file named in its **Feeds** column.
3. Present all proposed edits as one summarized diff — new principles, changed numbers/criteria, deprecated guidance — with the source URL for each. Apply nothing without explicit approval.
4. On approval: apply the edits, update the `canon-version: YYYY-MM` header line of every touched file to the current month, and add newly-discovered stable sources to `references/sources.md` (also subject to approval).
5. Remind the maintainer to commit and tag, so installed users can refresh via `npx skills update`.
