const express = require("express");
const router = express.Router();
const electionController = require("../controllers/electionController");


router.post("/create", electionController.createElection);
router.delete("/delete/:id",electionController.deleteElection);


module.exports = router;