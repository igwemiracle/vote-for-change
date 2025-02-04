import React from "react";
import { Link } from "react-router-dom";

const CardLayout = ({ title, description, icon, buttonText, link, scrollToElectionDetails }) => {
  const handleClick = () => {
    if (title === "Election Details") {
      scrollToElectionDetails();
    }
  };
  return (
    <div className="bg-dark-brown rounded-lg shadow-lg p-6 lg:w-80 text-center transition duration-300 hover:shadow-xl 
  xs:w-64"
    >
      <img src={icon} alt={title} className="sm:w-[4rem] sm:h-[4rem] w-16 h-16 mx-auto mb-2 rounded-full shadow-md bg-[#FFFFFF]" />

      <h3 className="sm:text-[1.4rem] font-bold text-white text-[22px]">{title}</h3>
      <p className="text-gray-200 sm:text-base mb-4 text-[12px]">{description}</p>
      {title === "Election Details" ? (
        <button
          onClick={handleClick}
          className="text-dark-brown rounded-[60px] py-2 text-center px-4 border border-white bg-white 
          mt-2 hover:-translate-y-1 hover:bg-dark-brown hover:text-white transition duration-300"
        >
          {buttonText}
        </button>
      ) : (
        <div className="lg:mt-9 mt-4 hover:-translate-y-1 transition duration-300">
          <Link to={link} className="text-dark-brown rounded-[60px] text-center border border-white bg-white py-2  px-4 
           hover:bg-dark-brown hover:text-white ">
            {buttonText}
          </Link>
        </div>
      )}
    </div>
  );
};

export default CardLayout;
