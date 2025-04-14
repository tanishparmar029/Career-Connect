  import React, { useEffect, useState } from "react";
  import axios from "axios";
  import Navbar from "./Navbar";
  import Footer from "./Footer";
  import Job1 from "./Job1"; // Reuse the Job1 component

  const SavedJobs = () => {
    const [savedJobs, setSavedJobs] = useState([]);

    useEffect(() => {
      fetch("http://localhost:5001/api/savedjobs", { credentials: "include" }) 
        .then((res) => {
          if (!res.ok) {
            return res.text().then((text) => { throw new Error(text); });
          }
          return res.json();
        })
        .then((data) => {
          //console.log("Saved Jobs:", data);
          setSavedJobs(Array.isArray(data) ? data : []);
        })
        .catch((err) => console.error("Error fetching jobs:", err));
    }, []);
    
    

    return (
      <>
        <Navbar />
        <div className="container mx-auto py-6">
          <h2 className="text-2xl font-bold mb-4">Saved Jobs</h2>
          {savedJobs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {savedJobs.map((savedJob) => (
    <Job1 key={savedJob._id} job={savedJob.jobId} />
  ))}

            </div>
          ) : (
            <p className="text-gray-500">You have no saved jobs yet.</p>
          )}
        </div>
        <Footer />
      </>
    );
  };

  export default SavedJobs;
