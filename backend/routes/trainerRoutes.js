const express = require("express");
const router = express.Router();

const {
  getDashboard,
  reviewRoadmap,
  getCandidates,
  getCandidateDetails,
  completeTraining,
  toggleTask,
  downloadCV
} = require("../controllers/trainerController");

const { protect, authorize } = require("../middleware/authMiddleware");

router.get("/dashboard", getDashboard);
router.post("/roadmap/:id/review", reviewRoadmap);
router.post("/roadmap/:roadmapId/task/toggle", toggleTask);
router.get("/candidates", getCandidates);
router.get("/candidate/:id", getCandidateDetails);
router.post("/candidate/:id/complete", completeTraining);
router.get("/candidate/:id/download-cv", downloadCV);

module.exports = router;