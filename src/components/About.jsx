import { GraduationCap, Target, Youtube, Palette } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { aboutCards } from '../data/content.js'

const ICONS = { GraduationCap, Target, Youtube, Palette }

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">01 — About</span>
          <h2>The story so far</h2>
        </Reveal>

        <div className="about-grid">
          {aboutCards.map((card, i) => {
            const Icon = ICONS[card.icon]
            return (
              <Reveal as="div" key={card.title} delay={i * 0.08} className="about-card card">
                <Icon size={22} className="about-card__icon" aria-hidden="true" />
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
