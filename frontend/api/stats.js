import { certifications, projects, skills, YEARS_EXPERIENCE } from "../lib/data.js";

export default function handler(req, res) {
  res.status(200).json({
    projectsCount: projects.length,
    certificationsCount: certifications.length,
    yearsExperience: YEARS_EXPERIENCE,
    technologiesCount: skills.length,
  });
}
