import React from 'react';
import { useParams, Link } from 'react-router-dom';

const CandidateProfile = () => {
  const { id } = useParams();
  const candidate = {
    1: { name: 'Comr Shie Paul', bio: 'Experienced leader...', manifesto: 'Better education...' },
    2: { name: 'Comr John Tarka', bio: 'Dedicated organizer...', manifesto: 'Innovative programs...' },
  }[id];

  return (
    <div>
      <div className="container mx-auto p-6">
        <h2 className="text-3xl font-bold">{candidate.name}</h2>
        <p className="mt-4"><strong>Bio:</strong> {candidate.bio}</p>
        <p className="mt-2"><strong>Manifesto:</strong> {candidate.manifesto}</p>
        <Link to="/candidates" className="text-blue-600 hover:underline mt-4 block">
          Back to Candidates
        </Link>
      </div>
    </div>
  );
};

export default CandidateProfile;
