import Link from 'next/link'

export const metadata = {
  title: 'Jasper vs Copy.ai: Which AI Copywriting Tool is Better?',
  description: 'Compare Jasper AI and Copy.ai for freelance copywriters. Pricing, features, and which one to choose.',
}

export default function JasperVsCopyAI() {
  return (
    <main className="bg-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Jasper vs Copy.ai</h1>
        
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <p className="text-lg"><strong>TL;DR:</strong> Jasper for serious marketers. Copy.ai for budget-conscious freelancers.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-bold mb-3">Jasper AI</h3>
            <p className="text-gray-600 mb-4">$39-99/mo | Marketing focus</p>
            <ul className="text-sm space-y-2">
              <li>✓ Brand voice training</li>
              <li>✓ SEO mode</li>
              <li>✓ Team features</li>
              <li>✗ Expensive</li>
            </ul>
          </div>
          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-bold mb-3">Copy.ai</h3>
            <p className="text-gray-600 mb-4">Free-$49/mo | Templates</p>
            <ul className="text-sm space-y-2">
              <li>✓ Free plan</li>
              <li>✓ 90+ templates</li>
              <li>✓ Easy to use</li>
              <li>✗ Generic output</li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-600 p-6">
          <p className="font-semibold">Verdict: Start with Copy.ai free. Upgrade to Jasper when budget allows.</p>
        </div>
      </div>
    </main>
  )
}
