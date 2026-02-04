import Link from 'next/link';

export const metadata = {
  title: 'Descript for Freelancers - Complete Review 2026 | FreelanceAI Hub',
  description: 'How freelancers use Descript AI video and podcast editing to save hours. Edit video like a document, remove filler words, and create content faster.',
};

export default function DescriptReview() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link href="/" className="text-2xl font-bold text-indigo-600">
              FreelanceAI Hub
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/tools" className="text-gray-700 hover:text-indigo-600">Tools</Link>
              <Link href="/categories" className="text-gray-700 hover:text-indigo-600">Categories</Link>
              <Link href="/comparisons" className="text-gray-700 hover:text-indigo-600">Comparisons</Link>
              <Link href="/guides" className="text-gray-700 hover:text-indigo-600">Guides</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-r from-green-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/tools" className="text-green-200 hover:text-white mb-4 inline-block">
            ← Back to Tools
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Descript for Freelancers
          </h1>
          <p className="text-xl text-green-100 mb-6">
            Edit video and podcasts like a Word document. Save hours, charge more.
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Video Editing</span>
            <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Podcast Editing</span>
            <span className="px-3 py-1 bg-white/20 rounded-full text-sm">AI Tools</span>
            <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Transcription</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Quick Stats */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Overview</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <span className="font-semibold">Best For:</span> Video editors, podcasters, content creators
            </div>
            <div>
              <span className="font-semibold">Pricing:</span> Free - $24/month
            </div>
            <div>
              <span className="font-semibold">Learning Curve:</span> Easy (if you can use Google Docs, you can use this)
            </div>
            <div>
              <span className="font-semibold">Key Feature:</span> Edit video by editing text transcript
            </div>
          </div>
          <div className="mt-6">
            <a 
              href="https://www.descript.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
            >
              Try Descript Free →
            </a>
          </div>
        </div>

        {/* Introduction */}
        <section className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-gray-700 leading-relaxed">
            Descript is not just another video editor. It's a completely different way of editing—one that saves freelancers hours of tedious timeline work.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Instead of scrubbing through timelines, you edit video by editing the transcript. Delete a word? The video cuts that word out. It sounds like magic, but it's real—and it's a game-changer for freelance video editors, podcasters, and content creators.
          </p>
        </section>

        {/* Core Feature: Text-Based Editing */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Game-Changer: Edit Video Like a Document</h2>
          
          <div className="bg-gradient-to-r from-green-50 to-teal-50 border-2 border-green-200 rounded-lg p-8 mb-6">
            <h3 className="text-2xl font-bold text-green-900 mb-4">How It Works:</h3>
            <ol className="space-y-4 text-gray-700">
              <li className="flex gap-3">
                <span className="font-bold text-green-600 text-xl">1.</span>
                <div>
                  <strong>Upload your video or audio</strong>
                  <p className="text-sm mt-1">Descript transcribes it automatically (takes ~5 minutes for a 1-hour video)</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-green-600 text-xl">2.</span>
                <div>
                  <strong>Edit the transcript like a Google Doc</strong>
                  <p className="text-sm mt-1">Delete words, rearrange sentences, cut entire paragraphs—the video follows automatically</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-green-600 text-xl">3.</span>
                <div>
                  <strong>Export finished video</strong>
                  <p className="text-sm mt-1">Done. What used to take 4 hours now takes 45 minutes.</p>
                </div>
              </li>
            </ol>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">🎯 Why This Matters for Freelancers</h3>
            <p className="text-gray-700 mb-4">
              <strong>Traditional editing:</strong> Scrub timeline, find word, cut, repeat 100 times. Takes hours.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Descript:</strong> Read transcript, delete bad takes/filler words, done in minutes.
            </p>
            <p className="text-gray-700">
              <strong>Time savings:</strong> 50-70% faster editing. That's more clients or higher rates.
            </p>
          </div>
        </section>

        {/* AI Features */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">AI Features That Save Hours</h2>
          
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🗑️ Remove Filler Words (One Click)</h3>
              <p className="text-gray-700 mb-4">
                AI finds and removes "um," "uh," "like," "you know," etc. Works on hours of footage in seconds.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Freelancer Impact:</strong> Client interview full of "ums"? Clean it up instantly instead of manually cutting each one.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🔇 Remove Silence</h3>
              <p className="text-gray-700 mb-4">
                Automatically detects and removes dead air/long pauses. Keeps your content tight and engaging.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Freelancer Impact:</strong> Turn a slow 20-minute interview into a tight 12-minute video without manual timeline work.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🎙️ Overdub (AI Voice Cloning)</h3>
              <p className="text-gray-700 mb-4">
                Record your voice, and Descript creates an AI version. Type text, and it generates speech in your voice. Fix mistakes without re-recording.
              </p>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Use Case:</strong> Client mispronounced a word? Type the correction, Overdub speaks it in their voice. No reshoots needed.
              </p>
              <p className="text-sm text-red-600">
                ⚠️ <strong>Ethics note:</strong> Only use with consent. Great for fixing your own errors or with client permission.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">👁️ Eye Contact (AI)</h3>
              <p className="text-gray-700 mb-4">
                Makes it look like you're looking at the camera even when you were reading from notes. Subtle but makes videos feel more professional.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Freelancer Impact:</strong> Save clients from awkward "reading off script" moments without reshoots.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">📝 Studio Sound</h3>
              <p className="text-gray-700 mb-4">
                AI audio enhancement that removes background noise and makes cheap mics sound professional.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Freelancer Impact:</strong> Client recorded on laptop mic in noisy room? Studio Sound fixes it. No expensive audio cleanup tools needed.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">📹 Screen Recording</h3>
              <p className="text-gray-700 mb-4">
                Built-in screen recorder with transcription. Perfect for tutorials, demos, or client walkthroughs.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Freelancer Impact:</strong> Record + edit screen demos for clients without needing separate tools.
              </p>
            </div>
          </div>
        </section>

        {/* Real Freelancer Use Cases */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Real Freelancer Workflows</h2>
          
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">🎬 Video Editor for YouTube Creators</h3>
              <p className="text-gray-700 mb-3">
                <strong>Client:</strong> YouTuber needs 4 videos edited per month (15-20 min each)
              </p>
              <p className="text-gray-700 mb-3">
                <strong>Old workflow (Premiere Pro):</strong> 6-8 hours per video = 24-32 hours/month
              </p>
              <p className="text-gray-700 mb-3">
                <strong>Descript workflow:</strong> 2-3 hours per video = 8-12 hours/month
              </p>
              <p className="text-gray-700 font-bold">
                <strong>Time saved:</strong> 16-20 hours per month. Either take on 2x clients or charge premium rates for fast turnaround.
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-teal-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">🎙️ Podcast Editor</h3>
              <p className="text-gray-700 mb-3">
                <strong>Client:</strong> Weekly podcast (1-hour episodes)
              </p>
              <p className="text-gray-700 mb-3">
                <strong>Tasks:</strong> Remove filler words, cut bad takes, tighten pacing, clean audio
              </p>
              <p className="text-gray-700 mb-3">
                <strong>Descript advantages:</strong>
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-3 space-y-1">
                <li>One-click filler word removal</li>
                <li>Studio Sound cleans audio instantly</li>
                <li>Text-based editing for fast cuts</li>
                <li>Export audio OR video (if recording video too)</li>
              </ul>
              <p className="text-gray-700 font-bold">
                <strong>Charge:</strong> $200-400 per episode. Edit in 2 hours instead of 5.
              </p>
            </div>

            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">📚 Online Course Creator</h3>
              <p className="text-gray-700 mb-3">
                <strong>Client:</strong> Business coach creating online course (30+ lessons)
              </p>
              <p className="text-gray-700 mb-3">
                <strong>Descript workflow:</strong>
              </p>
              <ol className="list-decimal list-inside text-gray-700 mb-3 space-y-1">
                <li>Screen record client teaching (Descript built-in recorder)</li>
                <li>Auto-transcribe and remove filler words</li>
                <li>Use Overdub to fix any mistakes (no reshoots)</li>
                <li>Add captions automatically</li>
                <li>Export finished lessons</li>
              </ol>
              <p className="text-gray-700 font-bold">
                <strong>Value:</strong> Deliver 30 polished lessons in 2 weeks instead of 2 months. Client can launch faster.
              </p>
            </div>

            <div className="bg-gradient-to-r from-pink-50 to-red-50 border border-pink-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">💼 Corporate Video Editor</h3>
              <p className="text-gray-700 mb-3">
                <strong>Client:</strong> Company needs internal training videos, quarterly updates, CEO messages
              </p>
              <p className="text-gray-700 mb-3">
                <strong>Descript benefits:</strong>
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-3 space-y-1">
                <li>Quick turnaround (edit same day as recording)</li>
                <li>Fix mistakes without reshoots (Overdub)</li>
                <li>Eye Contact makes executives look camera-ready</li>
                <li>Studio Sound makes conference room audio sound pro</li>
              </ul>
              <p className="text-gray-700 font-bold">
                <strong>Advantage:</strong> Charge premium for fast, professional results. Corporations pay well for quality + speed.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Pricing Breakdown</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Free</h3>
              <p className="text-3xl font-bold text-gray-900 mb-4">$0</p>
              <ul className="space-y-2 text-gray-700 text-sm mb-6">
                <li>✅ 1 hour of transcription/month</li>
                <li>✅ Text-based editing</li>
                <li>✅ Screen recording</li>
                <li>✅ Basic AI features</li>
                <li>❌ No Overdub</li>
                <li>❌ Watermark on exports</li>
              </ul>
              <p className="text-sm text-gray-600">
                <strong>Best for:</strong> Testing Descript, personal projects
              </p>
            </div>

            <div className="bg-green-50 border-2 border-green-600 rounded-lg p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-gray-900">Creator</h3>
                <span className="text-xs bg-green-600 text-white px-2 py-1 rounded">RECOMMENDED</span>
              </div>
              <p className="text-3xl font-bold text-gray-900 mb-4">$24<span className="text-lg text-gray-600">/month</span></p>
              <ul className="space-y-2 text-gray-700 text-sm mb-6">
                <li>✅ 10 hours transcription/month</li>
                <li>✅ All AI features (Overdub, Studio Sound, Eye Contact)</li>
                <li>✅ Remove filler words</li>
                <li>✅ No watermark</li>
                <li>✅ 720p export</li>
                <li>✅ Collaboration</li>
              </ul>
              <p className="text-sm text-gray-600 mb-4">
                <strong>Best for:</strong> Freelancers editing 2-4 projects/month
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Pro</h3>
              <p className="text-3xl font-bold text-gray-900 mb-4">$40<span className="text-lg text-gray-600">/month</span></p>
              <ul className="space-y-2 text-gray-700 text-sm mb-6">
                <li>✅ 30 hours transcription/month</li>
                <li>✅ All Creator features</li>
                <li>✅ 4K export</li>
                <li>✅ Priority support</li>
                <li>✅ API access</li>
              </ul>
              <p className="text-sm text-gray-600">
                <strong>Best for:</strong> Full-time video editors, agencies
              </p>
            </div>
          </div>

          <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-sm text-gray-700">
              <strong>💡 ROI Calculator:</strong> If you bill $75/hour and Descript saves you 4 hours per project, that's $300 saved per project. The Creator plan costs $24/month. Edit just 1 project and you've 10x'd your money.
            </p>
          </div>
        </section>

        {/* Pros & Cons */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Pros & Cons</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold text-green-600 mb-4">✅ Pros</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Text-based editing is revolutionary</li>
                <li>• 50-70% faster than timeline editing</li>
                <li>• AI features actually save time</li>
                <li>• Overdub is magic for fixing mistakes</li>
                <li>• Studio Sound makes bad audio good</li>
                <li>• Perfect for podcasts AND video</li>
                <li>• Beginner-friendly interface</li>
                <li>• Built-in screen recording</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-red-600 mb-4">❌ Cons</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Not a full replacement for Premiere/Final Cut (limited effects)</li>
                <li>• Transcription accuracy depends on audio quality</li>
                <li>• Export can be slow for long videos</li>
                <li>• Free plan is very limited (1 hour/month)</li>
                <li>• Overdub can sound robotic if overused</li>
                <li>• Learning curve if you're used to traditional NLEs</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Who Should Use It */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Who Should Use Descript?</h2>
          
          <div className="space-y-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">✅ Perfect For:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Podcast editors</strong> (it's literally built for this)</li>
                <li>• <strong>YouTube video editors</strong> handling interview/talking-head content</li>
                <li>• <strong>Course creators</strong> editing lessons and tutorials</li>
                <li>• <strong>Social media managers</strong> repurposing long content into clips</li>
                <li>• <strong>Corporate video freelancers</strong> doing training/internal comms</li>
                <li>• <strong>Anyone who edits lots of dialogue-heavy content</strong></li>
              </ul>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">❌ Not Ideal For:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Music video editors (needs traditional NLE)</li>
                <li>• Action/sports video editors (no slow-mo, limited effects)</li>
                <li>• Hollywood-style editors (use Premiere/Resolve)</li>
                <li>• Anyone needing advanced color grading</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Descript vs Alternatives */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Descript vs. Traditional Editors</h2>
          
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">vs. Adobe Premiere Pro</h3>
              <p className="text-gray-700 mb-2">
                <strong>Premiere Pro:</strong> More powerful, more effects, industry standard—but way slower for dialogue editing.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Choose Descript if:</strong> You edit interviews, podcasts, or talking-head content. <strong>Choose Premiere if:</strong> You need Hollywood-level control and effects.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">vs. Final Cut Pro</h3>
              <p className="text-gray-700 mb-2">
                <strong>Final Cut:</strong> Fast, magnetic timeline, great for quick cuts—but no AI features and still timeline-based.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Choose Descript if:</strong> You want AI help and text-based editing. <strong>Choose Final Cut if:</strong> You're on Mac and need traditional NLE power.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">vs. DaVinci Resolve</h3>
              <p className="text-gray-700 mb-2">
                <strong>Resolve:</strong> Free, professional color grading, full NLE—steep learning curve, slow for simple edits.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Choose Descript if:</strong> You want speed over power. <strong>Choose Resolve if:</strong> You need pro color grading and advanced VFX.
              </p>
            </div>
          </div>
        </section>

        {/* Final Verdict */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-4">Final Verdict</h2>
            <div className="text-xl mb-6">
              <strong>Rating: 9/10</strong> for dialogue-heavy content
            </div>
            <p className="text-lg mb-6 leading-relaxed">
              Descript is a paradigm shift for freelancers who edit interviews, podcasts, YouTube videos, or courses. If your content is primarily people talking, this tool will save you 50-70% of your editing time.
            </p>
            <p className="text-lg mb-6 leading-relaxed">
              The AI features aren't gimmicks—they genuinely work. Filler word removal, Overdub, and Studio Sound alone justify the $24/month. Text-based editing feels like the future.
            </p>
            <p className="text-lg font-semibold mb-6">
              <strong>For action videos, music videos, or heavy VFX work?</strong> Stick with Premiere or Resolve. But for 80% of freelance video work—interviews, tutorials, talking heads—Descript is unbeatable.
            </p>
            <p className="text-lg font-semibold">
              <strong>Bottom line:</strong> Try the free plan. Edit one project. You'll immediately see why this tool is worth paying for.
            </p>
            <div className="mt-8">
              <a 
                href="https://www.descript.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-green-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition"
              >
                Try Descript Free →
              </a>
            </div>
          </div>
        </section>

        {/* Related */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Tools & Guides</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/tools/canva-ai-for-freelancers" className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
              <h3 className="font-bold text-gray-900 mb-2">Canva AI</h3>
              <p className="text-sm text-gray-600">Design tool for video thumbnails</p>
            </Link>
            <Link href="/tools/chatgpt-for-freelancers" className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
              <h3 className="font-bold text-gray-900 mb-2">ChatGPT</h3>
              <p className="text-sm text-gray-600">AI writing for video scripts</p>
            </Link>
            <Link href="/categories/designers" className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
              <h3 className="font-bold text-gray-900 mb-2">Best AI Tools for Creators</h3>
              <p className="text-sm text-gray-600">Complete creator tool roundup</p>
            </Link>
          </div>
        </section>

      </article>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">FreelanceAI Hub</h3>
              <p className="text-gray-400">
                Helping freelancers master AI tools to boost productivity and income.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Tools</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/tools" className="hover:text-white">All Tools</Link></li>
                <li><Link href="/categories/writers" className="hover:text-white">For Writers</Link></li>
                <li><Link href="/categories/designers" className="hover:text-white">For Designers</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/comparisons" className="hover:text-white">Comparisons</Link></li>
                <li><Link href="/guides" className="hover:text-white">Guides</Link></li>
                <li><Link href="/about" className="hover:text-white">About</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/disclosure" className="hover:text-white">Affiliate Disclosure</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2026 FreelanceAI Hub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
