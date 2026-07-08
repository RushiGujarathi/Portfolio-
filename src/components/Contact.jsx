import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Youtube, Linkedin, Github, Instagram, CheckCircle2 } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { contact } from '../data/content.js'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Enter your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Enter a valid email.'
    if (!form.message.trim()) next.message = 'Write a short message.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return
    // No backend is wired up — this opens the visitor's mail client with
    // the message pre-filled so it actually reaches Rushi.
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`
    setSent(true)
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact">
      <div className="container contact-grid">
        <Reveal className="contact-info">
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
        </Reveal>

        <Reveal delay={0.1} className="contact-form-wrap card">
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {errors.name && <span id="name-error" className="field__error">{errors.name}</span>}
            </div>

            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && <span id="email-error" className="field__error">{errors.email}</span>}
            </div>

            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-error' : undefined}
              />
              {errors.message && <span id="message-error" className="field__error">{errors.message}</span>}
            </div>

            <button type="submit" className="btn btn-primary">Send message</button>

            <AnimatePresence>
              {sent && (
                <motion.p
                  className="contact-form__success"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  <CheckCircle2 size={16} aria-hidden="true" /> Opening your mail client…
                </motion.p>
              )}
            </AnimatePresence>
          </form>
        </Reveal>

        <Reveal delay={0.15} className="map-container">
          <iframe
            src={contact.mapEmbed}
            title="Location map"
            loading="lazy"
            allowFullScreen
          />
        </Reveal>
      </div>
    </section>
  )
}