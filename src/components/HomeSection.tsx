"use client";

import React, { useState } from "react";
import Tracker from "./Tracker";
import DateButtons from "./DateButtons";
import FilterUtm from "./FilterUtm";
import LineChart from "./LineChart";

const HomeSection = () => {
  const [filterData, setFilterData] = useState(null);
  const [showPicker, setShowPicker] = useState(false);

  const handleFilterChange = (data:any) => {
    setFilterData(data);
  };

  return (
    <>
      <div className="flex flex-row m-6 mt-20">  
            <div className="block w-full bg-white border border-gray-200 p-6 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <FilterUtm onFilterChange={handleFilterChange} />
              <div className="overflow-x-auto" >
                {/* <div className="w-[200vw]"> */}
                <LineChart />
              </div>
                <DateButtons onFilterChange={handleFilterChange}/>
            </div>
      </div>
    </>
  );
};

export default HomeSection;