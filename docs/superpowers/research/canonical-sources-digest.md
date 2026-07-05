# Canonical UI/UX Sources — Research Digest for Skill Distillation

> Research agent output, 2026-07-05. Source material for `skills/design/*/references/`.

Verified via web July 2026. Each source: canon status → distilled actionable rules → applicable stage. Stage key: **[FLOW]** = UX flow design (screens, steps, decision points) · **[UI]** = visual UI (hierarchy, spacing, color, type) · **[BOTH]**.

---

## 1. Don Norman — *The Design of Everyday Things* **[FLOW]**

**Canon status:** 1988, revised & expanded 2013 (current edition). The single most-cited design book in existence; HN threads call it "the bible of design." Norman coined "user-centered design" and (with Nielsen) founded NN/g. Vocabulary from this book (affordance, signifier, mapping) *is* the field's vocabulary.

**Distilled rules:**
1. Every interactive element must *signal* how it's used — an affordance without a visible signifier is invisible. If users need a label like "click here," the signifier failed.
2. Controls must spatially/logically map to their effects (stove-burner rule): put the control next to, or shaped like, the thing it controls.
3. Every action needs immediate, proportionate feedback — confirm what happened, not just that something happened. No feedback = user repeats or abandons the action.
4. Design the system so the user's conceptual model matches the actual system model; the interface is the only channel that teaches the model — if users can't predict what a control does before pressing it, the model is broken.
5. Bridge the Gulf of Execution (can users figure out *what to do*?) and the Gulf of Evaluation (can they tell *what happened*?). Audit every screen for both gulfs.
6. Put knowledge in the world, not in the head: visible options, labels, and state beat memorized commands.
7. Use constraints (physical, logical, semantic, cultural) to make wrong actions impossible rather than warned-against.
8. Users don't make errors — designs cause them. Distinguish slips (right intent, wrong action → prevent with constraints/confirmation on destructive ops) from mistakes (wrong intent → fix the conceptual model).
9. Make actions reversible; where irreversible, require confirmation that describes the consequence, not just "Are you sure?"
10. Follow the seven stages of action (goal → plan → specify → perform → perceive → interpret → compare): each stage is a checkpoint question for interrogating a flow.

## 2. Steve Krug — *Don't Make Me Think* **[FLOW]**

**Canon status:** 2000; current edition *Revisited* (3rd, 2014). The most-recommended first usability book for 25 years; its title is a design maxim in itself.

**Distilled rules:**
1. Every page/screen must be self-evident: a user should know what it is, what's here, and what to do within seconds without expending thought. If it can't be self-evident, make it self-explanatory.
2. Design for scanning, not reading: users satisfice — they click the first plausible-looking option, not the best one. Front-load meaning in headings, links, and buttons.
3. Omit needless words: cut half the words on the page, then cut half of what's left. Kill happy-talk intros and instructional text (nobody reads instructions).
4. Every click is fine if it's mindless and confidence-inspiring; count *thought per click*, not clicks.
5. Use clear visual hierarchy: the more important, the more prominent; things related logically must be related visually; nest things visually to show containment.
6. Break pages into clearly defined areas and make clickable things unmistakably clickable.
7. Don't reinvent conventions (logo top-left → home, cart top-right, search box shape); innovate only when your alternative is *obviously* better.
8. Navigation must answer at all times: Where am I? Where can I go? (persistent nav, page names matching the link clicked, "you are here" indicators).
9. Every page needs an unmissable page name that matches what the user clicked to get there.
10. Usability-test with 3 users a month rather than 8 once a year; testing one user is 100% better than testing none — severity of the worst problem matters more than sample size.

## 3. Jakob Nielsen — 10 Usability Heuristics (NN/g) **[FLOW]**

**Canon status:** 1994, current NN/g revision Jan 30, 2024. The standard heuristic-evaluation checklist for 30 years; the industry's default audit instrument. Current names:

