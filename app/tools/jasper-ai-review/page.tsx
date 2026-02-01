import Link from 'next/link'

export const metadata = {
  title: 'Jasper AI Review - Marketing Copy AI Tool for Freelancers',
  description: 'Jasper AI review for freelance marketers and copywriters. Templates, brand voice, and AI content generation.',
}

export default function JasperReview() {
  return (
    <main className="bg-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-blue-600">Home</Link> / <Link href="/tools" className="hover:text-blue-600">Tools</Link> / Jasper AI
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">Jasper AI Review</h1>
        <div className="flex items-center gap-4 text-gray-600 mb-8">
          <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full font-semibold">⭐ 4.6/5</span>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <p className="text-sm text-gray-600">Price</p>
              <p className="text-xl font-bold text-gray-900">$39/month</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Free Trial</p>
              <p className="text-xl font-bold text-gray-900">7 days</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Best For</p>
              <p className="text-xl font-bold text-gray-900">Marketing</p>
            </div>
          </div>
          <a 
            href="https://jasper.ai" 
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="block mt-6 bg-blue-600 text-white text-center py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Try Jasper Free →
          </a>
        </div>

        <article className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 mb-6">
            Jasper is built for marketers. Templates, brand voice, and workflows designed for content marketing.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Key Features</h2>
          <ul className="space-y-2 text-gray-700 mb-8">
            <li>✓ 50+ marketing templates</li>
            <li>✓ Brand voice training</li>
            <li>✓ SEO mode</li>
            <li>✓ Team collaboration</li>
          </ul>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="font-bold text-green-900 mb-3">Pros</h3>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Great templates</li>
                <li>• Brand voice consistency</li>
                <li>• SEO optimization</li>
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="font-bold text-red-900 mb-3">Cons</h3>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Expensive</li>
                <li>• Still needs editing</li>
                <li>• Learning curve</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6">
            <p className="font-semibold mb-2">⭐ 4.6/5</p>
            <p className="text-gray-700">Great for marketing teams. Pricey for solo freelancers.</p>
          </div>
        </article>
      </div>
    </main>
  )
}
