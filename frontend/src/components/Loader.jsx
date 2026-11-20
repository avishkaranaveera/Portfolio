import { useEffect, useState } from "react";

const CIRCUMFERENCE = 2 * Math.PI * 46;

export default function Loader({ leaving }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame;
    const start = performance.now();
    const duration = 2000; // Smooth 2.0s progress animation

    function tick(now) {
      const elapsed = now - start;
      const target = leaving ? 100 : Math.min(96, (elapsed / duration) * 96);
      setProgress((prev) => prev + (target - prev) * 0.12);
      frame = requestAnimationFrame(tick);
    }
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [leaving]);

  const currentPercent = Math.round(Math.min(progress, 100));
  const offset = CIRCUMFERENCE - (CIRCUMFERENCE * progress) / 100;

  let statusText = "Initializing developer environment...";
  if (currentPercent > 25 && currentPercent <= 60) {
    statusText = "Loading components & design system...";
  } else if (currentPercent > 60 && currentPercent < 95) {
    statusText = "Hydrating portfolio architecture...";
  } else if (currentPercent >= 95) {
    statusText = "System ready. Welcome!";
  }

  return (
    <div className={`loader ${leaving ? "loader-leaving" : ""}`} role="status" aria-live="polite">
      <div className="loader-hud">
        <div className="loader-badge">
          <span className="loader-badge-dot" />
          <span>PORTFOLIO OS</span>
        </div>

        {/* Circular Neon SVG Progress Gauge */}
        <div className="loader-ring-wrap">
          <svg className="loader-ring" viewBox="0 0 104 104">
            <defs>
              <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fcd34d" />
                <stop offset="50%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#b45309" />
              </linearGradient>
            </defs>
            <circle className="loader-ring-track" cx="52" cy="52" r="46" />
            <circle
              className="loader-ring-progress"
              cx="52"
              cy="52"
              r="46"
              strokeDasharray={CIRCUMFERENCE}
              strokeDashoffset={offset}
            />
          </svg>
          <div className="loader-center-content">
            <span className="loader-percent">{currentPercent}%</span>
          </div>
        </div>

        {/* Branded Identity */}
        <div className="loader-mark">
          <span className="loader-bracket">&lt;</span>
          <span className="loader-name">Avishka Ranaweera</span>
          <span className="loader-bracket">/&gt;</span>
        </div>

        <p className="loader-status-msg">{statusText}</p>
      </div>
    </div>
  );
}
