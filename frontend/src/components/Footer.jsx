export default function Footer({ profile }) {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-socials">
        {profile?.socials?.map((social) => (
          <a key={social.platform} href={social.url} target="_blank" rel="noreferrer">
            {social.platform}
          </a>
        ))}
      </div>
      <p>
        &copy; {year} {profile?.name || "Your Name"}. Built with React and Spring Boot.
      </p>
    </footer>
  );
}
