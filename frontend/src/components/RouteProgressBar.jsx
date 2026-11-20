import { useEffect, useState } from "react";
import { useRouter } from "../router";

export default function RouteProgressBar() {
  const { path } = useRouter();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Schedule progress animation on route change without triggering synchronous cascade
    const rId = requestAnimationFrame(() => {
      setProgress(25);
    });

    const timer1 = setTimeout(() => setProgress(75), 120);
    const timer2 = setTimeout(() => setProgress(100), 260);
    const timer3 = setTimeout(() => setProgress(0), 480);

    return () => {
      cancelAnimationFrame(rId);
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [path]);

  if (progress === 0) return null;

  return (
    <div className="route-progress-track" aria-hidden="true">
      <div
        className="route-progress-fill"
        style={{
          width: `${progress}%`,
          opacity: progress === 100 ? 0 : 1,
        }}
      />
    </div>
  );
}
