import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Database } from '../constant';
import { images } from '../assets/images';

const LoginPage = () => {
  const [matricNumber, setMatricNumber] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!matricNumber.trim()) {
      setError('Please enter your matric number to vote.');
      return;
    }
    const user = Database.find((entry) => entry.matricNumber === matricNumber);
    if (user) {
      localStorage.setItem('users', JSON.stringify([user]));
      localStorage.removeItem('hasVoted');
      setError('');
      navigate('/vote');
    } else {
      setError('Invalid matric number. You are not authorized to vote.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#E8C9C1] p-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-xl p-8">
        <Link className='' to={"/"}>
          <img className='mb-4 mx-auto xs:w-[120px] xs:h-[120px] sm:w-[160px] sm:h-[160px] lg:w-[170px] lg:h-[170px]' src={images.bsulogo} alt="logo" />
        </Link>
        <p className="text-center text-dark-gray mb-6">
          Please enter your matric number to log in. This platform is for authorized voters only.
        </p>
        {error && (
          <div className="mb-4 p-2 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter your matric number..."
            value={matricNumber}
            onChange={(e) => setMatricNumber(e.target.value)}
            className="w-full p-3 border border-dark-brown rounded focus:outline-none focus:border-2 focus:border-[#e76241] transition-colors duration-300"
          />
        </div>
        <button
          onClick={handleLogin}
          className="w-full bg-dark-brown text-white p-3 rounded hover:bg-[#8F3D28] transition-colors duration-300"
        >
          Login
        </button>
        <div className="mt-6 text-center text-dark-gray">
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
