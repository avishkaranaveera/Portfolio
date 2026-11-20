import {
  profile,
  skills,
  projects,
  certifications,
  experience,
  testimonials,
  YEARS_EXPERIENCE,
} from "../../lib/data.js";

const stats = {
  projectsCompleted: projects.length,
  yearsExperience: YEARS_EXPERIENCE,
  certificationsCount: certifications.length,
};

export function getProfile() {
  return Promise.resolve(profile);
}

export function getSkills() {
  return Promise.resolve(skills);
}

export function getProjects() {
  return Promise.resolve(projects);
}

export function getCertifications() {
  return Promise.resolve(certifications);
}

export function getExperience() {
  return Promise.resolve(experience);
}

export function getTestimonials() {
  return Promise.resolve(testimonials);
}

export function getStats() {
  return Promise.resolve(stats);
}

export function sendContactMessage(payload) {
  return Promise.resolve({ success: true, message: "Message handled", payload });
}
