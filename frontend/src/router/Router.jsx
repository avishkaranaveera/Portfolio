import { useEffect, useState } from "react";
import { RouterContext } from "./context";

function normalizePath(raw) {
  if (!raw) return "/";
  // Extract path component before query parameters or hashes
  const clean = raw.split("?")[0].split("#")[0];
  // Strip trailing slashes (e.g. "/about/" -> "/about"), but keep root "/"
  const trimmed = clean.replace(/\/+$/, "");
  return trimmed === "" ? "/" : trimmed;
}

export function Router({ children }) {
  const [path, setPath] = useState(() => {
    if (typeof window === "undefined") return "/";
    return normalizePath(window.location.pathname);
  });

  useEffect(() => {
    const handlePopState = () => {
      setPath(normalizePath(window.location.pathname));
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigate = (to) => {
    const targetPath = normalizePath(to);
    if (targetPath === path && window.location.pathname === targetPath) return;
    window.history.pushState({}, "", targetPath);
    setPath(targetPath);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <RouterContext.Provider value={{ path, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}
