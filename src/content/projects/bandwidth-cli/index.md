---
name: Bandwidth CLI
tagline: Manage phone numbers, voice calls and messaging from the terminal, with clean JSON output that's safe for scripts and AI agents.
role: Creator and developer
stack: [Go]
status: Open source
order: 2
featured: true
icon: ./icon.png
install: brew install Bandwidth/tap/band
wide: true
screens:
  - light: ./website.webp
    alt: The Bandwidth CLI documentation page on dev.bandwidth.com
links:
  docs: https://dev.bandwidth.com/tools/cli/
  github: https://github.com/Bandwidth/cli
---

Bandwidth CLI (`band`) is a command-line tool for managing phone numbers, voice calls, and messaging directly from the terminal — built for humans and agent-native by design.

I designed and built `band` in Go to replace clicking through dashboards with fast, scriptable commands. Every command returns clean JSON, and operations are idempotent, so they're safe to drop into scripts and AI agent workflows.

It covers number search and provisioning, voice and SMS/MMS, BXML call control, recording and transcription, and 10DLC and toll-free verification.
