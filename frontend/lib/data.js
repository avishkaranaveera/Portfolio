// Single source of truth for the production (Vercel) API.
// Keep this in sync with backend/src/main/java/com/avishka/portfolio/config/DataSeeder.java
// and ProfileController.java, which serve the same content for local development.

export const profile = {
  name: "Avishka Ranaveera",
  title: "Full-Stack Developer",
  tagline: "Building clean, reliable web applications",
  bio:
    "I'm a full-stack developer who enjoys turning ideas into working products, " +
    "from REST APIs with Spring Boot to responsive interfaces with React. " +
    "I care about clean architecture, readable code, and shipping things that " +
    "actually solve the problem in front of me, not just the resume-friendly " +
    "version of it. Outside of client work I spend time exploring new tools in " +
    "the Java and JavaScript ecosystems and contributing to small open-source " +
    "utilities. Replace this bio with your own story.",
  location: "Sri Lanka",
  email: "ashenikarunarathna2002@gmail.com",
  photoUrl: "/profile.jpg",
  resumeUrl: "/resume.pdf",
  highlights: [
    "Full-stack delivery: one developer covering backend, frontend, and deployment",
    "Clean, tested, maintainable code — not just code that runs once",
    "Clear communication and realistic timelines, no scope surprises",
    "Fast turnaround on bug fixes and iteration during active projects",
  ],
  socials: [
    { platform: "GitHub", url: "https://github.com/your-username" },
    { platform: "LinkedIn", url: "https://linkedin.com/in/your-username" },
  ],
};

export const skills = [
  { id: 1, name: "Java", category: "Backend", level: 90 },
  { id: 2, name: "Spring Boot", category: "Backend", level: 85 },
  { id: 3, name: "React", category: "Frontend", level: 85 },
  { id: 4, name: "JavaScript", category: "Frontend", level: 80 },
  { id: 5, name: "SQL", category: "Database", level: 75 },
  { id: 6, name: "Git", category: "Tools", level: 85 },
];

export const projects = [
  {
    id: 1,
    title: "Sample Project One",
    description:
      "A short description of what this project does and the problem it solves. " +
      "Replace with your real project.",
    tags: ["React", "Spring Boot", "PostgreSQL"],
    imageUrl: "",
    repoUrl: "https://github.com/your-username/project-one",
    liveUrl: "",
    featured: true,
  },
  {
    id: 2,
    title: "Sample Project Two",
    description:
      "Another project summary highlighting the tech stack and your role in building it.",
    tags: ["Java", "REST API"],
    imageUrl: "",
    repoUrl: "https://github.com/your-username/project-two",
    liveUrl: "",
    featured: false,
  },
];

export const certifications = [
  {
    id: 1,
    title: "Oracle Certified Professional: Java SE Developer",
    issuer: "Oracle",
    issueDate: "2024",
    credentialUrl: "",
  },
  {
    id: 2,
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    issueDate: "2024",
    credentialUrl: "",
  },
  {
    id: 3,
    title: "Meta Front-End Developer Professional Certificate",
    issuer: "Meta",
    issueDate: "2023",
    credentialUrl: "",
  },
];

export const experience = [
  {
    id: 1,
    type: "WORK",
    title: "Full-Stack Developer",
    organization: "Freelance / Contract",
    period: "2024 — Present",
    description:
      "Designing and building full-stack web applications for clients, covering " +
      "everything from API design to deployment. Replace with your real role.",
    sortOrder: 1,
  },
  {
    id: 2,
    type: "EDUCATION",
    title: "BSc (Hons) in Software Engineering",
    organization: "Your University",
    period: "2021 — 2025",
    description:
      "Coursework in data structures, databases, software architecture, and web development.",
    sortOrder: 2,
  },
  {
    id: 3,
    type: "WORK",
    title: "Junior Developer Intern",
    organization: "A Company",
    period: "2023 — 2024",
    description:
      "Contributed to internal tools and learned production engineering practices " +
      "as part of a small team.",
    sortOrder: 3,
  },
];

export const testimonials = [
  {
    id: 1,
    author: "Jane Client",
    role: "Founder, Example Startup",
    quote:
      "Delivered exactly what we asked for, on time, and communicated clearly the " +
      "whole way through. Replace with a real quote.",
  },
  {
    id: 2,
    author: "John Manager",
    role: "Product Lead, Example Co.",
    quote: "Solid engineering instincts and easy to work with. Would hire again.",
  },
];

export const YEARS_EXPERIENCE = 3;
