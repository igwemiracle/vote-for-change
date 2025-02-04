import { Link } from "react-router-dom";
import { images } from "../assets/images";
import BreadCrumbs from "../components/BreadCrumbs";

const Navbar = () => {
  return (
    <>
      {/*  Header Section */}
      <header className="bg-dark-brown text-white sm:pb-2 lg:py-6 w-full xs:mb-[-25px] lg:mb-[-40px]">
        <div className="flex  xs:gap-2 sm:gap-6 w-[90%] mx-auto">
          <Link className="xs:w-[120px] xs:h-[120px] xs:mt-2 sm:w-[160px] sm:h-[160px]
           lg:w-[170px] lg:mt-0 lg:h-[170px]" to={"/"}>
            <img src={images.bsulogo} alt="logo" />
          </Link>
          <div className="container mx-auto text-left mt-3">
            <h1 className="xs:text-[20px] sm:text-[40px] sm:leading-[3rem] lg:text-[55px] font-bold lg:mb-4 ">
              Benue State University, Makurdi.
            </h1>
            <p className="xs:text-[18px] sm:text-[28px] lg:text-[40px] font-cookie">
              Welcomes you to her Student election 2025.
            </p>
          </div>
        </div>
      </header>

      {/*  Navigation Section */}
      <nav
        className="sticky top-0 bg-dark-gray text-white shadow-md z-50 lg:py-2
        xs:mb-4 sm:mb-2 xs:w-[78%] sm:w-[82%] lg:w-[89%] clip-path-diagonal ml-auto"
        style={{ clipPath: "polygon(100% 0, 100% 100%, 0% 100%, 5% 0%)" }}
      >
        <BreadCrumbs />
      </nav>

    </>
  );
};


export default Navbar;