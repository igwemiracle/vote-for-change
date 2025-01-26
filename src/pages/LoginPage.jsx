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

      <div className='flex lg:flex-row xs:flex-col  w-[80%] mx-auto items-center my-20 bg-[#E8C9C1] shadow-xl rounded-lg'>

        <img className='basis-1/2 w-full' src={images.login} alt="show-login" />
        <div className='basis-1/2 px-8 py-12'>
          <input
            type="email"
            placeholder="Enter your email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-8 py-4 border rounded-[60px] mb-8 focus:outline-none"
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
    </>
    // <div className="flex items-center justify-center h-screen bg-gray-100">
    //   <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
    //     <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
    //     {error && <p className="text-red-500 mb-4">{error}</p>}
    //     <input
    //       type="email"
    //       placeholder="Enter your university email"
    //       value={email}
    //       onChange={(e) => setEmail(e.target.value)}
    //       className="w-full px-4 py-2 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
    //     />
    //     <button
    //       onClick={handleLogin}
    //       className="w-full bg-[#AF4D32] text-white py-2 rounded hover:bg-blue-700"
    //     >
    //       Login
    //     </button>
    //   </div>
    // </div>
  );
};

export default LoginPage;