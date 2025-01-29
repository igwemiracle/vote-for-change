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
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  // Check if the user has already voted
  useEffect(() => {
    const voted = localStorage.getItem('hasVoted');
    if (voted) {
      setHasVoted(true);
      setMessage('You have already cast your vote and cannot vote again.');
    }
  }, []);

  const handleSubmit = () => {
    if (selected) {
      // Mark the user as having voted
      localStorage.setItem('hasVoted', 'true');
      localStorage.setItem('votedCandidate', selected);
      setTimeout(() => {
        navigate('/confirmation');
      }, 2000); // Redirect after 2 seconds
    }
  };

  return (
    <div className="relative">
      {/* Message display when already voted */}
      {hasVoted && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50"
        >
          <div
            className="p-6 max-w-md w-full bg-white rounded-lg shadow-lg text-center mx-4 sm:mx-auto sm:w-1/2 md:w-1/3"
          >
            <div className="mb-4">
              <img
                src="https://img.icons8.com/ios/452/error.png"
                alt="Already Voted"
                className="h-16 w-16 mx-auto"
              />
            </div>
            <p className="text-xl font-medium text-[#2D3F51]">{message}</p>
            <button
              onClick={() => navigate('/')}
              className="mt-6 bg-[#2D3F51] text-white px-6 py-3 rounded-lg hover:bg-[#2A353E] focus:outline-none"
            >
              Go Back to Homepage
            </button>
          </div>
        </div>
      )}

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
                    checked={selected === candidate.id}
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
