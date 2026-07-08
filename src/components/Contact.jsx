import { Phone, Youtube, Linkedin, Github, Instagram } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { contact } from '../data/content.js'

export default function Contact() {
  return (
    <section id="contact">
      <div className="container contact-grid contact-grid--centered">
        <Reveal className="contact-card card">
          <div className="contact-info contact-info--centered">
            <span className="eyebrow">05 — Contact</span>
            <h2>Let's <span className="highlight">connect</span></h2>
            <p>I'm always open to discussing web development work or partnership opportunities.</p>

            <ul className="contact-links">
              <li>
                <Phone size={18} className="highlight" aria-hidden="true" />
                <a href={contact.phoneHref}>{contact.phone}</a>
              </li>
              <li>
                <Youtube size={18} className="highlight" aria-hidden="true" />
                <a href={contact.youtube} target="_blank" rel="noopener noreferrer">YouTube Channel</a>
              </li>
            </ul>

            <div className="social-links">
              <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
              <a href={contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={18} /></a>
              <a href={contact.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={18} /></a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}