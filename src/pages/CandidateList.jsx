import React from 'react';
import { Link } from 'react-router-dom';
import { candidate as candidates } from '../constant';


const CandidateList = () => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Meet the Candidates</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {candidates.map((candidate) => (
          <div key={candidate.id} className="bg-white rounded-lg shadow-md p-4 text-center">
            {/* Candidate Image */}
            <img
              src={candidate.photo}
              alt={candidate.name}
              className="w-32 h-32 mx-auto rounded-full object-cover border-2 border-gray-300"
            />

            {/* Candidate Name */}
            <h3 className="mt-4 text-lg font-semibold text-gray-900">{candidate.name}</h3>

            {/* View Details Button */}
            <Link to={`/candidates/${candidate.id}`}>
              <button className="mt-4 px-6 py-2 bg-[#AF4D32] text-white rounded-lg hover:bg-[#8F3D28] transition">
                View Profile
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CandidateList;
