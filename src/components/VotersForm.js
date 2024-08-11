import React from 'react'

export default function VotersForm(props) {
  return (
    <div>
      <form >
        <label htmlFor="name">Student Name :</label>
        <input type="text" name="name" id="name" />

        <label htmlFor="monitor">Choose Monitor :</label>
        <select id='monitor'>
            <option value="1">Abhishek</option>
            <option value="2">Pradeep</option>
            <option value="3">Ashish</option>
        </select>
        <button className='mx-2'>vote</button>
        <button onClick={props.onClose} className='mx-2'>x</button>

      </form>
    </div>
  )
}
