import { experience } from '../data/portfolio';
import { useReveal } from '../hooks/useReveal';

export function Experience() {
  const ref = useReveal({ translateY: 28 });
  return (
    <section id="experience" ref={ref} className="section experience">
      <div className="container">
        <h2 data-animate>Experience</h2>
        <p className="section-intro" data-animate>
          A decade of building systems that stand up to remote operations, complex data, and tight delivery windows.
        </p>
        <div className="timeline" data-animate>
          {experience.map(item => (
            <article key={item.role} className="timeline-item">
              <div className="timeline-dot" aria-hidden="true" />
              <div className="timeline-body">
                <header>
                  <h3>{item.role}</h3>
                  <span>{item.period}</span>
                </header>
                <p>{item.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
