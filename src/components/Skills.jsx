import Reveal from './Reveal.jsx'
import { skillGroups } from '../data/content.js'

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">02 — Skills</span>
          <h2>What I build with</h2>
        </Reveal>

        <div className="skills-groups">
          {skillGroups.map((group, gi) => (
            <Reveal as="div" key={group.label} delay={gi * 0.08} className="skills-group">
              <h3 className="skills-group__label">{group.label}</h3>
              <div className="skills-container">
                {group.skills.map((skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
