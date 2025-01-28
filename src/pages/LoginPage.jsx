import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Database } from '../constant';
import { images } from '../assets/images';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Check if the email exists in the database
    const user = Database.find((entry) => entry.email === email);

    if (user) {
      // Save user details to localStorage
      localStorage.setItem('users', JSON.stringify([user]));
      localStorage.removeItem('hasVoted'); // Clear any previous vote status
      setError('');
      navigate('/vote'); // Redirect to the voting page
    } else {
      setError('Invalid email. You are not authorized to vote.');
    }
  };

  return (
    <>
      <div className='flex lg:flex-row xs:flex-col  w-[80%] mx-auto mb-8 items-center bg-[#E8C9C1] shadow-xl rounded-lg'>
        <img className='basis-1/2 w-full' src={images.login} alt="show-login" />
        <div className='basis-1/2 w-full px-8 py-12'>
          <input
            required
            type="email"
            placeholder="Enter your email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className=" w-full px-8 py-4 border rounded-[60px] mb-8 focus:outline-none"
          />

          <button
            onClick={handleLogin}
            className="w-full bg-[#AF4D32] text-white py-4 rounded-[60px]"
          >
            Login
          </button>
          {error && <p className="text-red-500 mt-6 text-center">{error}</p>}

        </div>
      </div>

      <footer>

      </footer>
    </>
  );
};

export default LoginPage;