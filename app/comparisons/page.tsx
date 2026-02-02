import Link from 'next/link'

export const metadata = {
  title: 'AI Tool Comparisons - FreelanceAI Hub',
  description: 'Head-to-head comparisons of popular AI tools for freelancers.',
}

export default function ComparisonsPage() {
  return (
    <main className="bg-white min-h-screen">
      <div className="bg-gradient-to-br from-purple-600 to-pink-600 text-white py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Tool Comparisons</h1>
          <p className="text-xl">Which AI tool is right for you?</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="space-y-6">
          <Link href="/comparisons/chatgpt-vs-claude" className="block bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue-600 hover:shadow-lg transition">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">ChatGPT vs Claude</h2>
            <p className="text-gray-600 mb-4">Which AI assistant is better for freelancers? Features, pricing, and use cases compared.</p>
            <span className="text-blue-600 font-semibold">Read Comparison →</span>
          </Link>

          <Link href="/comparisons/jasper-vs-copyai" className="block bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue-600 hover:shadow-lg transition">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Jasper vs Copy.ai</h2>
            <p className="text-gray-600 mb-4">Comparing two popular AI copywriting tools for freelance marketers.</p>
            <span className="text-blue-600 font-semibold">Read Comparison →</span>
          </Link>
        </div>
      </div>
    </main>
  )
}
