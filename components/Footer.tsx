'use client'

import { Github, Linkedin, Twitter, ArrowUp, Heart } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  const links = {
    project: [
      { name: 'Features', href: '#features' },
      { name: 'How It Works', href: '#how-it-works' },
      { name: 'Tech Stack', href: '#tech-stack' },
      { name: 'Demo', href: '#demo' },
    ],
    resources: [
      { name: 'Documentation', href: '#' },
      { name: 'GitHub Repository', href: 'https://github.com/ismaeel06/local-llm-car-recommendation-system' },
      { name: 'API Reference', href: '#' },
      { name: 'Contributing', href: '#' },
    ],
    social: [
      { name: 'GitHub', href: 'https://github.com/ismaeel06/local-llm-car-recommendation-system', icon: Github },
      { name: 'LinkedIn', href: 'https://www.linkedin.com/in/ismaeel-zeb', icon: Linkedin },
      { name: 'Twitter', href: 'https://twitter.com', icon: Twitter },
    ],
  }

  return (
    <footer className="relative bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-200 to-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl"><img src="logo.png" alt="logo" /></span>
              </div>
              <span className="text-xl font-bold gradient-text">Cars For You</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              A sophisticated, conversational car recommendation platform powered by local LLM technology. 
              Find your perfect car with AI-powered recommendations.
            </p>
            <div className="flex items-center space-x-4">
              {links.social.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 glass rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors group"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Project Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Project</h3>
            <ul className="space-y-2">
              {links.project.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      if (link.href.startsWith('#')) {
                        e.preventDefault()
                        document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })
                      }
                    }}
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              {links.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tech Credits */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="text-center">
            <h4 className="text-white font-semibold mb-4">Built With</h4>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-400">
              <span>Next.js</span>
              <span>•</span>
              <span>Tailwind CSS v4</span>
              <span>•</span>
              <span>Python</span>
              <span>•</span>
              <span>Ollama</span>
              <span>•</span>
              <span>Phi3:mini</span>
              <span>•</span>
              <span>SQLite</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-gray-400 text-sm text-center md:text-left">
            <p>
              © {currentYear} Cars For You. Vibe-coded with <Heart className="w-4 h-4 inline text-red-500" /> by{' '}
              <span className="text-cyan-400">Ismaeel Zeb</span>
            </p>
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 glass hover:bg-white/10 px-4 py-2 rounded-lg transition-colors group"
            aria-label="Back to top"
          >
            <span className="text-sm text-gray-400 group-hover:text-cyan-400 transition-colors">Back to Top</span>
            <ArrowUp className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors" />
          </button>
        </div>
      </div>
    </footer>
  )
}
