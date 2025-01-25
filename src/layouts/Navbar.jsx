import { Link } from "react-router-dom";
import { images } from "../assets/images";

const Navbar = () => {
  return (
    <>
      {/* Header Section */}
      <div className='flex flex-wrap justify-center items-center mx-auto bg-[#2D3F51]'>
        <img className='xs:w-[95px] xs:h-[95px] lg:w-[170px] lg:h-[170px] lg:ml-12' src={images.bsulogo} alt="logo" />
        <div className=" p-8 flex flex-col gap-8 items-center lg:w-[65%] mx-auto text-center">
          <h1 className="text-2xl font-bold text-white lg:text-[60px] lg:leading-[4.5rem] ss:text-[26px]">Welcome to Student Elections 2025</h1>
          <p className="text-white lg:text-[20px] ss:text-[10px] ">Participate in shaping the future by voting for your student leaders!</p>
        </div>
      </div>

      <div className="flex justify-center items-center gap-4 sticky top-0 overflow-hidden bg-[#AF4D32] z-[9999] shadow-md">
        <Link to={`/`} className="nav-links">Home</Link>
        <div className='text-white'>/</div>
        <Link to={`/candidates`} className="nav-links">Candidates</Link>
        <div className='text-white'>/</div>
        <Link to={`/vote`} className="nav-links">Vote</Link>
      </div>
    </>
  );
};

export default Navbar;
