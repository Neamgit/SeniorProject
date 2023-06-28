const mongoose = require('mongoose');

const electionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  electionType: {
    type: String,
    required: true,
  },
  candidates: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Candidate',
  }],
});

const Election = mongoose.model('Election', electionSchema);

module.exports = Election;
