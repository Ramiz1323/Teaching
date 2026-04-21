import React from "react";

const Footer = () => {
  return (
    <footer className="mt-20 backdrop-blur-md bg-white/10 border-t border-white/20 text-white">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        
        {/* Logo + About */}
        <div>
          <h2 className="text-xl font-bold mb-3">⚡ ChatpataUI</h2>
          <p className="text-sm text-gray-300">
            Build modern UI components with clean design and smooth user experience.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="hover:text-white cursor-pointer transition">Home</li>
            <li className="hover:text-white cursor-pointer transition">About</li>
            <li className="hover:text-white cursor-pointer transition">Courses</li>
            <li className="hover:text-white cursor-pointer transition">Contact</li>
          </ul>
        </div>

        {/* Social / Contact */}
        <div>
          <h3 className="font-semibold mb-3">Connect</h3>
          <div className="flex gap-4">
            <div className="px-3 py-2 rounded-lg bg-white/20 border border-white/30 hover:bg-white/30 transition cursor-pointer">
              🌐
            </div>
            <div className="px-3 py-2 rounded-lg bg-white/20 border border-white/30 hover:bg-white/30 transition cursor-pointer">
              🐦
            </div>
            <div className="px-3 py-2 rounded-lg bg-white/20 border border-white/30 hover:bg-white/30 transition cursor-pointer">
              💼
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-sm text-gray-400 border-t border-white/20 py-4">
        © {new Date().getFullYear()} ChatpataUI. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;