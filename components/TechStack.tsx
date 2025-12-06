'use client'

import { Code2, Cpu, Database, Layers } from 'lucide-react'

export default function TechStack() {
  const techCategories = [
    {
      category: 'Frontend',
      icon: Code2,
      color: 'from-cyan-500 to-blue-500',
      technologies: [
        { name: 'Streamlit', description: 'Python web framework' },
        { name: 'Custom CSS', description: 'Modern styling' },
        { name: 'Responsive Design', description: 'Mobile/tablet/desktop' },
      ],
    },
    {
      category: 'Backend',
      icon: Cpu,
      color: 'from-blue-500 to-purple-500',
      technologies: [
        { name: 'Python 3.13', description: 'Core language' },
        { name: 'Ollama + phi3:mini', description: '3.8B parameters' },
        { name: 'SQLite', description: '9,179 cars database' },
      ],
    },
    {
      category: 'Core Components',
      icon: Layers,
      color: 'from-purple-500 to-pink-500',
      technologies: [
        { name: 'ProfileExtractor', description: 'LLM + rule-based hybrid' },
        { name: 'CarSearcher', description: 'SQL-based search' },
        { name: 'CarScorer', description: '6-factor algorithm' },
        { name: 'RecommendationEngine', description: 'Orchestrator' },
      ],
    },
    {
      category: 'Infrastructure',
      icon: Database,
      color: 'from-pink-500 to-red-500',
      technologies: [
        { name: 'Local LLM', description: 'Privacy-first deployment' },
        { name: 'Lightweight', description: 'No cloud dependencies' },
        { name: 'Fast', description: '<2m response time' },
      ],
    },
  ]

  return (
    <section id="tech-stack" className="relative py-20 md:py-32 bg-[#0f0f0f]">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-lg text-gray-400">
            Built with cutting-edge technologies for optimal performance and privacy
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {techCategories.map((category, index) => (
            <div
              key={index}
              className="glass p-8 rounded-2xl card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Category Header */}
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">{category.category}</h3>
              </div>

              {/* Technologies */}
              <div className="space-y-4">
                {category.technologies.map((tech, i) => (
                  <div key={i} className="border-l-2 border-gray-700 pl-4 hover:border-cyan-400 transition-colors">
                    <div className="font-semibold text-white">{tech.name}</div>
                    <div className="text-sm text-gray-500">{tech.description}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Key Highlights */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            {
              title: 'Local-First',
              description: 'Complete privacy with no data sent to cloud services',
              icon: '🔒',
            },
            {
              title: 'High Performance',
              description: 'Optimized for speed with sub-2 second response times',
              icon: '⚡',
            },
            {
              title: 'Scalable',
              description: 'Handle thousands of vehicles with efficient algorithms',
              icon: '📈',
            },
          ].map((highlight, index) => (
            <div key={index} className="text-center glass p-6 rounded-xl">
              <div className="text-4xl mb-3">{highlight.icon}</div>
              <h4 className="text-lg font-bold text-white mb-2">{highlight.title}</h4>
              <p className="text-sm text-gray-400">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
