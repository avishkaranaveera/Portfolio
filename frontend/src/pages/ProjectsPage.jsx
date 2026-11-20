import { useState, useMemo } from "react";
import SEO from "../components/SEO";

export default function ProjectsPage({ projects = [] }) {
  const [activeCategory, setActiveCategory] = useState("All");

  // Extract all unique tags across projects
  const allCategories = useMemo(() => {
    const set = new Set(["All"]);
    projects.forEach((p) => {
      p.tags?.forEach((tag) => set.add(tag));
    });
    return Array.from(set);
  }, [projects]);

  // Filter projects by active tag
  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((p) => p.tags?.includes(activeCategory));
  }, [projects, activeCategory]);

  return (
    <div className="page page-projects">
      <SEO
        title="Projects"
        description="Explore full-stack software development projects, open-source repositories, and web applications built by Avishka Ranaweera."
        path="/projects"
      />

      <div className="page-header">
        <span className="section-eyebrow">Portfolio Showcase</span>
        <h1 className="page-title">Featured Projects</h1>
        <p className="page-subtitle">
          Real-world applications, open-source utilities, and full-stack solutions built with modern technology.
        </p>
      </div>

      {/* Filter Tabs */}
      {allCategories.length > 1 && (
        <div className="filter-pill-container" role="tablist">
          {allCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`filter-pill ${activeCategory === cat ? "is-active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {filteredProjects.length === 0 ? (
        <div className="empty-state">
          <p>No projects match the selected tag.</p>
        </div>
      ) : (
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <article key={project.id} className="project-card">
              <div className="project-card-header">
                <h3>{project.title}</h3>
              </div>
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
                    View Code
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
      )}
    </div>
  );
}
