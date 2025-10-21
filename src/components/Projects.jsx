import { projects } from '../data/portfolio';
import { useReveal } from '../hooks/useReveal';

export function Projects() {
  const ref = useReveal({ translateY: 36 });
  return (
    <section id="projects" ref={ref} className="section projects">
      <div className="container">
        <h2 data-animate>Projects</h2>
        <p className="section-intro" data-animate>
          Selected platforms that demonstrate offline resilience, automation, and data storytelling.
        </p>
        <div className="grid" data-animate>
          {projects.map(project => (
            <article className="project-card" key={project.id}>
              <header>
                <span className="project-period">{project.year}</span>
                <h3>{project.name}</h3>
                <p>{project.blurb}</p>
              </header>
              <ul className="chip-list">
                {project.stack.map(tech => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              <ul className="metric-list">
                {project.metrics.map(metric => (
                  <li key={metric}>{metric}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
