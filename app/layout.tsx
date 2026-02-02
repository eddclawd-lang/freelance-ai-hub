import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FreelanceAI Hub - Best AI Tools for Freelancers in 2026",
  description: "Discover AI-powered tools that save you time and make you money. Tested by freelancers, for freelancers.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <a href="/" className="text-xl md:text-2xl font-bold text-blue-600">
                FreelanceAI Hub
              </a>
              <div className="flex gap-3 md:gap-6 text-sm md:text-base">
                <a href="/tools" className="text-gray-700 hover:text-blue-600 font-medium">
                  Tools
                </a>
                <a href="/categories/writers" className="text-gray-700 hover:text-blue-600 font-medium hidden md:block">
                  Categories
                </a>
                <a href="/comparisons/chatgpt-vs-claude" className="text-gray-700 hover:text-blue-600 font-medium hidden sm:block">
                  Compare
                </a>
                <a href="/about" className="text-gray-700 hover:text-blue-600 font-medium">
                  About
                </a>
              </div>
            </div>
          </div>
        </nav>
        {children}
        <footer className="bg-gray-900 text-white py-12 mt-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">FreelanceAI Hub</h3>
                <p className="text-gray-400">
                  Your trusted guide to AI tools for freelancers.
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-4">Tools</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="/categories/writers">For Writers</a></li>
                  <li><a href="/categories/designers">For Designers</a></li>
                  <li><a href="/categories/developers">For Developers</a></li>
                  <li><a href="/categories/marketers">For Marketers</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4">Resources</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="/guides">Guides</a></li>
                  <li><a href="/comparisons">Comparisons</a></li>
                  <li><a href="/about">About</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4">Legal</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="/disclosure">Affiliate Disclosure</a></li>
                  <li><a href="/privacy">Privacy Policy</a></li>
                  <li><a href="/contact">Contact</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2026 FreelanceAI Hub. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
