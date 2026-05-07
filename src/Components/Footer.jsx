import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300 mt-10">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* About Section */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">
            About QurbaniHat
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            QurbaniHat is a livestock booking platform where users can easily
            buy and sell healthy Qurbani animals in a trusted way.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">
            Contact Info
          </h2>
          <ul className="text-sm text-gray-400 space-y-2">
            <li>Email: support@qurbanihat.com</li>
            <li>Phone: +880 1234 567 890</li>
            <li>Location: Dhaka, Bangladesh</li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">
            Social Links
          </h2>
          <div className="flex flex-col space-y-2 text-sm">
            <Link href="#" className="hover:text-white transition">
              Facebook
            </Link>
            <Link href="#" className="hover:text-white transition">
              Instagram
            </Link>
            <Link href="#" className="hover:text-white transition">
              GitHub
            </Link>
            <Link href="#" className="hover:text-white transition">
              LinkedIn
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700 text-center py-4 text-xs text-gray-500">
        © {new Date().getFullYear()} QurbaniHat. All rights reserved.
      </div>
    </footer>
  );
}
