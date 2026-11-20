import { useRouter } from "./context";

export function Link({ to, children, className = "", onClick, ...props }) {
  const { path, navigate } = useRouter();
  const isActive = path === to;

  return (
    <a
      href={to}
      className={`${className} ${isActive ? "active" : ""}`}
      onClick={(e) => {
        if (
          e.defaultPrevented ||
          e.button !== 0 ||
          e.metaKey ||
          e.ctrlKey ||
          e.altKey ||
          e.shiftKey
        ) {
          return;
        }
        e.preventDefault();
        navigate(to);
        if (onClick) onClick(e);
      }}
      {...props}
    >
      {children}
    </a>
  );
}
