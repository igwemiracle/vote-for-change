import React from "react";
import { Link } from "react-router-dom";

const CardLayout = ({ title, description, icon, buttonText, link, scrollToElectionDetails }) => {
  const handleClick = () => {
    if (title === "Election Details") {
      scrollToElectionDetails(); // 👈 Scroll only for "Election Details"
    }
  };
  // hover: -translate - y - 4
  return (
    <div className="bg-[#AF4D32] rounded-lg shadow-lg p-6 lg:w-80 text-center transition duration-300 hover:shadow-xl 
  xs:w-64"
    >


      {/* Card Image */}
      <img src={icon} alt={title} className="sm:w-[4rem] sm:h-[4rem] w-16 h-16 mx-auto mb-2 rounded-full shadow-md bg-[#FFFFFF]" />

      {/* Card Title */}
      <h3 className="sm:text-[1.4rem] font-bold text-white text-[22px]">{title}</h3>

      {/* Card Description */}
      <p className="text-gray-200 sm:text-base mb-4 text-[12px]">{description}</p>


      {/* Action Button */}
      {title === "Election Details" ? (
        <button
          onClick={handleClick}
          className="text-[#AF4D32] rounded-[60px] py-2 text-center px-4 border border-white bg-white 
          mt-2 hover:-translate-y-1 hover:bg-[#AF4D32] hover:text-white h transition duration-300"
        >
          {buttonText}
        </button>
      ) : (
        <button onClick={link} className="text-[#AF4D32] rounded-[60px] text-center border border-white bg-white py-2  px-4 
         mt-2 hover:-translate-y-1 hover:bg-[#AF4D32] hover:text-white h transition duration-300">
          {buttonText}
        </button>
      )}
    </div>
  );
};

export default CardLayout;
