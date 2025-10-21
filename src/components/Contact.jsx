import { useReveal } from '../hooks/useReveal';

const email = 'hello@aldimiq.dev';

export function Contact() {
  const ref = useReveal({ translateY: 32 });
  return (
    <section id="contact" ref={ref} className="section contact">
      <div className="container contact-grid">
        <div data-animate>
          <h2>Let's build resilient systems together</h2>
          <p>
            I partner with organisations to design and deliver data platforms, Android tools, and automation that thrive in difficult
            conditions. Tell me about your timelines, constraints, and ambitions.
          </p>
          <a className="primary-button" href={`mailto:${email}`}>
            Email {email}
          </a>
        </div>
        <div className="contact-card" data-animate>
          <h3>Availability</h3>
          <ul>
            <li>Project leadership &amp; architecture sprints</li>
            <li>Embedded engineering partnerships</li>
            <li>Audits, rescue missions, and roadmap design</li>
          </ul>
          <p className="note">
            Prefer async updates? Share a GitHub repo, Notion doc, or spec and I'll prepare a tailored plan.
          </p>
        </div>
      </div>
    </section>
  );
}
