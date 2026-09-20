import useReveal from "../hooks/useReveal";

export default function About({ profile, stats }) {
  const [ref, visible] = useReveal();

  return (
    <section id="about" ref={ref} className={`section reveal ${visible ? "is-visible" : ""}`}>
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <p>{profile?.bio || "Write a couple of sentences about yourself here."}</p>
        <ul className="about-facts">
          {profile?.location && (
            <li>
              <strong>Location:</strong> {profile.location}
            </li>
          )}
          {profile?.email && (
            <li>
              <strong>Email:</strong> {profile.email}
            </li>
          )}
        </ul>

        {stats && (
          <div className="about-stats">
            <div className="about-stat">
              <span className="about-stat-value">{stats.yearsExperience}+</span>
              <span className="about-stat-label">Years Experience</span>
            </div>
            <div className="about-stat">
              <span className="about-stat-value">{stats.projectsCount}+</span>
              <span className="about-stat-label">Projects Delivered</span>
            </div>
            <div className="about-stat">
              <span className="about-stat-value">{stats.technologiesCount}+</span>
              <span className="about-stat-label">Technologies</span>
            </div>
          </div>
        )}

        {profile?.resumeUrl && (
          <a className="btn btn-secondary about-resume-btn" href={profile.resumeUrl} download>
            Download Resume
          </a>
        )}
      </div>
    </section>
  );
}
