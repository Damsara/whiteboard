> canon-version: 2026-07
> Distilled classic UX-flow canon. Read in full before running a ux-flow interrogation.

# Flow Canon

## Norman — The Design of Everyday Things
- **Signifiers over labels** — every interactive element must visibly signal how it's used; if it needs a "click here" label, the signifier failed.
- **Mapping** — controls should sit next to, or resemble, the thing they control (stove-burner rule), so the relationship is obvious without thought.
- **Feedback within the action** — every action gets immediate, proportionate confirmation of *what* happened, not just that something happened.
- **Conceptual model integrity** — the interface is the only place users learn how the system works; broken if they can't predict a control's effect before pressing it.
- **Bridge both gulfs** — check every screen for the Gulf of Execution (can they tell what to do?) and the Gulf of Evaluation (can they tell what happened?).
- **Knowledge in the world** — visible options, labels, and state beat anything a user has to memorize or recall from training.
- **Constrain wrong actions** — use physical, logical, semantic, or cultural constraints to make mistakes impossible, not just warned-against.
- **Slips vs. mistakes** — a slip is right intent/wrong action (prevent with constraints or confirmation); a mistake is wrong intent (fix the model, not the button).
- **Reversibility** — make actions undoable by default; where they can't be, require a confirmation that states the actual consequence, not "are you sure?"
- **Seven stages of action** — interrogate every flow step against goal → plan → specify → perform → perceive → interpret → compare.

## Nielsen — 10 Usability Heuristics (NN/g, 2024 revision)
- **Visibility of system status** — always surface what's happening via timely feedback: progress, loading, saved-state, current selection.
- **Match between system and real world** — speak the user's language, follow real-world conventions and ordering; no internal jargon.
- **User control and freedom** — give every unwanted state a clearly marked exit (undo, redo, cancel, back) without a lengthy process.
- **Consistency and standards** — the same word or action means the same thing everywhere; follow platform and industry conventions.
- **Error prevention** — eliminate error-prone conditions or confirm before commitment; prevention beats a good error message.
- **Recognition rather than recall** — keep options, actions, and needed info visible; never force users to remember something across screens.
- **Flexibility and efficiency of use** — provide accelerators (shortcuts, defaults, recents) invisible to novices but fast for experts.
- **Aesthetic and minimalist design** — every irrelevant unit of information competes with the relevant ones; cut it.
- **Help users recognize, diagnose, and recover from errors** — plain language, precise problem statement, a constructive next step, never a bare error code.
- **Help and documentation** — best case is none needed; when needed, make it contextual, searchable, and task-focused with concrete steps.

## Krug — Don't Make Me Think
- **Self-evidence** — a user should grasp what a screen is, what's on it, and what to do within seconds, with zero expended thought.
- **Design for scanning** — users satisfice, clicking the first plausible option rather than hunting for the best one; front-load meaning in headings and labels.
- **Omit needless words** — cut half the words on the page, then cut half of what's left; kill happy-talk intros and instructions nobody reads.
- **Judge clicks by thought, not count** — a click is fine if it's mindless and confidence-inspiring; the metric is thought-per-click, not clicks-per-task.
- **Clear visual hierarchy** — the more important an element, the more visually prominent; related things must look related, and nesting should show containment.
- **Obviously clickable, clearly bounded** — break the page into unmistakable areas and make clickable things look clickable.
- **Don't reinvent conventions** — logo top-left, cart top-right, familiar search shape; deviate only when the alternative is obviously better.
- **Answer the navigation questions always** — where am I, where can I go — via persistent nav and "you are here" cues.
- **Unmissable page names** — every page needs a name that matches exactly what the user clicked to arrive.
- **Test cheap and often** — three users a month beats eight once a year; testing one user beats testing none.

## Cooper — About Face
- **Design for goals, not tasks** — ask what the person is ultimately trying to achieve at every decision point, not what steps they're performing.
- **One primary persona** — design for a single research-based primary persona per interface; designing for "everyone" satisfies no one.
- **Scenarios before screens** — write the primary persona's ideal-day walkthrough (context → key path → validation) before drawing any UI.
- **Design for perpetual intermediates** — most users are neither novices nor experts; optimize the middle, with onramps for beginners, shortcuts for experts.
- **Less interface wins** — the best interaction is the one you eliminate entirely, no matter how polished the alternative looks.
- **Never make users feel stupid** — treat every error message, dead end, or interrogating modal as an accusation to avoid.
- **Eliminate excise** — remove every tap, confirmation, mode switch, or dialog that serves the system's bookkeeping rather than the user's goal.
- **Do, don't ask** — minimize modes and modal interruptions; replace confirmation dialogs with undo wherever possible.
- **Be considerate software** — remember what the user already told it, anticipate needs, don't ask what it can infer, and fail gracefully.
- **Treat input as sacred** — never destroy or reject user work; accept flexible input formats and silently normalize them.

