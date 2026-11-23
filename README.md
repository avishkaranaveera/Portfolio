# 👨‍💻 Avishka Ranaveera – Personal Portfolio

A modern, full-stack personal portfolio showcasing my skills, projects, experience, certifications, and development journey. Built with **React, Java Spring Boot, and Three.js**, featuring interactive 3D visuals, animated backgrounds, and dynamic API integration.

## ✨ Features

- Modern and responsive portfolio design
- Interactive 3D hero section using Three.js
- Animated particle background
- Dynamic content powered by Spring Boot REST APIs
- Projects, skills, certifications, and experience sections
- Contact form with EmailJS integration
- Backend-powered content management

## 🛠️ Tech Stack

**Frontend**
- React 19
- Vite
- Three.js
- EmailJS

**Backend**
- Java 21
- Spring Boot 4
- Spring Data JPA
- H2 Database

**Deployment**
- Netlify
- Render
- Vercel

## 📂 Project Structure

```text
Portfolio/
├── backend/       # Spring Boot REST API
├── frontend/      # React + Vite application
├── .github/       # GitHub Actions workflows
├── render.yaml
├── netlify.toml
└── README.md
```

## 🚀 Getting Started

**1. Clone the repository**

```bash
git clone https://github.com/avishkaranaveera/Portfolio.git
cd Portfolio
```

**2. Start the backend**

```bash
cd backend
./mvnw spring-boot:run
```

Backend: `http://localhost:8080`

**3. Start the frontend**

Open another terminal:

```bash
cd frontend
npm install
npm run dev
```

Frontend: `http://localhost:5173`

## ⚙️ Environment Configuration

Create a `.env` file inside the frontend directory using `.env.example` as a reference.

Configure your EmailJS credentials to enable email delivery through the contact form.

## ☁️ Deployment

- **Backend:** Render
- **Frontend:** Netlify or Vercel

Configure the required environment variables and CORS settings before deployment.

## 👨‍💻 Developer

**Avishka Ranaveera**

Full-Stack Software Developer | Building Modern Web Applications

- GitHub: [@avishkaranaveera](https://github.com/avishkaranaveera)

---

⭐ If you find this project interesting, feel free to explore the repository!
