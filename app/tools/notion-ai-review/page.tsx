import Link from 'next/link'

export const metadata = {
  title: 'Notion AI Review - Best AI Workspace for Freelancers 2026',
  description: 'Complete review of Notion AI for freelancers. Project management, note-taking, and AI writing assistant in one tool.',
}

export default function NotionAIReview() {
  return (
    <main className="bg-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-blue-600">Home</Link> / <Link href="/tools" className="hover:text-blue-600">Tools</Link> / Notion AI
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Notion AI: Your Second Brain
        </h1>
        <div className="flex items-center gap-4 text-gray-600 mb-8">
          <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full font-semibold">⭐ 4.7/5</span>
          <span>Updated: Feb 2026</span>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <p className="text-sm text-gray-600">AI Add-on</p>
              <p className="text-xl font-bold text-gray-900">$10/month</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Free Version</p>
              <p className="text-xl font-bold text-gray-900">Yes ✓</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Best For</p>
              <p className="text-xl font-bold text-gray-900">Organization</p>
            </div>
          </div>
          <a 
            href="https://notion.so" 
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="block mt-6 bg-blue-600 text-white text-center py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Try Notion Free →
          </a>
        </div>

        <article className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 mb-6">
            Notion + AI = your freelance command center. Docs, projects, wiki, and AI assistant all in one.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">Why Freelancers Love It</h2>
          <ul className="space-y-3 text-gray-700 mb-8">
            <li>✓ All-in-one workspace</li>
            <li>✓ AI writing & summaries</li>
            <li>✓ Project tracking</li>
            <li>✓ Client databases</li>
            <li>✓ Beautiful templates</li>
          </ul>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-green-900 mb-4">👍 Pros</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Everything in one place</li>
                <li>• Super flexible</li>
                <li>• Great free plan</li>
                <li>• AI seamlessly integrated</li>
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-red-900 mb-4">👎 Cons</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Learning curve</li>
                <li>• AI costs extra</li>
                <li>• Can be slow</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6">
            <p className="text-lg font-semibold mb-2">⭐ 4.7/5</p>
            <p className="text-gray-700">Essential for organized freelancers. Start free, add AI later.</p>
          </div>
        </article>
      </div>
    </main>
  )
}
