> canon-version: 2026-07
> Modern (2024–2026) UX principles beyond the classic canon. Read alongside flow-canon.md.

# Modern UX Canon

## AI-product UX
- **Trust quartet** — transparency, user control, consistency, and graceful failure support are the foundational quartet for any AI-mediated experience (NN/g State of UX 2026).
- **Outcome-oriented over average-user** — with AI mediating interactions, design adaptive frameworks that respond to each user's actual goal rather than a fixed flow for a mythical average user.
- **Chat is over-applied** — match modality to intent and cognitive load; default to task-appropriate UI (buttons, forms, canvas), and reserve open-input chat for genuinely open-ended problem spaces.
- **Streaming-first perceived performance** — target first token under ~800ms; stream partial results and design distinct states for queued → thinking → streaming → done → failed.
- **Agentic transparency, five mandatory surfaces** — planning visibility, tool-use disclosure, memory surfacing, multi-step progress tracking, and recovery routing; the user must always see what the agent is doing and be able to override it.
- **Design for probabilistic output** — AI output is non-deterministic, so build in regenerate/refine-a-region controls, source citations, confidence signaling, and easy undo.
- **Escape hatches from open input** — users often don't know what to ask; provide prompt templates, suggested actions, and follow-ups instead of a blank box.
- **Agents are users too** — interfaces are now consumed by agents as well as humans, so semantic structure and accessible names serve both audiences.

## Accessibility is law
- **EAA makes WCAG 2.2 AA the EU legal baseline** — the European Accessibility Act became fully enforceable 2025-06-28, and EN 301 549 references WCAG 2.2, so e-commerce, banking, and consumer digital services must comply or face penalties.
- **The nine new WCAG 2.2 criteria are table stakes** — most relevant: Focus Not Obscured, Target Size Minimum (24px), Dragging Movements (offer a non-drag alternative), Consistent Help, Redundant Entry (don't ask twice), and Accessible Authentication (no cognitive-function tests like transcription CAPTCHAs).
- **Accessibility is operational, not a post-hoc audit** — AI generates UI faster than teams can review it, so accessibility must be built into the generation/design step itself, not checked afterward.
- **Honor user-preference media queries by default** — `prefers-reduced-motion`, `prefers-contrast`, and reduced transparency are system-level toggles that both current platform design languages expect apps to respect.

## Expressive-but-disciplined visual turn
- **Expressive contrast speeds recognition** — Material 3 Expressive's studies found bold size/shape/color contrast helps users locate key actions up to 4× faster; use it to make the primary action unmissable.
- **Physics-based motion is functional, not decorative** — springy, interruptible motion communicates state change and affordance; both major 2025 platform systems treat it as a signal, not flourish.
- **Translucency needs a legibility contract** — layer content separately from controls, with contrast, dimming, and foreground emphasis guaranteeing legibility despite blur and depth (the Liquid Glass rule).
- **Commit to an anti-"AI slop" point of view** — since UI is now cheap to generate, sameness is the failure mode; pick one distinctive typography/spacing/motion move before writing any CSS.
- **Token-based systems are assumed infrastructure** — ship a theme as CSS-variable roles (background/foreground/primary/muted/accent/destructive, light+dark) plus type, radius, and shadow scales, not ad-hoc values.
- **Dark mode is a first-class equal deliverable** — design every palette decision in pairs from the start; it is never a simple inversion filter.

## Behavior, performance, flow
- **Psychology-grounded flows, ethically applied** — Growth.Design's 106-principle catalog is the working reference for onboarding, checkout, and retention decisions; cite the principle behind each choice and avoid dark patterns.
- **Responsiveness has a hard number** — INP < 200ms at p75 is the interaction-responsiveness bar; pair it with perceived-performance patterns (optimistic UI, layout-matched skeletons, no bare spinner past 1s).
- **Fewest-steps flows win** — eliminate redundant entry, favor progressive disclosure, and defer sign-up; every step added to a flow needs a justified reason.
- **Design-principles-as-artifact** — codify 3–7 named product design principles as a kickoff deliverable so later decisions have something concrete to arbitrate against.
- **Context architecture** — apply information-architecture thinking to what context an AI system holds and surfaces, so its responses align with actual user intent.
- **Recovery over prevention in agentic UX** — agents will err; design the correction loop (edit, retry, rollback, human handoff) as prominently as the happy path.
- **Restraint under expressiveness** — reserve bold, expressive moves for hero moments and key actions, layered on top of an otherwise quiet, consistent system.
