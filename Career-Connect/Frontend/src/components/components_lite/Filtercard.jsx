<<<<<<< HEAD
import React from "react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
=======
import React, { useEffect, useState } from "react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";
>>>>>>> Nik

const filterData = [
  {
    filterType: "Location",
    array: [
      "Delhi",
      "Mumbai",
      "Kolhapur",
<<<<<<< HEAD
      "Udaipur",
      "Mangalore",
      "Salem",
      "Chittoor",
=======
      "Pune",
      "Bangalore",
      "Hyderabad",
      "Chennai",
>>>>>>> Nik
      "Remote",
    ],
  },
  {
<<<<<<< HEAD
    filterType: "Industry",
    array: [
      "IT",
      "Finance",
      "Marketing",
      "Healthcare",
      "Education",
      "Manufacturing",
=======
    filterType: "Technology",
    array: [
      "Mern",
      "React",
      "Data Scientist",
      "Fullstack",
      "Node",
      "Python",
      "Java",
      "frontend",
      "backend",
      "mobile",
      "desktop",
>>>>>>> Nik
    ],
  },
  {
    filterType: "Experience",
    array: ["0-3 years", "3-5 years", "5-7 years", "7+ years"],
  },
  {
    filterType: "Salary",
    array: ["0-50k", "50k-100k", "100k-200k", "200k+"],
  },
];

const Filter = () => {
<<<<<<< HEAD
=======
  const [selectedValue, setSelectedValue] = useState("");
  const handleChange = (value) => {
    setSelectedValue(value);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setSearchedQuery(selectedValue));
  }, [selectedValue]);

>>>>>>> Nik
  return (
    <div className="w-full bg-white rounded-md">
      <h1 className="font-bold text-lg">Filter Jobs</h1>
      <hr className="mt-3" />
<<<<<<< HEAD
      <RadioGroup>
        {filterData.map((data, index) => (
          <div key={data.filterType}> {/* Added key here */}
            <h2 className="font-bold text-lg">{data.filterType}</h2>

            {data.array.map((item, idx) => (
              <div key={item} className="flex items-center space-x-2 my-2"> {/* Added key here */}
                <RadioGroupItem value={item}></RadioGroupItem>
                <label>{item}</label>
              </div>
            ))}
=======
      <RadioGroup value={selectedValue} onValueChange={handleChange}>
        {filterData.map((data, index) => (
          <div key={index}>
            <h2 className="font-bold text-lg">{data.filterType}</h2>

            {data.array.map((item, indx) => {
              const itemId = `Id${index}-${indx}`;
              return (
                <div key={itemId} className="flex items-center space-x-2 my-2">
                  <RadioGroupItem value={item} id={itemId}></RadioGroupItem>
                  <label htmlFor={itemId}>{item}</label>
                </div>
              );
            })}
>>>>>>> Nik
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

<<<<<<< HEAD
export default Filter;
=======
export default Filter;
>>>>>>> Nik
