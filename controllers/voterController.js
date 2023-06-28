const Voter = require("../models/voterModel");
const Candidate = require("../models/candidateModel");

//create a new Voter (done)

exports.NewVoter = async (req, res) => {

    try{
        const voter = await Voter.findOne({email:req.body.email})
        if(voter){
            res.status(409).json({message: "Voter already exist"});
        }
        else{
            const newVoter = await Voter.create({
                
                voterId:req.body.voterId,
                fullname: req.body.fullname,
                email:req.body.email,
                phoneNumber:req.body.phoneNumber,
                dateOfBirth:req.body.dateOfBirth,
                gender:req.body.gender,
                nationality:req.body.nationality,

            });
        
            res.status(201).json({message:"Voter created", data:newVoter});

        }
    }catch(error){
        console.log(error);
    }
};




//get all voters (done)

exports.allVoters = async (req, res) => {
    try {

    const voters = await Voter.find();
    res.status(200).json({ success: true, count: voters.length, data: voters });
  

    } catch (error) {
        console.log(error);
        res.status(500).json({success: false, message: "Error getting all voters", error: error.message });
    }
};



//to vote for one candidate (done)
exports.chooseCandidate = async (req,res) => {
    try {
      // const id = req.body.voterId;//voterID
      const voter = await Voter.findOne({voterId:req.body.voterId});
      if (!voter) {
        return res.status(404).json({message: "User not found"});
      }
  
      if (voter.hasVoted==true) {
        return res.status(404).json({message: "already voted"});
      }
      
      const candidate = await Candidate.findOne({candidateId:req.body.candidateId});
      if (!candidate) {
        return res.status(404).json({message: "Candidate not found"});
      }
  
      candidate.totalVotes += 1;
      await candidate.save();
  
      voter.hasVoted = true;
      await voter.save();

      res.status(201).json({message:'Vote recorded successfully'});

    } catch (error) {
      console.log(error);
    }
}
  

// exports.chooseCandidate = async (req, res) => {
//   try {
//     const voter = await Voter.findOne({ voterId: req.body.voterId });
//     if (!voter) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     if (voter.hasVoted == true) {
//       return res.status(404).json({ message: "Already voted" });
//     }

//     const candidate = await Candidate.findOne({ fullname: req.body.fullname });
//     if (!candidate) {
//       return res.status(404).json({ message: "Candidate not found" });
//     }

//     candidate.totalVotes += 1;
//     await candidate.save();

//     voter.hasVoted = true;
//     await voter.save();

//     res.status(201).json({ message: "Vote recorded successfully" });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: "Server error" });
//   }
// };




