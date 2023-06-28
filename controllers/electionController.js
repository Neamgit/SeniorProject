const Election = require("../models/electionModel");
const Candidate = require("../models/candidateModel");


//create an election (done but the list of candidates doesn't appear)
exports.createElection = async (req, res) => {
    
  const { name, startDate, endDate,electionType} = req.body;
//   const { electionType } = req.query;

  try {
    
    // const candidates = await Candidate.find({electionType:electionType});
   
    const newElection = await Election.create({
      name,
      startDate, 
      endDate,
      electionType,
    //   candidates,
    });

    res.status(201).json({message:"Election created", data:newElection});

    // await newElection.save();
}catch(error){
    console.log(error);
}
};


//delete election
exports.deleteElection = async (req, res) => {
    try {
      const election = await Election.findByIdAndDelete(req.params.id);
  
      if (!election) {
        return res.status(404).json({ msg: 'Election not found' });
      }
  
      return res.json({ msg: 'Election deleted successfully' });
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server Error');
    }
};
