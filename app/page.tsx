import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Best AI Tools for <span className="text-blue-600">Freelancers</span> in 2026
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Discover AI-powered tools that actually save you time and make you money. 
            Tested by freelancers, for freelancers.
          </p>
          <div className="flex gap-4 justify-center">
            <Link 
              href="/tools" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Browse All Tools
            </Link>
            <Link 
              href="/guides" 
              className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
            >
              Read Guides
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Tools */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Top AI Tools Right Now
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <ToolCard 
            name="ChatGPT"
            category="Writing & Research"
            description="The swiss army knife for freelancers. Content creation, research, brainstorming."
            rating={4.8}
            href="/tools/chatgpt-for-freelancers"
          />
          <ToolCard 
            name="Claude"
            category="Writing & Analysis"
            description="Best for long-form content, analysis, and complex writing projects."
            rating={4.9}
            href="/tools/claude-for-freelancers"
          />
          <ToolCard 
            name="Notion AI"
            category="Productivity"
            description="Your second brain. Note-taking, project management, and content organization."
            rating={4.7}
            href="/tools/notion-ai-review"
          />
        </div>
      </div>

      {/* Categories */}
      <div className="container mx-auto px-4 py-16 bg-white">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Browse by Category
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          <CategoryCard 
            title="Writers"
            emoji="✍️"
            href="/categories/writers"
            toolCount={15}
          />
          <CategoryCard 
            title="Designers"
            emoji="🎨"
            href="/categories/designers"
            toolCount={12}
          />
          <CategoryCard 
            title="Developers"
            emoji="💻"
            href="/categories/developers"
            toolCount={10}
          />
          <CategoryCard 
            title="Marketers"
            emoji="📈"
            href="/categories/marketers"
            toolCount={14}
          />
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-blue-600 rounded-2xl p-12 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated on the Latest AI Tools
          </h2>
          <p className="text-blue-100 mb-8">
            Get weekly tool reviews and productivity tips in your inbox.
          </p>
          <div className="flex gap-2 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 rounded-lg"
            />
            <button className="bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}

function ToolCard({ name, category, description, rating, href }: {
  name: string
  category: string
  description: string
  rating: number
  href: string
}) {
  return (
    <Link href={href} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition border border-gray-100">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="text-xl font-bold text-gray-900">{name}</h3>
          <p className="text-sm text-blue-600">{category}</p>
        </div>
        <div className="bg-blue-50 px-3 py-1 rounded-full">
          <span className="text-sm font-semibold text-blue-600">⭐ {rating}</span>
        </div>
      </div>
      <p className="text-gray-600">{description}</p>
      <div className="mt-4 text-blue-600 font-semibold text-sm">
        Read Review →
      </div>
    </Link>
  )
}

function CategoryCard({ title, emoji, href, toolCount }: {
  title: string
  emoji: string
  href: string
  toolCount: number
}) {
  return (
    <Link href={href} className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl hover:shadow-md transition border border-gray-200">
      <div className="text-4xl mb-2">{emoji}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-1">{title}</h3>
      <p className="text-gray-600 text-sm">{toolCount} tools</p>
    </Link>
  )
}
