import Link from 'next/link'

export const metadata = {
  title: 'Best AI Tools for Freelance Writers - 2026 Guide',
  description: 'Discover the best AI tools for freelance writers. From content generation to editing, find tools that actually help you write better and faster.',
}

const tools = [
  {
    name: 'ChatGPT',
    rating: 4.8,
    price: 'Free - $20/mo',
    slug: 'chatgpt-for-freelancers',
    bestFor: 'Brainstorming, outlining, research',
    description: 'The most versatile AI for writers. Great for ideation, outlines, and first drafts.',
  },
  {
    name: 'Claude',
    rating: 4.9,
    price: 'Free - $20/mo',
    slug: 'claude-for-freelancers',
    bestFor: 'Long-form content, editing',
    description: 'Exceptional for long articles and maintaining consistent voice across documents.',
  },
  {
    name: 'Jasper AI',
    rating: 4.6,
    price: '$39/mo',
    slug: 'jasper-ai-review',
    bestFor: 'Marketing copy, blog posts',
    description: 'Purpose-built for content marketing with templates for every format.',
  },
  {
    name: 'Copy.ai',
    rating: 4.5,
    price: 'Free - $49/mo',
    slug: 'copy-ai-review',
    bestFor: 'Social media, ad copy',
    description: 'Thousands of templates for short-form content and copywriting.',
  },
  {
    name: 'Grammarly',
    rating: 4.7,
    price: 'Free - $12/mo',
    slug: 'grammarly-review',
    bestFor: 'Editing, grammar checking',
    description: 'Essential writing assistant for catching errors and improving clarity.',
  },
]

export default function WritersTools() {
  return (
    <main className="bg-white min-h-screen">
      <div className="bg-gradient-to-br from-purple-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center">
            <div className="text-6xl mb-4">✍️</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              AI Tools for Freelance Writers
            </h1>
            <p className="text-xl text-purple-100">
              Write better, faster, and make more money with AI assistance
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-gray-700 leading-relaxed">
            As a freelance writer, AI tools can 10x your productivity - but only if you use them right. 
            Here are the tools that actually help you write better content, not generic slop.
          </p>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-8">Best AI Writing Tools</h2>
        
        <div className="space-y-6 mb-16">
          {tools.map((tool, index) => (
            <div key={tool.slug} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-4">
                  <div className="text-3xl font-bold text-gray-300">#{index + 1}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{tool.name}</h3>
                    <div className="flex items-center gap-3 text-sm text-gray-600 mb-2">
                      <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded font-semibold">
                        ⭐ {tool.rating}/5
                      </span>
                      <span>{tool.price}</span>
                    </div>
                    <p className="text-sm text-blue-600 font-semibold mb-3">
                      Best for: {tool.bestFor}
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      {tool.description}
                    </p>
                  </div>
                </div>
              </div>
              <Link 
                href={`/tools/${tool.slug}`}
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Read Full Review →
              </Link>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200 rounded-xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            How to Use AI as a Writer (Without Selling Your Soul)
          </h2>
          <div className="space-y-4 text-gray-700">
            <div>
              <h3 className="font-bold text-gray-900 mb-2">✓ DO use AI for:</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Brainstorming ideas and angles</li>
                <li>Creating outlines and structure</li>
                <li>First drafts to get past blank page syndrome</li>
                <li>Research and summarizing complex topics</li>
                <li>Rewriting and improving existing content</li>
              </ul>
            </div>
            <div className="pt-4">
              <h3 className="font-bold text-gray-900 mb-2">✗ DON'T use AI for:</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Publishing raw AI output (readers can tell)</li>
                <li>Replacing your unique voice and perspective</li>
                <li>Fact-checking (AI hallucinates, verify everything)</li>
                <li>Replacing actual expertise and experience</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-700 mt-6 font-semibold">
            The best writers use AI as a tool, not a replacement. Think of it as a research assistant, 
            not a ghostwriter.
          </p>
        </div>

        <div className="bg-gray-900 text-white rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Want More Writing Tool Reviews?
          </h2>
          <p className="text-gray-300 mb-6">
            Get weekly tool reviews and productivity tips for freelance writers.
          </p>
          <div className="flex gap-2 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
