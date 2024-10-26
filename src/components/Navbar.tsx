

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Sun, Menu, Wallet } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isWalletOpen, setIsWalletOpen] = useState(false);
  const [walletBalance, setWalletBalance] = useState(100); // Example initial balance
  const [amountToAdd, setAmountToAdd] = useState('');
  const isLoggedIn = !!localStorage.getItem('userId');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('userId');
    navigate('/');
  };

  const toggleWallet = () => {
    setIsWalletOpen(!isWalletOpen);
  };

  const handleAddAmount = () => {
    const newBalance = walletBalance + parseFloat(amountToAdd || 0);
    setWalletBalance(newBalance);
    setAmountToAdd('');
  };

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
            {isLoggedIn ? (
              <>
                <Link to="/dashboard" className="text-gray-600 hover:text-yellow-500">Dashboard</Link>
                <Link to="/projects" className="text-gray-600 hover:text-yellow-500">Projects</Link>
                <Link to="/marketplace" className="text-gray-600 hover:text-yellow-500">Marketplace</Link>
                <Link to="/profile" className="text-gray-600 hover:text-yellow-500">Profile</Link>
                <Link to="/community" className="text-gray-600 hover:text-yellow-500">Community</Link>
                {/* Wallet Button */}
                <button
                  onClick={toggleWallet}
                  className="flex items-center text-gray-600 hover:text-yellow-500"
                >
                  <Wallet className="h-5 w-5 mr-1" /> Wallet
                </button>

                <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
                  Logout
                </button>
              </>
            ) : (
              <Link to="/signup" className="text-gray-600 hover:text-yellow-500">Sign Up/Login</Link>
            )}
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
            {isLoggedIn ? (
              <>
                <Link to="/dashboard" className="block py-2 text-gray-600">Dashboard</Link>
                <Link to="/projects" className="block py-2 text-gray-600">Projects</Link>
                <Link to="/marketplace" className="block py-2 text-gray-600">Marketplace</Link>
                <Link to="/profile" className="block py-2 text-gray-600">Profile</Link>
                <Link to="/community" className="text-gray-600 hover:text-yellow-500">Community</Link>
                <button
                  onClick={toggleWallet}
                  className="w-full text-gray-600 flex items-center py-2"
                >
                  <Wallet className="h-5 w-5 mr-1" /> Wallet
                </button>
                <button onClick={handleLogout} className="w-full bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 mt-2">
                  Logout
                </button>
              </>
            ) : (
              <Link to="/signup" className="block py-2 text-gray-600">Sign Up/Login</Link>
            )}
          </div>
        )}

        {/* Wallet Modal */}
        {isWalletOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
            <div className="bg-white rounded-lg p-6 shadow-lg w-80">
              <h2 className="text-xl font-bold mb-4">Wallet Balance</h2>
              <p className="text-gray-800 mb-4">Current Balance: ₹{walletBalance.toFixed(2)}</p>
              <input
                type="number"
                placeholder="Enter amount"
                value={amountToAdd}
                onChange={(e) => setAmountToAdd(e.target.value)}
                className="border p-2 w-full rounded mb-4"
              />
              <button
                onClick={handleAddAmount}
                className="w-full bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
              >
                Add Amount
              </button>
              <button
                onClick={toggleWallet}
                className="w-full bg-gray-300 text-gray-800 px-4 py-2 rounded-lg mt-2 hover:bg-gray-400"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
