import React from "react";
import { Link } from "react-router-dom";

const CardLayout = ({ title, description, icon, buttonText, link, scrollToElectionDetails }) => {
  const handleClick = () => {
    if (title === "Election Details") {
      scrollToElectionDetails(); // 👈 Scroll only for "Election Details"
    }
  };

  return (
    <div
      className="bg-[#AF4D32] rounded-lg shadow-lg p-6 w-64 flex flex-col items-center justify-between text-center
      transition duration-300 hover:shadow-xl hover:-translate-y-4"
    >


      {/* Card Image */}
      <img src={icon} alt={title} className="w-24 h-24 mb-4 rounded-full shadow-md bg-[#FFFFFF]" />

      {/* Card Title */}
      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>

      {/* Card Description */}
      <p className="text-gray-200 text-base mb-4">{description}</p>


      {/* Action Button */}
      {title === "Election Details" ? (
        <button
          onClick={handleClick}
          className="text-[#AF4D32] px-4 py-2 rounded-[60px]  border border-white bg-white"
        >
          {buttonText}
        </button>
      ) : (
        <Link to={link} className="text-[#AF4D32] rounded-[60px] border border-white px-4 py-2 bg-white">
          {buttonText}
        </Link>
      )}
    </div>
  );
};

export default CardLayout;
