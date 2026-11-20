# Avishka Ranaveera — Portfolio

A modern, clean, and basic personal portfolio built with React (Vite) and an EmailJS-powered contact form — ready for free hosting on Firebase Hosting.

## Tech Stack

- **Framework:** React 19 + Vite
- **Styling:** Modern Clean CSS (centralized design tokens)
- **Pages:** Home, About, Projects, Qualifications, Contact
- **Email Delivery:** [EmailJS](https://www.emailjs.com/) (free tier)
- **Hosting:** [Firebase Hosting](https://firebase.google.com/) (100% free with SSL and custom domain)

---

## Running Locally

1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```

2. Install dependencies (if not already installed):
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

---

## Contact Form Setup (EmailJS)

To receive messages submitted via the contact form directly in your inbox:

1. Create a free account at [EmailJS](https://www.emailjs.com).
2. Add an Email Service (e.g., your personal Gmail).
3. Create an Email Template with variables `{{from_name}}`, `{{from_email}}`, and `{{message}}`.
4. Add the credentials to `frontend/.env`:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

---

## Editing Your Portfolio Content

All your data is centrally managed in **`frontend/lib/data.js`**:

- **Profile, bio, tagline & socials:** `profile` object
- **Projects:** `projects` array
- **Qualifications / Certifications:** `certifications` array
- **Testimonials:** `testimonials` array
- **Profile photo:** place your picture at `frontend/public/profile.jpg`
- **Resume:** place your PDF at `frontend/public/resume.pdf`

---

## Deploying to Firebase Hosting (Free)

```bash
cd frontend
npm run deploy
```
