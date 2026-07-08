import { Github } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { flagshipProjects } from '../data/content.js'

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">03 — Projects</span>
          <h2>Flagship work</h2>
          <p className="section-head__sub">
            Five projects that best show how I think — the rest of my coursework, hackathon
            decks, and certifications live in the archive below.
          </p>
        </Reveal>

        <div className="projects-grid">
          {flagshipProjects.map((project, i) => (
            <Reveal
              as="article"
              key={project.title}
              delay={i * 0.08}
              className="project-card card"
              whileHover={{ y: -8 }}
            >
              <span className="project-card__tag">{project.tag}</span>
              <h3>{project.title}</h3>
              <p className="project-card__desc">{project.description}</p>
              <ul className="project-card__features">
                {project.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                <Github size={16} aria-hidden="true" /> View & download
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}