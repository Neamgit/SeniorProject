import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AllCandidates() {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/votes/results');
        setCandidates(response.data.candidates);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className='container'>
      <h2>Candidates by Votes</h2>
      <div className="title"></div>

      <table border={1}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Party Affiliation</th>
            <th>Total Votes</th>
          </tr>
        </thead>
        <tbody>
          {candidates.map((candidate) => (
            <tr key={candidate._id}>
              <td>{candidate.fullname}</td>
              <td>{candidate.email}</td>
              <td>{candidate.partyAffiliation}</td>
              <td>{candidate.totalVotes}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default AllCandidates;
