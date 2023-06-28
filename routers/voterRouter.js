const express = require("express");
const router = express.Router();

const voterController = require("../controllers/voterController");

router.post("/newVoter",voterController.NewVoter);

router.get("/allVoters",voterController.allVoters);

// router.get("/CheckVotes/:id",voterController.CheckVotes);

router.post("/chooseCandidate",voterController.chooseCandidate);

module.exports=router;