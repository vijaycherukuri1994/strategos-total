# Claude Code instructions

## Design work: always use the impeccable skill

The `impeccable` skill is installed at `.claude/skills/impeccable/`. Invoke it (`/impeccable <command> <target>`) before any task that touches the user interface — `index.html`, `app.js` rendering code, CSS, `manifest.json` icons/theme, layout, typography, color, motion, UX copy, accessibility, responsive behavior, or a new screen/component. Pick the matching command:

- New or redesigned screen → `craft` (or `shape` to plan first)
- Review → `critique` (UX) or `audit` (a11y, performance, responsive)
- Finishing pass before shipping → `polish`
- Targeted fixes → `layout`, `typeset`, `colorize`, `animate`, `clarify`, `adapt`, `harden`, `onboard`, `optimize`, `bolder`, `quieter`, `distill`, `delight`

If `PRODUCT.md` does not exist yet, run `/impeccable init` first.

Skip the skill only for non-UI work (e.g. `strategos agent.py` logic, `strategos-vault.md` content, service-worker caching).
