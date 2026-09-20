import useReveal from "../hooks/useReveal";

export default function Certifications({ certifications }) {
  const [ref, visible] = useReveal();

  return (
    <section
      id="certifications"
      ref={ref}
      className={`section reveal ${visible ? "is-visible" : ""}`}
    >
      <h2 className="section-title">Certifications</h2>
      {certifications.length === 0 && <p>No certifications to show yet.</p>}
      <div className="cert-grid">
        {certifications.map((cert) => (
          <article key={cert.id} className="cert-card">
            <div className="cert-icon">🎓</div>
            <div>
              <h3>{cert.title}</h3>
              <p className="cert-meta">
                {cert.issuer} &middot; {cert.issueDate}
              </p>
              {cert.credentialUrl && (
                <a href={cert.credentialUrl} target="_blank" rel="noreferrer">
                  View credential
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
