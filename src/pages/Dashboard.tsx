import React from 'react';
import { TrendingUp, Sun, DollarSign, Leaf } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
      
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-600">Total Investment</h3>
            <DollarSign className="h-6 w-6 text-yellow-500" />
          </div>
          <p className="text-2xl font-bold">$12,450</p>
          <p className="text-sm text-green-500">+2.5% this month</p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-600">Energy Generated</h3>
            <Sun className="h-6 w-6 text-yellow-500" />
          </div>
          <p className="text-2xl font-bold">1,234 kWh</p>
          <p className="text-sm text-green-500">+5% this month</p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-600">Returns</h3>
            <TrendingUp className="h-6 w-6 text-yellow-500" />
          </div>
          <p className="text-2xl font-bold">$890</p>
          <p className="text-sm text-green-500">+1.2% this month</p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-600">Carbon Offset</h3>
            <Leaf className="h-6 w-6 text-yellow-500" />
          </div>
          <p className="text-2xl font-bold">2.4 tons</p>
          <p className="text-sm text-green-500">+3.1% this month</p>
        </div>
      </div>

      {/* Investment Portfolio */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-bold mb-4">Your Investment Portfolio</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3">Project</th>
                <th className="text-left py-3">Investment</th>
                <th className="text-left py-3">Returns</th>
                <th className="text-left py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-3">Solar Farm Alpha</td>
                <td>$5,000</td>
                <td className="text-green-500">+$250</td>
                <td><span className="bg-green-100 text-green-800 px-2 py-1 rounded">Active</span></td>
              </tr>
              <tr className="border-b">
                <td className="py-3">Community Solar Beta</td>
                <td>$3,500</td>
                <td className="text-green-500">+$175</td>
                <td><span className="bg-green-100 text-green-800 px-2 py-1 rounded">Active</span></td>
              </tr>
              <tr>
                <td className="py-3">Rooftop Solar Project</td>
                <td>$3,950</td>
                <td className="text-green-500">+$465</td>
                <td><span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Pending</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;