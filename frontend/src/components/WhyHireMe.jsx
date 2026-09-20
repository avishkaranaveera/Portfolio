import useReveal from "../hooks/useReveal";

const ICONS = ["🚀", "🧩", "💬", "⚡", "🎯", "🛠️"];

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
        <div className="highlights-grid">
          {profile.highlights.map((point, index) => (
            <div key={point} className="highlight-card">
              <span className="highlight-icon">{ICONS[index % ICONS.length]}</span>
              <p>{point}</p>
            </div>
          ))}
        </div>
      )}

      {testimonials.length > 0 && (
        <>
          <h3 className="subsection-title">What Clients Say</h3>
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
        </>
      )}

      <div className="hire-cta">
        <h3>Have a project in mind or a role to fill?</h3>
        <p>I'm available for freelance work, contract roles, and full-time opportunities.</p>
        <a className="btn btn-primary" href="#contact">
          Let's Talk
        </a>
      </div>
    </section>
  );
}
