import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { profile } from '../data/content.js'

// Terminal-style typing prompt — the signature element. It echoes a real
// `whoami`-flavored command line rather than a generic gradient headline,
// which fits an engineer whose actual daily surface is a terminal.
function TerminalPrompt() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [text, setText] = useState('')
  const [phase, setPhase] = useState('typing') // typing | pausing | erasing

  useEffect(() => {
    const current = profile.roles[roleIndex]
    let timeout

    if (phase === 'typing') {
      if (text.length < current.length) {
        timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), 75)
      } else {
        timeout = setTimeout(() => setPhase('pausing'), 1400)
      }
    } else if (phase === 'pausing') {
      timeout = setTimeout(() => setPhase('erasing'), 400)
    } else if (phase === 'erasing') {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(text.slice(0, -1)), 40)
      } else {
        setRoleIndex((i) => (i + 1) % profile.roles.length)
        setPhase('typing')
      }
    }
    return () => clearTimeout(timeout)
  }, [text, phase, roleIndex])

  return (
    <div className="terminal card">
      <div className="terminal__chrome">
        <span className="terminal__title">rushi@dev — zsh</span>
      </div>
      <div className="terminal__body">
        <p><span className="terminal__prompt">rushi@dev</span><span className="terminal__path">~</span> whoami</p>
        <p className="terminal__result">{profile.name}</p>
        <p>
          <span className="terminal__prompt">rushi@dev</span><span className="terminal__path">~</span> role --current
        </p>
        <p className="terminal__result">
          {text}
          <span className="terminal__cursor" aria-hidden="true" />
        </p>
      </div>
    </div>
  )
}

function PhotoSlideshow() {
  const photos = profile.photos
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setIndex((i) => (i + 1) % photos.length)
        setVisible(true)
      }, 500)
    }, 12000)
    return () => clearInterval(interval)
  }, [photos.length])

  return (
    <div className="hero__photo-frame">
      <img
        src={photos[index]}
        alt={`${profile.name} portrait`}
        className="hero__photo"
        style={{ opacity: visible ? 1 : 0 }}
        width={420}
        height={420}
      />
    </div>
  )
}

export default function Hero() {
  const heroRef = useRef(null)

  // Subtle mouse-driven parallax on the glow — ambient, not gimmicky.
  const handleMouseMove = (e) => {
    if (!heroRef.current) return
    const rect = heroRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20
    heroRef.current.style.setProperty('--glow-x', `${x}px`)
    heroRef.current.style.setProperty('--glow-y', `${y}px`)
  }

  return (
    <section id="home" className="hero" ref={heroRef} onMouseMove={handleMouseMove}>
      <div className="hero__glow" aria-hidden="true" />
      <div className="container hero__grid">
        <motion.div
          className="hero__content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="eyebrow">Portfolio / 2026</span>
          <h1>
            Hi, I'm {profile.name.split(' ')[0]}<br />
            <span className="highlight">{profile.name.split(' ')[1]}</span>
          </h1>
          <p className="hero__tagline">{profile.tagline}</p>
          <div className="hero__cta">
            <a href="#contact" className="btn btn-primary">Get in touch</a>
            <a href="#projects" className="btn btn-ghost">View work</a>
            <a
              href="/images/Rushi_Gujarathi_Resume_Updated.docx"
              className="btn btn-ghost btn-resume"
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero__side"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <PhotoSlideshow />
          <TerminalPrompt />
        </motion.div>
      </div>

      <a href="#about" className="hero__scroll-indicator" aria-label="Scroll to About section">
        <ArrowDown size={18} />
      </a>
    </section>
  )
}