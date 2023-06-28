import "./NewElection.css";
import React, { useState } from 'react';
import axios from 'axios';


const NewElection = () => {
  const [name, setName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [electionType, setElectionType] = useState('');

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/election/create', {
        name,
        startDate,
        endDate,
        electionType,
      });
      console.log(response.data); // Handle successful response
    } catch (error) {
      console.log(error); // Handle error response
    }
  };

  return (
    <div className="container">
      <div className="title"> Create New Election </div>
      
    <form onSubmit={handleFormSubmit} action="#">
    <div className='user-details'>

      <div className='input-box'>
       
          <label htmlFor="name"  class='details'>Name:</label>
        
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
       
        <div className='input-box' >
          <label htmlFor="startDate" class='details'>Start Date:</label>
      
          <input
            type="date"
            id="startDate"
            value={startDate}
            onChange={(event) => setStartDate(event.target.value)}
          />
        </div>
        <div className='input-box'>
        <label htmlFor="endDate"  class='details'>End Date:</label>
    
            <input
            type="date"
            id="endDate"
            value={endDate}
            onChange={(event) => setEndDate(event.target.value)}
          />
   </div>

   <div className='input-box'>
      <label htmlFor="electionType"  class='details'>Election Type:</label>
     
      <input
        type="text"
        id="electionType"
        value={electionType}
        onChange={(event) => setElectionType(event.target.value)}
      />
   </div>

   <div className='button'>
      <input type="submit" value="Create" />
    </div>
     

</div>
    </form>
    </div>
  );
};

export default NewElection;
