# Security Scout — AI Agent Rules

This file provides guidance to AI agents working on Security Scout, an AI-powered security investigation agent.

## 🎯 Project Context

**Security Scout** uses AI to help security teams investigate alerts and incidents. You're building an investigation assistant that gathers evidence, correlates signals, and recommends actions—while keeping humans in control of actual responses.

- **Repository**: [https://github.com/hrudushibu/security-scout](https://github.com/hrudushibu/security-scout)
- **License**: Apache-2.0
- **Contact**: [hrudushibu.tech@gmail.com](mailto:hrudushibu.tech@gmail.com)

## 🚧 Development Stage

**Early Development** — Investigation workflows, AI integration patterns, and evidence collection pipelines are being designed. Implementation is in progress.

## 🔍 Core Principles

### Human-in-the-Loop
Security Scout investigates and recommends—it doesn't execute. All response actions require human approval.

### Evidence-Based
Every conclusion must be backed by collected evidence. No speculation without data.

### Explainable AI
Security teams need to understand *why* the AI reached a conclusion. Make reasoning transparent.

### Audit Everything
Every investigation step, every evidence piece, every recommendation must be logged for review.

## 💻 Tech Stack

- **Next.js 16** with App Router
- **React 19** with Server Components
- **TypeScript 5** in strict mode
- **Tailwind CSS 4** for styling
- **shadcn/ui** for components

## 📂 Current Project Structure

```
app/                  # Next.js App Router pages
components/
  app/                # App-wide layouts
  console/            # Console-specific UI
  ui/                 # Base UI primitives
lib/                  # Shared utilities
```

**Note**: Investigation-specific folders will be added as development progresses.

## 🚨 Security Considerations

### Never Auto-Execute
Never automatically execute remediation actions. Always require human approval.

### Protect Investigation Data
Investigation data contains sensitive security information. Implement access controls.

### Validate AI Responses
AI can hallucinate. Validate all AI-generated insights against actual evidence.

---

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
