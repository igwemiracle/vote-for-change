import { Link } from "react-router-dom";
import { images } from "../assets/images";

const Navbar = () => {
  return (
    <>
      {/*  Header Section */}
      <header
        className="bg-[#AF4D32] text-white lg:py-6 w-full flex gap-4 xs:mb-[-25px] xs:py-4 lg:mb-[-40px]">
        <Link className="xs:w-[110px] xs:h-[110px] lg:w-[170px] lg:h-[170px]" to={"/"}>
          <img className='' src={images.bsulogo} alt="logo" />
        </Link>
        <div className="container mx-auto text-left mb-1">
          <h1 className="xs:text-[22px] sm:text-[30px] lg:text-[50px] font-bold lg:mb-4 ">
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
        xs:mb-4 sm:mb-2 xs:w-[85%]  lg:w-[50%] clip-path-diagonal ml-auto"
        style={{ clipPath: "polygon(100% 0, 100% 100%, 0% 100%, 5% 0%)" }}
      >
        <ul className="xs:text-[12px] xs:pl-9 xs:py-[10px] xs:gap-3
          lg:text-[16px] mx-auto flex items-center lg:gap-6 lg:py-4 lg:pl-28">
          <li><Link className="hover:text-[#b2d5f8b1]" to={`/`}>Home</Link></li>
          <li>/</li>
          <li><Link className="hover:text-[#b2d5f8b1]" to={`/candidates`}>Candidates</Link></li>
          <li>/</li>
          <li><Link className="hover:text-[#b2d5f8b1]" to={`/vote`}>Vote</Link></li>
        </ul>
      </nav>
    </>





  );
};


export default Navbar;