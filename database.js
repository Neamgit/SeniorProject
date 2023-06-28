const mongoose = require("mongoose");
const dotenv= require("dotenv");
// import mongoose from "mongoose";
// import  dotenv  from "dotenv";

dotenv.config();

//connect to the database through URL in env file

exports.connectDB = async() =>{
    try{
        await mongoose.connect(process.env.DB_URL);
        console.log("Connected to the database");
    }catch(error){
        console.log(error);
        process.exit(1);
    }
}