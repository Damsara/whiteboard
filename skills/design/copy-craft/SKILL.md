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
