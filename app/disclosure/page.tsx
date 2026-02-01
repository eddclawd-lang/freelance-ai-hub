export const metadata = {
  title: 'Affiliate Disclosure - FreelanceAI Hub',
  description: 'Our affiliate disclosure and editorial policy.',
}

export default function Disclosure() {
  return (
    <main className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Affiliate Disclosure
        </h1>
        
        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="text-lg leading-relaxed mb-6">
            <strong>Last updated: February 2026</strong>
          </p>

          <p className="leading-relaxed mb-6">
            FreelanceAI Hub participates in various affiliate marketing programs, which means we may earn 
            commissions on purchases made through our links to retailer and service provider sites.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What This Means</h2>
          <p className="leading-relaxed mb-6">
            When you click on certain links on our website and make a purchase, we may receive a commission. 
            This commission comes at <strong>no extra cost to you</strong> - you pay the same price whether 
            you use our link or go directly to the vendor's site.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Editorial Policy</h2>
          <p className="leading-relaxed mb-6">
            Our reviews and recommendations are based on:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Real hands-on experience with the tools</li>
            <li>Thorough testing and evaluation</li>
            <li>Consideration of freelancer-specific use cases</li>
            <li>Honest assessment of pros and cons</li>
          </ul>
          <p className="leading-relaxed mb-6">
            <strong>We do not:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Give positive reviews just because a tool has an affiliate program</li>
            <li>Hide negative aspects of tools we promote</li>
            <li>Recommend tools we wouldn't use ourselves</li>
            <li>Accept payment for reviews (all reviews are independent)</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Affiliate Partners</h2>
          <p className="leading-relaxed mb-6">
            We may have affiliate relationships with companies including (but not limited to):
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>OpenAI (ChatGPT)</li>
            <li>Anthropic (Claude)</li>
            <li>Jasper AI</li>
            <li>Copy.ai</li>
            <li>Notion</li>
            <li>Grammarly</li>
            <li>And other AI tool providers</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Your Trust Matters</h2>
          <p className="leading-relaxed mb-6">
            We built this site to help fellow freelancers navigate the AI tool landscape. Affiliate commissions 
            help us keep the site running and let us test more tools, but they never influence our honest opinions.
          </p>
          <p className="leading-relaxed mb-6">
            If you don't want to use our affiliate links, you can always go directly to the vendor's website. 
            We appreciate your support either way!
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Questions?</h2>
          <p className="leading-relaxed">
            If you have questions about our affiliate relationships or editorial policy, please contact us 
            at <a href="mailto:hello@freelanceaihub.com" className="text-blue-600 hover:underline">hello@freelanceaihub.com</a>.
          </p>
        </div>
      </div>
    </main>
  )
}
