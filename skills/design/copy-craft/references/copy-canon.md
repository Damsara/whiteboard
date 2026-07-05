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
