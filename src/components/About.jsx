import { aboutContent } from '../data/portfolio';
import { useReveal } from '../hooks/useReveal';

export function About() {
  const ref = useReveal();
  return (
    <section id="about" ref={ref} className="section about">
      <div className="container two-col">
        <div data-animate>
          <h2>About</h2>
          {aboutContent.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <div className="about-card" data-animate>
          <h3>What clients rely on</h3>
          <ul>
            {aboutContent.highlights.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <a className="text-link" href="https://github.com/aldimiq" target="_blank" rel="noreferrer">
            View source on GitHub ->
          </a>
        </div>
      </div>
    </section>
  );
}
