const Candidate = require("../models/candidateModel");

//create a new candidate (done)

exports.newCandidate = async (req, res) => {

        try{
            const candidate = await Candidate.findOne({email:req.body.email
            })
            if(candidate){
                res.status(409).json({message: "Candidate already exist"});
            }
            else{
                const newCandidate = await Candidate.create({

                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    email:req.body.email,
                    dateOfBirth:req.body.dateOfBirth,
                    gender:req.body.gender,
                    nationality:req.body.nationality,
                    constituency:req.body.constituency,
                    partyAffiliation:req.body.partyAffiliation,
                    // electionType:req.body.electionType,
                    candidateId:req.body.candidateId,
                    totalVotes:req.body.totalVotes,

                });
            
                res.status(201).json({message:"Candidate created", data:newCandidate});

            }
        }catch(error){
            console.log(error);
        }
};


//get all candidates in descending order according to the totalVotes
exports.getCandidatesByVotes = async (req, res) => {
    try {
      const candidates = await Candidate.find();
      if (!candidates) {
        return res.status(404).json({ message: "No candidates found" });
      }
  
      // Sort candidates by total votes in descending order
      const sortedCandidates = candidates.sort((a, b) => b.totalVotes - a.totalVotes);
  
      res.status(200).json({ candidates: sortedCandidates });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Server error" });
    }
};

//get the winner candidate that have highest totalVote
exports.getWinner = async (req, res) => {
    try {
        const candidates = await Candidate.find({});
    
        const candidateWithHighestVotes = exports.getCandidatesByVotes(candidates)[0];
    
        res.status(200).json({
          message: "Candidate with highest votes",
          candidate: candidateWithHighestVotes,
          data:candidates[0]
        });
      } catch (error) {
        console.log(error);
    }
};
  
  
