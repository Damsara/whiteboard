---
name: setup-whiteboard
description: One-time per-repo configuration for whiteboard skills — where briefs live, platform targets, WCAG target, and the token source of truth.
disable-model-invocation: true
---

# Setup Whiteboard

Configure this repo for whiteboard sessions. Ask one question at a time with a recommended default; explore the codebase first and ask only what it can't answer.

1. **Docs home** — where briefs and reports are written. Default: `docs/design/`.
2. **Platforms** — web, iOS, Android, desktop; which window-size classes matter.
3. **WCAG target** — 2.2 AA is the default and the canon's floor; record anything stricter.
4. **Token source** — where the design system's tokens live: Tailwind config, CSS variables/shadcn theme, Flutter `ThemeData`, or a whiteboard brief's token table. If none exists yet, record "none — run /whiteboard-ui first".

Write the answers to `docs/design/whiteboard-setup.md` as a key/value table (keys exactly: Docs home, Platforms, WCAG target, Token source) with the date. Skills read this file when present; every default above applies when it is absent, so setup is optional everywhere.
