import useReveal from "../hooks/useReveal";

export default function Experience({ experience }) {
  const [ref, visible] = useReveal();

  return (
    <section
      id="experience"
      ref={ref}
      className={`section reveal ${visible ? "is-visible" : ""}`}
    >
      <h2 className="section-title">Experience &amp; Education</h2>
      {experience.length === 0 && <p>No experience to show yet.</p>}
      <ol className="timeline">
        {experience.map((item) => (
          <li key={item.id} className="timeline-item">
            <div className="timeline-marker" data-type={item.type} />
            <div className="timeline-content">
              <span className="timeline-period">{item.period}</span>
              <h3>{item.title}</h3>
              <p className="timeline-org">{item.organization}</p>
              <p>{item.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
