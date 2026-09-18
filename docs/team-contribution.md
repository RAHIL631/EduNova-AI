# Team Contribution — EduNova AI

**Hackathon Track:** Track 4 — Education  
**Project:** EduNova AI — Personalized AI Learning Platform

---

## 1. Rahil Hassan
**Role:** Full-Stack Developer & Platform Architect

### Responsibilities & Deliverables:
- **Next.js 15 Frontend:** Responsive App Router architecture, light-theme educational design system, accessible form components, and dynamic charts.
- **Node.js / Express Backend:** REST API layer, routing, controller-service pattern, input validation middleware, rate-limiting, and error handlers.
- **Database & Persistence:** MongoDB / Mongoose connection configuration, resilient offline handling, and User document schema with automatic bcrypt hashing.
- **Authentication & Security:** Secure JWT session issuance, Bearer token verification middleware, protected route gates, and password sanitization.
- **Application Dashboard:** Student command center with live metrics, subject mastery breakdowns, knowledge gap detection, upcoming task agenda, and interactive Recharts visualizations.
- **Frontend ↔ Backend Integration:** Axios client, token interceptors, AuthContext, and reactive authentication state.
- **Testing & Tooling:** Automated integration test suite covering health and auth endpoints (`GET /health`, registration, duplicate protection, login, invalid credentials, protected `/me`, logout).

---

## 2. Rihan A Melinamani
**Role:** AI Engineer & Machine Learning Specialist

### Responsibilities & Deliverables:
- **FastAPI AI Microservice:** High-performance Python backend powering generative AI workloads.
- **AI Tutor:** Contextual, level-aware conversational tutor for complex STEM and computer science subjects.
- **AI Adaptive Quiz Generator:** Algorithmic question generation with dynamic difficulty calibration based on prior mistakes.
- **AI Assignment Generator:** Customized problem sets and conceptual exercises targeting knowledge gaps.
- **Smart Study Planner:** Spaced repetition scheduling and examination timetable optimization.
- **AI Recommendation Engine:** Performance telemetry analysis generating high-impact next-step study suggestions.
- **Prompt Engineering & LLM Integration:** System prompts, output structuring, and hallucination guardrails.

---

## 3. Collaborative Integration
- API contract definitions between Express and FastAPI (`docs/ai-design.md`).
- End-to-end integration testing and user journey validation.
- Deployment configuration and final hackathon presentation.