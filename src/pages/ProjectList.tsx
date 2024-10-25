import React, { useState, useEffect } from 'react';
import { Users, Battery, X, MapPin, Info } from 'lucide-react';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [isAddProjectOpen, setIsAddProjectOpen] = useState(false);
  const [isInvestPopupOpen, setIsInvestPopupOpen] = useState(false);
  const [isDetailsPopupOpen, setIsDetailsPopupOpen] = useState(false); // New state for details popup
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
    userId: '',
    description: '', // Add description field
  });
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedShares, setSelectedShares] = useState(0);
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

  const toggleInvestPopup = (project) => {
    setSelectedProject(project);
    setIsInvestPopupOpen(!isInvestPopupOpen);
    setSelectedShares(0);
  };

  const toggleDetailsPopup = (project) => {
    setSelectedProject(project);
    setIsDetailsPopupOpen(!isDetailsPopupOpen);
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
      userId: '',
      description: '', // Reset description
    });
  };

  const handleInvestment = () => {
    console.log('Invest Now:', selectedProject, selectedShares);
    setIsInvestPopupOpen(false);
    alert(`Invested in ${selectedShares} shares!`);
  };

  const totalCheckoutAmount = selectedProject && selectedShares * selectedProject.costPerShare;

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Solar Projects</h1>
        <button onClick={toggleAddProjectPopup} className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors">
          Add Project
        </button>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div key={project.id} className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img src={project.image || 'https://via.placeholder.com/800'} alt={project.name} className="w-full h-full object-cover" />
            </div>
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">{project.name}</h3>
              <p className="text-gray-600">{project.location}</p>
              <p className="text-gray-600">Cost per Share: ${project.costPerShare}</p>
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
                  <div className="bg-yellow-500 h-2 rounded-full" style={{ width: `${project.progress}%` }}></div>
                </div>
              </div>

              <div className="flex justify-between items-center pt-4">
                <div>
                  <p className="text-sm text-gray-600">Expected Returns</p>
                  <p className="text-lg font-semibold text-green-500">{project.returns}</p>
                </div>
                <button onClick={() => toggleInvestPopup(project)} className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition-colors">
                  Invest Now
                </button>
              </div>

              <div className="flex justify-between pt-4">
                <button
                  onClick={() => window.open(`https://maps.google.com/?q=${project.location}`, '_blank')}
                  className="flex items-center text-blue-500 hover:text-blue-700"
                >
                  <MapPin className="h-5 w-5 mr-1" /> Location on Map
                </button>
                <button
                  onClick={() => toggleDetailsPopup(project)}
                  className="flex items-center text-blue-500 hover:text-blue-700"
                >
                  <Info className="h-5 w-5 mr-1" /> Project Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Details Popup */}
      {isDetailsPopupOpen && selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full relative">
            <button onClick={() => setIsDetailsPopupOpen(false)} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
              <X className="h-6 w-6" />
            </button>
            <h2 className="text-2xl font-bold mb-4">{selectedProject.name}</h2>
            <p className="text-gray-600 mb-4">{selectedProject.description || 'No description provided.'}</p>
          </div>
        </div>
      )}

      {/* Invest Popup */}
      {isInvestPopupOpen && selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full relative">
            <button onClick={() => setIsInvestPopupOpen(false)} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
              <X className="h-6 w-6" />
            </button>
            <h2 className="text-2xl font-bold mb-4">Invest in {selectedProject.name}</h2>
            <p className="text-gray-600 mb-2">Cost per Share: ${selectedProject.costPerShare}</p>
            <input
              type="number"
              placeholder="Enter number of shares"
              value={selectedShares}
              onChange={(e) => setSelectedShares(Number(e.target.value))}
              className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <p className="text-gray-600">Total Checkout Amount: ${totalCheckoutAmount || 0}</p>
            <button onClick={handleInvestment} className="w-full mt-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors">
              Make Payment
            </button>
          </div>
        </div>
      )}

      {/* Project Added Success Message */}
      {projectAdded && (
        <div className="fixed inset-x-0 top-4 flex justify-center z-50">
          <div className="bg-green-500 text-white px-6 py-2 rounded-lg">
            Project successfully added!
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectList;
// Compare this snippet from SolarShare/src/pages/ProjectDetails.tsx: