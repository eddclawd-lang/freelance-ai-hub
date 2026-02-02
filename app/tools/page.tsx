'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function ToolsDirectory() {
  const [activeFilter, setActiveFilter] = useState('all')

  const tools = [
    {
      name: 'ChatGPT',
      category: 'writing',
      rating: 4.8,
      price: 'Free - $20/mo',
      slug: 'chatgpt-for-freelancers',
      description: 'The swiss army knife for freelancers. Content, research, brainstorming.',
    },
    {
      name: 'Claude',
      category: 'writing',
      rating: 4.9,
      price: 'Free - $20/mo',
      slug: 'claude-for-freelancers',
      description: 'Best for long-form content and document analysis.',
    },
    {
      name: 'Notion AI',
      category: 'productivity',
      rating: 4.7,
      price: '$10/mo',
      slug: 'notion-ai-review',
      description: 'Your second brain. Note-taking, project management, and organization.',
    },
    {
      name: 'Grammarly',
      category: 'writing',
      rating: 4.7,
      price: 'Free - $12/mo',
      slug: 'grammarly-review',
      description: 'Essential writing assistant and grammar checker.',
    },
    {
      name: 'Jasper AI',
      category: 'marketing',
      rating: 4.6,
      price: '$39/mo',
      slug: 'jasper-ai-review',
      description: 'Marketing-focused AI for copywriting and content.',
    },
    {
      name: 'Copy.ai',
      category: 'marketing',
      rating: 4.5,
      price: 'Free - $49/mo',
      slug: 'copy-ai-review',
      description: 'Copywriting specialist with templates for everything.',
    },
    {
      name: 'Midjourney',
      category: 'design',
      rating: 4.9,
      price: '$10 - $60/mo',
      slug: 'midjourney-for-freelancers',
      description: 'Best-in-class AI art generation. Create stunning visuals clients actually pay for.',
    },
    {
      name: 'Canva AI',
      category: 'design',
      rating: 4.8,
      price: 'Free - $13/mo',
      slug: 'canva-ai-for-freelancers',
      description: 'Design like a pro without being one. AI-powered templates and tools.',
    },
    {
      name: 'GitHub Copilot',
      category: 'development',
      rating: 4.8,
      price: '$10/mo',
      slug: 'github-copilot-review',
      description: 'AI pair programmer. Code suggestions right in your IDE.',
    },
  ]

  const filteredTools = activeFilter === 'all' 
    ? tools 
    : tools.filter(tool => tool.category === activeFilter)

  return (
    <main className="bg-black min-h-screen text-white">
      {/* Hero */}
      <div className="relative overflow-hidden border-b border-gray-800">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>
        <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent animate-fade-in">
              All AI Tools
            </h1>
            <p className="text-xl text-gray-400">
              Hand-tested reviews. Real experiences. No BS.
            </p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="border-b border-gray-800 sticky top-0 bg-black/95 backdrop-blur-lg z-40">
        <div className="container mx-auto px-4 py-6">
          <div className="flex gap-3 overflow-x-auto hide-scrollbar">
            {[
              { id: 'all', label: 'All Tools' },
              { id: 'writing', label: 'Writing' },
              { id: 'design', label: 'Design' },
              { id: 'development', label: 'Development' },
              { id: 'marketing', label: 'Marketing' },
              { id: 'productivity', label: 'Productivity' },
            ].map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2.5 rounded-full font-semibold whitespace-nowrap transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-white text-black shadow-lg shadow-white/20 scale-105'
                    : 'bg-gray-900 text-gray-400 hover:bg-gray-800 hover:text-white'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tools Grid */}
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool, index) => (
            <Link
              key={tool.slug}
              href={`/tools/${tool.slug}`}
              className="group relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-white/10"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-600/0 via-purple-600/0 to-pink-600/0 group-hover:from-blue-600/10 group-hover:via-purple-600/10 group-hover:to-pink-600/10 transition-all duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                      {tool.name}
                    </h3>
                    <p className="text-sm text-gray-500 uppercase tracking-wider mt-1">
                      {tool.category}
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
                    <span className="text-sm font-bold text-yellow-400">⭐ {tool.rating}</span>
                  </div>
                </div>
                
                <p className="text-gray-400 mb-6 leading-relaxed">{tool.description}</p>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm font-medium">{tool.price}</span>
                  <span className="text-white font-semibold group-hover:translate-x-2 transition-transform duration-300 inline-flex items-center gap-2">
                    Review <span className="text-2xl">→</span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredTools.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-xl">No tools found in this category yet.</p>
          </div>
        )}
      </div>

      {/* CTA */}
      <div className="container mx-auto px-4 pb-20">
        <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-3xl p-12 text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-pink-600/5"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Don't see what you're looking for?
            </h2>
            <p className="text-gray-400 mb-8 text-lg">
              We're constantly adding new tool reviews. Subscribe to get notified.
            </p>
            <div className="flex gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-6 py-4 rounded-xl bg-white/5 border border-gray-800 text-white placeholder-gray-600 focus:outline-none focus:border-white/30 transition-all"
              />
              <button className="bg-white text-black px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform duration-300 shadow-lg shadow-white/20">
                Notify Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
