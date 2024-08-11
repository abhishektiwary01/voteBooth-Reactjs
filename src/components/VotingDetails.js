import React, { useState } from 'react'
import VotersForm from './VotersForm';

export default function VotingDetails() {

  const[showModal, setShowModal] = useState(false);
  return (
    <>
    <div className='container text-center my-3'>
      
        <h1>Class Monitor vote</h1>
        <p>Total: 0</p>
        <button onClick={()=> setShowModal(true)}>Add new vote</button>
        
    </div>
    <div>
      <h2>Abhishek</h2>
      <p>Total:0</p>
    </div>
    <div>
      <h2>Pradeep</h2>
      <p>Total:0</p>
    </div>
    <div>
      <h2>Ashish</h2>
      <p>Total:0</p>
    </div>
    
    {showModal && <VotersForm onClose ={()=> setShowModal(false)}/>}
    </>
  )
}
