# Modern UI/UX Principles, Landscape & Distribution — Research Digest

> Research agent output, 2026-07-05. Source material for `references/modern-ux.md`, `references/sources.md`, README positioning, and repo layout decisions.

---

## 1. Current Principles (2024–2026): The Modern Canon Beyond the Classics

### A. AI-Product UX (the biggest new territory)

1. **Trust is the #1 design problem for AI features** — NN/g's State of UX 2026 names transparency, user control, consistency, and graceful failure support as the foundational quartet for any AI-mediated experience.
2. **Outcome-oriented design over average-user optimization** — with AI mediating interactions, design adaptive frameworks that respond to individual user goals rather than fixed flows for a mythical average user (NN/g).
3. **Chat is the most over-applied pattern of 2026** — match modality to context, intent, and cognitive load; default to task-appropriate UI (buttons, forms, canvas) and use open-input chat only when the problem space is genuinely open-ended (Smashing, Setproduct, HatchWorks).
4. **Streaming-first perceived performance** — target first token under ~800ms; stream partial results, show skeleton/typing states, and design distinct states for queued → thinking → streaming → done → failed.
5. **Agentic transparency: five mandatory surfaces** — planning visibility, tool-use disclosure, memory surfacing, multi-step workflow tracking, and recovery routing; the user must always be able to see what the agent is doing, why, and override it (agentic-design.ai, HatchWorks).
6. **Design for probabilistic output** — AI output is non-deterministic, so build in regenerate/refine-a-region controls, source references/citations, confidence signaling, and easy undo ("Probabilistic Design," Smashing; Shape of AI patterns: References, Regenerate, Templates).
7. **Escape hatches from open input** — users often don't know what to ask; provide prompt templates, suggested actions, and follow-ups (Shape of AI "Open Input"/"Templates" patterns).
8. **AI agents are now users too** — interfaces get consumed by agents as well as humans; semantic HTML, accessible names, and machine-readable structure now serve both audiences (NN/g).

### B. Accessibility (now law, not virtue)

