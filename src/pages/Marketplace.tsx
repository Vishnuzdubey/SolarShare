import React from 'react';
import { ShoppingCart, Star, Package } from 'lucide-react';

const Marketplace = () => {
  const products = [
    {
      id: 1,
      name: 'Premium Solar Panel Kit',
      manufacturer: 'SolarTech Pro',
      rating: 4.8,
      reviews: 156,
      price: 599.99,
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 2,
      name: 'Solar Inverter Plus',
      manufacturer: 'PowerConvert',
      rating: 4.6,
      reviews: 89,
      price: 299.99,
      image: 'https://images.unsplash.com/photo-1559302995-f1bb62739e52?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 3,
      name: 'Smart Solar Monitor',
      manufacturer: 'SunTrack',
      rating: 4.9,
      reviews: 234,
      price: 149.99,
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Solar Equipment Marketplace</h1>
        <button className="relative">
          <ShoppingCart className="h-6 w-6 text-gray-600" />
          <span className="absolute -top-2 -right-2 bg-yellow-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            0
          </span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
              <p className="text-gray-600">{product.manufacturer}</p>
              
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  <span className="ml-1 text-gray-600">{product.rating}</span>
                </div>
                <span className="text-gray-400">|</span>
                <span className="text-gray-600">{product.reviews} reviews</span>
              </div>

              <div className="flex justify-between items-center pt-4">
                <p className="text-2xl font-bold text-gray-900">${product.price}</p>
                <button className="flex items-center gap-2 bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition-colors">
                  <Package className="h-5 w-5" />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marketplace;