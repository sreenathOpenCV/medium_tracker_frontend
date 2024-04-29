"use client";

import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';


const ApexChart = () => {
  const [chartData] = useState({
    series: [
      {
        name: 'Desktops',
        data: [
          { x: '01/04', y: 10 },
          { x: '02/04', y: 41 },
          { x: '03/04', y: 35 },
          { x: '04/04', y: 51 },
          { x: '05/04', y: 49 },
          { x: '06/04', y: 62 },
          { x: '07/04', y: 69 },
          { x: '08/04', y: 91 },
          { x: '09/04', y: 148 },
          { x: '10/04', y: 20 },
          { x: '11/04', y: 35 },
          { x: '12/04', y: 45 },
        ],
      },
      {
        name: 'Laptops',
        data: [
          { x: '01/04', y: 20 },
          { x: '02/04', y: 35 },
          { x: '03/04', y: 45 },
          { x: '04/04', y: 60 },
          { x: '05/04', y: 55 },
          { x: '06/04', y: 70 },
          { x: '07/04', y: 80 },
          { x: '08/04', y: 95 },
          { x: '09/04', y: 150 },
          { x: '10/04', y: 5 },
          { x: '11/04', y: 20 },
          { x: '12/04', y: 15 },
        ],
      },
      {
        name: 'Tablets',
        data: [
          { x: '01/04', y: 5 },
          { x: '02/04', y: 20 },
          { x: '03/04', y: 15 },
          { x: '04/04', y: 30 },
          { x: '05/04', y: 25 },
          { x: '06/04', y: 35 },
          { x: '07/04', y: 40 },
          { x: '08/04', y: 50 },
          { x: '09/04', y: 80 },
          { x: '10/04', y: 2 },
          { x: '11/04', y: 5 },
          { x: '12/04', y: 8 },
        ],
      },
      {
        name: 'Mobiles',
        data: [
          { x: '01/04', y: 15 },
          { x: '02/04', y: 30 },
          { x: '03/04', y: 25 },
          { x: '04/04', y: 40 },
          { x: '05/04', y: 35 },
          { x: '06/04', y: 45 },
          { x: '07/04', y: 55 },
          { x: '08/04', y: 70 },
          { x: '09/04', y: 120 },
          { x: '10/04', y: 22 },
          { x: '11/04', y: 69 },
          { x: '12/04', y: 91 },
        ],
      },
      {
        name: 'Smartwatches',
        data: [
          { x: '01/04', y: 2 },
          { x: '02/04', y: 5 },
          { x: '03/04', y: 8 },
          { x: '04/04', y: 10 },
          { x: '05/04', y: 12 },
          { x: '06/04', y: 15 },
          { x: '07/04', y: 18 },
          { x: '08/04', y: 20 },
          { x: '09/04', y: 25 },
          { x: '10/04', y: 25 },
          { x: '11/04', y: 35 },
          { x: '12/04', y: 40 },
        ],
      },
    ],
    options: {
      chart: {
        id: 'chart2',
        height: 350,
      },
    },
  });

  return (
    <div id="chart">
      <ReactApexChart options={chartData.options} series={chartData.series} type="line" height={350} />
    </div>
  );
};

export default ApexChart;