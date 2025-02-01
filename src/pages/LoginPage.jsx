import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Database } from '../constant';
import { images } from '../assets/images';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email.trim()) {
      setError('The email address must not be empty.');
      return;
    }
    const user = Database.find((entry) => entry.email === email);
    if (user) {
      localStorage.setItem('users', JSON.stringify([user]));
      localStorage.removeItem('hasVoted');
      setError('');
      navigate('/vote');
    } else {
      setError('Invalid email. You are not authorized to vote.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#E8C9C1] p-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-xl p-8">
        <Link className='' to={"/"}>
          <img className='mb-4 mx-auto xs:w-[120px] xs:h-[120px] sm:w-[160px] sm:h-[160px] lg:w-[170px] lg:h-[170px]' src={images.bsulogo} alt="logo" />
        </Link>
        <p className="text-center text-[#2D3F51] mb-6">
          Please enter your email to log in. This platform is for authorized voters only.
        </p>
        {error && (
          <div className="mb-4 p-2 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}
        <div className="mb-4">
          <input
            type="email"
            placeholder="Enter your email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-[#AF4D32] rounded focus:outline-none focus:border-2 focus:border-[#e76241] transition-colors duration-300"
          />
        </div>
        <button
          onClick={handleLogin}
          className="w-full bg-[#AF4D32] text-white p-3 rounded hover:bg-[#8F3D28] transition-colors duration-300"
        >
          Login
        </button>
        <div className="mt-6 text-center text-[#2D3F51]">
          <p className="text-sm">
            Need help? Contact support at{' '}
            <a href="mailto:support@example.com" className="underline">
              support@example.com
            </a>.
          </p>
          <p className="text-xs mt-2">
            By logging in, you agree to our{' '}
            <a href="/terms" className="underline">
              Terms and Conditions
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
