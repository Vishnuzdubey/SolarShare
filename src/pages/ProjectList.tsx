import React, { useState, useEffect } from 'react';
import { Users, Battery, X } from 'lucide-react';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [isAddProjectOpen, setIsAddProjectOpen] = useState(false);
  const [newProject, setNewProject] = useState({
    name: '',
    location: '',
    capacity: '',
    investment: '',
    progress: 0,
    investors: 0,
    returns: '',
    costPerShare: '',
    totalShares: '',
    image: '',
    userId:'',
  });
  const [selectedLocation, setSelectedLocation] = useState('All Locations');
  const [selectedCapacity, setSelectedCapacity] = useState('All Capacities');
  const [searchQuery, setSearchQuery] = useState('');
  const [projectAdded, setProjectAdded] = useState(false);

  useEffect(() => {
    const storedProjects = JSON.parse(localStorage.getItem('projects')) || [];
    setProjects(storedProjects);
    setFilteredProjects(storedProjects);
  }, []);

  const toggleAddProjectPopup = () => {
    setIsAddProjectOpen(!isAddProjectOpen);
    setProjectAdded(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProject({ ...newProject, [name]: value });
  };

  const handleAddProject = () => {
    const updatedProjects = [...projects, { ...newProject, id: projects.length + 1 }];
    setProjects(updatedProjects);
    setFilteredProjects(updatedProjects);
    localStorage.setItem('projects', JSON.stringify(updatedProjects));
    setIsAddProjectOpen(false);
    setProjectAdded(true);

    setNewProject({
      name: '',
      location: '',
      capacity: '',
      investment: '',
      progress: 0,
      investors: 0,
      returns: '',
      costPerShare: '',
      totalShares: '',
      image: '',
      userId:'',
    });
  };

  const handleFilter = () => {
    let filtered = projects;

    if (selectedLocation !== 'All Locations') {
      filtered = filtered.filter(project => project.location.includes(selectedLocation));
    }

    if (selectedCapacity !== 'All Capacities') {
      filtered = filtered.filter((project) => {
        const capacityValue = parseInt(project.capacity);
        if (selectedCapacity === '0-250kW') return capacityValue <= 250;
        if (selectedCapacity === '251-500kW') return capacityValue > 250 && capacityValue <= 500;
        return capacityValue > 500;
      });
    }

    if (searchQuery) {
      filtered = filtered.filter(project =>
        project.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredProjects(filtered);
  };

  useEffect(() => {
    handleFilter();
  }, [selectedLocation, selectedCapacity, searchQuery, projects]);

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Solar Projects</h1>
        <div className="flex gap-4">
          <input 
            type="text" 
            placeholder="Search projects..." 
            value={searchQuery} 
            onChange={(e) => setSearchQuery(e.target.value)} 
            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <button 
            onClick={toggleAddProjectPopup} 
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
          >
            Add Project
          </button>
          <select 
            value={selectedLocation} 
            onChange={(e) => setSelectedLocation(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            <option>All Locations</option>
            <option>Colorado</option>
            <option>Texas</option>
            <option>Arizona</option>
          </select>
          <select 
            value={selectedCapacity} 
            onChange={(e) => setSelectedCapacity(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            <option>All Capacities</option>
            <option>0-250kW</option>
            <option>251-500kW</option>
            <option>501kW+</option>
          </select>
        </div>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div key={project.id} className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img 
                src={project.image || 'https://via.placeholder.com/800'} 
                alt={project.name}
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">{project.name}</h3>
              <p className="text-gray-600">{project.location}</p>
              <p className="text-gray-600">Cost per Share: {project.costPerShare}</p>
              <p className="text-gray-600">Total Shares: {project.totalShares}</p>
              
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

      {/* Add Project Popup */}
      {isAddProjectOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full relative">
            <button onClick={toggleAddProjectPopup} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
              <X className="h-6 w-6" />
            </button>
            <h2 className="text-2xl font-bold mb-4">Add New Project</h2>
            <div className="space-y-4">
              <input 
                type="text" 
                name="name" 
                placeholder="Project Name" 
                value={newProject.name} 
                onChange={handleInputChange} 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <input 
                type="text" 
                name="location" 
                placeholder="Location" 
                value={newProject.location} 
                onChange={handleInputChange} 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <input 
                type="text" 
                name="capacity" 
                placeholder="Capacity (e.g., 500kW)" 
                value={newProject.capacity} 
                onChange={handleInputChange} 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <input 
                type="text" 
                name="investment" 
                placeholder="Investment (e.g., $250,000)" 
                value={newProject.investment} 
                onChange={handleInputChange} 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <input 
                type="number" 
                name="progress" 
                placeholder="Progress (%)" 
                value={newProject.progress} 
                onChange={handleInputChange} 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <input 
                type="text" 
                name="returns" 
                placeholder="Expected Returns (e.g., 8.5%)" 
                value={newProject.returns} 
                onChange={handleInputChange} 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <input 
                type="text" 
                name="costPerShare" 
                placeholder="Cost per Share" 
                value={newProject.costPerShare} 
                onChange={handleInputChange} 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <input 
                type="text" 
                name="totalShares" 
                placeholder="Total Shares Available" 
                value={newProject.totalShares} 
                onChange={handleInputChange} 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <input 
                type="text" 
                name="image" 
                placeholder="Image URL" 
                value={newProject.image} 
                onChange={handleInputChange} 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <button 
                onClick={handleAddProject} 
                className="w-full bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors mt-4"
              >
                Add Project
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Project Added Success Message */}
      {projectAdded && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg">
          Project added successfully!
        </div>
      )}
    </div>
  );
};

export default ProjectList;
