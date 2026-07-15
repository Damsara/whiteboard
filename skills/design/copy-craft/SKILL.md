---
name: copy-craft
description: Interrogate and rewrite a surface's microcopy — labels, buttons, errors, empty states, confirmations — against a cited UX-writing canon. Use when the user is writing or reviewing interface text, says "microcopy", "UX writing", "error message", "button label", "what should this say", or when generated UI ships with placeholder copy.
---

# Copy Craft Interrogation

Read `references/copy-canon.md` and `../ux-flow/references/principle-map.md` in full before touching any copy. If `docs/design/whiteboard-setup.md` exists, read it too.

## Grill rules

One question at a time, each with a recommended answer, each citing its principle inline; read the actual surface (code or screenshots) instead of asking when possible; rewrite nothing until the voice rung is locked.

## Interrogation ladder

Walk in order; skip rungs the user has already settled.

1. **Voice** — three adjectives for the product's character, and who the copy speaks to. Locked once; every later rung inherits it. (One voice, tuned tone. Apply Mental Model or Jakob's Law when domain vocabulary or conventions are unfamiliar; name Cognitive Bias and run the ethics check when the voice is persuasive.)
2. **Inventory** — collect every string on the surface under review: headings, labels, buttons, links, errors, empty/loading/success states, confirmations. Nothing is rewritten before everything is seen. (Working Memory; Selective Attention; Serial Position Effect.)
3. **Grouping pass** — keep labels, instructions, values, and actions adjacent when they describe one another; use a visible boundary when wording alone would leave the relationship ambiguous. (Law of Proximity; Law of Common Region.)
4. **Actions pass** — every button a verb naming its outcome; every link self-describing; triggers match destinations; the primary action is easy to find. (Hick's Law, Von Restorff, or Jakob's Law when choice, salience, or convention is in scope; WCAG 2.4.4.)
5. **Errors pass** — rebuild each error as what happened → why → how to fix, accept recoverable input, and never exploit fear or confusion. (Apply Postel's Law to variable input, Tesler's Law to unavoidable complexity, and name Cognitive Bias plus the ethics check when framing could pressure the user; Nielsen #9; Cooper.)
6. **States pass** — empty states onboard with a CTA, loading copy is honest, progress supports unfinished work, and success copy confirms the consequence. (Apply Doherty Threshold to waiting, Goal-Gradient Effect or Zeigarnik Effect to progress, and Peak-End Rule to emotionally salient endings; copy-canon: States.)
7. **Confirmations pass** — consequences stated, buttons repeat the verb, undo preferred over confirm, and unnecessary words or choices are removed. (Occam's Razor; apply Choice Overload or Paradox of the Active User when the confirmation adds decisions or assumes upfront learning; Norman: reversibility; Cooper: do, don't ask.)
8. **Word-count pass** — cut half, then half again; chunk what remains into scannable units and keep the user's model intact. (Occam's Razor; Chunking; Cognitive Load; Prägnanz; Miller's Law; Krug.)
9. **Principle fit sweep** — use `../ux-flow/references/principle-map.md` to list each triggered language principle in the copy table; mark non-applicable laws instead of forcing them into a rewrite.

## Exit

Present a copy table — surface | current | proposed | principle — covering every string from the inventory; strings deliberately unchanged appear as "keep" with a reason. Include a principle-coverage note for triggered laws and “not applicable” for the rest. Walk the accessibility-gates table in `references/copy-canon.md` and give each row a verdict. Apply the rewrites only after explicit approval.
