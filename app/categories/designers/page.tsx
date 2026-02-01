import Link from 'next/link'

export const metadata = {
  title: 'Best AI Tools for Freelance Designers - 2026',
  description: 'Top AI tools for graphic designers, UI/UX designers, and creative freelancers.',
}

export default function DesignersTools() {
  return (
    <main className="bg-white min-h-screen">
      <div className="bg-gradient-to-br from-pink-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="text-6xl mb-4">🎨</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">AI Tools for Designers</h1>
          <p className="text-xl">Design faster, iterate more, and wow clients with AI assistance</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Best AI Design Tools</h2>
        
        <div className="space-y-6 mb-16">
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Midjourney</h3>
            <p className="text-blue-600 font-semibold mb-3">AI Image Generation</p>
            <p className="text-gray-700 mb-4">Create stunning visuals from text prompts. Perfect for concept art, mood boards, and inspiration.</p>
            <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">⭐ 4.8/5</span>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Canva AI</h3>
            <p className="text-blue-600 font-semibold mb-3">Design Platform</p>
            <p className="text-gray-700 mb-4">AI-powered design templates, image generation, and brand kit. Great for social media and marketing materials.</p>
            <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">⭐ 4.6/5</span>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Adobe Firefly</h3>
            <p className="text-blue-600 font-semibold mb-3">Creative AI Suite</p>
            <p className="text-gray-700 mb-4">Integrated AI in Photoshop, Illustrator. Generative fill, text-to-image, and more.</p>
            <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">⭐ 4.7/5</span>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How Designers Use AI</h2>
          <div className="space-y-4 text-gray-700">
            <p><strong>✓ Ideation:</strong> Generate concepts and variations quickly</p>
            <p><strong>✓ Asset creation:</strong> Backgrounds, textures, stock images</p>
            <p><strong>✓ Iteration:</strong> Try different styles in seconds</p>
            <p><strong>✓ Client presentations:</strong> Show multiple options fast</p>
          </div>
        </div>
      </div>
    </main>
  )
}
