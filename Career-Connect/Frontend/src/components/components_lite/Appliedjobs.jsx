<<<<<<< HEAD
import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Badge } from '../ui/badge'

const Appliedjobs = () => {
  return (
    <div>
    <Table>
      <TableCaption>
        Recent Applied Jobs
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Date</TableHead>
          <TableHead>Job Title</TableHead>
          <TableHead>Company</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {
          [1, 2, 3, 4, 5, 6].map((item, index) => (
            <TableRow key={index}>
              <TableCell>02/01/2006</TableCell>
              <TableCell>Software Engineer</TableCell>
              <TableCell>ABC Corporation</TableCell>
              <TableCell>
                <Badge>
                  Selected
                </Badge>
              </TableCell>
            </TableRow>
          ))
        }
      </TableBody>
    </Table>
  </div>
  
  )
}

export default Appliedjobs
=======
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Badge } from "../ui/badge";
import { useSelector } from "react-redux";

const Appliedjobs = () => {
  const { allAppliedJobs } = useSelector((store) => store.jobs);

  return (
    <div>
      <Table>
        <TableCaption>Recent Applied Jobs</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Job Title</TableHead>
            <TableHead>Company</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {allAppliedJobs.length <= 0 ? (
            <TableRow>
              <TableCell colSpan={4}>You have not applied any job yet.</TableCell>
            </TableRow>
          ) : (
            allAppliedJobs.map((appliedJob) => (
              <TableRow key={appliedJob?._id}>
                <TableCell>{appliedJob?.createdAt.split("T")[0]}</TableCell>
                <TableCell>{appliedJob?.job?.title}</TableCell>
                <TableCell>{appliedJob?.job?.company.name}</TableCell>
                <TableCell>
                  <Badge
                    className={`${
                      appliedJob?.status === "rejected"
                        ? "bg-red-500"
                        : appliedJob?.status === "accepted"
                        ? "bg-green-600"
                        : "bg-gray-500"
                    }`}
                  >
                    {" "}
                    {appliedJob?.status}
                  </Badge>{" "}
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default Appliedjobs;
>>>>>>> Nik
