import { Link } from "../router";

export default function Footer({ profile }) {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/certifications">Qualifications</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-socials">
          {profile?.socials?.map((social) => (
            <a
              key={social.platform}
              href={social.url}
              target="_blank"
              rel="noreferrer"
            >
              {social.platform}
            </a>
          ))}
        </div>

        <p className="footer-copy">
          &copy; {year} {profile?.name || "Avishka Ranaweera"}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
