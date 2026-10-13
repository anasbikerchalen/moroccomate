# AI Agent Operational Directives & Guidelines

> **CRITICAL MANDATORY INSTRUCTION FOR ALL AI AGENTS & ASSISTANTS:**
> Before proposing any plan, creating any feature, or modifying any code in this repository, you **MUST** read and adhere strictly to [`/website_manager.md`](./website_manager.md).

---

## 1. Primary Rule: Read the Website Manager First
Whenever you are asked to plan, build, refactor, style, or debug any part of this project:
1. **Consult `/website_manager.md`**: Inspect the section corresponding to the feature you are touching (Listings, Quizzes, Results, Detail Views, Savvy Intel, or Backend).
2. **Follow the Health Laws**: Ensure you do not break the 3 Fundamental Laws of Platform Health established by the Website Manager.
3. **Log Missing Items**: Any UI element that lacks a corresponding backend field must be marked with `⚠️ (no source in data)` and logged in [`/tasks_by_manager.md`](./tasks_by_manager.md).

---

## 2. Execution State Machine

All agent workflows must operate within this deterministic lifecycle:

* **PLAN**: Plan only. Analyze requirements, read relevant source files, verify backend schemas, and break work down into clear, atomic tasks. Do not edit application code while planning.
* **ACT**: Execute the approved plan (or specific task, e.g. `ACT task 1`). Follow the Website Manager's section guidelines. Maintain 100% contract parity between backend data and UI components.
* **VERIFY**: Run verification checks:
  - Code compilation (`compile_applet` / TypeScript check).
  - Constraint compliance (check against Website Manager rules).
  - Edge-case resilience (empty datasets, missing fields, slow networks).
  - Runtime ready status confirmation.

---

## 3. Anti-Hallucination & Ground-Truth Protocol

* **Real Data Only**: Never fabricate business hours, addresses, phone numbers, prices, or amenities.
* **Search Grounding**: When adding or updating place information, run web searches to obtain factual ground truth.
* **Neutral "No-Color" Unpopulated State**: If information is genuinely unavailable on the web, render a neutral, uncolored/muted state in the UI so the traveler clearly understands the data is currently unconfirmed.
* **Backend Source Parity**: If a UI component is created or requested before the backend property exists in `/src/listings/` or `/src/types/`, you must:
  1. Add `⚠️ (no source in data)` next to the UI element.
  2. Create an actionable task in [`/tasks_by_manager.md`](./tasks_by_manager.md) specifying the required data field, file path, and web search query.

---

## 4. Key Reference Files

* [`/website_manager.md`](./website_manager.md) — The Master Persona, Section Checklists, and Architecture Governance.
* [`/tasks_by_manager.md`](./tasks_by_manager.md) — The Manager's Task Backlog for data gaps, enhancements, and follow-ups.
* `/src/listings/types.ts` — Core TypeScript data contracts.
* `/src/data/controllers/` — Data controllers and query helpers.
