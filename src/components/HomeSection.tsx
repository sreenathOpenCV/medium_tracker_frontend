"use client";

import React, { useState } from "react";
import DateButtons from "./DateButtons";
import FilterUtm from "./FilterUtm";
import LineChart from "./LineChart";

const HomeSection = () => {
  const [selectedDateRange, setSelectedDate] = useState("weekBtn");

  const handleDateChange = (value:any) => {
    setSelectedDate(value);
  };

  return (
    <>
      <div className="flex flex-row m-6 mt-20">
        <div className="block w-full bg-white border border-gray-200 p-6 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <FilterUtm selectedDateRange={selectedDateRange} />
          <div className="overflow-x-auto">
            <LineChart />
          </div>
          <DateButtons onDateChange={handleDateChange} />
        </div>
      </div>
    </>
  );
};

export default HomeSection;
