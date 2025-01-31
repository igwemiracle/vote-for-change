import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Database } from '../constant';
import { images } from '../assets/images';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Check if email field is empty
    if (!email.trim()) {
      setError('The email address must not be empty.');
      return;
    }

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
    <div className='flex lg:flex-row xs:flex-col w-[80%] mx-auto my-[4.4rem] lg:my-[9rem] items-center bg-[#E8C9C1] shadow-xl'>
      <div className='basis-1/2 w-full'>
        <img className='w-full' src={images.login} alt="show-login" />
      </div>
      <div className='basis-1/2 w-full px-3 xs:h-[16rem] xs:py-14 sm:px-6 sm:py-32  sm:h-[28rem] pt-10'>

        {error ?
          <>
            <input type="email" placeholder="Enter your email..." value={email}
              onChange={(e) => setEmail(e.target.value)}
              className=" w-full xs:pl-4 xs:py-3 sm:px-8 sm:py-4 border-[2px] border-solid border-red-600 outline-none
              focus:border-red-500"
            />
            <p className="text-red-500 mt-1 xs:text-[15px]">{error}</p>
          </>
          : <input type="email" placeholder="Enter your email..." value={email}
            onChange={(e) => setEmail(e.target.value)}
            className=" w-full xs:pl-4 xs:py-3 sm:px-8 sm:py-4 border border-solid border-[#AF4D32]
            focus:border-[2px] focus:border-[#e76241] outline-none"
          />}

        <button
          onClick={handleLogin}
          className="w-full bg-[#AF4D32] mt-4 text-white xs:py-3 sm:px-8 sm:py-4 outline-none
           focus:border-[3px]  focus:border-[#fcb6a4] focus:rounded-[4px] rounded-sm"

        >
          Login
        </button>

      </div>
    </div>
  );
};

export default LoginPage;