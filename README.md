# STRATEGOS TOTAL — Install Guide

Three ways to run your strategic intelligence agent. Pick any or all.

-----

## 1 · Phone App (PWA) — installs on Android, no app store

The `strategos-pwa/` folder is a complete installable web app. It needs to be served over HTTPS once; after that it installs to your home screen and the vault works offline.

**Fastest path (free hosting):**

1. Go to **netlify.com/drop** (or vercel.com, or render.com).
1. Drag the entire `strategos-pwa` folder onto the page.
1. You get a live HTTPS URL in ~10 seconds.
1. Open that URL on your Android phone in Chrome.
1. Tap the **⋮ menu → “Add to Home screen” → Install**.
1. It now launches full-screen like a native app, with its own icon.

**On first launch** it asks for an Anthropic API key (get one at [console.anthropic.com](https://console.anthropic.com/settings/keys)). The key is stored only on your device. Without a key you can still browse all 114 vault patterns offline — only live analysis needs it. Tap the **◈ logo** anytime to change the key.

**What works offline:** the full vault, search, filters, the intake matrix.
**What needs a connection:** running an analysis (it calls the Claude API directly) and live web search.

> Note: this is a true installable PWA, which is the right tool for “works on the phone without an app store.” A Play Store `.apk` would require a native build + signing + Google’s review; the PWA gives you the same home-screen app experience without any of that.

-----

## 2 · Claude Project — STRATEGOS in every chat

Turn Claude.ai itself into STRATEGOS.

1. In Claude.ai, click **Projects → Create Project**.
1. Open **“Set custom instructions”** and paste all of `claude-agent/PROJECT-INSTRUCTIONS.md` (everything below its divider line).
1. Add **`claude-agent/strategos-vault.md`** as a Project knowledge file (drag it into the Project’s knowledge section).
1. Done. Start any chat inside that Project and Claude responds as STRATEGOS — running the full doctrine and citing the vault.

Best for: thinking through situations conversationally, with memory of the project’s prior chats.

-----

## 3 · Python API Agent — script you run

A command-line version for automation or terminal use.

```bash
pip install anthropic
export ANTHROPIC_API_KEY="sk-ant-..."

# interactive — walks you through the 12-dimension intake:
python claude-agent/strategos_agent.py

# one-liner mode:
python claude-agent/strategos_agent.py --quick "A funded rival is copying our product and undercutting price."

# disable live web search:
python claude-agent/strategos_agent.py --no-web
```

It auto-loads `strategos-vault.md` from the same folder, runs the analysis, prints it, then lets you drill deeper in a follow-up loop. Best for: scripting, piping into other tools, or working offline-of-browser.

-----

## File map

```
strategos-pwa/                 ← the phone app
  index.html, app.js, sw.js    ← app + offline service worker
  manifest.json                ← install metadata
  icon-192.png, icon-512.png   ← home-screen icons
  strategos-vault.md           ← reference copy of the vault

claude-agent/
  PROJECT-INSTRUCTIONS.md      ← paste into a Claude Project
  strategos-vault.md           ← Claude Project knowledge file
  strategos_agent.py           ← runnable Python agent
```

## One honest note on cost & keys

All three call the Claude API under your own key, so usage bills to your Anthropic account (Sonnet is inexpensive per analysis). Keep your key private — in the PWA it never leaves your device, and in the Python agent it’s read from your environment, never hardcoded.