import Link from 'next/link'

export const metadata = {
  title: 'GitHub Copilot Review - AI Coding Assistant for Developers',
  description: 'GitHub Copilot review for freelance developers. AI pair programming in your IDE.',
}

export default function CopilotReview() {
  return (
    <main className="bg-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">GitHub Copilot Review</h1>
        <div className="flex items-center gap-4 text-gray-600 mb-8">
          <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full font-semibold">⭐ 4.8/5</span>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <p className="text-sm text-gray-600">Price</p>
              <p className="text-xl font-bold text-gray-900">$10/mo</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Free Trial</p>
              <p className="text-xl font-bold text-gray-900">30 days</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Best For</p>
              <p className="text-xl font-bold text-gray-900">Developers</p>
            </div>
          </div>
          <a 
            href="https://github.com/features/copilot" 
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="block mt-6 bg-blue-600 text-white text-center py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Try Copilot →
          </a>
        </div>

        <article className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 mb-6">
            AI pair programmer in your IDE. Autocomplete on steroids.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Key Features</h2>
          <ul className="space-y-2 text-gray-700 mb-8">
            <li>✓ Code suggestions as you type</li>
            <li>✓ Function generation</li>
            <li>✓ Works in VS Code, JetBrains</li>
            <li>✓ Multiple languages</li>
          </ul>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="font-bold text-green-900 mb-3">Pros</h3>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Saves tons of time</li>
                <li>• Great autocomplete</li>
                <li>• Learns your style</li>
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="font-bold text-red-900 mb-3">Cons</h3>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Sometimes suggests bad code</li>
                <li>• Requires review</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6">
            <p className="font-semibold mb-2">⭐ 4.8/5</p>
            <p className="text-gray-700">Must-have for developers. $10/mo is a steal.</p>
          </div>
        </article>
      </div>
    </main>
  )
}
