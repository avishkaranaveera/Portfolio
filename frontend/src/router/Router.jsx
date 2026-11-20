import { useEffect, useState } from "react";
import { RouterContext } from "./context";

export function Router({ children }) {
  const [path, setPath] = useState(
    typeof window !== "undefined" ? window.location.pathname || "/" : "/"
  );

  useEffect(() => {
    const handlePopState = () => {
      setPath(window.location.pathname || "/");
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigate = (to) => {
    if (to === path) return;
    window.history.pushState({}, "", to);
    setPath(to);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <RouterContext.Provider value={{ path, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}
