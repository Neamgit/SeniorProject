const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const voterSchema = new mongoose.Schema({

    fullname:{
        type:String,
        required: [true,'Please enter your FullName'],
        minlength: 5,
        trim: true,     
    },
    email: {
        type: String,
        required: true,
        // unique: true
    },

    phoneNumber: {
        type: String,
        required: true
    },


    dateOfBirth: {
        type: Date,
        required: true,
        validate: [
          function(value) {
              const age = Math.floor((new Date() - value) / (365 * 24 * 60 * 60 * 1000)); // calculate age in years
              return age >= 18 && age <= 65; // validate age range
          },
          'Voter must be between 18 and 65 years old' // error message if age is invalid
      ]
    },

    // gender: {
    //     type: String,
    //     enum: ['male', 'female'],
    //     required: true
    // },

    nationality: {
        type: String,
        required: true
    },
    
    voterId: {
        type: Number,
        required: true,
        unique: true,
    },

    hasVoted: {
        type: Boolean,
        default: false
    },

    // constituency: {
    // type: String,
    // // required: true
    // },
        
    // elections: [{
    //     type: Schema.Types.ObjectId,
    //     ref: 'Election'
    // }]
},
{timestamps:true}
);

module.exports=mongoose.model("Voter", voterSchema);