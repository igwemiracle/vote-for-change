import React from 'react';
import { Link } from 'react-router-dom';
import { candidate as candidates } from '../constant';

const CandidateList = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-4xl font-bold text-center text-dark-gray mb-8">
          Meet the Candidates
        </h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {candidates.map((candidate) => (
            <div
              key={candidate.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
            >
              <div className="relative">
                <img
                  src={candidate.photo}
                  alt={candidate.name}
                  className="w-full h-56 object-cover"
                />
                {/* Gradient overlay to add depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40"></div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {candidate.name}
                </h3>
                {/* Optional short bio; fallback text provided */}
                <p className="text-gray-600 mb-4">
                  {candidate.shortBio || "Dedicated candidate with a vision for the future."}
                </p>
                <Link to={`/candidates/${candidate.id}`}>
                  <button className="w-full px-4 py-2 bg-dark-brown text-white rounded-md hover:bg-[#8F3D28] transition">
                    View Profile
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CandidateList;
