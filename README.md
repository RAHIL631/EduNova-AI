# EduNova AI — Personalized AI Learning Platform

> **"Learn Smarter. Improve Faster."**  
> Built for Hackathon Track 4 — Education

EduNova AI is an intelligent, personalized learning platform that continuously adapts to student performance, identifies knowledge gaps across foundational subjects (such as DBMS, Computer Networks, NLP, and Java), and delivers targeted study paths and recommendations.

---

## 👥 Development Team

| Name | Role | Responsibilities |
| :--- | :--- | :--- |
| **Rahil Hassan** | Full-Stack & Platform Architecture | Next.js 15 UI, Tailwind CSS, Node/Express Backend, MongoDB/Mongoose, JWT Authentication, Dashboard, API Integration, Testing |
| **Rihan A Melinamani** | AI Engineering & Data Science | FastAPI AI Microservice, AI Tutor, Adaptive Quiz Generator, Assignment Generator, Study Planner, Recommendation Engine |

---

## 🚀 Core Features (Foundation & Architecture)

1. **Continuous Learning Loop**: `LEARN → PRACTICE → ASSESS → ANALYZE → PERSONALIZE`.
2. **Interactive Student Dashboard**: Live metric cards (Overall Progress 78%, Average Quiz Score 82%, 7-Day Study Streak, 24 Quizzes Completed), subject mastery trackers, knowledge gap analysis, and upcoming agenda.
3. **Responsive Visual Analytics**: Dynamic charts powered by Recharts showing performance trend curves and subject breakdowns.
4. **Secure JWT Authentication**: Express middleware verifying Bearer tokens, rate-limited auth routes, encrypted passwords via bcrypt, and strict input validation.
5. **Decoupled AI Pipeline Contract**: Standardized abstraction layer (`backend/src/services/aiService.ts`) ready for integration with Rihan's FastAPI AI engine.

---

## 🛠️ Technology Stack

- **Frontend**: Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS v4, Lucide React, Axios, Recharts
- **Backend**: Node.js, Express.js, TypeScript, Mongoose, JSON Web Tokens (JWT), bcryptjs, express-rate-limit
- **Database**: MongoDB / MongoDB Atlas
- **AI Microservice (In Development)**: Python, FastAPI, LangChain, LLMs (Gemini / OpenAI)

---

## ⚙️ Environment Variables

### Backend (`backend/.env`)
Create `backend/.env` (based on `backend/.env.example`):
```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/edunova
JWT_SECRET=your_secure_jwt_secret_key
JWT_EXPIRES_IN=7d
AI_SERVICE_URL=http://localhost:8000
FRONTEND_URL=http://localhost:3000
```

### Frontend (`frontend/.env.local`)
Create `frontend/.env.local` (based on `frontend/.env.example`):
```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

---

## 💻 Local Setup & Development

### 1. Prerequisites
- Node.js (v20+ or v24)
- npm (v10+)
- MongoDB running locally on port 27017 or a MongoDB Atlas URI

### 2. Installation
Install dependencies for all workspaces:
```bash
# In project root
npm install

# Or install individually
cd backend && npm install
cd ../frontend && npm install --legacy-peer-deps
```

### 3. Running Backend
```bash
cd backend
npm run dev
```
- API Server runs at: `http://localhost:5000`
- Health check: `http://localhost:5000/health`

### 4. Running Frontend
```bash
cd frontend
npm run dev
```
- Web Application runs at: `http://localhost:3000`

### 5. Running Full-Stack Concurrently
From the root directory:
```bash
npm run dev
```

---

## 🧪 Testing

### Backend Automated Test Suite
Run the comprehensive integration test suite verifying health, registration, duplicate checks, login, invalid credentials, protected `/me`, and logout:
```bash
cd backend
npm test
```

### Frontend Build & Lint Verification
```bash
cd frontend
npm run lint
npm run build
```

---

## 📡 API Architecture

| Method | Endpoint | Protection | Description |
| :--- | :--- | :--- | :--- |
| `GET` | `/health` | Public | Service health and database connection status |
| `POST` | `/api/auth/register` | Public (Rate Limited) | Register a new student account |
| `POST` | `/api/auth/login` | Public (Rate Limited) | Authenticate user & return JWT token |
| `GET` | `/api/auth/me` | Protected (`Bearer JWT`) | Fetch current user profile |
| `POST` | `/api/auth/logout` | Public | Terminate session |
| `GET/POST` | `/api/tutor/*` | Protected | AI Tutor placeholder endpoint (Phase 2) |
| `GET/POST` | `/api/quiz/*` | Protected | AI Quiz generator placeholder (Phase 2) |
| `GET/POST` | `/api/assignment/*`| Protected | AI Assignment placeholder (Phase 2) |
| `GET/POST` | `/api/planner/*` | Protected | Study planner placeholder (Phase 2) |
| `GET` | `/api/progress` | Protected | Mastery telemetry placeholder (Phase 2) |
| `GET` | `/api/recommendations` | Protected | AI Recommendation placeholder (Phase 2) |

---

## 🔮 Future AI Integration

The Express backend connects to Rihan's FastAPI AI service via `backend/src/services/aiService.ts`. See [`docs/ai-design.md`](docs/ai-design.md) for full service contracts and data flow diagrams.