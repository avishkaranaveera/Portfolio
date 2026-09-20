import { useEffect, useState } from "react";

const CIRCUMFERENCE = 2 * Math.PI * 45;

export default function Loader({ leaving }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame;
    const start = performance.now();
    const duration = 1400;

    function tick(now) {
      const elapsed = now - start;
      const target = leaving ? 100 : Math.min(95, (elapsed / duration) * 95);
      setProgress((prev) => prev + (target - prev) * 0.15);
      frame = requestAnimationFrame(tick);
    }
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [leaving]);

  const offset = CIRCUMFERENCE - (CIRCUMFERENCE * progress) / 100;

  return (
    <div className={`loader ${leaving ? "loader-leaving" : ""}`}>
      <div className="loader-ring-wrap">
        <svg className="loader-ring" viewBox="0 0 100 100">
          <defs>
            <linearGradient id="loaderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
          <circle className="loader-ring-track" cx="50" cy="50" r="45" />
          <circle
            className="loader-ring-progress"
            cx="50"
            cy="50"
            r="45"
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={offset}
          />
        </svg>
        <span className="loader-percent">{Math.round(Math.min(progress, 100))}%</span>
      </div>
      <div className="loader-mark">
        <span className="loader-bracket">{"{"}</span>
        <span className="loader-name">Avishka Ranaveera</span>
        <span className="loader-bracket">{"}"}</span>
      </div>
    </div>
  );
}
