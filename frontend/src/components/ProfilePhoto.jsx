import { useState } from "react";

function getInitials(name) {
  if (!name) return "?";
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");
}

export default function ProfilePhoto({ src, name }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="hero-photo-frame">
      {src && !failed ? (
        <img
          src={src}
          alt={name ? `Photo of ${name}` : "Profile photo"}
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="hero-photo-placeholder">{getInitials(name)}</div>
      )}
    </div>
  );
}
