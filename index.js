const express = require("express");
const cors = require("cors");
const app = express();

const DB = require("./database").connectDB;

app.use(cors());


// app.get("/getData",(req,res)=>{
//     res.send("Hello");
// });


const voterRouter = require("./routers/voterRouter");
const candidateRouter = require("./routers/candidateRouter");
const authRouter = require("./routers/authRouter");
const electionRoute = require("./routers/electionRoute");
// import authRouter from "../backend/routers/authRouter.js";
DB();

app.use(express.json());

app.use("/api/voter", voterRouter);
app.use("/api/all",voterRouter);
app.use("/api/vote",voterRouter);

app.use("/api/candidate",candidateRouter);
app.use("/api/votes",candidateRouter);
app.use("/api/candidate",candidateRouter);

app.use("/api/signup",authRouter);
app.use("/api/login",authRouter);

app.use("/api/election",electionRoute);
app.use("/api/electiondl",electionRoute);

app.listen(5000, () => {
    console.log("Listening on port 5000");
});
