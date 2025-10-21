import { useEffect, useRef } from 'react';
import anime from 'animejs/lib/anime.es.js';
import { heroContent } from '../data/portfolio';

export function Hero() {
  const copyRef = useRef(null);
  const cardRef = useRef(null);
  const chipsRef = useRef([]);
  const statsRef = useRef([]);

  chipsRef.current = [];
  statsRef.current = [];

  const setChipRef = index => element => {
    chipsRef.current[index] = element;
  };

  const setStatRef = index => element => {
    statsRef.current[index] = element;
  };

  useEffect(() => {
    const copyElements = copyRef.current ? copyRef.current.querySelectorAll('[data-hero-text]') : [];
    const cardElement = cardRef.current;
    const chipElements = chipsRef.current.filter(Boolean);

    const timeline = anime.timeline({
      easing: 'easeOutCubic',
      duration: 700
    });

    if (copyElements.length) {
      timeline.add({
        targets: copyElements,
        opacity: [0, 1],
        translateY: [42, 0],
        delay: anime.stagger(90)
      });
    }

    if (cardElement) {
      timeline.add(
        {
          targets: cardElement,
          opacity: [0, 1],
          translateY: [72, 0],
          rotateX: [-9, 0],
          duration: 900
        },
        '-=360'
      );
    }

    if (chipElements.length) {
      timeline.add(
        {
          targets: chipElements,
          opacity: [0, 1],
          translateY: [18, 0],
          scale: [0.85, 1],
          delay: anime.stagger(140),
          duration: 520
        },
        '-=520'
      );
    }

    const counters = statsRef.current.filter(Boolean);
    counters.forEach((el, index) => {
      const targetValue = Number(el.dataset.value || 0);
      const decimals = Number(el.dataset.decimals || 0);
      const suffix = el.dataset.suffix || '';

      anime({
        targets: { val: 0 },
        val: targetValue,
        duration: 1100,
        delay: 600 + index * 140,
        easing: 'easeOutQuad',
        update: anim => {
          const current = decimals > 0 ? anim.animations[0].currentValue.toFixed(decimals) : Math.round(anim.animations[0].currentValue);
          el.textContent = `${current}${suffix}`;
        }
      });
    });

    return () => timeline.pause();
  }, []);

  useEffect(() => {
    const cardElement = cardRef.current;
    if (!cardElement) {
      return undefined;
    }

    const handleMove = event => {
      const rect = cardElement.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      anime({
        targets: cardElement,
        rotateY: x * 12,
        rotateX: y * -12,
        duration: 220,
        easing: 'easeOutQuad'
      });
    };

    const handleLeave = () => {
      anime({
        targets: cardElement,
        rotateX: 0,
        rotateY: 0,
        duration: 650,
        easing: 'easeOutElastic(1, 0.72)'
      });
    };

    cardElement.addEventListener('mousemove', handleMove);
    cardElement.addEventListener('mouseleave', handleLeave);

    return () => {
      cardElement.removeEventListener('mousemove', handleMove);
      cardElement.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  return (
    <section id="top" className="hero">
      <div className="container hero-grid">
        <div ref={copyRef} className="hero-copy">
          <p className="eyebrow" data-hero-text>
            System Engineer // Data Platform Developer
          </p>
          <h1 data-hero-text>{heroContent.title}</h1>
          <p className="hero-subtitle" data-hero-text>
            {heroContent.subtitle}
          </p>
          <div className="hero-actions" data-hero-text>
            <a className="primary-button" href={heroContent.ctaPrimary.href}>
              {heroContent.ctaPrimary.label}
            </a>
            <a className="ghost-button" href={heroContent.ctaSecondary.href}>
              {heroContent.ctaSecondary.label}
            </a>
          </div>
          <dl className="hero-stats" data-hero-text>
            {heroContent.stats.map((stat, index) => (
              <div key={stat.label}>
                <dt>{stat.label}</dt>
                <dd
                  ref={setStatRef(index)}
                  data-value={stat.value}
                  data-suffix={stat.suffix}
                  data-decimals={stat.decimals}
                  aria-label={`${stat.value}${stat.suffix}`}
                >
                  0
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <aside className="hero-art">
          <div ref={cardRef} className="hero-card">
            <img src="/assets/hero-map.png" alt="Map and dashboard preview" />
            <div ref={setChipRef(0)} className="floating-chip">
              Offline-ready
            </div>
            <div ref={setChipRef(1)} className="floating-chip alt">
              Automation built-in
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
