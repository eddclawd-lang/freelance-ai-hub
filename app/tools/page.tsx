import Link from 'next/link'

export const metadata = {
  title: 'All AI Tools for Freelancers - FreelanceAI Hub',
  description: 'Browse our complete directory of AI tools for freelancers. Reviews, comparisons, and guides.',
}

const tools = [
  {
    name: 'ChatGPT',
    category: 'Writing & Research',
    rating: 4.8,
    price: 'Free - $20/mo',
    slug: 'chatgpt-for-freelancers',
    description: 'The swiss army knife for freelancers. Content, research, brainstorming.',
  },
  {
    name: 'Claude',
    category: 'Writing & Analysis',
    rating: 4.9,
    price: 'Free - $20/mo',
    slug: 'claude-for-freelancers',
    description: 'Best for long-form content and document analysis.',
  },
  {
    name: 'Notion AI',
    category: 'Productivity',
    rating: 4.7,
    price: '$10/mo',
    slug: 'notion-ai-review',
    description: 'Your second brain. Note-taking, project management, and organization.',
  },
  {
    name: 'Grammarly',
    category: 'Writing',
    rating: 4.7,
    price: 'Free - $12/mo',
    slug: 'grammarly-review',
    description: 'Essential writing assistant and grammar checker.',
  },
  {
    name: 'Jasper AI',
    category: 'Marketing',
    rating: 4.6,
    price: '$39/mo',
    slug: 'jasper-ai-review',
    description: 'Marketing-focused AI for copywriting and content.',
  },
  {
    name: 'Copy.ai',
    category: 'Copywriting',
    rating: 4.5,
    price: 'Free - $49/mo',
    slug: 'copy-ai-review',
    description: 'Copywriting specialist with templates for everything.',
  },
]

export default function ToolsDirectory() {
  return (
    <main className="bg-white min-h-screen">
      <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            All AI Tools for Freelancers
          </h1>
          <p className="text-xl text-blue-100">
            Hand-tested reviews. Real experiences. No BS.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="flex gap-4 mb-8 flex-wrap">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold">
            All Tools
          </button>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200">
            Writing
          </button>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200">
            Design
          </button>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200">
            Development
          </button>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200">
            Marketing
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <Link 
              key={tool.slug}
              href={`/tools/${tool.slug}`}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-blue-600 transition"
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{tool.name}</h3>
                  <p className="text-sm text-blue-600">{tool.category}</p>
                </div>
                <div className="bg-blue-50 px-3 py-1 rounded-full">
                  <span className="text-sm font-semibold text-blue-600">⭐ {tool.rating}</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{tool.description}</p>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500">{tool.price}</span>
                <span className="text-blue-600 font-semibold">Read Review →</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 border border-blue-200 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Don't see what you're looking for?
          </h2>
          <p className="text-gray-700 mb-6">
            We're constantly adding new tool reviews. Subscribe to get notified.
          </p>
          <div className="flex gap-2 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              Notify Me
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
