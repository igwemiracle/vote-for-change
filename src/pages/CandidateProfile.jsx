import React from "react";
import { useParams, Link } from "react-router-dom";
import { candidate as candidates } from "../constant";

const CandidateProfile = () => {
  const { id } = useParams(); // Get the candidate ID from the URL
  const candidate = candidates.find((c) => c.id === parseInt(id)); // Find the candidate by ID

  if (!candidate) {
    return (
      <div className="text-center text-red-500 font-bold text-xl py-10">
        Candidate not found!
      </div>
    );
  }

  return (
    <div className="relative text-white">
      {/* Profile Header */}
      <div className="relative text-[#2D3F51] py-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <img
            src={candidate.photo}
            alt={`${candidate.name}'s profile`}
            className="w-40 h-40 rounded-full shadow-lg mb-4 md:mb-0"
          />
          <div className="ml-6 text-center md:text-left">
            <h1 className="text-4xl font-bold">{candidate.name}</h1>
            <p className="text-lg mt-2">{candidate.bio}</p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto p-6">
        {/* Manifesto Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-[#2D3F51]">Manifesto</h2>
          <p className="text-gray-700">{candidate.manifesto}</p>
        </div>

        {/* Achievements Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-[#2D3F51]">Achievements</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {candidate.achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>

        {/* Timeline Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-[#2D3F51]">Timeline</h2>
          <ol className="border-l border-[#AF4D32] pl-4">
            {candidate.timeline.map((entry, index) => (
              <li key={index} className="mb-4">
                <div className="flex items-center mb-1">
                  <div className="bg-[#AF4D32] w-4 h-4 rounded-full border-2 border-white"></div>
                  <span className="ml-4 text-gray-600 text-lg font-semibold">{entry.year}</span>
                </div>
                <p className="ml-8 text-gray-600">{entry.event}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* Back Button */}
        <div className="text-center">
          <Link
            to="/candidates"
            className="bg-[#AF4D32] text-white py-2 px-6 rounded-lg shadow hover:bg-[#93412a] transition"
          >
            Back to Candidates
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CandidateProfile;
