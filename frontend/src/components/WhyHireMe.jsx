import useReveal from "../hooks/useReveal";

export default function WhyHireMe({ profile, testimonials }) {
  const [ref, visible] = useReveal();

  return (
    <section
      id="why-hire-me"
      ref={ref}
      className={`section reveal ${visible ? "is-visible" : ""}`}
    >
      <h2 className="section-title">Why Work With Me</h2>

      {profile?.highlights?.length > 0 && (
        <ul className="highlights-list">
          {profile.highlights.map((point) => (
            <li key={point}>
              <span className="highlight-check">✓</span>
              {point}
            </li>
          ))}
        </ul>
      )}

      {testimonials.length > 0 && (
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <blockquote key={testimonial.id} className="testimonial-card">
              <p>&ldquo;{testimonial.quote}&rdquo;</p>
              <footer>
                <strong>{testimonial.author}</strong>
                <span>{testimonial.role}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      )}

      <div className="hire-cta">
        <p>Have a project in mind or a role to fill?</p>
        <a className="btn btn-primary" href="#contact">
          Let's Talk
        </a>
      </div>
    </section>
  );
}
