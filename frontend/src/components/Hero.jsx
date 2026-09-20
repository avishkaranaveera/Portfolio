import HeroOrb from "../three/HeroOrb";
import ProfilePhoto from "./ProfilePhoto";

export default function Hero({ profile, stats }) {
  const statItems = stats
    ? [
        { label: "Projects", value: `${stats.projectsCount}+` },
        { label: "Certifications", value: stats.certificationsCount },
        { label: "Years Experience", value: `${stats.yearsExperience}+` },
        { label: "Technologies", value: stats.technologiesCount },
      ]
    : [];

  return (
    <section id="top" className="hero">
      <div className="hero-grid">
        <div className="hero-content">
          <p className="hero-eyebrow">Hi, I'm</p>
          <h1 className="hero-name">{profile?.name || "Your Name"}</h1>
          <h2 className="hero-title">{profile?.title || "Your Title"}</h2>
          <p className="hero-tagline">
            {profile?.tagline || "A short tagline about what you do."}
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">
              View Projects
            </a>
            <a className="btn btn-secondary" href="#contact">
              Get in Touch
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <HeroOrb />
          <ProfilePhoto src={profile?.photoUrl} name={profile?.name} />
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
