import React from 'react';
import { Link } from 'react-router-dom';
import { Video, Twitter, Instagram, Linkedin, Facebook, Github } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <img src="/logos/logo.svg" alt="SOPCRAFTER Logo" className="h-8 w-auto" />
            </div>
            <p className="text-slate-600 mb-4">
              Transform your business processes into clear, engaging SOPs in minutes. Powered by AI, built for modern teams.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-600 hover:text-red-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-600 hover:text-red-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-600 hover:text-red-600 transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900 mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/features" className="text-slate-600 hover:text-red-600 transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-slate-600 hover:text-red-600 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-600 hover:text-red-600 transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900 mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/blog" className="text-slate-600 hover:text-red-600 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/docs" className="text-slate-600 hover:text-red-600 transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-slate-600 hover:text-red-600 transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-200 pt-8 pb-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-600 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} SOPCRAFTER. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-slate-600 hover:text-red-600 transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-slate-600 hover:text-red-600 transition-colors text-sm">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-slate-600 hover:text-red-600 transition-colors text-sm">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;