import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin, FaDiscord, FaCode, FaLaptopCode, FaBrain, FaRocket } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 relative overflow-hidden">
      {/* Background Icons */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <FaCode className="absolute top-10 left-10 text-7xl md:text-8xl lg:text-9xl" />
        <FaLaptopCode className="absolute bottom-10 right-10 text-7xl md:text-8xl lg:text-9xl" />
        <FaBrain className="absolute top-1/2 left-1/4 text-6xl md:text-7xl lg:text-8xl" />
        <FaRocket className="absolute bottom-1/3 right-1/4 text-6xl md:text-7xl lg:text-8xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 max-xl:p-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold mb-4">CodeBase</h2>
            <p className="text-white/70">
              Join our 30-day coding challenge and become a better developer.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
            <div className="flex justify-center md:justify-end space-x-4">
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <FaGithub size={24} />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <FaLinkedin size={24} />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <FaDiscord size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/70">
          <p>© {new Date().getFullYear()} CodeBase. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;