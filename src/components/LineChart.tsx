"use client";

import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import ReactApexChart from 'react-apexcharts';
import { RootState } from '@/Redux/store';

const ApexChart = () => {
  const seriesData = useSelector((state: RootState) => state.bootcampProgram.seriesData);

  const chartData = {
    series: seriesData, 
    options: {
      chart: {
        id: 'chart2',
        height: 350,
      },
      tooltip: {
        enabled: true, // Ensure tooltips are enabled
        followCursor: false, // Disable cursor-following tooltips
        shared: true, // Use shared tooltip for all series
        intersect: false, // Disable intersecting tooltips
      },
    },
  };

  useEffect(() => {
    chartData.series = seriesData;
  }, [seriesData]);

  return (
    <div id="chart">
      <ReactApexChart options={chartData.options} series={chartData.series} type="line" height={350} />
    </div>
  );
};

export default ApexChart;
