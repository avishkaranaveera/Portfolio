import { useEffect, useState } from "react";
import { Link } from "../router";

const ROLES = [
  "Full Stack Developer",
  "AI Enthusiast",
  "DevOps Learner",
];

export default function Hero({ profile, stats }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    const typingSpeed = isDeleting ? 35 : 75;

    let timeout;

    if (!isDeleting && displayedText === currentRole) {
      // Pause at full word before backspacing
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayedText === "") {
      // Pause briefly before typing the next role
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
      }, 400);
    } else {
      timeout = setTimeout(() => {
        const nextText = isDeleting
          ? currentRole.slice(0, displayedText.length - 1)
          : currentRole.slice(0, displayedText.length + 1);
        setDisplayedText(nextText);
      }, typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, roleIndex]);

  const statItems = stats
    ? [
        { label: "Projects Completed", value: `${stats.projectsCompleted || 6}+` },
        { label: "Qualifications", value: stats.certificationsCount || 4 },
        { label: "Years Experience", value: `${stats.yearsExperience || 2}+` },
      ]
    : [];

  const displayName = profile?.name || "Avishka Ranaweera";

  return (
    <section id="top" className="hero">
      <div className="hero-grid">
        {/* Left Side: Name, Animated Roles, Expanded Engaging Description, Actions */}
        <div className="hero-content">
          <div className="hero-status-pill">
            <span className="status-dot-pulse" />
            <span>Available for opportunities &amp; projects</span>
          </div>

          <p className="hero-eyebrow">Hello, I am</p>
          <h1 className="hero-name">{displayName}</h1>

          {/* Dynamic Animated Rotating Role */}
          <div className="hero-role-container">
            <span className="role-prefix">I am a </span>
            <span className="role-typing-text">{displayedText}</span>
            <span className="role-cursor" aria-hidden="true">|</span>
          </div>

          {/* Expanded Rich Description */}
          <p className="hero-tagline">
            Specializing in engineering resilient, production-ready web applications that seamlessly integrate modern full-stack architectures with cutting-edge artificial intelligence. Dedicated to building clean APIs, intuitive responsive user experiences, and automated cloud delivery pipelines through modern DevOps workflows.
          </p>

          {/* CTAs */}
          <div className="hero-actions">
            <Link className="btn btn-primary" to="/projects">
              View Projects &rarr;
            </Link>
            <Link className="btn btn-secondary" to="/contact">
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Right Side: Large Blended Modern AI Technology Visual */}
        <div className="hero-visual">
          <div className="hero-ai-showcase hero-ai-showcase-large">
            <div className="ai-card-glow" />
            <div className="hero-ai-card hero-ai-card-blended">
              <img
                src="/ai-tech-hero.jpg"
                alt="AI Neural Core & Modern Technology System"
                className="hero-ai-image hero-ai-image-large"
                loading="eager"
              />
              <div className="hero-ai-overlay-blend" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>

      {statItems.length > 0 && (
        <div className="hero-stats">
          {statItems.map((item) => (
            <div key={item.label} className="hero-stat">
              <span className="hero-stat-value">{item.value}</span>
              <span className="hero-stat-label">{item.label}</span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
