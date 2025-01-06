import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white border-t border-blue-500/20">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Links */}
        <div className="flex justify-center space-x-8 mb-4">
          <Link
            href="#"
            className="hover:text-blue-400 transition-colors"
          >
            Discord
          </Link>
          <Link
            href="#"
            className="hover:text-blue-400 transition-colors"
          >
            Telegram
          </Link>
          <Link
            href="#"
            className="hover:text-blue-400 transition-colors"
          >
            Twitter
          </Link>
          <Link
            href="#"
            className="hover:text-blue-400 transition-colors"
          >
            GitHub
          </Link>
          <Link
            href="#"
            className="hover:text-blue-400 transition-colors"
          >
            Explorer
          </Link>
        </div>
        {/* Footer Text */}
        <div className="text-center text-sm text-gray-500">
          © 2025 ChillCoin. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

