
// const bcrypt = require('bcrypt');
const User = require('../models/userModel');
const Voter = require('../models/voterModel');
const Candidate = require('../models/candidateModel');
const validator=require("validator");
// Sign-up endpoint

exports.signUp = async (req, res) => {
  const { fullname,email,password,passwordConfirm,userType} = req.body;
  const discriminatoryKey = req.body.voterId || req.body.candidateId;

  try {

    //1-Check if the email entered is valid
    
    if(!validator.isEmail(email)){
        return res.status(400).json({message:"Invalid email."});
    }

      //2-Check if the email is already in use
       
        const checkEmail = await User.findOne({email: req.body.email});
        if(checkEmail){
            return res.status(409).json({message:"Email already in use."}); //409:conflict
        }


    //3-Check if the password and the password confirm are the same
    
    if(password!==passwordConfirm){
        return res.status(400).json({message:"Password and passwordConfirm are not the same."});
    }

    // Hash the password before saving to the database
    // const hashedPassword = await bcrypt.hash(password, 12);

    // Create a new user object
    const newUser = new User({
      fullname,
      email,
      password,
      passwordConfirm,
      phoneNumber:req.body.phoneNumber,
      dateOfBirth:req.body.dateOfBirth,
      // gender:req.body.gender,
      nationality:req.body.nationality,
      userType,
      discriminatoryKey,
    });

    // Save the new user to the database
    await newUser.save();

    // If the user is a voter, create a new voter object
    if (userType === 'voter') {
      const newVoter = new Voter({
        
        fullname: req.body.fullname,
        email:req.body.email,
        phoneNumber:req.body.phoneNumber,
        dateOfBirth:req.body.dateOfBirth,
        // gender:req.body.gender,
        nationality:req.body.nationality,
        voterId:req.body.voterId,
        discriminatoryKey,      
       
      });
      await newVoter.save();
    }

    // If the user is a candidate, create a new candidate object
    if (userType === 'candidate') {
      const { constituency, partyAffiliation,candidateId } = req.body;
      const newCandidate = new Candidate({
        email,
        fullname,
        phoneNumber:req.body.phoneNumber,
        dateOfBirth:req.body.dateOfBirth,
        // gender:req.body.gender,
        nationality:req.body.nationality,
        partyAffiliation,
        candidateId,
        constituency,
        totalVotes:req.body.totalVotes,
        discriminatoryKey,
        
    });
    await newCandidate.save();
    }
     res.status(201).json({ message: 'User created successfully', data:{newUser} });
     
    }catch(err){
        console.log(err);
        res.status(500).json({ message: "Internal server error" });
    };
};


exports.login = async (req,res) => {
  try{
      //1:check if the user email exit in the BD
      const user = await User.findOne({email: req.body.email});
      if(!user){
          return res.status(404).json({message: "The user does not exist"});
      }

      //2:check if the entered password is matching with the hashed stored password
      // if(!(await user.checkPassword(req.body.password ,user.password))){
      //     return res.status(401).json({message: "Incorrect email or password"});
      // }
      //---first way---
        // const comparePasswords = await bcrypt.compare(req.body.password,user.password)
        // if(!comparePasswords){
        //     return res.status(400).json({message:"Incorrect credentials"})
        // }
      if(req.body.password!=user.password){
        return res.status(400).json({message:"Incorrect credentials"});
      }
      //3: If everything is ok ,Log the user in 
      return res.status(200).json({message:"You are logged in successfully!!"});

  }catch(err){
      console.log(err);
  }
};


