// In production (Vercel) this is left unset so API calls hit the same-origin
// serverless functions under /api. For local development, .env points it at
// the Spring Boot backend on :8080.
const API_BASE_URL = import.meta.env.VITE_API_URL ?? "";

async function handleResponse(response) {
  if (!response.ok) {
    const body = await response.json().catch(() => null);
    const message = body?.message || `Request failed with status ${response.status}`;
    throw new Error(message);
  }
  return response.status === 204 ? null : response.json();
}

export function getProfile() {
  return fetch(`${API_BASE_URL}/api/profile`).then(handleResponse);
}

export function getSkills() {
  return fetch(`${API_BASE_URL}/api/skills`).then(handleResponse);
}

export function getProjects() {
  return fetch(`${API_BASE_URL}/api/projects`).then(handleResponse);
}

export function getCertifications() {
  return fetch(`${API_BASE_URL}/api/certifications`).then(handleResponse);
}

export function getExperience() {
  return fetch(`${API_BASE_URL}/api/experience`).then(handleResponse);
}

export function getTestimonials() {
  return fetch(`${API_BASE_URL}/api/testimonials`).then(handleResponse);
}

export function getStats() {
  return fetch(`${API_BASE_URL}/api/stats`).then(handleResponse);
}

export function sendContactMessage(payload) {
  return fetch(`${API_BASE_URL}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  }).then(handleResponse);
}
