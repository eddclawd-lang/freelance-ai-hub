import Link from 'next/link'

export const metadata = {
  title: 'Copy.ai Review - AI Copywriting Tool for Freelancers',
  description: 'Copy.ai review: Templates for social media, ads, emails. Best for short-form content.',
}

export default function CopyAIReview() {
  return (
    <main className="bg-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-blue-600">Home</Link> / <Link href="/tools" className="hover:text-blue-600">Tools</Link> / Copy.ai
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">Copy.ai Review</h1>
        <div className="flex items-center gap-4 text-gray-600 mb-8">
          <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full font-semibold">⭐ 4.5/5</span>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <p className="text-sm text-gray-600">Price</p>
              <p className="text-xl font-bold text-gray-900">Free-$49/mo</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Free Version</p>
              <p className="text-xl font-bold text-gray-900">Yes ✓</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Best For</p>
              <p className="text-xl font-bold text-gray-900">Copywriting</p>
            </div>
          </div>
          <a 
            href="https://copy.ai" 
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="block mt-6 bg-blue-600 text-white text-center py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Try Copy.ai Free →
          </a>
        </div>

        <article className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 mb-6">
            Copy.ai is the template king. Thousands of pre-built workflows for ads, social posts, emails.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why Use It</h2>
          <ul className="space-y-2 text-gray-700 mb-8">
            <li>✓ 90+ templates</li>
            <li>✓ Social media focus</li>
            <li>✓ Free plan available</li>
            <li>✓ Fast generation</li>
          </ul>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="font-bold text-green-900 mb-3">Pros</h3>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Tons of templates</li>
                <li>• Good free plan</li>
                <li>• Easy to use</li>
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="font-bold text-red-900 mb-3">Cons</h3>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Generic output</li>
                <li>• Not great for long-form</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6">
            <p className="font-semibold mb-2">⭐ 4.5/5</p>
            <p className="text-gray-700">Perfect for social media managers. Start with free plan.</p>
          </div>
        </article>
      </div>
    </main>
  )
}
