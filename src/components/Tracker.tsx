import { CircularProgress } from "@mui/material";
import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto';
Chart.register(CategoryScale);

type DataPoint = [number, number];
type HistoricData = DataPoint[];

const Tracker = ({ filterData }: any) => {
  const [pageDate, setPageData] = useState<HistoricData | null>(null);
  const [sourceData, setSourceData] = useState<HistoricData | null>(null);
  const [mediumData, setMediumData] = useState<HistoricData | null>(null);

  const parseData = (data: { [key: string]: number }): HistoricData => {
    console.log("parseData", data);
    return Object.entries(data).map(([date, value]) => {
      const [year, month, day] = date.split('_').map(Number);
      console.log("parseData",  [new Date(year, month - 1, day).getTime(), value]);
      return [new Date(year, month - 1, day).getTime(), value];
    });
  };

  useEffect(() => {
    if (filterData) {
      setPageData(parseData(filterData.page));
      setSourceData(parseData(filterData.source));
      setMediumData(parseData(filterData.medium));
    }
  }, [filterData]);

  const formatDate = (timestamp: number): string => {
    const date = new Date(timestamp);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    return `${day}/${month < 10 ? '0' + month : month}`;
  };  

  return (
    <div className="mr-2" style={{ maxWidth: "100%", overflowX: "auto", minHeight: "70vh" }}>
      {(!pageDate || !sourceData || !mediumData) && filterData ? (
        <CircularProgress style={{ color: "gold" }} size={200} thickness={1} />
      ) : (
        <Line
          data={{
            labels: pageDate?.map((point) => formatDate(point[0])) || [],
            datasets: [
              {
                data: pageDate?.map((point) => point[1]) || [],
                label: 'Bootcamp',
                borderColor: "#e55959",
              },
              {
                data: sourceData?.map((point) => point[1]) || [],
                label: 'Bootcamp Source',
                borderColor: "#a3e559",
              },
              {
                data: mediumData?.map((point) => point[1]) || [],
                label: 'Bootcamp Medium',
                borderColor: "#138dff",
              },
            ],  
          }}
          options={{
            elements: {
              point: {
                radius: 1,
              },
            },
            scales: {
              x: {
                type: 'category',
                labels: pageDate?.map((point) => formatDate(point[0])) || [],
              },
            },
            responsive: true,
            maintainAspectRatio: false,
          }}
        />
      )}
    </div>
  );
};

export default Tracker;
