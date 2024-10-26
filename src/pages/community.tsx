import React, { useState } from 'react';
import { Sun, MessageCircle, Share2, Clock, Users, Plus, Calendar, BookOpen } from 'lucide-react';

const CommunityHub = () => {
  const [activeTab, setActiveTab] = useState('forum');
  const [votes, setVotes] = useState({});
  const [showNewPostModal, setShowNewPostModal] = useState(false);
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Proposal: Community Solar Education Program",
      author: "Sarah Green",
      content: "I propose we start a monthly workshop series to educate our community about solar energy benefits and maintenance.",
      tags: ["Education", "Community", "Proposal"],
      timestamp: "2 hours ago",
      category: "Proposals",
      comments: []
    },
    // Additional posts...
  ]);

  const [initiatives] = useState([
    {
      id: 1,
      title: "Green Valley Solar Farm",
      status: "In Progress",
      completion: 75,
      budget: "$2.5M",
      impact: "Powers 1,200 homes",
      description: "Community-owned solar farm project with 5MW capacity",
      deadline: "December 2024"
    },
    // Additional initiatives...
  ]);

  const [workshops] = useState([
    {
      id: 1,
      title: "Solar 101: Getting Started",
      date: "November 15, 2024",
      time: "10:00 AM - 12:00 PM",
      location: "Community Center",
      instructor: "Dr. Emma Wilson",
      spots: "15/30 available",
      type: "Beginner"
    },
    // Additional workshops...
  ]);

  const [awarenessPrograms] = useState([
    {
      id: 1,
      title: "Solar Energy Awareness Month",
      type: "Campaign",
      duration: "October 2024",
      activities: [
        "School presentations",
        "Community fairs",
        "Solar site tours"
      ],
      participants: "1,200+",
      impact: "25% increase in solar adoption interest"
    },
    // Additional awareness programs...
  ]);

  const [newPost, setNewPost] = useState({
    title: '',
    content: '',
    category: '',
    tags: []
  });

  const handleNewPost = (e) => {
    e.preventDefault();
    const post = {
      id: posts.length + 1,
      ...newPost,
      author: "Current User",
      timestamp: "Just now",
      comments: []
    };
    setPosts([post, ...posts]);
    setShowNewPostModal(false);
    setNewPost({ title: '', content: '', category: '', tags: [] });
  };

  const handleVote = (postId) => {
    setVotes(prev => ({
      ...prev,
      [postId]: (prev[postId] || 0) + 1
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-6">
            <Sun className="w-12 h-12" />
            <h1 className="text-4xl font-bold">SolarShare Community Hub</h1>
          </div>
          <p className="text-xl opacity-90">Connect, Learn, and Grow with Fellow Solar Enthusiasts</p>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-6xl mx-auto px-4 -mt-8">
        <div className="bg-white rounded-lg shadow-lg p-1 mb-8 inline-flex">
          {['forum', 'initiatives', 'workshops', 'awareness'].map(tab => (
            <button 
              key={tab}
              className={`px-6 py-3 rounded-md text-lg font-medium transition-all ${
                activeTab === tab 
                  ? 'bg-yellow-500 text-white' 
                  : 'text-gray-600 hover:bg-yellow-50'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Forum Section */}
        {activeTab === 'forum' && (
          <div className="space-y-6">
            <div className="flex gap-4 items-center">
              <input 
                type="text" 
                placeholder="Search forum discussions..." 
                className="flex-1 max-w-md px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <button 
                onClick={() => setShowNewPostModal(true)}
                className="px-6 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors flex items-center gap-2"
              >
                <Plus className="w-5 h-5" />
                New Post
              </button>
            </div>

            {posts.map(post => (
              <div key={post.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
                <h2 className="text-2xl font-semibold text-gray-800 hover:text-yellow-600 mb-2">{post.title}</h2>
                <div className="flex gap-2 mb-4">
                  {post.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 mb-4">{post.content}</p>
                <div className="text-sm text-gray-500 mb-4">
                  Posted by <span className="text-yellow-600 font-medium">{post.author}</span> in {post.category}
                </div>
                <div className="flex gap-6">
                  <button 
                    onClick={() => handleVote(post.id)}
                    className="flex items-center gap-2 text-gray-600 hover:text-yellow-600 transition-colors"
                  >
                    <Sun className="w-5 h-5" />
                    <span>{votes[post.id] || 0} Votes</span>
                  </button>
                  <button className="flex items-center gap-2 text-gray-600 hover:text-yellow-600 transition-colors">
                    <MessageCircle className="w-5 h-5" />
                    <span>Comment</span>
                  </button>
                  <button className="flex items-center gap-2 text-gray-600 hover:text-yellow-600 transition-colors">
                    <Share2 className="w-5 h-5" />
                    <span>Share</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Initiatives Section */}
        {activeTab === 'initiatives' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {initiatives.map(initiative => (
                <div key={initiative.id} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">{initiative.title}</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Status:</span>
                      <span className={`px-2 py-1 rounded-full text-sm ${
                        initiative.status === 'Active' ? 'bg-green-100 text-green-800' :
                        initiative.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>{initiative.status}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-yellow-500 h-2 rounded-full"
                        style={{ width: `${initiative.completion}%` }}
                      ></div>
                    </div>
                    <p className="text-gray-600">{initiative.description}</p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-500">Budget</span>
                        <p className="font-semibold text-gray-800">{initiative.budget}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">Impact</span>
                        <p className="font-semibold text-gray-800">{initiative.impact}</p>
                      </div>
                    </div>
                    <div className="pt-4">
                      <button className="w-full py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors">View More</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Workshops Section */}
        {activeTab === 'workshops' && (
          <div className="space-y-8">
            {workshops.map(workshop => (
              <div key={workshop.id} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{workshop.title}</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">Date</span>
                    <p className="font-semibold text-gray-800">{workshop.date}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Time</span>
                    <p className="font-semibold text-gray-800">{workshop.time}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Location</span>
                    <p className="font-semibold text-gray-800">{workshop.location}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Instructor</span>
                    <p className="font-semibold text-gray-800">{workshop.instructor}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Spots</span>
                    <p className="font-semibold text-gray-800">{workshop.spots}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Type</span>
                    <p className="font-semibold text-gray-800">{workshop.type}</p>
                  </div>
                </div>
                <button className="mt-4 w-full py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors">Register</button>
              </div>
            ))}
          </div>
        )}

        {/* Awareness Section */}
        {activeTab === 'awareness' && (
          <div className="space-y-8">
            {awarenessPrograms.map(program => (
              <div key={program.id} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{program.title}</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">Type</span>
                    <p className="font-semibold text-gray-800">{program.type}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Duration</span>
                    <p className="font-semibold text-gray-800">{program.duration}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Activities</span>
                    <p className="font-semibold text-gray-800">{program.activities.join(', ')}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Participants</span>
                    <p className="font-semibold text-gray-800">{program.participants}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Impact</span>
                    <p className="font-semibold text-gray-800">{program.impact}</p>
                  </div>
                </div>
                <button className="mt-4 w-full py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors">Get Involved</button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* New Post Modal */}
      {showNewPostModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-md">
            <h3 className="text-xl font-semibold mb-4">Create New Post</h3>
            <form onSubmit={handleNewPost}>
              <input
                type="text"
                placeholder="Title"
                value={newPost.title}
                onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                className="w-full px-4 py-2 mb-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <textarea
                placeholder="Content"
                value={newPost.content}
                onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                className="w-full px-4 py-2 mb-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                rows="4"
              />
              <input
                type="text"
                placeholder="Category"
                value={newPost.category}
                onChange={(e) => setNewPost({ ...newPost, category: e.target.value })}
                className="w-full px-4 py-2 mb-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <input
                type="text"
                placeholder="Tags (comma-separated)"
                value={newPost.tags.join(', ')}
                onChange={(e) => setNewPost({ ...newPost, tags: e.target.value.split(',').map(tag => tag.trim()) })}
                className="w-full px-4 py-2 mb-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <button
                type="submit"
                className="w-full py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors"
              >
                Post
              </button>
            </form>
            <button 
              onClick={() => setShowNewPostModal(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommunityHub;
