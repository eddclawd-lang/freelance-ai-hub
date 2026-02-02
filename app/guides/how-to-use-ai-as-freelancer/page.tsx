import Link from 'next/link'

export const metadata = {
  title: 'How to Use AI as a Freelancer Without Losing Your Soul',
  description: 'Complete guide to using AI tools as a freelancer. Ethics, best practices, and real workflows.',
}

export default function HowToUseAI() {
  return (
    <main className="bg-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">How to Use AI as a Freelancer</h1>
        
        <p className="text-xl text-gray-700 mb-8">AI won't replace you. But freelancers who use AI will replace freelancers who don't.</p>

        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">The Right Way to Use AI</h2>
        
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
          <h3 className="font-bold text-lg mb-3">✓ DO use AI for:</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Brainstorming and ideation</li>
            <li>• First drafts and outlines</li>
            <li>• Research and summarization</li>
            <li>• Editing and improving</li>
            <li>• Repetitive tasks</li>
          </ul>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
          <h3 className="font-bold text-lg mb-3">✗ DON'T use AI for:</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Publishing raw AI output</li>
            <li>• Replacing your expertise</li>
            <li>• Fact-checking (always verify)</li>
            <li>• Pretending you wrote everything</li>
          </ul>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Real Workflow Example</h2>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
          <h4 className="font-bold mb-2">Writing a Blog Post:</h4>
          <ol className="space-y-2 text-gray-700 list-decimal list-inside">
            <li>AI generates 5 title ideas → You pick best</li>
            <li>AI creates outline → You refine</li>
            <li>AI writes first draft → You heavily edit</li>
            <li>Add your experience & examples</li>
            <li>AI helps polish final version</li>
          </ol>
        </div>

        <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">The Golden Rule</h3>
          <p className="text-lg">AI is your assistant, not your replacement. Use it to amplify your skills, not replace them.</p>
        </div>
      </div>
    </main>
  )
}
