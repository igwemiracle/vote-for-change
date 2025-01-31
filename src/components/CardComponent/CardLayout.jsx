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
    <div
      className="bg-[#AF4D32] rounded-lg shadow-lg p-6 lg:w-80 text-center
      transition duration-300 hover:shadow-xl 
      xs:w-64"
    >


      {/* Card Image */}
      <img src={icon} alt={title} className="w-24 h-24 xs:w-16 xs:h-16 mx-auto mb-2 rounded-full shadow-md bg-[#FFFFFF]" />

      {/* Card Title */}
      <h3 className="text-2xl font-bold text-white xs:text-[22px]">{title}</h3>

      {/* Card Description */}
      <p className="text-gray-200 text-base mb-4 xs:text-[12px]">{description}</p>


      {/* Action Button */}
      {title === "Election Details" ? (
        <button
          onClick={handleClick}
          className="text-[#AF4D32]  py-2 text-center px-4 rounded-[60px]  border border-white bg-white 
          mt-2"
        >
          {buttonText}
        </button>
      ) : (
        <button onClick={link} className="text-[#AF4D32] rounded-[60px] border border-white bg-white
       py-2 text-center px-4 mt-2">
          {buttonText}
        </button>
      )}
    </div>
  );
};

export default CardLayout;
