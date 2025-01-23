import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setMessage('Please fill in both fields!');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.some((user) => user.email === email);

    if (userExists) {
      setMessage('User already exists! Please log in.');
    } else {
      users.push({ email, password });
      localStorage.setItem('users', JSON.stringify(users));
      setMessage('Registration successful! Redirecting...');
      setTimeout(() => navigate('/'), 2000); // Redirect to homepage
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSignUp}
        className="p-6 bg-white rounded shadow-md w-full max-w-sm"
      >
        <h1 className="text-xl font-bold mb-4">Sign Up</h1>
        {location.state?.message && (
          <p className="text-red-500 mb-4">{location.state.message}</p>
        )}
        {message && <p className="text-green-500 mb-4">{message}</p>}
        <div className="mb-4">
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded"
        >
          Register
        </button>
        <p className="mt-4 text-center">
          Already have an account?{' '}
          <span
            onClick={() => navigate('/login')}
            className="text-blue-500 cursor-pointer"
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
};

export default SignUpPage;
