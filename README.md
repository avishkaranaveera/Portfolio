# Avishka Ranaveera — Portfolio

A full-stack personal portfolio: a Spring Boot REST API backing a React (Vite) frontend with a Three.js particle background, a 3D hero visual, and an EmailJS-backed contact form.

## Stack

- **Backend:** Java 21, Spring Boot 4, Spring Data JPA, H2 (in-memory)
- **Frontend:** React 19, Vite, Three.js, EmailJS

## Project structure

```
backend/    Spring Boot API (profile, skills, projects, certifications, experience, testimonials, stats, contact)
frontend/   React + Vite single-page portfolio
```

## Running locally

**Backend** (http://localhost:8080):

```bash
cd backend
./mvnw spring-boot:run
```

**Frontend** (http://localhost:5173):

```bash
cd frontend
npm install
npm run dev
```

Copy `frontend/.env.example` to `frontend/.env` and fill in your EmailJS credentials to enable the contact form's email delivery (optional — the form still saves messages via the backend without it).

## Editing your content

All personal content is served from the backend so it's a single source of truth:

- **Profile, bio, highlights:** [`ProfileController`](backend/src/main/java/com/avishka/portfolio/controller/ProfileController.java)
- **Skills, projects, certifications, experience, testimonials:** seeded in [`DataSeeder`](backend/src/main/java/com/avishka/portfolio/config/DataSeeder.java)
- **Profile photo:** drop an image at `frontend/public/profile.jpg`
- **Resume:** drop a PDF at `frontend/public/resume.pdf`

## Deployment

- **Backend → Render:** [`render.yaml`](render.yaml) + [`backend/Dockerfile`](backend/Dockerfile) — import this repo as a Blueprint on [Render](https://render.com)
- **Frontend → Netlify:** [`netlify.toml`](netlify.toml) — import this repo on [Netlify](https://netlify.com)
- **Frontend → Vercel:** import this repo on [Vercel](https://vercel.com), set the project's Root Directory to `frontend` (Vercel auto-detects the Vite framework)

After deploying, set these environment variables:

- On the frontend host: `VITE_API_URL` (your deployed backend URL), plus the `VITE_EMAILJS_*` values
- On Render: `CORS_ALLOWED_ORIGINS` set to your deployed frontend URL
