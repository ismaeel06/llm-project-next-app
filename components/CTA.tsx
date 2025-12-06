'use client'

import { Github, Code2, FileText, Rocket } from 'lucide-react'

export default function CTA() {
  return (
    <section id="demo" className="relative py-20 md:py-32 bg-[#0f0f0f] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-10 animate-pulse"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA Card */}
        <div className="max-w-5xl mx-auto">
          <div className="glass rounded-3xl p-8 md:p-16 text-center">
            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6">
              Ready to Find Your{' '}
              <span className="gradient-text">Perfect Car?</span>
            </h2>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12">
              Experience intelligent car recommendations powered by local AI. 
              Get started in minutes and discover your ideal vehicle from thousands of options.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a
                href="https://github.com/ismaeel06/local-llm-car-recommendation-system"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-cyan-500/50 w-full sm:w-auto justify-center"
              >
                <Github className="w-5 h-5" />
                <span>View on GitHub</span>
              </a>
              <a
                href="https://github.com/ismaeel06/local-llm-car-recommendation-system"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 glass hover:bg-white/10 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all w-full sm:w-auto justify-center"
              >
                <FileText className="w-5 h-5" />
                <span>Documentation</span>
              </a>
            </div>

            {/* Installation Code */}
            <div className="max-w-2xl mx-auto">
              <div className="bg-black/50 rounded-xl p-6 border border-gray-800">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <Code2 className="w-4 h-4" />
                    <span>Quick Setup</span>
                  </div>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText('git clone https://github.com/your-repo/car-recommender\ncd car-recommender\npip install -r requirements.txt\nstreamlit run app.py')
                      alert('Copied to clipboard!')
                    }}
                    className="text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    Copy
                  </button>
                </div>
                <div className="text-left font-mono text-sm text-gray-300 space-y-2">
                  <div className="text-gray-500"># Clone the repository</div>
                  <div className="text-cyan-400">git clone https://github.com/ismaeel06/local-llm-car-recommendation-system</div>
                  <div className="text-gray-500 mt-3"># Install dependencies</div>
                  <div className="text-cyan-400">cd car-recommender</div>
                  <div className="text-cyan-400">pip install -r requirements.txt</div>
                  <div className="text-gray-500 mt-3"># Run the application</div>
                  <div className="text-cyan-400">streamlit run app.py</div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              {
                icon: Rocket,
                title: 'Quick Start',
                description: 'Get up and running in under 5 minutes',
              },
              {
                icon: Github,
                title: 'Open Source',
                description: 'Free to use, modify, and distribute',
              },
              {
                icon: FileText,
                title: 'Well Documented',
                description: 'Comprehensive guides and examples',
              },
            ].map((feature, index) => (
              <div key={index} className="glass p-6 rounded-xl text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
