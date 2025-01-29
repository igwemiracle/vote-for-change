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
      setMessage('Your vote has been successfully cast!');
      setTimeout(() => {
        navigate('/confirmation');
      }, 2000); // Redirect after 2 seconds
    }
  };

  return (
    <div>
      <div className="container mx-auto p-6 my-32">
        <h2 className="text-2xl font-bold mb-4">Cast Your Vote</h2>
        {message && (
          <p className={`mb-4 ${hasVoted ? 'text-red-500' : 'text-green-500'}`}>
            {message}
          </p>
        )}
        {!hasVoted ? (
          <>
            <ul className="space-y-4">
              {candidates.map((candidate) => (
                <li key={candidate.id} className="border p-4 rounded-md">
                  <label>
                    <input
                      type="radio"
                      name="candidate"
                      value={candidate.id}
                      onChange={() => setSelected(candidate.id)}
                      className="mr-2"
                    />
                    {candidate.name}
                  </label>
                </li>
              ))}
            </ul>
            <button
              onClick={handleSubmit}
              className="bg-blue-600 text-white px-4 py-2 mt-6 rounded hover:bg-blue-700"
              disabled={!selected}
            >
              Submit Vote
            </button>
          </>
        ) : (
          <button
            onClick={() => navigate('/')}
            className="bg-gray-600 text-white px-4 py-2 mt-6 rounded hover:bg-gray-700"
          >
            Go Back to Homepage
          </button>
        )}
      </div>
    </div>
  );
};

export default VotingPage;
