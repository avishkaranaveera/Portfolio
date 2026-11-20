import { useEffect, useRef, useState } from "react";
import { Link, useRouter } from "../router";

const NAV_LINKS = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/projects", label: "Projects" },
  { path: "/certifications", label: "Qualifications" },
  { path: "/contact", label: "Contact" },
];

export default function Navbar({ name }) {
  const { path } = useRouter();
  const navRef = useRef(null);
  const [indicatorStyle, setIndicatorStyle] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Sync sliding pill indicator with active nav link
  const syncToActive = () => {
    if (!navRef.current) return;
    const activeEl = navRef.current.querySelector(".nav-link.active");
    if (activeEl) {
      setIndicatorStyle({
        left: activeEl.offsetLeft,
        width: activeEl.offsetWidth,
        opacity: 1,
      });
    } else {
      setIndicatorStyle((prev) => ({ ...prev, opacity: 0 }));
    }
  };

  useEffect(() => {
    syncToActive();
    const timer = setTimeout(syncToActive, 80);
    window.addEventListener("resize", syncToActive);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", syncToActive);
    };
  }, [path]);

  const handleMouseEnter = (e) => {
    const el = e.currentTarget;
    setIndicatorStyle({
      left: el.offsetLeft,
      width: el.offsetWidth,
      opacity: 1,
    });
  };

  const handleMouseLeave = () => {
    syncToActive();
  };

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="navbar-brand">
          <span className="brand-dot" />
          <span className="brand-name">{name || "Avishka Ranaweera"}</span>
        </Link>

        {/* Clean, Basic Desktop Navigation with Smooth Pill */}
        <nav
          ref={navRef}
          className="navbar-links"
          onMouseLeave={handleMouseLeave}
        >
          <span
            className="nav-indicator-pill"
            style={{
              transform: `translateX(${indicatorStyle.left}px)`,
              width: `${indicatorStyle.width}px`,
              opacity: indicatorStyle.opacity,
            }}
            aria-hidden="true"
          />

          {NAV_LINKS.map((link) => {
            const isActive =
              path === link.path ||
              (link.path === "/certifications" && path === "/qualifications");

            return (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${isActive ? "active" : ""}`}
                onMouseEnter={handleMouseEnter}
                onFocus={handleMouseEnter}
                onBlur={handleMouseLeave}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          className={`navbar-toggle ${mobileMenuOpen ? "is-open" : ""}`}
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          <span className="toggle-line" />
          <span className="toggle-line" />
          <span className="toggle-line" />
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="navbar-mobile-menu">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`mobile-nav-link ${
                path === link.path ||
                (link.path === "/certifications" && path === "/qualifications")
                  ? "active"
                  : ""
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
