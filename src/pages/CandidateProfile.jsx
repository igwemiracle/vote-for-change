import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const candidates = [
  { id: 1, name: 'Comr Shie Paul' },
  { id: 2, name: 'Comr John Tarka' },
  { id: 3, name: 'Comr James Akombo' },
];

const VotingPage = () => {
  const [selected, setSelected] = useState(null);
  const [hasVoted, setHasVoted] = useState(false);
  const navigate = useNavigate();

  // Check if the user has already voted
  useEffect(() => {
    const voted = localStorage.getItem('hasVoted');
    if (voted) {
      setHasVoted(true);
    }
  }, []);

  const handleSubmit = () => {
    if (selected) {
      // Mark the user as having voted
      localStorage.setItem('hasVoted', 'true');
      localStorage.setItem('votedCandidate', selected);

      // Redirect to the confirmation page with a vote success flag
      navigate('/confirmation', { state: { voteSuccess: true } });
    }
  };

  return (
    <div>
      {/* Voting Form */}
      {!hasVoted && (
        <div className="container mx-auto p-6 my-32">
          <h2 className="text-2xl font-bold mb-4 text-[#2D3F51]">Cast Your Vote</h2>
          <ul className="space-y-4">
            {candidates.map((candidate) => (
              <li key={candidate.id} className="border p-4 rounded-md">
                <label>
                  <input
                    type="radio"
                    name="candidate"
                    value={candidate.id}
                    onChange={() => setSelected(candidate.id)}
                    checked={selected === candidate.id} // Automatically check the voted candidate
                    className="mr-2"
                  />
                  {candidate.name}
                </label>
              </li>
            ))}
          </ul>
          <button
            onClick={handleSubmit}
            className="bg-[#2D3F51] text-white px-4 py-2 mt-6 rounded hover:bg-[#2A353E]"
            disabled={!selected}
          >
            Submit Vote
          </button>
        </div>
      )}
    </div>
  );
};

export default VotingPage;
