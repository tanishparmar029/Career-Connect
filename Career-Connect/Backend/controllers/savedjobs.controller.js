import SavedJob from "../models/savedjobs.model.js";
import { Job } from "../models/job.model.js";
import { Company } from "../models/company.model.js";

/** 
 * @desc    Save a job for the authenticated user
 * @route   POST /api/savedjobs
 */
export const saveJob = async (req, res) => {
  try {
    const { jobId } = req.body;
    const userId = req.id; // Extracted from JWT middleware

    // Check if the job is already saved
    const existingSave = await SavedJob.findOne({ userId, jobId });
    if (existingSave) {
      return res.status(400).json({ message: "Job already saved" });
    }

    // Save the job
    const savedJob = new SavedJob({ userId, jobId });
    await savedJob.save();

    res.status(201).json({ message: "Job saved successfully", savedJob });
  } catch (error) {
    console.error("Error saving job:", error);
    res.status(500).json({ message: "Error saving job", error });
  }
};

/** 
 * @desc    Get saved jobs for the authenticated user
 * @route   GET /api/savedjobs
 */
export const getSavedJobs = async (req, res) => {
  try {
    const userId = req.id;

    // Fetch saved jobs for the user and populate job and company details
    const savedJobs = await SavedJob.find({ userId })
      .populate({
        path: "jobId",
        populate: {
          path: "company",
          model: "Company",
          select: "name logo", // Only fetch company name and logo
        },
      });

    res.status(200).json(savedJobs);
  } catch (error) {
    console.error("Error fetching saved jobs:", error);
    res.status(500).json({ message: "Error fetching saved jobs", error });
  }
};

/** 
 * @desc    Remove a saved job for the authenticated user
 * @route   DELETE /api/savedjobs/:jobId
 */
export const removeSavedJob = async (req, res) => {
  try {
    const userId = req.id;
    const { jobId } = req.params;

    // Remove the saved job
    const deletedJob = await SavedJob.findOneAndDelete({ userId, jobId });

    if (!deletedJob) {
      return res.status(404).json({ message: "Job not found in saved list" });
    }

    res.status(200).json({ message: "Job removed from saved list" });
  } catch (error) {
    console.error("Error removing saved job:", error);
    res.status(500).json({ message: "Error removing saved job", error });
  }
};
