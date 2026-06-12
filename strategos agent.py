#!/usr/bin/env python3
"""
STRATEGOS TOTAL — Python API Agent
==================================
A command-line agentic strategy intelligence powered by the Claude API.

SETUP
-----
    pip install anthropic
    export ANTHROPIC_API_KEY="sk-ant-..."      # get one at console.anthropic.com

RUN
---
    python strategos_agent.py                  # interactive: fills the 12-dimension intake
    python strategos_agent.py --quick "your situation in one line"
    python strategos_agent.py --no-web         # disable live web search

The agent loads the vault from strategos-vault.md (same folder) if present.
"""

import os
import sys
import argparse
from pathlib import Path

try:
    from anthropic import Anthropic
except ImportError:
    sys.exit("Missing dependency. Run:  pip install anthropic")

MODEL = "claude-sonnet-4-20250514"

DIMENSIONS = [
    ("core",         "🎯 Core Situation",        "What's happening? Who are you, what do you want, what's blocking it?", True),
    ("opponent",     "⚔️  Opponents & Allies",    "Who's against you, with you, or could flip? Their resources, incentives, commitments.", False),
    ("political",    "🏛  Political Terrain",      "Power holders, regulators, factions, elections, who owes whom.", False),
    ("geography",    "🗺  Location & Geography",   "Markets, regions, terrain, distances, chokepoints, time zones.", False),
    ("legal",        "⚖️  Legal & Regulatory",     "Laws, pending regulation, contracts, IP, jurisdiction, enforcement reality.", False),
    ("cultural",     "🎭 Cultural Forces",        "Norms, taboos, status symbols, generational divides, language.", False),
    ("demographics", "👥 Demographics",           "Age, income, education, urban/rural, who's gaining numbers.", False),
    ("social",       "🕸  Social Dynamics",        "Networks, influencers, trust levels, narratives, private vs public talk.", False),
    ("economic",     "💰 Economic Conditions",    "Money flows, who's funded, cost structures, who can outlast whom.", False),
    ("ethical",      "🧭 Ethical Boundaries",     "Your red lines, reputation constraints, stakeholder obligations.", False),
    ("international", "🌐 National & International","Trade rules, sanctions, alliances, national interests, sovereignty.", False),
    ("time",         "⏱  Time & Tempo",           "Deadlines, windows opening/closing, runways, who benefits from delay.", False),
]

SYSTEM = """You are STRATEGOS TOTAL — the sharpest strategic intelligence ever assembled. You reason like Hannibal, Sun Tzu, John Boyd, Charlie Munger, George Kennan, Lee Kuan Yew, and Machiavelli's analytical clarity as one mind.

{vault}

REASONING DOCTRINE (run silently, every time):
1. INVERT FIRST — map guaranteed paths to defeat; check if the user is on one.
2. FORCED MOVES — what is each actor OBLIGATED to do by incentives, politics, cost, pride, public commitments? Obligations are exploitable.
3. BLIND-SPOT MAP — what does each opponent believe impossible, beneath them, or non-strategic? That belief is the unguarded gate.
4. COST RATIO — who pays more per unit of damage? Never recommend adverse-ratio engagements.
5. SCORECARD AUDIT — are the metrics defining 'winning' going obsolete?
6. TEMPO — can the user set a pace opponents structurally can't match?
7. DAY-AFTER — every move includes what happens after it works.
8. SECOND BATTLEFIELD — the narrative/perception layer.
9. MULTI-DIMENSIONAL READ — use every supplied dimension; cross-reference them. The best moves live at intersections (legal window × election cycle × cultural moment).
10. MISSING INTELLIGENCE — if critical dimensions are empty, state exactly what data would change the recommendation and the cheapest way to get it.

HARD RULES: No textbook strategy. Every claim cites a vault case or named precedent. Quantify (probabilities, cost ratios, time windows). Attack flawed assumptions first. All moves legal and ethical — outmaneuvering rivals' expectations is strategy; deceiving customers/courts/regulators is a future FAIL case, refuse it. Treat stated ethical boundaries as hard constraints. If the board is unwinnable, say so and name a different board.

OUTPUT FORMAT (use these exact ## headers):
## ⚡ ASSUMPTION AUDIT
## 🧩 DIMENSIONAL READ
## 🗄 VAULT RESONANCE
## 🔒 FORCED MOVES
## ☠️ HOW YOU LOSE
## 🌑 OBLIVION MOVES
## 🎯 THE KILL SHOT
## ⏱ TEMPO & TRIGGERS

Surgical. Specific. Every sentence earns its place."""


