import { useEffect, useRef, useState } from 'react';
import anime from 'animejs/lib/anime.es.js';
import { navLinks } from '../data/portfolio';

const githubProfile = 'https://github.com/aldimiq';

export function Header() {
  const headerRef = useRef(null);
  const [isSolid, setIsSolid] = useState(false);

  useEffect(() => {
    if (!headerRef.current) {
      return;
    }

    const items = headerRef.current.querySelectorAll('.brand, .nav a, .header-cta');
    anime({
      targets: items,
      opacity: [0, 1],
      translateY: [-14, 0],
      delay: anime.stagger(80),
      duration: 600,
      easing: 'easeOutQuad'
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsSolid(window.scrollY > 48);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!headerRef.current) {
      return;
    }

    headerRef.current.classList.toggle('is-solid', isSolid);
    anime({
      targets: headerRef.current,
      backgroundColor: isSolid ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.8)',
      duration: 320,
      easing: 'easeOutQuad'
    });
  }, [isSolid]);

  return (
    <header ref={headerRef} className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#top" aria-label="Back to top">
          <img src="/assets/logo.svg" alt="Aldi logo" width={32} height={32} />
          <div className="brand-text">
            <span className="brand-name">Aldi</span>
            <span className="brand-tagline">System &amp; Data Platforms</span>
          </div>
        </a>
        <nav aria-label="Primary" className="nav">
          <ul>
            {navLinks.map(link => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <a className="ghost-button header-cta" href={githubProfile} target="_blank" rel="noreferrer">
          GitHub @{githubProfile.split('/').pop()}
        </a>
      </div>
    </header>
  );
}
