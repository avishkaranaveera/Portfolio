import useReveal from "../hooks/useReveal";
import { Link } from "../router";

const CORE_PILLARS = [
  {
    icon: "🏛️",
    title: "Full-Stack Architecture",
    description:
      "Crafting modular, testable, and maintainable software architectures. From responsive React frontends to robust Spring Boot and Node backend services with well-structured relational and document databases.",
  },
  {
    icon: "🧠",
    title: "Applied AI & Modern Intelligence",
    description:
      "Integrating production-grade AI into web applications. Specializing in intelligent automations, LLM agentic workflows, contextual data augmentation, and seamless user experiences.",
  },
  {
    icon: "🔄",
    title: "DevOps & Cloud Automation",
    description:
      "Bridging development and cloud infrastructure. Building automated CI/CD pipelines, containerizing environments with Docker, and setting up reliable cloud deployments for zero-downtime releases.",
  },
  {
    icon: "🤝",
    title: "Client-Centric Collaboration",
    description:
      "Partnering directly with founders, engineering teams, and businesses worldwide. Providing transparent communication, realistic milestones, and clean code that is easy to maintain.",
  },
];

const WORKFLOW_STEPS = [
  {
    step: "01",
    title: "Discovery & System Architecture",
    description:
      "Understanding project requirements, user personas, and technical constraints to formulate clean data models, API contracts, and technology roadmaps.",
  },
  {
    step: "02",
    title: "Agile Development & AI Augmentation",
    description:
      "Executing rapid, test-driven sprint cycles. Building responsive interfaces, robust backend endpoints, and integrating smart AI capabilities with continuous client feedback.",
  },
  {
    step: "03",
    title: "Testing, Optimization & CI/CD",
    description:
      "Conducting comprehensive code reviews, performance profiling, responsive cross-device audits, and configuring automated build-and-test deployment pipelines.",
  },
  {
    step: "04",
    title: "Production Launch & Support",
    description:
      "Deploying to production cloud environments with zero downtime. Delivering clear documentation, seamless handoff, and ongoing support.",
  },
];

