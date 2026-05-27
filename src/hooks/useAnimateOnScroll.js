import { useEffect, useRef, useState } from 'react';

/**
 * Lightweight scroll animation hook using IntersectionObserver.
 * Works seamlessly on mobile — no scroll listener, no RAF overhead.
 *
 * @param {Object} options
 * @param {number} options.threshold - Visibility threshold (0-1). Default 0.1
 * @param {number} options.staggerDelay - Stagger delay in ms per index. Default 0
 * @param {number} options.index - Item index for staggered animations. Default 0
 * @param {boolean} options.triggerOnce - Whether to stop observing after first trigger. Default true
 * @returns {{ ref, isVisible }}
 */
export default function useAnimateOnScroll(options = {}) {
  const {
    threshold = 0.1,
    staggerDelay = 0,
    index = 0,
    triggerOnce = true,
  } = options;

  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (staggerDelay > 0 && index > 0) {
            setTimeout(() => setIsVisible(true), index * staggerDelay);
          } else {
            setIsVisible(true);
          }
          if (triggerOnce) observer.disconnect();
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, staggerDelay, index, triggerOnce]);

  return { ref, isVisible };
}
