const mongoose = require('mongoose');

const candidateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide candidate name']
  },
  email: {
    type: String,
    required: [true, 'Please provide candidate email'],
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please add a valid email'
    ]
  },
  roleApplied: {
    type: String,
    required: [true, 'Please provide applied role']
  },
  matchScore: {
    type: Number, // Percentage 0-100
    required: true,
    min: 0,
    max: 100
  },
  status: {
    type: String,
    enum: ['IN REVIEW', 'IN TRAINING', 'APPROVED', 'COMPLETED'],
    default: 'IN REVIEW'
  },
  resumePath: {
    type: String
  },
  aiInsight: {
    type: String
  }
}, { timestamps: true });

module.exports = mongoose.model('Candidate', candidateSchema);
