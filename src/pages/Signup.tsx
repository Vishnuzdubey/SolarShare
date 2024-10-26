import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    if (email === 'test@example.com' && password === 'password') {
      localStorage.setItem('userId', 'uniqueUserId'); // Store a unique ID in localStorage
      navigate('/dashboard'); // Redirect to dashboard after login
    } else {
      alert('Invalid credentials');
    }

    // Save user data in localStorage (mock user registration)
    // localStorage.setItem('userId', 'uniqueUserId');
    // navigate('/dashboard'); // Redirect to dashboard after signup
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSignup}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-2 border rounded-md mb-4"
        />
        <h5>Email =  test@example.com</h5>
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full px-4 py-2 border rounded-md mb-4"
        />
        <h5>Use password = password</h5>
        <br />
        <button type="submit" className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
