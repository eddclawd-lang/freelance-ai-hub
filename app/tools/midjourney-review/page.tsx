import Link from 'next/link'

export const metadata = {
  title: 'Midjourney Review - AI Image Generation for Designers',
  description: 'Midjourney review for freelance designers. Create stunning AI-generated images for clients.',
}

export default function MidjourneyReview() {
  return (
    <main className="bg-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Midjourney Review</h1>
        <div className="flex items-center gap-4 text-gray-600 mb-8">
          <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full font-semibold">⭐ 4.8/5</span>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <p className="text-sm text-gray-600">Price</p>
              <p className="text-xl font-bold text-gray-900">$10-60/mo</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Free Trial</p>
              <p className="text-xl font-bold text-gray-900">Limited</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Best For</p>
              <p className="text-xl font-bold text-gray-900">Designers</p>
            </div>
          </div>
          <a 
            href="https://midjourney.com" 
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="block mt-6 bg-blue-600 text-white text-center py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Try Midjourney →
          </a>
        </div>

        <article className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 mb-6">
            The king of AI image generation. Create stunning visuals from text prompts.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why Designers Love It</h2>
          <ul className="space-y-2 text-gray-700 mb-8">
            <li>✓ Best image quality</li>
            <li>✓ Concept art & mood boards</li>
            <li>✓ Client presentations</li>
            <li>✓ Stock image replacement</li>
          </ul>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="font-bold text-green-900 mb-3">Pros</h3>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Stunning results</li>
                <li>• Artistic styles</li>
                <li>• Fast generation</li>
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="font-bold text-red-900 mb-3">Cons</h3>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Requires Discord</li>
                <li>• Learning curve</li>
                <li>• Can be expensive</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6">
            <p className="font-semibold mb-2">⭐ 4.8/5</p>
            <p className="text-gray-700">Essential for visual freelancers. Worth every penny.</p>
          </div>
        </article>
      </div>
    </main>
  )
}
