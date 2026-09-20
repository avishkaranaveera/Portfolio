import useReveal from "../hooks/useReveal";

export default function Projects({ projects }) {
  const [ref, visible] = useReveal();
  return (
    <section id="projects" ref={ref} className={`section reveal ${visible ? "is-visible" : ""}`}>
      <h2 className="section-title">Projects</h2>
      {projects.length === 0 && <p>No projects to show yet.</p>}
      <div className="projects-grid">
        {projects.map((project) => (
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
                <a href={project.repoUrl} target="_blank" rel="noreferrer">
                  Code
                </a>
              )}
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noreferrer">
                  Live Demo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
