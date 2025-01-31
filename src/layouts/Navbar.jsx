import { Link } from "react-router-dom";
import { images } from "../assets/images";

const Navbar = () => {
  return (
    <>
      {/*  Header Section */}
      <header className="bg-[#AF4D32] text-white sm:pb-2 lg:py-6 w-full xs:mb-[-25px] lg:mb-[-40px]">
        <div className="flex  xs:gap-2 sm:gap-6 w-[90%] mx-auto">
          <Link className="xs:w-[120px] xs:h-[120px] xs:mt-2 sm:w-[160px] sm:h-[160px]
           lg:w-[170px] lg:mt-0 lg:h-[170px]" to={"/"}>
            <img src={images.bsulogo} alt="logo" />
          </Link>
          <div className="container mx-auto text-left mt-3">
            <h1 className="xs:text-[20px] sm:text-[40px] sm:leading-[3rem] lg:text-[50px] font-bold lg:mb-4 ">
              Benue State University, Makurdi.
            </h1>
            <p className="xs:text-[12px] sm:text-[20px] lg:text-[25px] font-cookie">
              Welcomes you to her Student election 2025.
            </p>
          </div>
        </div>
      </header>

      {/*  Navigation Section */}
      <nav
        className="sticky top-0 bg-[#2D3F51] text-white shadow-md z-50 
        xs:mb-4 sm:mb-2 xs:w-[78%] sm:w-[82%] lg:w-[50%] clip-path-diagonal ml-auto"
        style={{ clipPath: "polygon(100% 0, 100% 100%, 0% 100%, 5% 0%)" }}
      >
        <ul className="xs:text-[12px] sm:text-[16px] xs:pl-9 xs:py-[10px] xs:gap-3 sm:pl-14
          lg:text-[16px] flex lg:gap-6 lg:py-4 lg:pl-28">
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