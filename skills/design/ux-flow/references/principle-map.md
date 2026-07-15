> canon-version: 2026-07
> Application routing for all 30 Laws of UX across whiteboard disciplines.

# Laws of UX principle routing

Use this matrix after reading `flow-canon.md`. Cite a law only when its trigger is present; do not add decorative citations. When a trigger is present, produce the evidence or decision named in the last column.

| Principle | Primary skill(s) | Use when… | Required evidence or decision |
|---|---|---|---|
| Aesthetic-Usability Effect | ui-craft, design-review | polish or visual harmony may change perceived usability | Separate polish from usability; verify task success and hard gates still pass. |
| Choice Overload | ux-flow, copy-craft, design-review | a screen or step presents many actions, plans, variants, or messages | Curate, default, group, or progressively disclose; record the chosen path. |
| Chunking | ux-flow, ui-craft, copy-craft | dense content, fields, instructions, or steps need scanning | Group by meaning, add hierarchy, and show clear chunk boundaries. |
| Cognitive Bias | ux-flow, copy-craft, design-review | emotion, framing, memory, defaults, rewards, or retention may influence decisions | Name the likely bias and run an ethics and user-wellbeing check. |
| Cognitive Load | ux-flow, ui-craft, copy-craft, design-review | users must learn, compare, remember, or process many signals | Remove extraneous work and state what the system offloads. |
| Doherty Threshold | ux-flow, design-review, copy-craft | an action, loading, or streaming response may take time | Specify timely feedback, the performance target, and the covered state. |
| Fitts’s Law | ux-flow, ui-craft, design-review | primary or related controls need placement, sizing, or touch consideration | Place controls near the working context, size and space them, and cite the target gate when measured. |
| Flow | ux-flow, design-review | task challenge, feedback, or friction affects sustained focus | Match complexity to user skill and preserve uninterrupted progress. |
| Goal-Gradient Effect | ux-flow, copy-craft, design-review | a task has multiple steps or a visible completion goal | Show honest progress, a useful head start, and the next milestone. |
| Hick’s Law | ux-flow, ui-craft, copy-craft, design-review | choice count or complexity affects decision time | Curate, recommend, stage, or justify the choices that remain. |
| Jakob’s Law | ux-flow, ui-craft, copy-craft, design-review | conventions, navigation, labels, or redesigns change expectations | Use familiar patterns or document evidence for the deviation. |
| Law of Common Region | ui-craft, design-review, copy-craft | fields, actions, or content need a visible boundary | Use a shared container or background when spacing alone is not enough. |
| Law of Proximity | ui-craft, design-review, copy-craft | visual or textual adjacency communicates a relationship | Use spacing and adjacency before adding borders or extra labels. |
| Law of Prägnanz | ui-craft, design-review | an image or composition could be interpreted in multiple complex ways | Simplify to the clearest form and test the intended interpretation. |
| Law of Similarity | ui-craft, design-review, token-drift | same-role elements or states need consistent encoding | Use shared tokens and components; flag meaningful exceptions. |
| Law of Uniform Connectedness | ui-craft, design-review | two elements form one relationship or process | Connect them with a line, container, or visual bridge and verify interpretation. |
| Mental Model | ux-flow, ui-craft, copy-craft, design-review | the user’s understanding may differ from the team’s system model | Research or restate the model, align labels and controls, and record discordance. |
| Miller’s Law | ux-flow, ui-craft, copy-craft | memory span or item count is a concern | Chunk information; never impose an arbitrary seven-item cap. |
| Occam’s Razor | ux-flow, ui-craft, copy-craft, design-review | competing solutions contain extra steps, elements, or words | Remove elements until the next removal harms comprehension or function. |
| Paradox of the Active User | ux-flow, copy-craft, design-review | onboarding or help assumes users will learn before acting | Let users start immediately and provide contextual, revisitable guidance. |
| Pareto Principle | ux-flow, design-review | scope, prioritization, or feature breadth is being decided | Prioritize the highest-value path and state what is deferred. |
| Parkinson’s Law | ux-flow, copy-craft, design-review | tasks or forms can expand to fill available time | Constrain duration with autofill, sensible limits, and clear expectations. |
| Peak-End Rule | ux-flow, ui-craft, copy-craft, design-review | success, error, waiting, handoff, or completion is emotionally salient | Design the peak and ending, including the success message/state and recovery. |
| Postel’s Law | ux-flow, copy-craft, design-review | input formats, typos, optionality, or integrations vary | Accept and normalize safely; emit canonical output and clear feedback. |
| Selective Attention | ui-craft, copy-craft, design-review | critical information competes with ads, decoration, or secondary content | Make goal-relevant signals distinct; never style them like irrelevant promotion. |
| Serial Position Effect | ux-flow, ui-craft, copy-craft, design-review | ordered lists, navigation, step sequences, or action rows matter | Put priority first or last; do not bury key actions in the middle. |
| Tesler’s Law | ux-flow, copy-craft, design-review | unavoidable complexity can be shifted between system and user | Absorb complexity with defaults, inference, or progressive disclosure. |
| Von Restorff Effect | ui-craft, copy-craft, design-review | one action or information item should be remembered | Make only the intended item distinct and do not rely on color alone. |
| Working Memory | ux-flow, ui-craft, copy-craft, design-review | information must be carried across screens or compared | Keep context visible, preserve input, and externalize comparison. |
| Zeigarnik Effect | ux-flow, copy-craft, design-review | a task can be interrupted or left incomplete | Show status, a resume path, and an honest completion state. |

## Coverage rule

The five model-invoked disciplines own the matrix together. `ux-flow` owns goal, task, state, and complexity decisions; `ui-craft` owns perception, grouping, emphasis, and target decisions; `copy-craft` owns language, memory, choice, and feedback decisions; `design-review` verifies the applicable laws against evidence; `token-drift` applies only the visual laws that token values can actually affect. Wrappers and utilities orchestrate these disciplines and do not need to cite every law.