9. **WCAG 2.2 AA is the legal baseline in the EU** — the European Accessibility Act became fully enforceable June 28, 2025; EN 301 549 references WCAG 2.2, so e-commerce, banking, and consumer digital services must comply or face penalties.
10. **The nine new WCAG 2.2 criteria are table stakes** — notably Focus Not Obscured, Target Size Minimum (24×24px), Dragging Movements (offer non-drag alternative), Consistent Help, Redundant Entry (don't ask twice), and Accessible Authentication (no cognitive-function tests like transcription-based CAPTCHAs).
11. **Accessibility as operational capability, not end-of-project audit** — AI generates UI faster than teams can audit it, so accessibility must be built into the generation/design step itself (Smashing 2026).
12. **Respect user-preference media queries by default** — `prefers-reduced-motion`, `prefers-contrast`, reduced transparency; both Liquid Glass and M3 Expressive ship system-level toggles and expect apps to honor them.

### C. Visual language: the expressive turn (both platform vendors moved the same direction)

13. **Emotion is back: shape, motion, and color carry meaning** — Material 3 Expressive (backed by 46 studies, 18k+ participants) found expressive design helps users locate key elements up to 4× faster and is preferred by up to 87% of 18–24s; use size/shape/color contrast to make the key action unmissable.
14. **Physics-based motion as function, not decoration** — M3 Expressive's motion-physics system and Liquid Glass's lensing/refraction both use animation to communicate state change and affordance; springy, interruptible transitions over linear easings.
15. **Translucency needs a legibility contract** — Liquid Glass's core rule: content layer vs. control layer, with contrast, dimming, and foreground emphasis guaranteeing legibility despite depth/blur; concentric radii (nested corners share a center) is the new detail-quality tell.
16. **Anti-"AI slop" differentiation is a stated design goal** — since UI is now cheap to generate, sameness is the failure mode; commit to an explicit aesthetic point of view (typography choice, spacing rhythm, one distinctive move) before writing CSS (NN/g "UI no longer differentiates"; Anthropic frontend-design skill's purpose/tone/constraints/differentiation framework).
17. **Design tokens + component design systems are assumed infrastructure** — the shadcn norm: a theme = CSS-variable palette (background/foreground/primary/muted/accent/destructive, light+dark), type pair, radius scale, shadow scale; registries distribute whole design systems as one install. A skill should output token decisions, not ad-hoc values.
18. **Dark mode is a first-class equal deliverable** — every palette decision made in pairs; not an inversion filter.

### D. Behavior, performance, and flow

19. **Psychology-grounded flows, ethically applied** — Growth.Design's 106 cognitive biases/principles catalog is the working reference for onboarding, checkout, and retention decisions; cite the principle behind each flow decision (and avoid dark patterns — regulatory scrutiny is rising).
20. **Responsiveness is a UX metric with a number** — INP (replaced FID as a Core Web Vital in March 2024): < 200ms interaction-to-next-paint at p75; perceived performance patterns (optimistic UI, skeletons matched to layout, no spinner > 1s without progress info) are design decisions, not engineering afterthoughts.
21. **Fewest-steps flows win** — redundant-entry elimination (also now a WCAG criterion), progressive disclosure, and deferred sign-up; every added step needs a justified reason.
22. **Design-principles-as-artifact** — teams codify 3–7 named product design principles to arbitrate decisions ("A Practical Guide To Design Principles," Smashing 2026) — directly relevant to a design-kickoff skill's output.
23. **Context architecture** — apply IA thinking to what context an AI system has and surfaces, so agent responses align with user intent (NN/g).
24. **Recovery over prevention in agentic UX** — agents will err; design the correction loop (edit, retry, rollback, human handoff) as prominently as the happy path.
25. **Restraint under expressiveness** — both 2025 vendor systems pair boldness with discipline: expressive moves are reserved for hero moments and key actions, on top of an otherwise quiet, consistent system.

### Stable sources to re-check periodically (powers `/update-canon` — becomes `references/sources.md`)

| Source | URL | What it covers |
|---|---|---|
| NN/g articles feed | https://www.nngroup.com/articles/ | Evidence-based UX; annual State of UX |
| NN/g AI topic hub | https://www.nngroup.com/topic/ai/ | AI-UX patterns, agent UX research |
| Smashing UX category | https://www.smashingmagazine.com/category/ux/ | Practitioner trends, accessibility ops |
| web.dev blog + patterns | https://web.dev/blog/ and https://web.dev/patterns/ | Core Web Vitals changes, UX patterns |
| web.dev INP | https://web.dev/articles/inp | Responsiveness threshold changes |
| Material Design (M3/Expressive) | https://m3.material.io/ | Google design system evolution |
| Android Developers Blog (design tag) | https://android-developers.googleblog.com/ | M3 Expressive rollouts |
| Apple HIG | https://developer.apple.com/design/human-interface-guidelines/ | Liquid Glass, platform norms |
| Apple WWDC design sessions | https://developer.apple.com/videos/design/ | Annual design-language updates |
| W3C WCAG overview | https://www.w3.org/WAI/standards-guidelines/wcag/ | WCAG 2.2 → 3.0 progress |
| EU Commission EAA page | https://commission.europa.eu/strategy-and-policy/policies/justice-and-fundamental-rights/disability/european-accessibility-act-eaa_en | Enforcement scope |
| Shape of AI | https://www.shapeof.ai/ | Named AI-UX pattern library |
| aiverse.design | https://www.aiverse.design/ | AI product design playbook |
| Growth.Design psychology list | https://growth.design/psychology | 106 biases/principles |
| Growth.Design case studies | https://growth.design/case-studies | Applied flow teardowns |
| shadcn/ui changelog | https://ui.shadcn.com/docs/changelog | Ecosystem/tokens/registry norms |
| Vercel agent-skills FAQ/changelog | https://vercel.com/blog/agent-skills-explained-an-faq | Skills ecosystem changes |

---

## 2. Existing Landscape & the Gap

**ui-ux-pro-max (nextlevelbuilder/ui-ux-pro-max-skill)** — the incumbent giant (~100k GitHub stars per SkillsLLM). A searchable *database*: 50+ styles, 161 palettes, 57 font pairings, 161 product types, 99 UX guidelines, 25 chart types, 10 stacks, plus shadcn MCP integration. Strengths: breadth, stack-specific CSS guidance, instant "pick me a style" answers. Weakness: it's a lookup table, not a thinking process — it answers "what glassmorphism palette?" but never asks "should this product even be glassmorphic?", doesn't interrogate the user about audience/context/brand, and doesn't design flows or information architecture. Note it ships as `.claude/skills/` + plugin marketplace, not the skills.sh flat layout.

**Anthropic frontend-design plugin** (`anthropics/claude-code/plugins/frontend-design`) — ~50 lines of markdown; 627K installs on skills.sh (#2 overall). Forces an aesthetic commitment via four questions (purpose, tone, constraints, differentiation) before code. Strengths: tiny, high-leverage, anti-generic. Weakness: visual-aesthetics only — no UX flow design, no accessibility, no AI-product patterns, no user interrogation loop (it answers its own four questions itself).

**mattpocock/skills** — ~157k stars. The `/grill-me` pattern: relentless structured questioning of the *user* before any work, framed around "the most common failure mode is misalignment." Engineering-focused (TDD, triage, PRDs) — deliberately contains no design/UX skills. Its contribution is the interaction pattern and the distribution playbook.

**Directories**: skills.sh (Vercel's leaderboard, ranked by installs, auto-listed via CLI telemetry), crossaitools.com (Design & UI/UX category: apple-ui-skills, mobile-app-ui-design, etc.), typeui.sh (81 visual-direction skills), claudepluginhub, skillsllm. Existing design skills cluster into two camps: **style databases** and **visual-direction prompts**.

**The gap — precisely where whiteboard fits:** nobody combines (a) a *grilling-style design-kickoff interrogation* (asking the user about audience, context, brand, platform, constraints, accessibility obligations) with (b) *principles-grounded UX flow design* (citing NN/g/Growth.Design/WCAG rationale for each decision) and (c) *current-canon awareness* (M3 Expressive, Liquid Glass, AI-product patterns, EAA/WCAG 2.2). Differentiation strategy:
- Be the **process**, not the database — position explicitly as complementary to ui-ux-pro-max ("they give you 161 palettes; we make sure you're building the right screen first").
- **Interrogation-first**: port the grill-me mechanic to design kickoff — proven viral mechanic, unclaimed in design space.
- **Cited principles**: every recommendation names its source principle (bias, heuristic, WCAG criterion) — matches the 2026 trust/rationale zeitgeist and no existing skill does it.
- **Self-updating**: a skill that re-fetches the stable-sources list is a genuinely novel hook ("skills that don't go stale").
- Small number of deep skills rather than 161 shallow entries.

---

## 3. Distribution Best Practices (verified against vercel-labs/skills)

**Installer & docs**: the CLI is `npx skills` from https://github.com/vercel-labs/skills (npm package `skills`); canonical docs are that README plus https://vercel.com/kb/guide/agent-skills-creating-installing-and-sharing-reusable-agent-context. It follows the **Agent Skills open standard** (https://agentskills.io) and installs to 70+ agents (Claude Code, Cursor, Codex, etc.).

**Repo layout the installer expects** (verified):
- Discovery walks: repo root (if it has `SKILL.md`), then `skills/` — **one level deep for flat layout** (`skills/<name>/SKILL.md`) and **one extra level for catalogs** (`skills/<category>/<name>/SKILL.md`). Both work; mattpocock uses the catalog form (`skills/engineering/grill-me/SKILL.md`).
- Also scanned: `skills/.curated/`, `skills/.experimental/`, `.claude/skills/`, `.agents/skills/`, etc. A SKILL.md at a shallower level shadows anything nested below it; if nothing matches, it falls back to recursive search.
- **No skills.json required.** No registration step at all — optional `.claude-plugin/plugin.json`/`marketplace.json` exists for Claude-plugin interop, but plain `skills/<name>/SKILL.md` is sufficient.

**Supporting files**: yes — `npx skills add` installs the **entire skill directory**, including `references/`, `scripts/`, and `assets/`. Vercel's guide explicitly recommends this progressive-disclosure split: keep SKILL.md concise, push checklists/long docs into `references/`, executable helpers into `scripts/`. This confirms the self-updating-source-list design works (source URLs in `references/sources.md`).

**Frontmatter**:
- *Portable (spec-level, all agents)*: `name` (lowercase, hyphens), `description` (required by installer validation), `metadata.internal: true` (hide from discovery), `license`.
- *Claude Code extensions* (fine to include; other agents ignore): `disable-model-invocation: true` (user-only invocation), `user-invocable: false` (Claude-only background knowledge), `when_to_use`, `allowed-tools`, `disallowed-tools`, `model`, `effort`, `context: fork` + `agent`, `$ARGUMENTS`/`$0` substitution. `description` + `when_to_use` are truncated at 1,536 chars in listings.
- Write `description` as a **routing rule with trigger phrases**, not a summary — it's the activation mechanism.

**README conventions that made mattpocock/skills viral**:
1. One-line install at the very top: `npx skills@latest add <owner>/<repo>`.
2. Narrative problem-first framing, not a feature list — each skill presented as Problem → Fix pairs.
3. Skills split into **User-invoked** (workflows) vs **Model-invoked** (background discipline) sections; bold name + em-dash + one-line description.
4. Authority anchors (citations of respected books/sources) + a memorable flagship skill name (`/grill-me` did the marketing).
5. Opinionated positioning ("Skills for Real Engineers") rather than neutral cataloging.

**Leaderboard mechanics**: skills.sh listing is automatic via install telemetry — first installs put the repo on the board; ranking = installs over trailing 8 weeks, with a 24h "trending" view, so launch-day concentration (tweet/newsletter push driving same-day installs) is what surfaces a new repo.

Sources: [vercel-labs/skills](https://github.com/vercel-labs/skills) · [Vercel Agent Skills guide](https://vercel.com/kb/guide/agent-skills-creating-installing-and-sharing-reusable-agent-context) · [skills.sh](https://skills.sh) · [Claude Code skills docs](https://code.claude.com/docs/en/skills) · [mattpocock/skills](https://github.com/mattpocock/skills) · [ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) · [Anthropic frontend-design blog](https://claude.com/blog/improving-frontend-design-through-skills) · [NN/g State of UX 2026](https://www.nngroup.com/articles/state-of-ux-2026/) · [NN/g AI topic](https://www.nngroup.com/topic/ai/) · [Material 3 Expressive session](https://io.google/2025/explore/technical-session-24/) · [M3 Expressive for Wear OS](https://android-developers.googleblog.com/2025/08/introducing-material-3-expressive-for-wear-os.html) · [Meet Liquid Glass (WWDC25)](https://developer.apple.com/videos/play/wwdc2025/219/) · [Liquid Glass — Wikipedia](https://en.wikipedia.org/wiki/Liquid_Glass) · [OneTrust EAA + WCAG 2.2](https://www.onetrust.com/blog/understanding-the-european-accessibility-act-and-wcag-22/) · [W3C WCAG overview](https://www.w3.org/WAI/standards-guidelines/wcag/) · [web.dev INP](https://web.dev/articles/inp) · [Shape of AI](https://www.shapeof.ai/) · [Growth.Design psychology](https://growth.design/psychology) · [Smashing: Practical Guide to Design Principles](https://www.smashingmagazine.com/2026/04/practical-guide-design-principles/) · [Agent UX patterns (HatchWorks)](https://hatchworks.com/blog/ai-agents/agent-ux-patterns/) · [agentic-design.ai UI/UX patterns](https://agentic-design.ai/patterns/ui-ux-patterns) · [Setproduct AI chat UI](https://www.setproduct.com/blog/ai-chat-interface-ui-design) · [shadcn/ui changelog](https://ui.shadcn.com/docs/changelog) · [crossaitools Design category](https://crossaitools.com/skills/category/design-ui) · [Implicator on mattpocock repo](https://www.implicator.ai/matt-pocock-skills-repo-jumps-past-45k-stars-with-reusable-ai-instructions/)
