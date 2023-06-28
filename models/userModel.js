const mongoose = require('mongoose');
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  
fullname: { 
    type: String, 
    required: true 
},


email: { 
    type: String, 
    required: true, 
    unique: true 
},

  
password: { 
    type: String, 
    required: true 
},

passwordConfirm:{
  type:String,
  required: true
},

phoneNumber: {
  type: String,
  required: true
},

  userType: { 
    type: String, 
    enum: ['voter', 'candidate'], 
    required: true 
},

dateOfBirth: {
  type: Date,
  required: false,
  validate: [
      function(value) {
          const age = Math.floor((new Date() - value) / (365 * 24 * 60 * 60 * 1000)); // calculate age in years
          return age >= 18 && age <= 65; // validate age range
      },
      'Voter must be between 18 and 65 years old' // error message if age is invalid
  ]
},

// gender: {
//   type: String,
//   enum: ['male', 'female'],
//   required: true
// },

nationality: {
  type: String,
  required: true
},

},{ discriminatorKey: 'userType' },{timestamps:true});
//automated function (betsawe run la7ela)
// userSchema.pre("save",async function(next){
//   try{
//       if(!this.isModified("password")){
//           return next();
//       }

//       this.password = await bcrypt.hash(this.password,12);
//       this.passwordConfirm = undefined;

//   }catch(err){
//       console.log(err);
//   }
// });

//This function will always return 1 value : true or false
// userSchema.methods.checkPassword = async function (
//   CandidatePassword, //Coming from the frontEnd as a plain text
//   userPassword // Coming from the database as a hashed value
// ){
//   return await bcrypt.compare(CandidatePassword, userPassword);
// };

module.exports = mongoose.model('User', userSchema);