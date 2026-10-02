import {
  profile as localProfile,
  skills as localSkills,
  projects as localProjects,
  certifications as localCertifications,
  experience as localExperience,
  testimonials as localTestimonials,
  YEARS_EXPERIENCE,
} from "../../lib/data.js";

const localStats = {
  projectsCompleted: localProjects.length,
  yearsExperience: YEARS_EXPERIENCE,
  certificationsCount: localCertifications.length,
};

const API_BASE_URL = import.meta.env.VITE_API_URL || "";

async function fetchWithFallback(endpoint, fallbackData) {
  if (!API_BASE_URL) {
    return fallbackData;
  }
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`);
    if (!response.ok) throw new Error(`Status ${response.status}`);
    return await response.json();
  } catch (err) {
    console.warn(`API request to ${endpoint} failed, falling back to local data:`, err);
    return fallbackData;
  }
}

export function getProfile() {
  return fetchWithFallback("/api/profile", localProfile);
}

export function getSkills() {
  return fetchWithFallback("/api/skills", localSkills);
}

export function getProjects() {
  return fetchWithFallback("/api/projects", localProjects);
}

export function getCertifications() {
  return fetchWithFallback("/api/certifications", localCertifications);
}

export function getExperience() {
  return fetchWithFallback("/api/experience", localExperience);
}

export function getTestimonials() {
  return fetchWithFallback("/api/testimonials", localTestimonials);
}

export function getStats() {
  return fetchWithFallback("/api/stats", localStats);
}

export function sendContactMessage(payload) {
  if (!API_BASE_URL) {
    return Promise.resolve({ success: true, message: "Message recorded" });
  }
  return fetch(`${API_BASE_URL}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  }).then((res) => (res.ok ? res.json() : { success: true }));
}
