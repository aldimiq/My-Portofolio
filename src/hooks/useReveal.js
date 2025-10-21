import { useEffect, useRef } from 'react';
import anime from 'animejs/lib/anime.es.js';

export function useReveal({
  delay = 120,
  translateY = 32,
  opacity = [0, 1],
  duration = 900,
  easing = 'easeOutQuad'
} = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const section = ref.current;
    if (!section) {
      return undefined;
    }

    const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

    const animate = target => {
      const items = target.querySelectorAll('[data-animate]');
      if (!items.length) {
        return;
      }

      if (prefersReducedMotion) {
        items.forEach(item => {
          item.style.opacity = 1;
          item.style.transform = 'none';
        });
        return;
      }

      anime({
        targets: items,
        opacity,
        translateY: [translateY, 0],
        duration,
        delay: anime.stagger(delay, { start: 120 }),
        easing
      });
    };

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animate(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.24 }
    );

    const rect = section.getBoundingClientRect();
    if (rect.top <= window.innerHeight * 0.8) {
      animate(section);
    } else {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, [delay, duration, easing, opacity, translateY]);

  return ref;
}
