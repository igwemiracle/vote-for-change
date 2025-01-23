import React from 'react';
import { Link } from 'react-router-dom';

const candidates = [
  { id: 1, name: 'Comr Shie Paul' },
  { id: 2, name: 'Comr John Tarka' },
];

const CandidateList = () => {
  return (
    <div>
      <div className="container mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4">Candidates</h2>
        <ul className="space-y-4">
          {candidates.map((candidate) => (
            <li key={candidate.id} className="border p-4 rounded-md">
              <Link to={`/candidates/${candidate.id}`} className="text-blue-600 hover:underline">
                {candidate.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CandidateList;
