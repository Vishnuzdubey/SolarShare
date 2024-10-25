import React from 'react';
import { Link } from 'react-router-dom';
import { Sun, Menu } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Sun className="h-8 w-8 text-yellow-500" />
            <span className="font-bold text-xl text-gray-800">SolarShare</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/dashboard" className="text-gray-600 hover:text-yellow-500">Dashboard</Link>
            <Link to="/projects" className="text-gray-600 hover:text-yellow-500">Projects</Link>
            <Link to="/marketplace" className="text-gray-600 hover:text-yellow-500">Marketplace</Link>
            <Link to="/profile" className="text-gray-600 hover:text-yellow-500">Profile</Link>
            <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition-colors">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-gray-600"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <Link to="/dashboard" className="block py-2 text-gray-600">Dashboard</Link>
            <Link to="/projects" className="block py-2 text-gray-600">Projects</Link>
            <Link to="/marketplace" className="block py-2 text-gray-600">Marketplace</Link>
            <Link to="/profile" className="block py-2 text-gray-600">Profile</Link>
            <button className="w-full bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition-colors mt-2">
              Get Started
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;