export default function About({ profile, stats }) {
  const [bioRef, bioVisible] = useReveal();
  const [cardsRef, cardsVisible] = useReveal();
  const [pillarsRef, pillarsVisible] = useReveal();
  const [workflowRef, workflowVisible] = useReveal();

  const email = profile?.email || "avishkaranaveer1112@gmail.com";
  const location = profile?.location || "Walasmulla";
  const phone = profile?.phone || "0765431652";

  return (
    <div className="about-wrapper">
      {/* 1. Main Bio & Overview Narrative */}
      <section
        id="about-bio"
        ref={bioRef}
        className={`section about-narrative-section reveal ${bioVisible ? "is-visible" : ""}`}
      >
        <div className="about-bio-grid">
          <div className="about-bio-text">
            <h2 className="section-title">Who I Am &amp; What I Do</h2>
            <div className="about-bio-paragraphs">
              <p>
                I am a dedicated <strong>Full-Stack Developer</strong>, <strong>Freelancer</strong>, and passionate <strong>AI &amp; DevOps practitioner</strong> based in <strong>{location}</strong>. I specialize in designing and engineering resilient, production-ready web applications that seamlessly integrate modern full-stack architectures with cutting-edge artificial intelligence.
              </p>
              <p>
                My engineering approach is grounded in software craftsmanship: building clean, maintainable, and type-safe systems from initial database design to the final user interface. On the frontend, I craft buttery-smooth, responsive experiences with React, modern CSS, and performance-first best practices. On the backend, I design reliable RESTful APIs, scalable microservices, and secure data layers with Java, Spring Boot, Node.js, and SQL/NoSQL databases.
              </p>
              <p>
                Beyond traditional web development, I am deeply fascinated by modern artificial intelligence and cloud engineering. I actively embed practical AI workflows, automated NLP pipelines, and generative interfaces into web systems. At the same time, I focus on DevOps automation—leveraging Docker containerization, CI/CD pipelines, and cloud platforms to guarantee high availability, rapid deployment, and operational excellence.
              </p>
            </div>

            {/* Quick Metrics & Resume */}
            {stats && (
              <div className="about-stats-strip">
                <div className="about-stat-item">
                  <span className="about-stat-num">{stats.yearsExperience}+</span>
                  <span className="about-stat-desc">Years Experience</span>
                </div>
                <div className="about-stat-item">
                  <span className="about-stat-num">{stats.projectsCompleted || 15}+</span>
                  <span className="about-stat-desc">Delivered Projects</span>
                </div>
                <div className="about-stat-item">
                  <span className="about-stat-num">{stats.certificationsCount || 3}+</span>
                  <span className="about-stat-desc">Certifications</span>
                </div>
              </div>
            )}

            <div className="about-cta-row">
              {profile?.resumeUrl && (
                <a
                  className="btn btn-primary"
                  href={profile.resumeUrl}
                  download
                >
                  <span>Download Resume (PDF)</span>
                  <span className="btn-arrow">&darr;</span>
                </a>
              )}
              <Link className="btn btn-secondary" to="/contact">
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Distinct Details & Quick Contact Cards (Separate Email, Location, Phone, Status) */}
      <section
        id="about-contact-cards"
        ref={cardsRef}
        className={`section about-contact-section reveal ${cardsVisible ? "is-visible" : ""}`}
      >
        <div className="section-header-center">
          <span className="section-eyebrow">Direct Contact &amp; Details</span>
          <h2 className="bubbles-grid-title">Key Information</h2>
        </div>

        <div className="about-details-grid">
          {/* Location Card */}
          <div className="about-detail-card stagger-item">
            <div className="detail-card-glow" aria-hidden="true" />
            <div className="detail-icon-wrap">📍</div>
            <span className="detail-label">Location</span>
            <span className="detail-val">{location}</span>
            <span className="detail-sub">Sri Lanka &bull; Remote Available</span>
          </div>

          {/* Email Card */}
          <div className="about-detail-card stagger-item">
            <div className="detail-card-glow" aria-hidden="true" />
            <div className="detail-icon-wrap">✉️</div>
            <span className="detail-label">Email Address</span>
            <a
              href={`mailto:${email}`}
              className="detail-val detail-link"
              title="Send an email"
            >
              {email}
            </a>
            <span className="detail-sub">Click to send direct email</span>
          </div>

          {/* Phone Card */}
          <div className="about-detail-card stagger-item">
            <div className="detail-card-glow" aria-hidden="true" />
            <div className="detail-icon-wrap">📞</div>
            <span className="detail-label">Phone &amp; WhatsApp</span>
            <a
              href={`tel:${phone}`}
              className="detail-val detail-link"
              title="Call or message"
            >
              {phone}
            </a>
            <span className="detail-sub">Voice, SMS &amp; WhatsApp</span>
          </div>

          {/* Availability Card */}
          <div className="about-detail-card stagger-item">
            <div className="detail-card-glow" aria-hidden="true" />
            <div className="detail-icon-wrap">⚡</div>
            <span className="detail-label">Current Status</span>
            <span className="detail-val text-accent">Open for Work</span>
            <span className="detail-sub">Freelance &amp; Full-Time</span>
          </div>
        </div>
      </section>

      {/* 3. Core Engineering Pillars */}
      <section
        id="about-pillars"
        ref={pillarsRef}
        className={`section about-pillars-section reveal ${pillarsVisible ? "is-visible" : ""}`}
      >
        <div className="section-header-flex">
          <div>
            <span className="section-eyebrow">Foundations</span>
            <h2 className="section-title">Core Engineering Principles</h2>
          </div>
        </div>

        <div className="pillars-grid">
          {CORE_PILLARS.map((pillar) => (
            <div key={pillar.title} className="pillar-card stagger-item">
              <div className="pillar-top">
                <span className="pillar-icon">{pillar.icon}</span>
                <h3 className="pillar-title">{pillar.title}</h3>
              </div>
              <p className="pillar-desc">{pillar.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Development Workflow / How I Work */}
      <section
        id="about-workflow"
        ref={workflowRef}
        className={`section about-workflow-section reveal ${workflowVisible ? "is-visible" : ""}`}
      >
        <div className="section-header-flex">
          <div>
            <span className="section-eyebrow">Methodology</span>
            <h2 className="section-title">How I Build &amp; Deliver</h2>
          </div>
        </div>

        <div className="workflow-grid">
          {WORKFLOW_STEPS.map((step) => (
            <div key={step.step} className="workflow-card stagger-item">
              <span className="workflow-num">{step.step}</span>
              <h3 className="workflow-title">{step.title}</h3>
              <p className="workflow-desc">{step.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
