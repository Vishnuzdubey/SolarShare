import React from 'react';
import { User, Mail, Phone, MapPin, Camera } from 'lucide-react';

const Profile = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="relative h-48 bg-yellow-500">
          <div className="absolute -bottom-16 left-8">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150"
                alt="Profile"
                className="w-32 h-32 rounded-full border-4 border-white object-cover"
              />
              <button className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow-md hover:bg-gray-50">
                <Camera className="h-5 w-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-20 pb-8 px-8">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">John Doe</h1>
              <p className="text-gray-600">Solar Investment Enthusiast</p>
            </div>
            <button className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition-colors">
              Edit Profile
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-xl shadow-md p-6 space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">Contact Information</h2>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-gray-600">
              <Mail className="h-5 w-5" />
              <span>john.doe@example.com</span>
            </div>
            <div className="flex items-center gap-3 text-gray-600">
              <Phone className="h-5 w-5" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-3 text-gray-600">
              <MapPin className="h-5 w-5" />
              <span>San Francisco, CA</span>
            </div>
          </div>
        </div>

        <div className="md:col-span-2 bg-white rounded-xl shadow-md p-6 space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">Investment Preferences</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Preferred Investment Range</label>
              <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500">
                <option>$1,000 - $5,000</option>
                <option>$5,001 - $10,000</option>
                <option>$10,001 - $50,000</option>
                <option>$50,001+</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Project Type Interest</label>
              <div className="mt-2 grid grid-cols-2 gap-2">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded text-yellow-500 focus:ring-yellow-500" />
                  <span>Community Solar</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded text-yellow-500 focus:ring-yellow-500" />
                  <span>Utility Scale</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded text-yellow-500 focus:ring-yellow-500" />
                  <span>Residential</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded text-yellow-500 focus:ring-yellow-500" />
                  <span>Commercial</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;