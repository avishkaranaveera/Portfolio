import SEO from "../components/SEO";
import Contact from "../components/Contact";

export default function ContactPage({ profile }) {
  return (
    <div className="page page-contact">
      <SEO
        title="Contact Me"
        description={`Get in touch with ${profile?.name || "Avishka Ranaweera"} for projects, consulting, or full-time opportunities.`}
        path="/contact"
      />

      <div className="page-header">
        <span className="section-eyebrow">Connect</span>
        <h1 className="page-title">Get In Touch</h1>
        <p className="page-subtitle">
          Have an idea, project, or role? Send a message directly or connect across professional networks.
        </p>
      </div>

      <Contact profile={profile} />
    </div>
  );
}
