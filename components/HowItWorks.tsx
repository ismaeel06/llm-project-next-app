'use client'

import { MessageCircle, Brain, UserCircle, Database, Award, RefreshCw, CheckCircle } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      icon: MessageCircle,
      title: 'User Input',
      description: 'User describes their desired car in natural language',
      details: 'Simple conversation - no forms or complicated filters',
    },
    {
      icon: Brain,
      title: 'Smart Extraction',
      description: 'System extracts preferences using AI and rule-based hybrid approach',
      details: 'Budget, fuel type, transmission, use case detection',
    },
    {
      icon: UserCircle,
      title: 'Profile Building',
      description: 'Preferences accumulate with each conversation turn',
      details: 'Dynamic profile updates in real-time',
    },
    {
      icon: Database,
      title: 'Database Search',
      description: 'Filtered search across 9,179+ vehicle listings',
      details: 'SQL-based deterministic filtering',
    },
    {
      icon: Award,
      title: 'Intelligent Scoring',
      description: '6-factor deterministic scoring algorithm ranks matches',
      details: 'Price fit, age, mileage, fuel, transmission, features',
    },
    {
      icon: CheckCircle,
      title: 'Recommendations',
      description: 'Top 3 personalized recommendations with explanations',
      details: 'Detailed scoring breakdown for each match',
    },
    {
      icon: RefreshCw,
      title: 'Refinement',
      description: 'User can adjust preferences and get new recommendations',
      details: 'Iterative improvement for perfect match',
    },
  ]

  return (
    <section id="how-it-works" className="relative py-20 md:py-32 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-lg text-gray-400">
            A seamless 7-step process from conversation to recommendation
          </p>
        </div>

        {/* Timeline/Steps */}
        <div className="max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative mb-12 last:mb-0">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute left-8 top-20 w-0.5 h-full bg-gradient-to-b from-cyan-500 to-blue-500 opacity-30"></div>
              )}

              {/* Step Card */}
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                {/* Icon & Number */}
                <div className="relative flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center z-10 relative">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 glass p-6 md:p-8 rounded-2xl card-hover">
                  <h3 className="text-2xl font-bold mb-2 text-white">{step.title}</h3>
                  <p className="text-gray-300 mb-2">{step.description}</p>
                  <p className="text-sm text-gray-500">{step.details}</p>
                </div>

                {/* Arrow for larger screens */}
                {index < steps.length - 1 && (
                  <div className="hidden xl:block text-cyan-400 text-3xl">→</div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Info */}
        <div className="mt-16 text-center">
          <div className="glass p-8 rounded-2xl max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Fast & Accurate <span className="gradient-text">Results</span>
            </h3>
            <p className="text-gray-400">
              The entire process takes less than 2 seconds per interaction, providing you with instant, 
              accurate recommendations based on your exact preferences.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
