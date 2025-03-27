<<<<<<< HEAD
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { Bookmark } from "lucide-react";

const Job1 = ({ job }) => {
  const navigate = useNavigate(); 

  const daysAgoFunction = (mongodbTime) => {
    const createdAt = new Date(mongodbTime);
    const currentTime = new Date();
    const timeDifference = currentTime - createdAt;
    return Math.floor(timeDifference / (1000 * 24 * 60 * 60));
  };

  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">
          {daysAgoFunction(job?.createdAt) === 0
            ? "Today"
            : `${daysAgoFunction(job?.createdAt)} days ago`}
        </p>
        <Button variant="outline" className="rounded-full" size="icon">
          <Bookmark />
        </Button>
      </div>

      <div className="flex items-center gap-2 my-2">
        <Button className="p-6" variant="outline" size="icon">
          <Avatar>
            <AvatarImage src={job?.company?.logo} />
          </Avatar>
        </Button>
        <div>
          <h1 className="font-medium text-lg">{job?.company?.name}</h1>
          <p className="text-sm text-gray-500">India</p>
        </div>
      </div>

      <div>
        <h1 className="font-bold text-lg my-2">{job?.title}</h1>
        <p className="text-sm text-gray-600">{job?.description}</p>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <Badge className={"text-blue-700 font-bold"} variant="ghost">
          {job?.position} Positions
        </Badge>
        <Badge className={"text-[#F83002] font-bold"} variant="ghost">
          {job?.jobType}
        </Badge>
        <Badge className={"text-[#7209b7] font-bold"} variant="ghost">
          {job?.salary}LPA
        </Badge>
      </div>
      <div className="flex items-center gap-4 mt-4">
        <Button
          onClick={() => navigate(`/description/${job?._id}`)}
          variant="outline"
        >
          Details
        </Button>
        <Button className="bg-[#7209b7]">Save For Later</Button>
=======
import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Bookmark, BookMarked } from "lucide-react";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setSingleJob } from "@/redux/jobSlice";
import { toast } from "sonner";
import { SAVEDJOBS_API_ENDPOINT, APPLICATION_API_ENDPOINT } from "@/utils/data";

const Job1 = ({ job }) => {
  if (!job) {
    return <p className="text-red-500">Job data is missing.</p>;
  }

  const {
    company = {},
    title = "Untitled Job",
    description = "No description available.",
    position = "N/A",
    salary = "Not specified",
    location = "Unknown",
    jobType = "Unknown",
    _id,
    createdAt,
    applications = [],
  } = job;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.auth);
  
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isApplied, setIsApplied] = useState(false);

  // Fetch saved jobs and check if bookmarked
  useEffect(() => {
    const fetchSavedJobs = async () => {
      try {
        const response = await fetch(`${SAVEDJOBS_API_ENDPOINT}`, {
          credentials: "include",
        });
        const data = await response.json();
        if (data.some((savedJob) => savedJob.jobId === _id)) {
          setIsBookmarked(true);
        }
      } catch (error) {
        console.error("Error fetching saved jobs:", error);
      }
    };

    if (_id) fetchSavedJobs();
  }, [_id]);

  // Check if the user has already applied
  useEffect(() => {
    if (user?._id && applications.some((application) => application.applicant === user._id)) {
      setIsApplied(true);
    }
  }, [applications, user?._id]);

  // Handle bookmarking job
  const handleBookmarkClick = async () => {
    try {
      const response = await fetch(`${SAVEDJOBS_API_ENDPOINT}`, {
        method: isBookmarked ? "DELETE" : "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ jobId: _id }),
      });

      if (!response.ok) {
        throw new Error("Failed to update bookmark");
      }

      setIsBookmarked(!isBookmarked);
    } catch (error) {
      console.error("Error saving job:", error);
    }
  };

  // Handle job application
  const applyJobHandler = async () => {
    try {
      const res = await axios.get(`${APPLICATION_API_ENDPOINT}/apply/${_id}`, {
        withCredentials: true,
      });

      if (res.data.success) {
        setIsApplied(true);
        const updatedJob = {
          ...job,
          applications: [...job.applications, { applicant: user?._id }],
        };
        dispatch(setSingleJob(updatedJob));
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "An error occurred.");
    }
  };

  // Convert MongoDB timestamp to "days ago" format
  const daysAgo = (mongodbTime) => {
    if (!mongodbTime) return "N/A";
    const createdAt = new Date(mongodbTime);
    const timeDiff = new Date() - createdAt;
    return Math.floor(timeDiff / 86400000); // Convert ms to days
  };

  return (
    <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200">
      {/* Header Section */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <Avatar className="h-12 w-12">
            <AvatarImage
              src={company?.logo || "/default-logo.png"}
              alt={company?.name || "Company Logo"}
            />
          </Avatar>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{company?.name || "Unknown Company"}</h3>
            <p className="text-sm text-gray-500">{location}</p>
          </div>
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="text-gray-400 hover:text-blue-600 rounded-full"
          onClick={handleBookmarkClick}
        >
          {isBookmarked ? <BookMarked className="w-5 h-5" /> : <Bookmark className="w-5 h-5" />}
        </Button>
      </div>

      {/* Job Details */}
      <div className="mb-4">
        <h2 className="text-xl font-bold text-gray-900 mb-2">{title}</h2>
        <p className="text-gray-600 line-clamp-3 mb-4">{description}</p>

        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="text-blue-600 bg-blue-50">
            {position} Openings
          </Badge>
          <Badge variant="outline" className="text-emerald-600 bg-emerald-50">
            ₹{salary} LPA
          </Badge>
          <Badge variant="outline" className="text-purple-600 bg-purple-50">
            {jobType}
          </Badge>
        </div>
      </div>

      {/* Footer Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-t border-gray-100 pt-4">
        <div className="text-sm text-gray-500">
          Posted {daysAgo(createdAt) === 0 ? "today" : `${daysAgo(createdAt)} days ago`}
        </div>

        <div className="flex gap-2 w-full sm:w-auto">
          <Button
            variant="outline"
            className="w-full sm:w-auto px-6 border-gray-300 hover:border-gray-400"
            onClick={() => navigate(`/description/${_id}`)}
          >
            View Details
          </Button>
          <Button
            className={`w-full sm:w-auto px-6 ${isApplied ? "bg-gray-400 text-white cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 text-white"}`}
            onClick={isApplied ? null : applyJobHandler}
            disabled={isApplied}
          >
            {isApplied ? "Already Applied" : "Apply Now"}
          </Button>
        </div>
>>>>>>> Nik
      </div>
    </div>
  );
};

export default Job1;