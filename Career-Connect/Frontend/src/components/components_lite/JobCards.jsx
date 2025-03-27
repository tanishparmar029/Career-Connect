<<<<<<< HEAD
import { Badge } from "../ui/badge";
import React from "react";

const JobCards = () => {
  return (
    <div className="p-6 bg-white border rounded-lg shadow-md space-y-6 max-w-xl mx-auto cursor-pointer transform transition-all duration-300  hover:scale-100 hover:shadow-lg hover:border-gray-300 hover:shadow-[#6b38c278]">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold text-gray-800">Company Name</h1>
          <p className="text-sm text-gray-600">India</p>
        </div>
        <Badge variant="secondary" className="text-sm text-gray-800">
          Featured
        </Badge>
      </div>

      {/* Job Title */}
      <div>
        <h2 className="text-2xl font-semibold text-[#6A38C2]">Job Title</h2>
      </div>

      {/* Job Description */}
      <div>
        <p className="text-sm text-gray-700 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
          assumenda, veniam voluptate
        </p>
      </div>

      {/* Tags Section */}
      <div className="flex items-center flex-wrap gap-2 mt-2">
        <Badge
          variant="outline"
          className="text-blue-600 bg-blue-100 px-3 py-1 rounded-full font-medium"
        >
          10 Positions
        </Badge>
        <Badge
          variant="outline"
          className="text-green-600 bg-green-100 px-3 py-1 rounded-full font-medium"
        >
          20 LPA
        </Badge>
        <Badge
          variant="outline"
          className="text-purple-600 bg-purple-100 px-3 py-1 rounded-full font-medium"
        >
          Remote
        </Badge>
        <Badge
          variant="outline"
          className="text-orange-600 bg-orange-100 px-3 py-1 rounded-full font-medium"
        >
          Full Time
=======
import React from "react";
import { Badge } from "../ui/badge";
import { useNavigate } from "react-router-dom";

const JobCards = ({ job }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/description/${job._id}`)}
      className="group relative p-5 sm:p-6 rounded-xl bg-white border border-gray-200 shadow-md cursor-pointer transition-all duration-300 hover:shadow-2xl hover:border-transparent hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 overflow-hidden"
    >
      {/* Hover Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

      {/* Job Header */}
      <div className="mb-4 relative">
        <h1 className="text-lg sm:text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
          {job.name}
        </h1>
        <p className="text-xs sm:text-sm text-gray-500 group-hover:text-gray-700 transition-colors duration-300">
          {job.location}
        </p>
      </div>

      {/* Job Title and Description */}
      <div className="mb-4 relative">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-800 transition-colors duration-300">
          {job.title}
        </h2>
        <p className="text-xs sm:text-sm text-gray-600 line-clamp-2 sm:line-clamp-3 group-hover:text-gray-800 transition-colors duration-300">
          {job.description}
        </p>
      </div>

      {/* Floating Decorative Background */}
      <div className="absolute -top-10 -right-10 w-20 h-20 bg-blue-100 rounded-full opacity-30 group-hover:opacity-60 transition-all duration-300 blur-xl"></div>

      {/* Badges Section */}
      <div className="flex flex-wrap gap-2 mt-4 relative">
        <Badge className="text-xs sm:text-sm text-blue-600 bg-blue-100 font-semibold group-hover:bg-blue-200 transition-colors duration-300 px-3 py-1 rounded-lg shadow-sm">
          {job.position} Open Positions
        </Badge>
        <Badge className="text-xs sm:text-sm text-[#FA4F09] bg-orange-100 font-semibold group-hover:bg-orange-200 transition-colors duration-300 px-3 py-1 rounded-lg shadow-sm">
          {job.salary} LPA
        </Badge>
        <Badge className="text-xs sm:text-sm text-[#6B3AC2] bg-purple-100 font-semibold group-hover:bg-purple-200 transition-colors duration-300 px-3 py-1 rounded-lg shadow-sm">
          {job.location}
        </Badge>
        <Badge className="text-xs sm:text-sm text-gray-800 bg-gray-100 font-semibold group-hover:bg-gray-200 transition-colors duration-300 px-3 py-1 rounded-lg shadow-sm">
          {job.jobType}
>>>>>>> Nik
        </Badge>
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default JobCards;
=======
export default JobCards;
>>>>>>> Nik
