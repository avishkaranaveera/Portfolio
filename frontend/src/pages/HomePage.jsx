import SEO from "../components/SEO";
import Hero from "../components/Hero";
import { Link } from "../router";

export default function HomePage({ profile, stats, projects }) {
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="page page-home">
      <SEO
        title="Full-Stack Developer"
        description={`${profile?.name} - ${profile?.title}. ${profile?.tagline}`}
        path="/"
      />

      <Hero profile={profile} stats={stats} />

      {/* Featured Projects Section */}
      <section className="section home-preview-section">
        <div className="section-header-flex">
          <div>
            <span className="section-eyebrow">Selected Work</span>
            <h2 className="section-title">Featured Projects</h2>
          </div>
          <Link to="/projects" className="btn btn-secondary link-arrow">
            View All Projects &rarr;
          </Link>
        </div>

        <div className="projects-grid">
          {featuredProjects.map((project) => (
            <article key={project.id} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              {project.tags?.length > 0 && (
                <ul className="project-tags">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              )}
              <div className="project-links">
                {project.repoUrl && (
                  <a href={project.repoUrl} target="_blank" rel="noreferrer" className="btn btn-secondary">
                    Source Code
                  </a>
                )}
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
                    Live Demo
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Value Proposition Highlights */}
      {profile?.highlights?.length > 0 && (
        <section className="section home-highlights-section">
          <div className="section-header-flex">
            <div>
              <span className="section-eyebrow">Key Strengths</span>
              <h2 className="section-title">Why Work With Me</h2>
            </div>
            <Link to="/about" className="btn btn-secondary link-arrow">
              Full Profile &rarr;
            </Link>
          </div>
          <div className="highlights-grid">
            {profile.highlights.map((point) => (
              <div key={point} className="highlight-card">
                <span className="highlight-check">✓</span>
                <p>{point}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Clean Call to Action Banner */}
      <section className="section home-cta-banner">
        <div className="hire-cta">
          <h3>Let's build something great together</h3>
          <p>
            Have a project in mind, an open role, or want to collaborate? I'd love to hear from you.
          </p>
          <div className="cta-actions">
            <Link to="/contact" className="btn btn-primary">
              Get In Touch &rarr;
            </Link>
            <Link to="/about" className="btn btn-secondary">
              Learn More About Me
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
