import React, { useState } from 'react';

const VotersForm = () => {
  const [votes, setVotes] = useState({ 1: 0, 2: 0, 3: 0 });
  const [selectedOption, setSelectedOption] = useState('');
  const [voterName, setVoterName] = useState('');

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleNameChange = (event) => {
    setVoterName(event.target.value);
    console.log(voterName);
  };

  const increaseValue = () => {
    if (selectedOption) {
      setVotes((prevVotes) => ({
        ...prevVotes,
        [selectedOption]: prevVotes[selectedOption] + 1,
      }));
    }
    alert(voterName +" " + "Has casted his vote");
  };

  return (
    <div>
      <div className='inline-flex max-w-md mx-auto'>
        <ul className='space-y-2'>
          <li className='text-xl text-white font-semibold'>Candidate 1 : Abhishek</li>
          <li className='text-xl text-white font-semibold'>Candidate 2 : Pradeep</li>
          <li className='text-xl text-white font-semibold'>Candidate 3 : Aashish</li>
        </ul>
        
        <ul className='space-y-2 ml-14'>
          <li className='text-xl text-white font-semibold'> {votes[1]}</li>
          <li className='text-xl text-white font-semibold'>{votes[2]}</li>
          <li className='text-xl text-white font-semibold'> {votes[3]}</li>
        </ul>
      </div>

      <h1 className="text-2xl text-blue-400 font-bold mb-4 mt-4">Cast Your Vote</h1>

      <div className='inline-flex items-center space-x-4 mb-4'>
        <p className='text-white font-bold text-2xl'>Name:</p>
        
        <input
          type="text"
          placeholder="Enter Voter's Name"
          className="border p-2 rounded-lg"
          value={voterName}
          onChange={handleNameChange}
        />
        
        <div className="bg-white shadow-md rounded">
          <select id="dropdown" value={selectedOption} onChange={handleDropdownChange} className="border p-2 rounded">
            <option value="">Select Candidate</option>
            <option value="1">Abhishek</option>
            <option value="2">Pradeep</option>
            <option value="3">Aashish</option>
          </select>
        </div>
        
        <button
          onClick={increaseValue}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Vote
        </button>
      </div>

      <p className="mt-2 text-white">Total Votes Polled: {Object.values(votes).reduce((a, b) => a + b, 0)}</p>
    </div>
  );
};

export default VotersForm;
