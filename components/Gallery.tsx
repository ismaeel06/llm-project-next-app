'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, MessageSquare, Award, X } from 'lucide-react'
import Image from 'next/image'

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const screenshots = [
    {
      icon: MessageSquare,
      title: 'Chat Interface',
      description: 'Natural conversation for preference extraction',
      badge: 'Conversation',
      color: 'from-cyan-400 to-blue-500',
      image: '/Chat-Interface.png',
    },
    {
      icon: Award,
      title: 'Recommendation Cards',
      description: 'Personalized car matches with detailed scoring',
      badge: 'Results',
      color: 'from-blue-500 to-purple-500',
      image: '/Recommendation-Card.png',
    },
  ]

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1))
  }

  return (
    <section id="gallery" className="relative py-20 md:py-32 bg-[#0f0f0f]">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            See It In <span className="gradient-text">Action</span>
          </h2>
          <p className="text-lg text-gray-400">
            Explore the intuitive interface and powerful features of our car recommendation system
          </p>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {screenshots.map((screenshot, index) => (
            <div key={index} className="glass p-8 rounded-2xl card-hover group">
              {/* Badge */}
              <div className="inline-block mb-4">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${screenshot.color}`}>
                  {screenshot.badge}
                </span>
              </div>

              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${screenshot.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <screenshot.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold mb-2 text-white">{screenshot.title}</h3>
              <p className="text-gray-400 mb-6">{screenshot.description}</p>

              {/* Image */}
              <div 
                className="relative w-full h-80 rounded-xl overflow-hidden border border-gray-700 group-hover:border-cyan-400/30 transition-colors cursor-pointer"
                onClick={() => setSelectedImage(screenshot.image)}
              >
                <Image
                  src={screenshot.image}
                  alt={screenshot.title}
                  fill
                  className="object-contain bg-black/50"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel View */}
        <div className="lg:hidden max-w-2xl mx-auto">
          <div className="glass p-8 rounded-2xl card-hover">
            {/* Badge */}
            <div className="inline-block mb-4">
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${screenshots[currentIndex].color}`}>
                {screenshots[currentIndex].badge}
              </span>
            </div>

            {/* Icon */}
            {(() => {
              const CurrentIcon = screenshots[currentIndex].icon
              return (
                <div className={`w-16 h-16 bg-gradient-to-br ${screenshots[currentIndex].color} rounded-2xl flex items-center justify-center mb-6`}>
                  <CurrentIcon className="w-8 h-8 text-white" />
                </div>
              )
            })()}

            {/* Title and Description */}
            <h3 className="text-2xl font-bold mb-2 text-white">{screenshots[currentIndex].title}</h3>
            <p className="text-gray-400 mb-6">{screenshots[currentIndex].description}</p>

            {/* Image */}
            <div 
              className="relative w-full h-72 rounded-xl overflow-hidden border border-gray-700 mb-6 cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => setSelectedImage(screenshots[currentIndex].image)}
            >
              <Image
                src={screenshots[currentIndex].image}
                alt={screenshots[currentIndex].title}
                fill
                className="object-contain bg-black/50"
                sizes="(max-width: 768px) 100vw, 90vw"
                priority
              />
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between">
              <button
                onClick={goToPrevious}
                className="flex items-center justify-center w-10 h-10 glass rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Previous screenshot"
              >
                <ChevronLeft className="w-5 h-5 text-cyan-400" />
              </button>

              {/* Indicators */}
              <div className="flex items-center gap-2">
                {screenshots.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? 'w-6 bg-cyan-400'
                        : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                    aria-label={`Go to screenshot ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={goToNext}
                className="flex items-center justify-center w-10 h-10 glass rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Next screenshot"
              >
                <ChevronRight className="w-5 h-5 text-cyan-400" />
              </button>
            </div>

            {/* Counter */}
            <div className="text-center mt-4 text-sm text-gray-500">
              {currentIndex + 1} of {screenshots.length}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-4">Ready to experience it yourself?</p>
          <a
            href="#demo"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#demo')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
          >
            <span>Try the Demo</span>
            <span>→</span>
          </a>
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={(e) => {
              if (e.target === e.currentTarget) setSelectedImage(null)
            }}
          >
            <div className="relative w-full max-w-6xl h-[90vh] flex flex-col bg-black/60 rounded-lg overflow-hidden border border-gray-700">
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/80 hover:bg-black/95 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Close modal"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              {/* Scrollable Image Container */}
              <div className="flex-1 overflow-auto flex items-start justify-center">
                <Image
                  src={selectedImage}
                  alt="Full screen image"
                  width={1400}
                  height={1200}
                  className="w-full h-auto object-contain"
                  sizes="(max-width: 768px) 100vw, 90vw"
                  priority
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
