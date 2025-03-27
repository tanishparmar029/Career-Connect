<<<<<<< HEAD
import React from "react";
=======
import React, { useEffect, useState } from "react";
>>>>>>> Nik
import Navbar from "./Navbar";
import Filtercard from "./Filtercard";
import Job1 from "./Job1";
import Footer from "./Footer";
<<<<<<< HEAD

const jobsArray = [1, 2, 3, 4, 5, 6, , 7, 8, 9, 10, 11, 12];
const Jobs = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className="max-w-8xl mx-auto mt-5 px-4">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Sidebar Filter Section */}
            <div className="lg:w-1/4 w-full bg-white shadow-md rounded-lg p-6 h-fit mb-6 lg:mb-0">
              <h2 className="text-lg font-semibold mb-4">Filters</h2>
              <Filtercard />
            </div>

            {/* Job List Section */}
            <div className="flex-1">
              {jobsArray.length <= 0 ? (
                <p className="text-center text-gray-500 text-lg mt-10">
                  No jobs available
                </p>
              ) : (
                <div className="h-[88vh] overflow-y-auto pb-5 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                  <h2 className="text-2xl font-bold mb-6">Job Listings</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {jobsArray.map((job, index) => (
                      <Job1 key={index} job={job} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
=======
import { useSelector } from "react-redux";
import { use } from "react";
import { motion  } from "framer-motion";

const Jobs = () => {
  const { allJobs, searchedQuery } = useSelector((store) => store.jobs); //jobs instead of job
  const [filterJobs, setFilterJobs] = useState(allJobs);

  useEffect(() => {
    // If no search query is provided, reset to all jobs
    //     if (searchedQuery)
    if (!searchedQuery || searchedQuery.trim() === "") {
      setFilterJobs(allJobs);
      return;
    }

    // Filter based on the searched query across various fields (title, description, etc.)
    const filteredJobs = allJobs.filter((jobs) => {
      const query = searchedQuery.toLowerCase();
      return (
        jobs.title?.toLowerCase().includes(query) ||
        jobs.description?.toLowerCase().includes(query) ||
        jobs.location?.toLowerCase().includes(query) ||
        jobs.experience?.toLowerCase().includes(query) ||
        jobs.salary?.toLowerCase().includes(query)
      );
    });

    setFilterJobs(filteredJobs);
  }, [allJobs, searchedQuery]);

   return (
    <>
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto mt-5">
        <div className="flex gap-5">
          <div className="w-1/5">
            <Filtercard />
          </div>

          {filterJobs.length <= 0 ? (
            <span>Job not found</span>
          ) : (
            <div className="flex-1 h-[88vh] overflow-y-auto pb-5">
              <div className="grid grid-cols-2 gap-4">
                {filterJobs.map((jobs) => (
                  <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }} 
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.4 }}
                    key={jobs.id}
                  >
                    <Job1 job={jobs} />
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
    <Footer />
>>>>>>> Nik
    </>
  );
};

export default Jobs;
