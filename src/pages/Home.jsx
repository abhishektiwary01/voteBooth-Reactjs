import React from 'react';
import VotersForm from '../components/VotersForm';

const Home = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-800 p-6">
      <div className="flex-shrink-0">
        <h1 className="text-4xl text-white font-bold mb-8 text-center">VOTING BOOTH</h1>
      </div>
      <div className="flex flex-grow justify-center items-center">
        <div className="w-full max-w-md mx-auto">
            <p className='inline-flex text-blue-400 text-2xl font-bold mb-6'>Candidate List</p>
            <p className='inline-flex text-blue-400 text-2xl font-bold mb-6 ml-14'>Vote Recieved</p>
          <VotersForm />
        </div>
      </div>
    </div>
  );
};

export default Home;
