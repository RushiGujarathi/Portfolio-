import Reveal from './Reveal.jsx'
import { certifications } from '../data/content.js'

export default function Certifications() {
  return (
    <section id="certifications">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">04 — Certifications</span>
          <h2>Certifications & achievements</h2>
        </Reveal>

        <div className="cert-grid">
          {certifications.map((cert, i) => (
            <Reveal as="div" key={cert.title} delay={i * 0.06} className="cert-card card">
              <h3>{cert.title}</h3>
              <p>{cert.desc}</p>
              <div className="cert-card__links">
                {cert.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
