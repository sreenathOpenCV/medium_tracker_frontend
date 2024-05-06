"use client";

import React, { useState } from "react";
import DateButtons from "./DateButtons";
import FilterUtm from "./FilterUtm";
import LineChart from "./LineChart";

const HomeSection = () => {
  const [selectedDateRange, setSelectedDate] = useState("weekBtn");
  const [buttonSelectionToggle, setButtonSelectionToggle] = useState<boolean>(true);

  const handleDateChange = (value:any) => {
    setSelectedDate(value);
  };

  const handleButtonToggle = (value:boolean) => {
    setButtonSelectionToggle(value);
  };


  return (
    <>
      <div className="flex flex-row m-6 mt-16 h-screen">
        <div className="block w-full bg-white border border-gray-200 px-6 py-2 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <FilterUtm selectedDateRange={selectedDateRange} handleButtonToggle={handleButtonToggle}/>
          <div className="overflow-x-auto">
            <LineChart />
          </div>
          <DateButtons onDateChange={handleDateChange} buttonSelectionToggle={buttonSelectionToggle} handleButtonToggle={handleButtonToggle}/>
        </div>
      </div>
    </>
  );
};

export default HomeSection;
