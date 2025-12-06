'use client'

import { useEffect, useState } from 'react'
import { Database, Zap, Shield, Clock, Globe, Star } from 'lucide-react'

export default function Statistics() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('statistics')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const stats = [
    {
      icon: Database,
      value: '9,179+',
      label: 'Cars in Database',
      description: 'Comprehensive vehicle listings',
      color: 'from-cyan-400 to-blue-500',
    },
    {
      icon: Star,
      value: '6',
      label: 'Factor Scoring',
      description: 'Advanced ranking system',
      color: 'from-blue-500 to-purple-500',
    },
    {
      icon: Zap,
      value: '3.8B',
      label: 'AI Parameters',
      description: 'Phi3:mini model power',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Shield,
      value: '100%',
      label: 'Privacy',
      description: 'Local LLM deployment',
      color: 'from-pink-500 to-red-500',
    },
    {
      icon: Globe,
      value: '99%',
      label: 'Uptime',
      description: 'Reliable local deployment',
      color: 'from-red-500 to-orange-500',
    },
    {
      icon: Clock,
      value: '<2m',
      label: 'Response Time',
      description: 'Lightning-fast results',
      color: 'from-orange-500 to-yellow-500',
    },
  ]

  return (
    <section id="statistics" className="relative py-20 md:py-32 bg-black">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse"></div>
        </div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            By The <span className="gradient-text">Numbers</span>
          </h2>
          <p className="text-lg text-gray-400">
            Impressive metrics that showcase the power of our recommendation system
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`glass p-8 rounded-2xl text-center card-hover ${
                isVisible ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Value */}
              <div className={`text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                {stat.value}
              </div>

              {/* Label */}
              <div className="text-xl font-semibold text-white mb-2">{stat.label}</div>

              {/* Description */}
              <div className="text-sm text-gray-400">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="glass p-8 rounded-2xl text-center">
            <h3 className="text-2xl font-bold mb-4">
              Trusted <span className="gradient-text">Performance</span>
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Our system combines the power of a 3.8 billion parameter AI model with deterministic scoring 
              algorithms to provide accurate, fast, and private car recommendations. Every metric has been 
              optimized for the best user experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
