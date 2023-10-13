import React, { useState } from 'react';

function App() {
  const smileys = [
    { id: 1, name: '😊' },
    { id: 2, name: '😄' },
    { id: 3, name: '😍' },
  ];

  const [votes, setVotes] = useState(Array(smileys.length).fill(0));
  const [winner, setWinner] = useState(null);

  const handleVote = (index) => {
    const newVotes = [...votes];
    newVotes[index] += 1;
    setVotes(newVotes);
  };

  const handleShowResults = () => {
    const maxVotes = Math.max(...votes);
    const winningIndex = votes.indexOf(maxVotes);
    setWinner(smileys[winningIndex].name);
  };

  return (
    <div>
      <h1>Smiley List</h1>
      <ul>
        {smileys.map((smiley, index) => (
          <li key={smiley.id}>
            {smiley.name}
            <button onClick={() => handleVote(index)}>Vote</button>
            <span> Votes: {votes[index]}</span>
          </li>
        ))}
      </ul>
      <button onClick={handleShowResults}>Show Results</button>
      {winner && <p>Winner: {winner}</p>}
    </div>
  );
}

export default App;