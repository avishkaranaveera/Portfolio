import SEO from "../components/SEO";
import About from "../components/About";
import WhyHireMe from "../components/WhyHireMe";

export default function AboutPage({ profile, stats, testimonials }) {
  return (
    <div className="page page-about">
      <SEO
        title="About Me"
        description={`Learn more about ${profile?.name || "Avishka Ranaweera"}, full-stack development experience, and engineering background.`}
        path="/about"
      />

      <div className="page-header">
        <h1 className="page-title">About Me</h1>
        <p className="page-subtitle">
          Software craftsmanship, engineering philosophy, and the journey so far.
        </p>
      </div>

      <About profile={profile} stats={stats} />
      <WhyHireMe profile={profile} testimonials={testimonials} />
    </div>
  );
}
