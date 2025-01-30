import { Link } from "react-router-dom";
import { images } from "../assets/images";

const Navbar = () => {
  return (
    <>
      {/*  Header Section */}
      <header
        className="bg-[#AF4D32] text-white lg:py-6 w-full flex items-center gap-4 xs:mb-[-25px] xs:py-4 lg:mb-[-40px]">
        <Link className="xs:w-[100px] xs:h-[100px] lg:w-[170px] lg:h-[170px]" to={"/"}>
          <img className='' src={images.bsulogo} alt="logo" />
        </Link>
        <div className="container mx-auto text-left mb-1">
          <h1 className="xs:text-[20px] sm:text-[30px] lg:text-[50px] font-bold lg:mb-4 ">
            Benue State University, Makurdi.
          </h1>
          <p className="xs:text-[15px] sm:text-[20px] lg:text-[25px] font-cookie">
            Welcomes you to her Student election 2025.
          </p>
        </div>
      </header>

      {/*  Navigation Section */}
      <nav
        className="sticky top-0 bg-[#2D3F51] text-white shadow-md z-50 
        xs:mb-4 sm:mb-2 xs:w-[70%]  lg:w-[50%] clip-path-diagonal ml-auto"
        style={{ clipPath: "polygon(100% 0, 100% 100%, 0% 100%, 5% 0%)" }}
      >
        <div className="container
         xs:text-[10px] sm:text-[12px] lg:text-[16px] xs:pl-7  xs:py-3 xs:gap-2 mx-auto flex items-center lg:gap-6 lg:py-4 lg:pl-28">
          <Link to={`/`}>Home</Link>
          <div className='text-white'>/</div>
          <Link to={`/candidates`}>Candidates</Link>
          <div className='text-white'>/</div>
          <Link to={`/vote`}>Vote</Link>
        </div>
      </nav>
    </>





  );
};


export default Navbar;