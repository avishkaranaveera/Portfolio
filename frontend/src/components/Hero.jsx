import { useEffect, useState } from "react";
import { Link } from "../router";
import useReveal from "../hooks/useReveal";
import useCountUp from "../hooks/useCountUp";

const ROLES = [
  "Full Stack Developer",
  "Freelancer",
  "AI Enthusiast",
  "DevOps Learner",
];

const HIGHLIGHTS = [
  "Full-Stack Scalability",
  "AI & Neural Integrations",
  "Automated Cloud DevOps",
];

export default function Hero({ profile, stats }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Scroll reveal observers for 1st grid (hero content & AI visual) and 2nd grid metrics
  const [heroRef, heroVisible] = useReveal();
  const [statsRef, statsVisible] = useReveal();

  // Targets for counting animation
  const targetProjects = stats?.projectsCompleted ? stats.projectsCompleted * 2 : 12;
  const targetClients = 10;
  const targetExperience = stats?.yearsExperience || 2;

  // Numbers count up when scrolled into view
  const countProjects = useCountUp(targetProjects, 1500, statsVisible);
  const countClients = useCountUp(targetClients, 1500, statsVisible);
  const countExperience = useCountUp(targetExperience, 1200, statsVisible);

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

  const displayName = profile?.name || "Avishka Ranaweera";
  const rolePrefix = ROLES[roleIndex].startsWith("A") ? "I am an " : "I am a ";

  return (
    <section id="top" className="hero hero-full-bleed">
      {/* 1st Grid: Left Content (Description, Roles, CTAs) & Right Large AI Image */}
      <div
        ref={heroRef}
        className={`hero-grid hero-grid-corners reveal ${heroVisible ? "is-visible" : ""}`}
      >
        {/* Left Side: Enhanced Luxury Typography, Terminal Role, Highlights, CTAs */}
        <div className="hero-content hero-content-corner stagger-item">
          <p className="hero-eyebrow">
            <span className="eyebrow-sparkle">✦</span> Hello, I am
          </p>
          <h1 className="hero-name">
            <span className="hero-name-gradient">{displayName}</span>
          </h1>

          {/* Dynamic Animated Rotating Role with Glass Terminal Styling */}
          <div className="hero-role-badge">
            <span className="role-terminal-icon">&gt;_</span>
            <span className="role-prefix">{rolePrefix}</span>
            <span className="role-typing-text">{displayedText}</span>
            <span className="role-cursor" aria-hidden="true">|</span>
          </div>

          {/* Expanded Rich Description */}
          <p className="hero-tagline">
            Specializing in engineering resilient, production-ready web applications that seamlessly integrate modern full-stack architectures with cutting-edge artificial intelligence. Dedicated to building clean APIs, intuitive responsive user experiences, and automated cloud delivery pipelines through modern DevOps workflows.
          </p>

          {/* Quick Value Pillars */}
          <div className="hero-highlights">
            {HIGHLIGHTS.map((item) => (
              <div key={item} className="hero-highlight-pill">
                <span className="highlight-pill-bullet">✦</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Enhanced CTAs */}
          <div className="hero-actions">
            <Link className="btn btn-primary btn-hero-primary" to="/projects">
              <span>Explore Projects</span>
              <span className="btn-arrow">&rarr;</span>
            </Link>
            <Link className="btn btn-secondary btn-hero-secondary" to="/contact">
              <span>Hire Me / Contact</span>
            </Link>
          </div>
        </div>

        {/* Right Side: Enhanced Large Lengthy Blended AI Visual with HUD Accents */}
        <div className="hero-visual hero-visual-corner stagger-item">
          <div className="hero-ai-showcase-wide">
            <div className="ai-card-glow-wide" />
            <div className="hero-ai-card-blend-wide">
              {/* Corner HUD accents */}
              <div className="hud-corner hud-corner-tr" aria-hidden="true" />
              <div className="hud-corner hud-corner-br" aria-hidden="true" />

              {/* Shimmer Specular Light Sweep */}
              <div className="hero-ai-shimmer" aria-hidden="true" />

              <img
                src="/ai-tech-hero.jpg"
                alt="AI Neural Core & Modern Technology System"
                className="hero-ai-image-lengthy"
                loading="eager"
              />

              <div className="hero-ai-blend-overlay" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>

      {/* 2nd Grid: Proven Experience Metrics (Shows One by One on Scroll with Counting Numbers) */}
      <div
        ref={statsRef}
        className={`hero-proven-experience-grid reveal ${statsVisible ? "is-visible" : ""}`}
      >
        <div className="section-header-center">
          <span className="section-eyebrow">Proven Experience</span>
          <h2 className="bubbles-grid-title">Milestones &amp; Track Record</h2>
        </div>

        <div className="metrics-grid">
          {/* Card 1: Client Projects */}
          <div className="metric-card stagger-item">
            <div className="metric-card-glow" aria-hidden="true" />
            <div className="metric-card-shimmer" aria-hidden="true" />
            <div className="metric-icon-wrap">💼</div>
            <div className="metric-number-wrap">
              <span className="metric-number">{countProjects}+</span>
            </div>
            <span className="metric-title">Client Projects</span>
            <span className="metric-desc">Successfully Built &amp; Delivered</span>
          </div>

          {/* Card 2: Satisfied Clients */}
          <div className="metric-card stagger-item">
            <div className="metric-card-glow" aria-hidden="true" />
            <div className="metric-card-shimmer" aria-hidden="true" />
            <div className="metric-icon-wrap">🤝</div>
            <div className="metric-number-wrap">
              <span className="metric-number">{countClients}+</span>
            </div>
            <span className="metric-title">Satisfied Clients</span>
            <span className="metric-desc">Worldwide Partnerships</span>
          </div>

          {/* Card 3: Years of Experience */}
          <div className="metric-card stagger-item">
            <div className="metric-card-glow" aria-hidden="true" />
            <div className="metric-card-shimmer" aria-hidden="true" />
            <div className="metric-icon-wrap">⚡</div>
            <div className="metric-number-wrap">
              <span className="metric-number">{countExperience}+</span>
            </div>
            <span className="metric-title">Years of Experience</span>
            <span className="metric-desc">Full-Stack &amp; AI Engineering</span>
          </div>
        </div>
      </div>
    </section>
  );
}
