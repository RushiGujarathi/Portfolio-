import { motion } from 'framer-motion'

// Single source of truth for the scroll-reveal animation used across
// every section — one orchestrated motion language, not scattered effects.
export default function Reveal({ children, delay = 0, y = 24, className = '', as = 'div', ...rest }) {
  // `as` may be a tag name string ("div", "article") or an already-resolved
  // motion component (motion.article). Only index into the motion proxy
  // when we actually have a string — motion[as] on a non-string stringifies
  // to "[object Object]" and creates a bogus invalid-tag component.
  const MotionTag = typeof as === 'string' ? motion[as] || motion.div : as
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}