1. **Visibility of system status** — always show what's going on via timely feedback (progress, loading, saved-state, current selection).
2. **Match between system and real world** — speak the user's language; no internal jargon; follow real-world conventions and natural ordering.
3. **User control and freedom** — every unwanted state needs a clearly marked exit: undo, redo, cancel, back — without a long process.
4. **Consistency and standards** — same words/actions must mean the same thing everywhere; follow platform and industry conventions (see Jakob's Law).
5. **Error prevention** — eliminate error-prone conditions or confirm before commitment; preventing beats good error messages.
6. **Recognition rather than recall** — make options, actions, and needed info visible; never force users to remember info across screens.
7. **Flexibility and efficiency of use** — provide accelerators (shortcuts, defaults, recents, customization) invisible to novices but fast for experts.
8. **Aesthetic and minimalist design** — every irrelevant unit of information competes with the relevant ones; cut it.
9. **Help users recognize, diagnose, recover from errors** — plain language, precise problem statement, constructive fix. No error codes alone.
10. **Help and documentation** — best if none is needed; if needed, contextual, searchable, task-focused, concrete steps.

## 4. Jon Yablonski — *Laws of UX* (lawsofux.com) **[BOTH]**

**Canon status:** Site launched 2018; O'Reilly book (2nd ed. 2024). Became the standard shared vocabulary for psychology-grounded design critique. Full current list — all 30:

**Heuristics/interaction:**
1. **Fitts's Law** — time to hit a target = f(distance, size) → make primary actions big and close; put related controls adjacent.
2. **Hick's Law** — decision time grows with number/complexity of choices → trim options, break complex tasks into steps, highlight a recommended choice.
3. **Jakob's Law** — users expect your product to work like everything else they use → default to convention; spend novelty budget sparingly.
4. **Miller's Law** — working memory holds 7±2 items → chunk content; don't use it to justify arbitrary limits.
5. **Doherty Threshold** — keep system response <400ms or provide perceived-performance cover (skeletons, optimistic UI, progress).
6. **Tesler's Law** — complexity can't be eliminated, only moved → the system should absorb complexity, not the user (smart defaults, inference).
7. **Postel's Law** — be liberal in what you accept from users (input formats, typos), conservative in what you emit.
8. **Occam's Razor** — among equally good designs, ship the one with fewest assumptions/elements.
9. **Pareto Principle** — 80% of value comes from 20% of features → optimize that 20% relentlessly.
10. **Parkinson's Law** — tasks inflate to fill available time → constrain flows (autofill, sensible limits) to keep completion under expected duration.

**Gestalt:**
11. **Law of Proximity** — near things read as grouped → spacing alone can (and should) do the work of borders.
12. **Law of Common Region** — a shared boundary/background groups elements → use cards/regions to bind related content.
13. **Law of Similarity** — similar-looking elements read as related → style all links/buttons of one kind identically; never style unrelated things alike.
14. **Law of Uniform Connectedness** — visually connected elements (lines, shared containers) read as related.
15. **Law of Prägnanz** — people perceive the simplest possible form → prefer simple silhouettes and layouts; ambiguity costs cognition.

**Cognitive biases/memory:**
16. **Peak-End Rule** — experiences are judged by peak moment + ending → invest in the emotional high point and the finish (confirmation, success states, offboarding).
17. **Serial Position Effect** — first and last items are remembered best → put key actions at the ends of lists/navs, not the middle.
18. **Von Restorff Effect** — the one different item is remembered → make the primary CTA visually distinct, and only the CTA.
19. **Zeigarnik Effect** — incomplete tasks nag at memory → progress indicators and "resume where you left off" pull users back.
20. **Goal-Gradient Effect** — motivation rises near the goal → show progress, give "head starts" (2/12 stamps pre-filled beats 0/10).
21. **Aesthetic-Usability Effect** — attractive UIs are *perceived* as more usable (and forgiven more) → polish is functional; but beauty can mask usability problems in testing.
22. **Choice Overload** — too many options overwhelm → curate, default, progressive-disclose.
23. **Selective Attention** — users filter out everything not goal-relevant (banner blindness) → don't make critical info look like an ad or decoration.
24. **Cognitive Load** — total mental effort budget is small → every design decision either spends or saves it.
25. **Chunking** — group information into meaningful units (phone-number rule) for scanning and recall.
26. **Cognitive Bias** / 27. **Mental Model** / 28. **Working Memory** / 29. **Flow** / 30. **Paradox of the Active User** — framing concepts: users judge irrationally, act on their internal model not yours, hold almost nothing in memory, need challenge/skill balance, and *never read the manual* — design for immediate doing.

## 5. Adam Wathan & Steve Schoger — *Refactoring UI* **[UI]**

**Canon status:** 2018. The de-facto visual-design book for developers; the standard HN/dev-Twitter answer to "I can code but my UIs look bad." Tailwind CSS's design defaults descend directly from it.

**Distilled tactical rules (this book is the most directly rule-shaped of all):**
1. Start with a feature, not a shell — design the actual functionality first; and design in low fidelity so you iterate fast.
2. Hierarchy is everything: not all elements are equal; de-emphasize secondary content instead of only emphasizing primary. Prefer 2–3 levels: primary (dark, bold-ish), secondary (grey), tertiary (lighter grey, smaller).
3. Don't rely on font size alone for hierarchy — use weight (400/500 vs 600/700) and color (dark grey / grey / light grey). Never use light weights below ~large sizes.
4. Semantics are secondary to hierarchy for actions: one primary button per screen; secondary actions get outline/lower-contrast styles; destructive actions don't need to be big red unless they're the primary action.
5. Build a constrained spacing/sizing scale (e.g. 4/8/12/16/24/32/48/64...) and only pick from it — never arbitrary pixel values. Start with *too much* whitespace, then remove.
6. Establish a type scale (hand-picked, e.g. 12/14/16/18/20/24/30/36/48) and stick to it; keep line-length 45–75 characters; line-height inversely proportional to font size (small text ~1.5+, big headings ~1–1.25).
7. Define color as a full system up front: 8–10 shades each of your greys, primary, and accent/semantic colors. Never lighten with opacity alone; adjust hue/saturation as lightness changes to keep shades vivid.
8. Don't use grey text on colored backgrounds — use a hand-picked lighter shade of the background hue.
9. Shadows convey elevation: define a fixed shadow scale (small = slightly raised, large = floating/modal) and use elevation consistently for interaction meaning (e.g. lift on hover, press down on click).
10. Never rely on color alone to communicate (accessibility); pair with icons/labels/weight.
11. Emphasize by de-emphasizing: to make one thing pop, soften its competitors (mute inactive nav items rather than shouting the active one).
12. Labels are a last resort: format data so it self-describes ("12 left in stock" beats "Stock: 12"); when labels are needed, treat them as secondary.
13. Overlap elements, offset borders, and use accent bars/background shifts to create depth and visual interest without gradients or decoration.
14. Empty states are a first-class feature: design them with a call to action, not a blank table.
15. If a design looks off but you can't say why: check spacing consistency first, then alignment (baseline-align mixed font sizes), then contrast balance.

## 6. Alan Cooper — *About Face* **[FLOW]**

**Canon status:** 1995; current 4th edition (2014, "The Essentials of Interaction Design"). Cooper is "the father of Visual Basic" and inventor of design personas; About Face defined interaction design as a discipline and remains its standard reference text.

**Distilled rules:**
1. Design for goals, not tasks or features: users don't want to "use software," they want an outcome. Ask "what is this person ultimately trying to achieve?" at every decision point.
2. Build research-based personas and design for one primary persona per interface — designing for "everyone" satisfies no one.
3. Write scenarios (context → key path → validation) before drawing screens: walk the primary persona's ideal day through the product.
4. Design for intermediates: most users are perpetual intermediates, not novices or experts — optimize the middle, provide onramps for novices and accelerators for experts.
5. No matter how cool your interface, less of it would be better: the best interaction is the one eliminated.
6. Don't make users feel stupid — this is Cooper's prime directive; every error message, dead end, and modal interrogation is an accusation.
7. Eliminate excise: every tap, confirmation, mode-switch, or dialog that serves the *system's* needs rather than the user's goal is a tax to remove.
8. Minimize modes and modal interruptions; replace confirmations with undo ("do, don't ask").
9. The software should behave like a considerate human: remember what users told it (personal preferences, prior inputs), anticipate needs, don't ask questions it can infer, fail gracefully.
10. Treat user input as sacred: never destroy or reject work; accept flexible input formats and fix them silently (cf. Postel).

## 7. Edward Tufte — *The Visual Display of Quantitative Information* **[UI]**

**Canon status:** 1983; the founding text of modern data visualization; still the standard citation for chart design 40+ years on.

**Distilled rules:**
1. Maximize data-ink ratio: every drop of ink (pixel) should convey data; erase non-data ink and redundant data-ink (gridlines, borders, backgrounds, 3D effects).
2. Avoid chartjunk — decoration, moiré patterns, and heavy grids obscure data.
3. Lie factor = visual effect size ÷ data effect size; keep it ≈1 (don't truncate axes to exaggerate, don't scale areas for 1D quantities).
4. Maximize data density; small multiples (repeated small charts varying one variable) beat one complex chart.
5. Show comparisons, causality, and variation — a number without a comparison is not information.
6. Label directly on the data where possible instead of legends; integrate text, numbers, and graphics.

## 8. Lidwell, Holden & Butler — *Universal Principles of Design* **[BOTH]**

**Canon status:** 2003; current Updated & Expanded 3rd edition (2023) with **200 principles** (up from 125). The standard cross-disciplinary design encyclopedia; the reference-check book for design decisions.

**Highest-leverage principles for product UI (beyond overlaps with Laws of UX):**
1. **80/20 rule** — focus design/testing resources on the critical 20% of functions.
2. **Accessibility** — perceptibility, operability, simplicity, forgiveness for the widest range of users.
3. **Affordance/Constraint/Mapping/Feedback** — (codifies Norman; same rules).
4. **Progressive disclosure** — show only what's needed now; reveal complexity on demand.
5. **Performance load** — reduce both cognitive and kinematic (physical) effort to complete a task.
6. **Consistency** (aesthetic, functional, internal, external) — reuse solves learnability for free.
7. **Confirmation + Forgiveness** — confirm irreversible actions; make everything else reversible.
8. **Signal-to-noise ratio** — maximize meaningful information relative to total presentation.
9. **Recognition over recall**, **Chunking**, **Proximity/Similarity** — Gestalt/memory, as above.
10. **Visibility of system state**, **Wayfinding** (orientation → route decision → route monitoring → destination recognition) for any multi-step flow.
11. **Expectation effects & defaults** — the default is the decision most users will "make"; choose defaults as if they were choices.
12. **Fitts's Law, Hick's Law, aesthetic-usability, error-prevention (poka-yoke: forcing functions)** — as above.

## 9. Don Norman — *Emotional Design* / Nir Eyal — *Hooked* **[FLOW]** (calibrated)

**Emotional Design (Norman, 2004) — canon.** Key distillables: design works at three levels — **visceral** (immediate look/feel), **behavioral** (use, performance, feedback), **reflective** (meaning, self-image, memory). Rule: audit a product at all three levels; attractive things genuinely work better because positive affect broadens problem-solving and tolerance for friction. Peak-end applies: engineer the success moment.

**Hooked (Eyal, 2014) — influential but contested; include with guardrails.** It remains widely read in product circles, but behavioral scientists and ethics-focused designers (e.g. The Behavioral Scientist's critique, Axbom) dispute both its efficacy and its ethics — its core loop is the mechanism behind dark patterns. Recommendation for the skill: distill the **Hook model as an analytical lens** (Trigger → Action → Variable Reward → Investment; action happens when motivation + ability + trigger converge, per Fogg) for *retention-flow critique*, not as a prescriptive playbook. Rules worth keeping: reduce ability-barriers before boosting motivation; each use should store value (data, content, reputation) that increases the product's worth to the user; pair with an explicit ethics check ("would the user consent to this loop if they saw it?"). **Do not** rank it in the canon shortlist.

## 10. Dieter Rams — 10 Principles of Good Design **[UI]** (verified via Vitsoe)

**Canon status:** ~1970s–80s, Braun. The aesthetic conscience of the field; directly shaped Apple's design language (Ive). Good design is:
1. **Innovative** — but never for its own sake; innovation follows technological opportunity.
2. **Useful** — usefulness first; everything not serving it is subtracted.
3. **Aesthetic** — aesthetic quality is integral to usefulness, not decoration on top.
4. **Understandable** — clarifies its own structure; at best, self-explanatory.
5. **Unobtrusive** — neutral and restrained; products are tools, not decorations — leave room for the user's content/self-expression.
6. **Honest** — never make a product appear more capable or valuable than it is (the anti-dark-pattern principle).
7. **Long-lasting** — avoid trend-chasing; design that dates was never good.
8. **Thorough down to the last detail** — nothing arbitrary; care in detail is respect for the user.
9. **Environmentally friendly** — minimize waste (for software: attention, battery, bandwidth).
10. **As little design as possible** — "Weniger, aber besser" — less, but better; concentrate on the essential.

## 11. Apple Human Interface Guidelines **[BOTH]**

**Canon status:** Continuously published since 1987; the most influential platform design doc ever. Current HIG is unified across iOS/macOS/watchOS/visionOS (2026: Liquid Glass era, but cross-cutting principles are stable).

**Cross-cutting principles (platform trivia excluded):**
1. **Clarity** — legibility at every size, precise icons, purposeful negative space; content is king.
2. **Deference** — the UI serves content, never competes with it; chrome is minimal.
3. **Depth/Hierarchy** — distinct visual layers and realistic motion convey structure and what's actionable.
4. **Consistency** — use system components and standard patterns before inventing; familiar = learnable.
5. **Feedback** — every interaction gets perceptible acknowledgment (visual/haptic) immediately.
6. **User control** — people, not the app, initiate and control actions; make actions cancelable and reversible.
7. **Forgiveness + direct manipulation** — manipulating on-screen objects directly beats abstract controls.
8. **Concrete metrics that generalize:** minimum tap target 44×44pt; body text ≥ ~17pt equivalent on mobile / 11pt absolute minimum; respect safe areas and system spacing; support Dynamic Type/text scaling.
9. Accessibility is a foundation, not a feature: color-independence, VoiceOver labels, reduced-motion alternatives.

## 12. Material Design 3 (m3.material.io) **[BOTH]**

**Canon status:** Google's open design system since 2014 (M3 since 2021; **M3 Expressive** shipped 2025, the most-researched update — 46 studies, 18k+ participants). Its token architecture is the industry template for design systems.

**Cross-cutting principles:**
1. Design through **tokens**: color, type, shape, and spacing come from named roles (primary/on-primary, surface/on-surface), never raw hex values — this is what makes theming, dark mode, and consistency mechanical.
2. Color roles must maintain guaranteed contrast pairs ("on-X always readable on X"); dynamic/dark themes fall out for free.
3. Systematic **type scale with roles** — display/headline/title/body/label in large/medium/small; pick by role, not by size.
4. **Layout adapts by window-size class** (compact/medium/expanded), not by device; components reflow, content doesn't fork.
5. Elevation/surface tint expresses hierarchy and interactivity; interactive states (hover/focus/press/drag) are systematized as state layers — never hand-rolled per component.
6. **Motion is meaningful**: physics-based easing, used to preserve continuity and explain spatial relationships, not decorate.
7. M3 Expressive finding worth stealing: expressive-but-systematic designs let users find key actions **up to 4× faster** — expressiveness (shape/type/motion contrast) applied to *important* elements is a usability tool, not decoration.
8. Accessibility baked in: 48×48dp touch targets, 4.5:1 text contrast, focus visibility — part of component definitions.

## 13. WCAG 2.2 — the rules that matter for everyday product UI **[UI]**

**Canon status:** W3C Recommendation Oct 5, 2023 (verified); the global legal baseline (EU EAA, ADA, Section 508). WCAG 3 is an early draft — 2.2 AA is the target for years to come.

**The everyday-product shortlist:**
1. **Contrast (1.4.3, AA):** normal text ≥ 4.5:1 against background; large text (≥24px or 19px bold) ≥ 3:1.
2. **Non-text contrast (1.4.11, AA):** UI component boundaries, icons, focus indicators, chart elements ≥ 3:1.
3. **Target size (2.5.8, AA — new in 2.2):** interactive targets ≥ 24×24 CSS px, or equivalently spaced (Apple/Material's 44pt/48dp comfortably exceed this).
4. **Focus visible (2.4.7) + Focus not obscured (2.4.11, new):** every keyboard-focusable element shows a visible focus indicator that isn't hidden behind sticky headers/toasts.
5. **Use of color (1.4.1, A):** never encode meaning in color alone — add icon, text, or pattern.
6. **Redundant entry (3.3.7, A — new):** never make users re-type information already provided in the same flow.
7. **Accessible authentication (3.3.8, AA — new):** no cognitive tests (memorized passwords without paste/managers, puzzles) as the only login path; allow paste and autofill.
8. **Dragging alternatives (2.5.7, AA — new):** every drag interaction needs a single-pointer alternative (buttons, menus).
9. **Consistent help (3.2.6, A — new):** help mechanisms live in the same place on every screen.
10. **Reflow/text-resize (1.4.4, 1.4.10):** UI survives 200% text zoom and 320px-wide reflow without loss.
11. **Keyboard (2.1.1) + error identification/suggestion (3.3.1/3.3.3):** everything operable by keyboard; errors identified in text with a suggested fix.

---

# The Practitioner-Consensus Shortlist

Across HN book threads, NN/g's own curriculum, IxDF/Smashing/agency "essential books" lists, and dev-design Twitter, the same names recur with striking stability. *DOET* and *Don't Make Me Think* appear on effectively every list ("the bible of design"); *Refactoring UI* is the near-universal developer-facing pick; *About Face* is the recurring "deep reference"; NN/g heuristics + Laws of UX are the standard working checklists. Tufte and Lidwell appear on longer lists; Hooked appears but is contested.

**If you could only distill 6 (ranked):**

1. **Norman — The Design of Everyday Things** — the conceptual spine (affordances, feedback, mapping, error); everything else cites it.
2. **Nielsen — 10 Usability Heuristics (NN/g, 2024 revision)** — the audit checklist; the most directly agent-applicable artifact in the field.
3. **Krug — Don't Make Me Think** — scannability, self-evidence, convention; the sharpest flow-critique lens per page.
4. **Wathan & Schoger — Refactoring UI** — the only canonical source whose content is already tactical visual rules (spacing scales, type scales, shade systems); irreplaceable for the UI half.
5. **Yablonski — Laws of UX** — 30 psychology principles in checklist form; the shared critique vocabulary (Fitts, Hick, Jakob, Gestalt, peak-end).
6. **WCAG 2.2 AA (+ HIG/M3 metrics)** — the enforceable floor: contrast ratios, target sizes, focus, keyboard — the rules with legal teeth and hard numbers.

Next tier (distill if budget allows): About Face (goal-directed flows, excise, personas) → Lidwell (breadth encyclopedia, mostly overlapping) → Rams (aesthetic conscience) → Tufte (only if the skill covers data viz) → Emotional Design/Hooked (framing lenses only, with the ethics caveat on Hooked).

**Skill-architecture note:** the sources split cleanly into two agent skills — **flow interrogation** (Norman + Nielsen + Krug + Cooper + the behavioral half of Laws of UX) and **visual interrogation** (Refactoring UI + Gestalt laws + Rams + Tufte + WCAG/HIG/M3 metrics) — with a shared vocabulary layer from Laws of UX.

**Sources:** [NN/g 10 Heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/) · [Laws of UX](https://lawsofux.com/) · [Vitsoe — Rams' 10 principles](https://www.vitsoe.com/us/about/good-design) · [W3C — New in WCAG 2.2](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/) · [Apple HIG](https://developer.apple.com/design/human-interface-guidelines/) · [Material 3 Foundations](https://m3.material.io/foundations) · [M3 Expressive research](https://supercharge.design/blog/material-3-expressive) · [Universal Principles 3rd ed. (Quarto)](https://www.quarto.com/books/9780760375167/universal-principles-of-design-updated-and-expanded-third-edition) · [UXfolio best UX books](https://blog.uxfol.io/ux-design-books/) · [IxDF UX books guide](https://ixdf.org/literature/article/ux-design-books-guide) · [Eleken — 37 UI/UX books](https://www.eleken.co/blog-posts/ui-ux-books) · [Behavioral Scientist critique of Hooked](https://www.thebehavioralscientist.com/articles/hooked-how-to-build-habit-forming-products-is-wrong) · [Axbom on Hooked's ethics](https://axbom.com/nir-eyal-habit-danger/) · [HN book aggregations](https://hackernewsbooks.com/top-books-on-hacker-news)
