> canon-version: 2026-07
> Modern (2024–2026) UX principles beyond the classic canon. Read alongside flow-canon.md.

# Modern UX Canon

## AI-product UX
- **Trust quartet** — transparency, user control, consistency, and graceful failure support are the foundational quartet for any AI-mediated experience (NN/g State of UX 2026).
- **Outcome-oriented over average-user** — with AI mediating interactions, design adaptive frameworks that respond to each user's actual goal rather than a fixed flow for a mythical average user.
- **Chat is over-applied** — match modality to intent and cognitive load; default to task-appropriate UI (buttons, forms, canvas); open-input chat only for genuinely open-ended problems.
- **Streaming-first perceived performance** — meet the shared AI first-token gate; stream partial results and design distinct states for queued → thinking → streaming → done → failed. (See `gates.md`.)
- **Agentic transparency, five mandatory surfaces** — plan visibility, tool-use disclosure, memory surfacing, progress tracking, and recovery routing; the user can always see and override the agent.
- **Design for probabilistic output** — AI output is non-deterministic, so build in regenerate/refine-a-region controls, source citations, confidence signaling, and easy undo.
- **Escape hatches from open input** — users often don't know what to ask; provide prompt templates, suggested actions, and follow-ups instead of a blank box.
- **Agents are users too** — interfaces are now consumed by agents as well as humans, so semantic structure and accessible names serve both audiences.

## Accessibility is law
- **EAA makes WCAG 2.2 AA the EU legal baseline** — the European Accessibility Act became fully enforceable 2025-06-28; consumer digital services must comply or face penalties.
- **The nine new WCAG 2.2 criteria are table stakes** — notably Focus Not Obscured, Target Size, a dragging alternative, Consistent Help, Redundant Entry, Accessible Authentication. (See `gates.md` for thresholds.)
- **Accessibility is operational, not a post-hoc audit** — AI generates UI faster than teams can review it, so accessibility must be built into the generation/design step itself.
- **Honor user-preference media queries by default** — `prefers-reduced-motion`, `prefers-contrast`, and reduced transparency are system toggles apps are expected to respect.

## Expressive-but-disciplined visual turn
- **Expressive contrast speeds recognition** — bold size/shape/color contrast helps users find key actions up to 4× faster (M3 Expressive); make the primary action unmissable.
- **Physics-based motion is functional, not decorative** — springy, interruptible transitions communicate state change and affordance, not flourish.
- **Translucency needs a legibility contract** — separate content and control layers; contrast, dimming, and foreground emphasis guarantee legibility despite blur (Liquid Glass).
- **Commit to an anti-"AI slop" point of view** — since UI is now cheap to generate, sameness is the failure mode; pick one distinctive typography/spacing/motion move before writing any CSS.
- **Token-based systems are assumed infrastructure** — output theme tokens (color roles light+dark, type pair, radius and shadow scales), never ad-hoc values.
- **Dark mode is a first-class equal deliverable** — design every palette decision in pairs from the start; it is never a simple inversion filter.

## Behavior, performance, flow
- **Psychology-grounded flows, ethically applied** — use Growth.Design's 106-principle catalog for onboarding, checkout, and retention; cite the principle behind each decision, no dark patterns.
- **Responsiveness has a hard number** — meet the shared responsiveness and loading gates; pair them with perceived-performance patterns (optimistic UI, layout-matched skeletons). (See `gates.md`.)
- **Fewest-steps flows win** — eliminate redundant entry, favor progressive disclosure, and defer sign-up; every step added to a flow needs a justified reason.
- **Design-principles-as-artifact** — codify 3–7 named product design principles as a kickoff deliverable so later decisions have something concrete to arbitrate against.
- **Context architecture** — apply information-architecture thinking to what context an AI system holds and surfaces, so its responses align with actual user intent.
- **Recovery over prevention in agentic UX** — agents will err; design the correction loop (edit, retry, rollback, human handoff) as prominently as the happy path.
- **Restraint under expressiveness** — reserve bold, expressive moves for hero moments and key actions, layered on top of an otherwise quiet, consistent system.
