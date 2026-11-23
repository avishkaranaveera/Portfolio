import { useEffect, useState } from "react";

export default function useCountUp(target = 0, duration = 1600, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start || target <= 0) {
      return;
    }

    let frameId;
    const startTime = performance.now();

    function update(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutCubic curve for natural, satisfying deceleration
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(ease * target));

      if (progress < 1) {
        frameId = requestAnimationFrame(update);
      }
    }

    frameId = requestAnimationFrame(update);
    return () => {
      cancelAnimationFrame(frameId);
      setCount(0);
    };
  }, [target, duration, start]);

  return start ? count : 0;
}
