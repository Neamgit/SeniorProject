 import React, { useState }  from 'react';
 import axios from 'axios';
 import "./VoteNow.css";

 function VoteNow() {
    const [voterId, setVoterId] = useState('');
    const [candidateId, setCandidateId] = useState('');
    const [message, setMessage] = useState('');
  
    const handleFormSubmit = async (event) => {
      event.preventDefault();
  
      try {
        const response = await axios.post('http://localhost:5000/api/vote/chooseCandidate', {
          voterId,
          candidateId,
        });
        setMessage(response.data.message);
      } catch (error) {
        console.log(error);
      }
    };
  
    return (
      <div className='container'>
      <div className="title"> Vote Here!! </div>

      <form onSubmit={handleFormSubmit}>
      <div className='user-details'>

      <div className='input-box'>
       
        <label htmlFor="voterId"  class='details'>Voter ID:</label>
        <input
          type="text"
          id="voterId"
          value={voterId}
          onChange={(event) => setVoterId(event.target.value)}
        />
      </div>

      <div className='input-box'>
       
        <label htmlFor="candidateId">Candidate ID:</label>
        <input
          type="text"
          id="candidateId"
          value={candidateId}
          onChange={(event) => setCandidateId(event.target.value)}
        />
      </div>

      <div className='button'>
        <input type="submit" value="Vote" />
        {message && <p>{message}</p>}
      </div>
      </div>
        {/* <button type="submit">Vote</button>
        {message && <p>{message}</p>}
        </div> */}
      </form>
      </div>
    );
 }
 
 export default VoteNow

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const VoteNow = () => {
//   const [voterId, setVoterId] = useState("");
//   const [candidates, setCandidates] = useState([]);
//   const [fullname, setSelectedCandidate] = useState("");
//   const [message, setMessage] = useState('');

//   const fetchCandidates = async () => {
//     try {
//       const response = await axios.get("http://localhost:5000/api/votes/results");
//       setCandidates(response.data.candidates);
     
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     fetchCandidates();
//   }, []);

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post("http://localhost:5000/api/vote/chooseCandidate", {
//         voterId: voterId,
//         fullname: fullname,
//       });
//       setMessage(response.data.message);
//       console.log(response.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleFormSubmit}>
//         <div>
//           <label htmlFor="voterId">Voter ID: </label>
//           <input
//             type="text"
//             id="voterId"
//             value={voterId}
//             onChange={(e) => setVoterId(e.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor="fullname">Candidates: </label>
//           <select
//             id="fullname"
//             value={fullname}
//             onChange={(e) => setSelectedCandidate(e.target.value)}
//           >
//             <option value="">--Select a candidate--</option>
//             {candidates.map((candidate) => (
//               <option key={candidate._id} value={candidate.fullname}>
                
//                 {candidate.fullname}
//               </option>
//             ))}
//           </select>
//         </div>
//         <button type="submit">Vote</button>
//         {message && <p>{message}</p>}
//       </form>
//     </div>
//   );
// };

// export default VoteNow;