import React from 'react';
import { Sun, Users, Battery } from 'lucide-react';

const ProjectList = () => {
  const projects = [
    {
      id: 1,
      name: 'Community Solar Farm',
      location: 'Boulder, Colorado',
      capacity: '500kW',
      investment: '$250,000',
      progress: 75,
      investors: 124,
      returns: '8.5%',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=1200'
    },
    {
      id: 2,
      name: 'Rooftop Solar Array',
      location: 'Austin, Texas',
      capacity: '250kW',
      investment: '$175,000',
      progress: 45,
      investors: 89,
      returns: '7.8%',
      image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=1200'
    },
    {
      id: 3,
      name: 'Solar Park Initiative',
      location: 'Phoenix, Arizona',
      capacity: '750kW',
      investment: '$400,000',
      progress: 25,
      investors: 67,
      returns: '9.2%',
      image: 'https://images.unsplash.com/photo-1595437193398-f24279553f4f?auto=format&fit=crop&q=80&w=1200'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Solar Projects</h1>
        <div className="flex gap-4">
          <select className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500">
            <option>All Locations</option>
            <option>Colorado</option>
            <option>Texas</option>
            <option>Arizona</option>
          </select>
          <select className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500">
            <option>All Capacities</option>
            <option>0-250kW</option>
            <option>251-500kW</option>
            <option>501kW+</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.name}
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">{project.name}</h3>
              <p className="text-gray-600">{project.location}</p>
              
              <div className="flex justify-between items-center text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Battery className="h-5 w-5 text-yellow-500" />
                  {project.capacity}
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-yellow-500" />
                  {project.investors} investors
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progress</span>
                  <span>{project.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-yellow-500 h-2 rounded-full" 
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
              </div>

              <div className="flex justify-between items-center pt-4">
                <div>
                  <p className="text-sm text-gray-600">Expected Returns</p>
                  <p className="text-lg font-semibold text-green-500">{project.returns}</p>
                </div>
                <button className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition-colors">
                  Invest Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;