import { useEffect } from "react";

const SITE_URL = "https://avishka-ranaweera.web.app";
const DEFAULT_NAME = "Avishka Ranaweera";
const DEFAULT_TITLE = "Avishka Ranaweera — Full-Stack Developer, AI Enthusiast & DevOps Learner";
const DEFAULT_DESC =
  "Portfolio of Avishka Ranaweera — Full-Stack Developer, AI Enthusiast, and DevOps Learner specializing in React, Node, Python, Docker, AI integrations, and cloud architectures.";

export default function SEO({
  title,
  description = DEFAULT_DESC,
  path = "/",
  keywords = "Avishka Ranaweera, full-stack developer, software engineer, AI enthusiast, DevOps learner, React, Node, Python, Docker, portfolio",
}) {
  const fullTitle = title
    ? `${title} | ${DEFAULT_NAME}`
    : DEFAULT_TITLE;
  const canonicalUrl = `${SITE_URL}${path}`;

  useEffect(() => {
    // 1. Update Title
    document.title = fullTitle;

    // Helper to update or create meta tags
    const setMeta = (attr, key, content) => {
      let element = document.querySelector(`meta[${attr}="${key}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attr, key);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // 2. Standard SEO Meta
    setMeta("name", "description", description);
    setMeta("name", "keywords", keywords);
    setMeta("name", "robots", "index, follow");

    // 3. Open Graph (Facebook, LinkedIn, Discord)
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", canonicalUrl);
    setMeta("property", "og:type", "website");

    // 4. Twitter Cards
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:card", "summary_large_image");

    // 5. Canonical Link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalUrl);

    // 6. Structured Schema.org Breadcrumb / WebPage JSON-LD
    let scriptTag = document.getElementById("page-seo-schema");
    if (!scriptTag) {
      scriptTag = document.createElement("script");
      scriptTag.id = "page-seo-schema";
      scriptTag.type = "application/ld+json";
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: fullTitle,
      description: description,
      url: canonicalUrl,
      isPartOf: {
        "@type": "WebSite",
        name: DEFAULT_NAME,
        url: SITE_URL,
      },
    });
  }, [fullTitle, description, canonicalUrl, keywords]);

  return null;
}
