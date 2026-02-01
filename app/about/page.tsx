export const metadata = {
  title: 'About FreelanceAI Hub - Our Mission',
  description: 'Learn about FreelanceAI Hub and why we help freelancers discover the best AI tools.',
}

export default function About() {
  return (
    <main className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          About FreelanceAI Hub
        </h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            We're freelancers who got tired of wasting time and money on AI tools that didn't deliver.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            The AI tool landscape is overwhelming. Every day there's a new "game-changing" tool that promises 
            to 10x your productivity. Most are garbage. Some are gold.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We test them so you don't have to. Real reviews from real freelancers who actually use these tools 
            in their daily work.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">What Makes Us Different</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span><strong>We're freelancers.</strong> We use these tools ourselves, every single day.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span><strong>No BS reviews.</strong> If a tool sucks, we'll tell you. If it's amazing, we'll tell you why.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span><strong>Real use cases.</strong> Not just features lists. How do you actually use it to make money?</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span><strong>Always updated.</strong> AI tools change fast. We keep reviews current.</span>
            </li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Transparency</h2>
          <p className="text-gray-700 leading-relaxed">
            Yes, we use affiliate links. When you buy through our links, we may earn a commission at no extra 
            cost to you. This helps keep the site running and lets us test more tools.
          </p>
          <p className="text-gray-700 leading-relaxed">
            <strong>But here's the deal:</strong> We only recommend tools we actually use and believe in. 
            We turn down affiliate partnerships if we don't think the tool is worth your money.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Read our full <a href="/disclosure" className="text-blue-600 hover:underline">affiliate disclosure here</a>.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Contact Us</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Got questions? Want us to review a specific tool? Have feedback?
          </p>
          <p className="text-gray-700 leading-relaxed">
            <strong>Email:</strong> <a href="mailto:hello@freelanceaihub.com" className="text-blue-600 hover:underline">hello@freelanceaihub.com</a>
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mt-12">
            <p className="text-lg text-gray-900 font-semibold mb-2">
              Our Promise
            </p>
            <p className="text-gray-700 leading-relaxed">
              We'll never recommend a tool just because it has a good affiliate program. We review tools we'd 
              recommend to our friends. Your trust matters more than any commission.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
