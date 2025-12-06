'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Github } from 'lucide-react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (isMobileMenuOpen && !target.closest('header')) {
        setIsMobileMenuOpen(false)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [isMobileMenuOpen])

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Tech Stack', href: '#tech-stack' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Demo', href: '#demo' },
  ]

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-opacity-100 shadow-lg' : 'bg-opacity-0'
      } bg-black/5 backdrop-blur-md border-b border-white/10`}
    >
      <nav className="container mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2 group flex-shrink-0" onClick={(e) => scrollToSection(e, '#home')}>
            <div className="w-9 h-9 md:w-10 md:h-10 bg-gradient-to-br from-blue-200 to-blue-100 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform">
              <span className="text-2xl font-bold"><img src="/logo.png" alt="Logo" /></span>
            </div>
            <span className="text-lg md:text-xl font-bold gradient-text hidden sm:inline">Cars For You</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-sm md:text-base text-gray-300 hover:text-cyan-400 transition-colors font-medium whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4 flex-shrink-0">
            <a
              href="https://github.com/ismaeel06/local-llm-car-recommendation-system"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-5 md:px-6 py-2 md:py-2.5 rounded-lg font-semibold text-sm md:text-base transition-all transform hover:scale-105"
            >
              <Github className="w-4 h-4" />
              <span>View on GitHub</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-300 hover:text-cyan-400 transition-colors flex-shrink-0"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile/Tablet Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 space-y-2 animate-slide-down bg-black/80 backdrop-blur-md border-b border-white/10 max-h-[calc(100vh-80px)] overflow-y-auto">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="block text-gray-300 hover:text-cyan-400 transition-colors font-medium py-2 px-4"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://github.com/ismaeel06/local-llm-car-recommendation-system"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2.5 rounded-lg font-semibold mx-4 mt-2"
            >
              <Github className="w-4 h-4" />
              <span>View on GitHub</span>
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}
