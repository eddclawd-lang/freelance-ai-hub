import Link from 'next/link'

export const metadata = {
  title: 'AI Tools by Category - FreelanceAI Hub',
  description: 'Browse AI tools by freelancer category: writers, designers, developers, marketers.',
}

export default function CategoriesPage() {
  return (
    <main className="bg-white min-h-screen">
      <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Browse by Category</h1>
          <p className="text-xl">Find the best AI tools for your freelance specialty</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/categories/writers" className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-blue-600 hover:shadow-lg transition">
            <div className="text-5xl mb-4">✍️</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Writers</h2>
            <p className="text-gray-600 mb-4">AI tools for content creation, editing, and research</p>
            <span className="text-blue-600 font-semibold">View Tools →</span>
          </Link>

          <Link href="/categories/designers" className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-blue-600 hover:shadow-lg transition">
            <div className="text-5xl mb-4">🎨</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Designers</h2>
            <p className="text-gray-600 mb-4">AI for design, image generation, and creative work</p>
            <span className="text-blue-600 font-semibold">View Tools →</span>
          </Link>

          <Link href="/categories/developers" className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-blue-600 hover:shadow-lg transition">
            <div className="text-5xl mb-4">💻</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Developers</h2>
            <p className="text-gray-600 mb-4">AI coding assistants and development tools</p>
            <span className="text-blue-600 font-semibold">View Tools →</span>
          </Link>

          <Link href="/categories/writers" className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-blue-600 hover:shadow-lg transition opacity-50">
            <div className="text-5xl mb-4">📈</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Marketers</h2>
            <p className="text-gray-600 mb-4">Coming soon...</p>
          </Link>

          <Link href="/categories/writers" className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-blue-600 hover:shadow-lg transition opacity-50">
            <div className="text-5xl mb-4">📊</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Consultants</h2>
            <p className="text-gray-600 mb-4">Coming soon...</p>
          </Link>

          <Link href="/categories/writers" className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-blue-600 hover:shadow-lg transition opacity-50">
            <div className="text-5xl mb-4">🎥</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Video Editors</h2>
            <p className="text-gray-600 mb-4">Coming soon...</p>
          </Link>
        </div>
      </div>
    </main>
  )
}
