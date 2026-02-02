export const metadata = {
  title: 'About FreelanceAI Hub',
  description: 'About FreelanceAI Hub and our mission.',
}

export default function About() {
  return (
    <main className="bg-black min-h-screen text-white">
      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          About FreelanceAI Hub
        </h1>
        
        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            We're freelancers who got tired of wasting time and money on AI tools that didn't deliver.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-4">Our Mission</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            The AI tool landscape is overwhelming. Every day there's a new "game-changing" tool. Most are garbage. Some are gold.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            We test them so you don't have to. Real reviews from real freelancers who actually use these tools daily.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-4">What Makes Us Different</h2>
          <ul className="space-y-3 text-gray-300">
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">✓</span>
              <span><strong className="text-white">We're freelancers.</strong> We use these tools ourselves, every single day.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">✓</span>
              <span><strong className="text-white">No BS reviews.</strong> If a tool sucks, we'll tell you. If it's amazing, we'll tell you why.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">✓</span>
              <span><strong className="text-white">Real use cases.</strong> Not just features lists. How do you actually use it to make money?</span>
            </li>
          </ul>

          <h2 className="text-3xl font-bold text-white mt-12 mb-4">Transparency</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Yes, we use affiliate links. When you buy through our links, we may earn a commission at no extra cost to you.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            <strong className="text-white">But here's the deal:</strong> We only recommend tools we actually use and believe in.
          </p>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mt-12">
            <p className="text-lg text-white font-semibold mb-2">
              Our Promise
            </p>
            <p className="text-gray-300 leading-relaxed">
              We'll never recommend a tool just because it has a good affiliate program. We review tools we'd recommend to our friends.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
