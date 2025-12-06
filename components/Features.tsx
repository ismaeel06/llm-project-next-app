'use client'

import { MessageSquare, Sparkles, Filter, Target, Bot, History } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: MessageSquare,
      title: 'Intelligent Conversation',
      description: 'Extract preferences through natural dialogue with support for budget formats (lac, million, PKR)',
      highlights: ['Natural language processing', 'Budget range understanding', 'Multiple format support'],
    },
    {
      icon: Sparkles,
      title: 'Hybrid Extraction',
      description: 'LLM-powered AI extraction with rule-based fallback for maximum accuracy',
      highlights: ['Phi3:mini AI model', 'Rule-based validation', 'Multi-language support'],
    },
    {
      icon: Filter,
      title: 'Smart Filtering',
      description: 'Real-time database filtering across 9,179+ vehicle listings',
      highlights: ['Price-based filtering', 'Fuel type matching', 'Transmission preferences'],
    },
    {
      icon: Target,
      title: 'Deterministic Scoring',
      description: '6-factor scoring system with weighted ranking for accurate recommendations',
      highlights: ['Price fit analysis', 'Age & mileage scoring', 'Feature matching'],
    },
    {
      icon: Bot,
      title: 'Dynamic Responses',
      description: 'LLM-generated personalized conversations with Pakistani car market expertise',
      highlights: ['Context-aware dialogue', 'Follow-up questions', 'Market insights'],
    },
    {
      icon: History,
      title: 'Conversation Management',
      description: 'Save and load conversations with complete chat history',
      highlights: ['Session persistence', 'History management', 'Progress tracking'],
    },
  ]

  return (
    <section id="features" className="relative py-20 md:py-32 bg-[#0f0f0f]">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Powerful <span className="gradient-text">Features</span>
          </h2>
          <p className="text-lg text-gray-400">
            Advanced AI capabilities combined with intelligent algorithms to deliver the best car recommendations
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass p-8 rounded-2xl card-hover group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-7 h-7 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>

              {/* Description */}
              <p className="text-gray-400 mb-4">{feature.description}</p>

              {/* Highlights */}
              <ul className="space-y-2">
                {feature.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-center text-sm text-gray-500">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></div>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-4">Discover how these features work together</p>
          <a
            href="#how-it-works"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#how-it-works')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
          >
            <span>View the Process</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
