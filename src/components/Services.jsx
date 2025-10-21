import { services } from '../data/portfolio';
import { useReveal } from '../hooks/useReveal';

const accentGradients = ['blue', 'purple', 'teal', 'amber'];

export function Services() {
  const ref = useReveal({ translateY: 34 });
  return (
    <section id="services" ref={ref} className="section services">
      <div className="container">
        <h2 data-animate>Services</h2>
        <p className="section-intro" data-animate>
          Engagements range from architecture sprints and audits to multi-quarter delivery partnerships.
        </p>
        <div className="grid" data-animate>
          {services.map((service, index) => (
            <article className={`service-card service-card--${accentGradients[index % accentGradients.length]}`} key={service.title}>
              <div className="service-emblem" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
