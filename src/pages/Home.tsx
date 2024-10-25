import React from 'react';
import { Sun, Users, TrendingUp, Leaf } from 'lucide-react';

const Home = () => {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="text-center space-y-8">
        <h1 className="text-5xl font-bold text-gray-900">
          Invest in a <span className="text-yellow-500">Sustainable</span> Future
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Join our community solar platform and make a difference while earning returns. 
          Invest in local solar projects and help build a greener tomorrow.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-yellow-500 text-white px-8 py-3 rounded-lg hover:bg-yellow-600 transition-colors">
            Get Started
          </button>
          <button className="border-2 border-yellow-500 text-yellow-500 px-8 py-3 rounded-lg hover:bg-yellow-50 transition-colors">
            Learn More
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <Sun className="h-12 w-12 text-yellow-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Solar Investment</h3>
          <p className="text-gray-600">Invest in verified solar projects with returns up to 8% annually.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <Users className="h-12 w-12 text-yellow-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Community Power</h3>
          <p className="text-gray-600">Join a community of environmentally conscious investors.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <TrendingUp className="h-12 w-12 text-yellow-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Track Performance</h3>
          <p className="text-gray-600">Monitor your investments and impact in real-time.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <Leaf className="h-12 w-12 text-yellow-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Environmental Impact</h3>
          <p className="text-gray-600">See your contribution to reducing carbon emissions.</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-yellow-500 text-white rounded-xl p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
        <p className="text-xl mb-8">Join thousands of investors building a sustainable future.</p>
        <button className="bg-white text-yellow-500 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
          Start Investing Now
        </button>
      </section>
    </div>
  );
};

export default Home;