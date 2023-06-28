const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const candidateSchema = new mongoose.Schema({
    fullname:{
        type:String,
        required:true,
    },

    email: {
        type: String,
        required: true,
        unique: true
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
    //     type: String,
    //     enum: ['male', 'female'],
    //     required: true
    // },

    nationality: {
        type: String,
        required: true
    },

//الدائرة الأنتخابية
    constituency: {
        type: String,
        enum: ['Constituency A', 'Constituency B', 'Constituency C'],
    },
//الانتماء الحزبي
    partyAffiliation:{
        type:String,
        enum:["Democratic Party","Republican Party","Libertarian Party","Socialist Party","Independent"],
    },

    // biography:{
    //     type:String,
    //     default:"",
    //     minlength:5,
    //     maxlength:500,
    //     trim:true,
    // },

//الحملة
    // campaignPlatform:{
    //     type:String,
    // }, 
    
    // electionType: {
    //     type: String,
    //     required: true,
    //   },

    candidateId:{
        type:Number,
        required:true,
    },

    totalVotes:{
        type:Number,
        default:0,
        required:true,
    },
    
    Img:{
        type:String,
        default:"",
    },
   
},
{timestamps:true}
);

module.exports=mongoose.model("Candidate", candidateSchema)