## Laws of UX — behavioral & cognitive (Yablonski)
- **Fitts's Law** — time to hit a target is a function of distance and size; make primary actions big and close, keep related controls adjacent.
- **Hick's Law** — decision time grows with the number and complexity of choices; trim options, break tasks into steps, highlight a recommended choice.
- **Jakob's Law** — users expect your product to work like everything else they already use; default to convention, spend novelty sparingly.
- **Miller's Law** — working memory holds about 7±2 items; chunk content, but don't use this to justify arbitrary limits.
- **Doherty Threshold** — keep response time under 400ms, or cover latency with perceived-performance techniques (skeletons, optimistic UI, progress).
- **Tesler's Law** — complexity can't be eliminated, only moved; the system absorbs it (smart defaults, inference), never the user.
- **Postel's Law** — be liberal in what you accept from users (input formats, typos) and conservative in what you emit back.
- **Occam's Razor** — among equally good designs, ship the one with the fewest assumptions and elements.
- **Pareto Principle** — roughly 80% of value comes from 20% of features; optimize that 20% relentlessly.
- **Parkinson's Law** — tasks expand to fill the time allotted; constrain flows (autofill, sensible limits) to keep completion under the expected duration.
- **Peak-End Rule** — experiences are judged by their peak moment and their ending; invest design effort in the emotional high point and the finish.
- **Serial Position Effect** — people remember the first and last items best; put key actions at the ends of lists and navs, never buried in the middle.
- **Von Restorff Effect** — the one item that looks different gets remembered; make only the primary CTA visually distinct.
- **Zeigarnik Effect** — unfinished tasks nag at memory; use progress indicators and "resume where you left off" to pull users back.
- **Goal-Gradient Effect** — motivation increases as the goal nears; show progress and give head starts (2/12 pre-filled beats 0/10).
- **Aesthetic-Usability Effect** — attractive UIs are perceived as more usable and forgiven more readily; polish is functional, but it can mask real usability flaws.
- **Choice Overload** — too many options overwhelm users; curate, default, and progressively disclose instead of presenting everything at once.
- **Selective Attention** — users filter out anything that doesn't look goal-relevant (banner blindness); never dress critical info up like an ad or decoration.
- **Cognitive Load** — total mental-effort budget per session is small; every design decision either spends it or saves it.
- **Chunking** — group information into meaningful units (the phone-number rule) so it scans and recalls more easily.
- **Cognitive Bias** — users judge interfaces irrationally, not objectively; design with their biases in mind rather than assuming rational evaluation.
- **Mental Model** — users act on their own internal model of the system, not the model the team designed; test against their model, not yours.
- **Working Memory** — users hold almost nothing in short-term memory across a flow; never require carrying information between screens.
- **Flow** — sustained engagement needs a balance between challenge and skill; too easy bores, too hard frustrates.
- **Paradox of the Active User** — users never read the manual and start acting immediately; design for immediate doing, not upfront learning.

## Emotional layers & retention (calibrated)
- **Three-level audit** — evaluate a product at visceral (look/feel), behavioral (use, feedback), and reflective (meaning, self-image) levels; a gap at any level costs adoption.
- **Affect widens tolerance** — attractive things function better: positive affect broadens problem-solving and raises friction tolerance — never an excuse for real usability failure.
- **Engineer the success moment** — the Peak-End Rule applies to whole flows: find the flow's peak and its ending, then deliberately design both (confirmation, success state, close).
- **Hook model as a critique lens** — read retention flows as Trigger → Action → Variable Reward → Investment (action fires when motivation, ability, and trigger converge); diagnose, don't prescribe.
- **Lower ability barriers first** — reduce friction before amplifying motivation; each use should leave behind value (data, content, reputation) that compounds for the user.
- **Mandatory ethics check** — before shipping a retention loop, ask: "would the user consent to this loop if they saw it?" If the honest answer is no, redesign it.

## Design Brief Format
Write briefs to `docs/design/<feature>-brief.md` (or the Docs home set in `docs/design/whiteboard-setup.md`) with exactly these sections:
1. **Goal & primary persona** — one paragraph each.
2. **Flow map** — a mermaid flowchart of steps and decision points.
3. **Screen & state inventory** — table: screen × {empty, loading, error, success}, one-line behavior each.
4. **UI direction** — token decision table (role → light → dark; spacing/type/radius/elevation scales) + the one distinctive move.
5. **Decisions & citations** — every non-obvious decision as a `decision — principle` bullet.
6. **Accessibility checklist** — the WCAG 2.2 hard gates, each checked or flagged.
7. **Open questions** — anything deferred.
Full sessions write all 7 sections; flow-only sessions write sections 1–3 + 5–7; UI-only sessions write sections 4–7.
