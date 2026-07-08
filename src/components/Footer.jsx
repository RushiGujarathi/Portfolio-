import { ArrowUp } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__bottom">
        <p>&copy; {new Date().getFullYear()} Rushi Gujarathi. All rights reserved. Built with passion.</p>
        <a href="#home" className="footer__top" aria-label="Back to top">
          <ArrowUp size={16} aria-hidden="true" /> Top
        </a>
      </div>
    </footer>
  )
}