def load_vault() -> str:
    p = Path(__file__).parent / "strategos-vault.md"
    if p.exists():
        text = p.read_text(encoding="utf-8")
        return ("You command this curated vault of history's most brutal strategic patterns. "
                "It primes your pattern recognition but does not limit it — also draw on the full "
                "depth of recorded history and cite cases by name.\n\n=== VAULT ===\n" + text)
    return ("You command the full depth of recorded history — thousands of strategic wins and "
            "failures across every civilization, war, market, and movement. Cite cases by name.")


def collect_brief() -> str:
    print("\n\033[33m◈ STRATEGOS TOTAL — SITUATION INTAKE\033[0m")
    print("Fill any dimensions you have intel on. Press Enter to skip. Only Core is required.")
    print("(Multi-line: type your text, then a single '.' on its own line to finish a field.)\n")
    brief = []
    for key, label, hint, required in DIMENSIONS:
        print(f"\033[36m{label}\033[0m  — {hint}")
        lines = []
        while True:
            try:
                line = input("  > ")
            except EOFError:
                line = ""
            if line == ".":
                break
            if line == "" and not lines:
                break
            if line == "" and lines:
                break
            lines.append(line)
        val = "\n".join(lines).strip()
        if val:
            brief.append(f"{label}: {val}")
        elif required and not val:
            while not val:
                val = input("  Core is required > ").strip()
            brief.append(f"{label}: {val}")
        print()
    return "FULL SITUATION BRIEF:\n\n" + "\n\n".join(brief)


def analyze(client, system, messages, use_web):
    kwargs = dict(model=MODEL, max_tokens=2000, system=system, messages=messages)
    if use_web:
        kwargs["tools"] = [{"type": "web_search_20250305", "name": "web_search", "max_uses": 5}]
        kwargs["extra_headers"] = {"anthropic-beta": "web-search-2025-03-05"}
    print("\n\033[33m◈ Analyzing across 12 dimensions...\033[0m\n")
    resp = client.messages.create(**kwargs)
    return "".join(b.text for b in resp.content if b.type == "text")


def main():
    ap = argparse.ArgumentParser(description="STRATEGOS TOTAL — strategic intelligence agent")
    ap.add_argument("--quick", metavar="SITUATION", help="one-line situation, skip full intake")
    ap.add_argument("--no-web", action="store_true", help="disable live web search")
    args = ap.parse_args()

    key = os.environ.get("ANTHROPIC_API_KEY")
    if not key:
        sys.exit("Set ANTHROPIC_API_KEY first:  export ANTHROPIC_API_KEY='sk-ant-...'")

    client = Anthropic(api_key=key)
    system = SYSTEM.format(vault=load_vault())
    use_web = not args.no_web

    brief = args.quick if args.quick else collect_brief()
    messages = [{"role": "user", "content": brief}]

    answer = analyze(client, system, messages, use_web)
    print(answer)
    messages.append({"role": "assistant", "content": answer})

    # Follow-up loop
    print("\n\033[90m" + "─" * 60 + "\033[0m")
    print("\033[90mDrill deeper (challenge a move, add intel) or 'q' to quit.\033[0m")
    while True:
        try:
            f = input("\n\033[33m> \033[0m").strip()
        except (EOFError, KeyboardInterrupt):
            break
        if f.lower() in ("q", "quit", "exit", ""):
            break
        messages.append({"role": "user", "content": f})
        answer = analyze(client, system, messages, use_web)
        print(answer)
        messages.append({"role": "assistant", "content": answer})

    print("\n\033[33m◈ STRATEGOS out.\033[0m")


if __name__ == "__main__":
    main()
