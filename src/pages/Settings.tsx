import React from 'react';
import { Bell, Lock, CreditCard, HelpCircle } from 'lucide-react';

const Settings = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold text-gray-900">Settings</h1>

      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="divide-y">
          {/* Notifications Section */}
          <div className="p-6 space-y-4">
            <div className="flex items-center gap-3">
              <Bell className="h-6 w-6 text-yellow-500" />
              <h2 className="text-xl font-semibold text-gray-900">Notifications</h2>
            </div>
            <div className="space-y-3">
              <label className="flex items-center justify-between">
                <span className="text-gray-700">Email Notifications</span>
                <input type="checkbox" className="rounded text-yellow-500 focus:ring-yellow-500" />
              </label>
              <label className="flex items-center justify-between">
                <span className="text-gray-700">Investment Updates</span>
                <input type="checkbox" className="rounded text-yellow-500 focus:ring-yellow-500" />
              </label>
              <label className="flex items-center justify-between">
                <span className="text-gray-700">Project Milestones</span>
                <input type="checkbox" className="rounded text-yellow-500 focus:ring-yellow-500" />
              </label>
            </div>
          </div>

          {/* Security Section */}
          <div className="p-6 space-y-4">
            <div className="flex items-center gap-3">
              <Lock className="h-6 w-6 text-yellow-500" />
              <h2 className="text-xl font-semibold text-gray-900">Security</h2>
            </div>
            <div className="space-y-4">
              <button className="w-full text-left px-4 py-2 rounded-lg border border-gray-300 hover:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500">
                Change Password
              </button>
              <button className="w-full text-left px-4 py-2 rounded-lg border border-gray-300 hover:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500">
                Two-Factor Authentication
              </button>
            </div>
          </div>

          {/* Payment Methods Section */}
          <div className="p-6 space-y-4">
            <div className="flex items-center gap-3">
              <CreditCard className="h-6 w-6 text-yellow-500" />
              <h2 className="text-xl font-semibold text-gray-900">Payment Methods</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-8 bg-blue-600 rounded"></div>
                  <span>•••• •••• •••• 4242</span>
                </div>
                <button className="text-yellow-500 hover:text-yellow-600">Edit</button>
              </div>
              <button className="w-full text-center px-4 py-2 rounded-lg border border-dashed border-gray-300 hover:border-yellow-500 text-gray-600 hover:text-yellow-500">
                + Add New Payment Method
              </button>
            </div>
          </div>

          {/* Help & Support Section */}
          <div className="p-6 space-y-4">
            <div className="flex items-center gap-3">
              <HelpCircle className="h-6 w-6 text-yellow-500" />
              <h2 className="text-xl font-semibold text-gray-900">Help & Support</h2>
            </div>
            <div className="space-y-2">
              <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-50">
                FAQs
              </button>
              <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-50">
                Contact Support
              </button>
              <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-50">
                Privacy Policy
              </button>
              <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-50">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;