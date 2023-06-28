const express = require("express");
const router = express.Router();
const candidateController = require("../controllers/candidateController");

router.post("/newCandidate",candidateController.newCandidate);

router.get("/results",candidateController.getCandidatesByVotes);
router.get("/winner",candidateController.getWinner);

module.exports=router;