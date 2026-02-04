import Link from 'next/link'

export const metadata = {
  title: 'AI for Freelancers Guides - FreelanceAI Hub',
  description: 'Learn how to use AI tools effectively as a freelancer. Practical guides and best practices.',
}

export default function GuidesPage() {
  return (
    <main className="bg-white min-h-screen">
      <div className="bg-gradient-to-br from-green-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Freelancer Guides</h1>
          <p className="text-xl">Learn how to use AI tools the right way</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="space-y-6">
          <Link href="/guides/how-to-use-ai-as-freelancer" className="block bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue-600 hover:shadow-lg transition">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">How to Use AI as a Freelancer</h2>
            <p className="text-gray-600 mb-4">Complete guide to using AI tools ethically and effectively. Best practices, workflows, and what to avoid.</p>
            <span className="text-blue-600 font-semibold">Read Guide →</span>
          </Link>

          <Link href="/guides/chatgpt-freelance-productivity" className="block bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue-600 hover:shadow-lg transition">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">How to Use ChatGPT to 10x Your Freelance Productivity</h2>
            <p className="text-gray-600 mb-4">Practical prompts and workflows that actually save hours. Copy/paste templates for emails, proposals, content, and more.</p>
            <span className="text-blue-600 font-semibold">Read Guide →</span>
          </Link>

          <div className="block bg-gray-50 border-2 border-gray-200 rounded-xl p-6 opacity-60">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Building Your AI Workflow</h2>
            <p className="text-gray-600 mb-4">Coming soon...</p>
          </div>
        </div>
      </div>
    </main>
  )
}
