import useReveal from "../hooks/useReveal";

export default function Skills({ skills }) {
  const [ref, visible] = useReveal();

  const grouped = skills.reduce((acc, skill) => {
    const category = skill.category || "Other";
    acc[category] = acc[category] || [];
    acc[category].push(skill);
    return acc;
  }, {});

  return (
    <section id="skills" ref={ref} className={`section reveal ${visible ? "is-visible" : ""}`}>
      <h2 className="section-title">Skills</h2>
      {Object.keys(grouped).length === 0 && <p>No skills to show yet.</p>}
      <div className="skills-groups">
        {Object.entries(grouped).map(([category, items]) => (
          <div key={category} className="skills-group">
            <h3>{category}</h3>
            <div className="skills-bars">
              {items.map((skill) => (
                <div key={skill.id} className="skill-bar">
                  <div className="skill-bar-label">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="skill-bar-track">
                    <div
                      className="skill-bar-fill"
                      style={{ width: visible ? `${skill.level}%` : "0%" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
