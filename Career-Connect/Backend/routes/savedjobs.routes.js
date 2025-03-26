import express from "express";
import { saveJob, getSavedJobs, removeSavedJob } from "../controllers/savedjobs.controller.js";
import authenticateToken from "../middleware/isAuthenticated.js";

const router = express.Router();

// Define API routes and link to the controller functions
router.post("/", authenticateToken, saveJob);
router.get("/", authenticateToken, getSavedJobs);
router.delete("/:jobId", authenticateToken, removeSavedJob);

export default router;
