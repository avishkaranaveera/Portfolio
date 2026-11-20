import SEO from "../components/SEO";
import Certifications from "../components/Certifications";

export default function CertificationsPage({ certifications = [] }) {
  return (
    <div className="page page-certifications">
      <SEO
        title="Qualifications & Certifications"
        description="Verified qualifications, professional certifications, and added value achievements earned by Avishka Ranaweera."
        path="/certifications"
      />

      <div className="page-header">
        <span className="section-eyebrow">Added Value Credentials</span>
        <h1 className="page-title">Qualifications</h1>
        <p className="page-subtitle">
          Verified professional accreditations, certifications, and technical qualifications.
        </p>
      </div>

      <Certifications certifications={certifications} />
    </div>
  );
}
