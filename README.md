# 🧠 SkillMatrixAI

> **AI-powered candidate skill assessment and training roadmap platform** — built for HR teams and Trainers to streamline the hiring-to-training pipeline.

---

## 🚀 Live Demo

🔗 **[https://skill-matrix-ai-ercm.vercel.app/](https://skill-matrix-ai-ercm.vercel.app/)**

---

## 📌 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Environment Variables](#environment-variables)
- [API Reference](#api-reference)
- [User Roles & Workflow](#user-roles--workflow)
- [AI Integration](#ai-integration)
- [Contributing](#contributing)

---

## 🧩 Overview

**SkillMatrixAI** is a full-stack web application that helps organizations evaluate candidates by automatically generating AI-powered skill development roadmaps from uploaded resumes. The platform supports two distinct user roles — **HR** and **Trainer** — each with their own dedicated dashboard and workflows.

- **HR** uploads candidate resumes → AI extracts skills and generates a phased training roadmap
- **Trainer** reviews, approves/rejects roadmaps, tracks training progress, and marks candidates as complete
- **HR** can resubmit rejected roadmaps, triggering a fresh AI-powered regeneration

---

## ✨ Features

### 👩‍💼 HR Features
- Upload candidate resumes (PDF or text)
- AI-generated skill roadmaps via **Google Gemini 2.5 Flash**
- Dashboard with candidate pipeline overview (Total / Approved / Rejected / In Progress)
- View detailed candidate profiles with roadmap and AI insights
- Resubmit rejected candidate roadmaps for AI regeneration

### 🧑‍🏫 Trainer Features
- Dashboard with stats: Total / Pending / In Training / Completed
- Review AI-generated roadmaps → Approve or Reject with feedback
- Track per-candidate progress with interactive task checklists
- Mark individual tasks as complete / incomplete (toggle)
- Download candidate CVs
- Mark candidates as "Training Complete"

### 🔐 Auth
- Role-based registration and login (`HR`, `trainer`, `manager`)
- JWT-based authentication with bcrypt password hashing

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | React 19, React Router DOM v7, Vite, Tailwind CSS v4 |
| **Backend** | Node.js, Express.js v5 |
| **Database** | MongoDB (via Mongoose) |
| **AI** | Google Gemini 2.5 Flash (`@google/genai`) |
| **Auth** | JWT (`jsonwebtoken`), bcryptjs |
| **File Handling** | Multer (resume uploads), pdf-parse |
| **Validation** | Joi |

---

## 📁 Project Structure

```
SkillMatrixAI/
├── backend/
│   ├── config/
│   │   └── db.js                   # MongoDB connection
│   ├── controllers/
│   │   ├── authController.js        # Register & Login
│   │   ├── hrController.js          # HR operations (upload, dashboard, resubmit)
│   │   └── trainerController.js     # Trainer operations (review, tasks, complete)
│   ├── middleware/
│   │   ├── auth.js
│   │   └── authMiddleware.js        # JWT protect & role authorization
│   ├── models/
│   │   ├── Candidate.js             # Candidate schema
│   │   ├── Roadmap.js               # AI Roadmap schema
│   │   ├── User.js                  # User schema (HR / Trainer / Manager)
│   │   └── Comment.js               # Trainer comments schema
│   ├── routes/
│   │   ├── authRoutes.js            # /api/auth
│   │   ├── hrRoutes.js              # /api/hr
│   │   └── trainerRoutes.js         # /api/trainer
│   ├── services/
│   │   ├── aiService.js             # Gemini AI roadmap generation
│   │   └── resumeParser.js          # PDF text extraction
│   ├── uploads/                     # Uploaded resume files
│   ├── server.js                    # Express app entry point
│   └── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── HRLayout.jsx         # HR sidebar + outlet layout
│   │   │   ├── TrainerLayout.jsx    # Trainer sidebar + outlet layout
│   │   │   ├── Sidebar.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── CustomDropdown.jsx
│   │   ├── pages/
│   │   │   ├── Landing.jsx          # Public landing page
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── HRDashboard.jsx      # HR status & pipeline view
│   │   │   ├── HRCandidateProfile.jsx # HR candidate detail + resubmit
│   │   │   ├── UploadResumes.jsx    # Resume upload page
│   │   │   ├── TrainerDashboard.jsx # Trainer main dashboard
│   │   │   ├── RoadmapReview.jsx    # Approve/reject roadmap
│   │   │   ├── Candidates.jsx       # All candidates list
│   │   │   ├── CandidateDetail.jsx  # In-depth candidate + task tracker
│   │   │   ├── AnalysisResults.jsx  # Enterprise analytics view
│   │   │   └── Roadmap.jsx
│   │   ├── App.jsx                  # Routing configuration
│   │   ├── main.jsx
│   │   └── index.css
│   ├── vite.config.js
│   └── package.json
│
├── .gitignore
└── README.md
```

---

## 🏁 Getting Started

### Prerequisites

- Node.js >= 18
- MongoDB (local or Atlas)
- Google Gemini API Key

---

### Backend Setup

```bash
# Navigate to backend
cd backend

# Install dependencies
npm install

# Create .env file (see Environment Variables section)
# Then start the server
node server.js
```

The backend will run on `http://localhost:3000` by default.

---

### Frontend Setup

```bash
# Navigate to frontend
cd frontend

# Install dependencies
npm install

# Create .env file (see Environment Variables section)
# Then start the dev server
npm run dev
```

The frontend will run on `http://localhost:5173` by default.

---

## 🔐 Environment Variables

### `backend/.env`

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
GEMINI_API_KEY=your_google_gemini_api_key
```

### `frontend/.env`

```env
VITE_API_BASE_URL=http://localhost:3000
```

> ⚠️ **For production**, set `VITE_API_BASE_URL` to your deployed backend URL.

---

## 📡 API Reference

### Auth Routes — `/api/auth`

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/auth/register` | Register a new user (HR / Trainer / Manager) |
| `POST` | `/api/auth/login` | Login and receive a JWT token |

---

### HR Routes — `/api/hr`

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/hr/dashboard` | Get HR dashboard stats and recent candidates |
| `POST` | `/api/hr/upload` | Upload a candidate resume (multipart/form-data) |
| `GET` | `/api/hr/candidate/:id` | Get a specific candidate's profile |
| `POST` | `/api/hr/candidate/:id/resubmit` | Resubmit a rejected candidate's roadmap for AI regeneration |

---

### Trainer Routes — `/api/trainer`

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/trainer/dashboard` | Get trainer dashboard stats and roadmaps |
| `GET` | `/api/trainer/candidates` | Get all candidates list |
| `GET` | `/api/trainer/candidate/:id` | Get detailed candidate profile + comments |
| `POST` | `/api/trainer/roadmap/:id/review` | Approve or reject a roadmap (`{ action: "APPROVE" \| "REJECT", feedback }`) |
| `POST` | `/api/trainer/roadmap/:roadmapId/task/toggle` | Toggle a task's completion (`{ phaseIndex, taskIndex }`) |
| `POST` | `/api/trainer/candidate/:id/complete` | Mark candidate training as complete |
| `GET` | `/api/trainer/candidate/:id/download-cv` | Download candidate's CV/resume |

---

## 👥 User Roles & Workflow

```
HR uploads resume
      │
      ▼
AI (Gemini) analyzes resume
→ Extracts: name, email, role, skills, experience, projects
→ Generates: 3–4 phase training roadmap
      │
      ▼
Roadmap stored in DB (status: PENDING)
      │
      ▼
Trainer reviews roadmap
  ├── APPROVE → Candidate moves to training
  └── REJECT  → HR can resubmit for AI regeneration
      │
      ▼
Trainer tracks tasks (toggle complete/incomplete)
      │
      ▼
Trainer marks candidate as COMPLETED
```

---

## 🤖 AI Integration

SkillMatrixAI uses **Google Gemini 2.5 Flash** to:

1. **Parse resumes** — extract structured candidate information (name, email, role, skills, experience, projects)
2. **Generate roadmaps** — create a personalized 3–4 phase learning roadmap based on the candidate's profile
3. **Resubmit roadmaps** — regenerate a new roadmap for rejected candidates using their existing profile data

A built-in **demo fallback** is provided for when the Gemini API is unavailable (e.g., quota exceeded), ensuring the platform remains functional during demos and hackathons.

---

## 🤝 Contributing

> Built by **Qubit Coderz** 🚀

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

<p align="center">Made with ❤️ by Qubit Coderz</p>