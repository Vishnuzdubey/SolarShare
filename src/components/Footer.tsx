import React from 'react';
import { Sun, Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white shadow-lg mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Sun className="h-8 w-8 text-yellow-500" />
              <span className="font-bold text-xl text-gray-800">SolarShare</span>
            </div>
            <p className="text-gray-600">
              Empowering communities through sustainable solar investments.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Platform</h3>
            <ul className="space-y-2">
              <li><a href="/projects" className="text-gray-600 hover:text-yellow-500">Projects</a></li>
              <li><a href="/marketplace" className="text-gray-600 hover:text-yellow-500">Marketplace</a></li>
              <li><a href="/dashboard" className="text-gray-600 hover:text-yellow-500">Dashboard</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-600 hover:text-yellow-500">About Us</a></li>
              <li><a href="/contact" className="text-gray-600 hover:text-yellow-500">Contact</a></li>
              <li><a href="/careers" className="text-gray-600 hover:text-yellow-500">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-yellow-500">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-yellow-500">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-yellow-500">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} SolarShare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;