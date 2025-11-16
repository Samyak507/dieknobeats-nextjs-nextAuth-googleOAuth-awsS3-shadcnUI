import React, { useState } from 'react';
import { Music, Facebook, Instagram, Youtube, Twitter, ArrowRight } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <footer className="bg-black border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Music className="w-8 h-8 text-cyan-400" />
              <h3 className="text-2xl font-bold">
                <span className="text-white">Diekno</span>
                <span className="text-cyan-400">Beats</span>
              </h3>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Empowering musicians worldwide with world-class online music education.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-gray-300" />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-gray-300" />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5 text-gray-300" />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-gray-300" />
              </a>
            </div>
          </div>

          {/* Courses Section */}
          <div>
            <h4 className="text-white text-lg font-bold mb-4">Courses</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Guitar
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Piano
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Vocals
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Production
                </a>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h4 className="text-white text-lg font-bold mb-4">Support</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h4 className="text-white text-lg font-bold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Get the latest updates and music tips
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
              />
              <button
                onClick={handleSubmit}
                className="px-4 py-3 bg-cyan-400 hover:bg-cyan-500 text-black rounded-lg transition-colors flex items-center justify-center"
                aria-label="Subscribe"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-900">
          <p className="text-center text-gray-500 text-sm">
            © 2024 DieknoBeats. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}