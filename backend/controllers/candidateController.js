const Candidate = require('../models/Candidate');

// @desc    Get all candidates and pipeline stats
// @route   GET /api/hr/dashboard
// @access  Private/HR
exports.getDashboardData = async (req, res) => {
  try {
    const candidates = await Candidate.find({});

    const totalCandidates = candidates.length;
    const inReview = candidates.filter(c => c.status === 'IN REVIEW').length;
    const inTraining = candidates.filter(c => c.status === 'IN TRAINING').length;
    const completed = candidates.filter(c => c.status === 'COMPLETED').length;

    res.status(200).json({
      success: true,
      data: {
        stats: {
          totalCandidates,
          inReview,
          inTraining,
          completed
        },
        candidates
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Add a new candidate (for testing/seeding)
// @route   POST /api/hr/candidates
// @access  Private/HR
exports.addCandidate = async (req, res) => {
  try {
    const candidate = await Candidate.create(req.body);
    res.status(201).json({
      success: true,
      data: candidate
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
