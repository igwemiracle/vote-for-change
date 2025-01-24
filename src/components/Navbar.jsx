import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className="w-full m-0 bg-[#2D3F51]">
      {/* Header Section */}
      <div className=" p-8 flex flex-col gap-8 items-center lg:w-[65%] mx-auto text-center">
        <h1 className="text-2xl font-bold text-white lg:text-[60px] ss:text-[26px]">Welcome to Student Elections 2025</h1>
        <p className="text-white lg:text-[20px] ss:text-[10px] ">Participate in shaping the future by voting for your student leaders!</p>
      </div>

      {/* Navbar Section */}
      <div className="sticky top-0 bg-[#AF4D32] flex justify-center items-center lg:gap-4 overflow-hidden ">
        <Link to={`/`} className="nav-links">Home</Link>
        <div className='text-white'>/</div>
        <Link to={`/candidates`} className="nav-links">Candidates</Link>
        <div className='text-white'>/</div>
        <Link to={`/vote`} className="nav-links">Vote</Link>
      </div>
    </div>

  );
};

export default Navbar;
