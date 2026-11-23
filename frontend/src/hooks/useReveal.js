import { useEffect, useRef, useState } from "react";

export default function useReveal(options = {}) {
  const { threshold = 0.08, rootMargin = "0px 0px -30px 0px", triggerOnce = false } = options;
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (triggerOnce) {
            observer.disconnect();
          }
        } else if (!triggerOnce) {
          setVisible(false);
        }
      },
      { threshold, rootMargin }
    );
    observer.observe(node);

    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return [ref, visible];
}
