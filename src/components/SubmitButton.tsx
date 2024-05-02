import { useFetchDataMutation } from '@/Redux/api/apiSlice';
import { useDispatch } from 'react-redux';
import React from 'react';
import { setSeriesData } from '@/Redux/Slices/bootcampProgramSeries';


const SubmitButton = ({ selectedParams }: { selectedParams: any }) => {
  const [fetchSeries, { isLoading, isError, data, error }] = useFetchDataMutation();
  const dispatch = useDispatch();
  console.log("selectedParams", selectedParams);

  const getSeriesData = async () => {

    try {
      const filteredParams = Object.fromEntries(
        Object.entries(selectedParams).filter(([key, value]) => Array.isArray(value) && value.length > 0)
      );
  
      const response = await fetchSeries(filteredParams).unwrap();
      const formattedData = formatData(response);
      dispatch(setSeriesData(formattedData));
      console.log("fetchSeries", response);
    } catch (error) {
      console.log("Error:", error);
    }
  };
  

  interface CourseData {
    name: string[];
    data: { x: string; y: number }[];
  }

  function formatData(inputData: any[]): CourseData[] {
    const formattedData: CourseData[] = [];
  
    inputData.forEach((entry) => {
      const name = entry.slice(1, -1);
      const date = formatDate(entry[0]); // Format date here
      const value = entry.slice(-1)[0];
      const existingCourse = formattedData.find(
        (course) => JSON.stringify(course.name) === JSON.stringify(name)
      );
      if (existingCourse) {
        existingCourse.data.push({ x: date, y: value });
      } else {
        formattedData.push({
          name,
          data: [{ x: date, y: value }],
        });
      }
    });
  
    console.log("formattedData", formattedData);
    return formattedData;
  }
  
  function formatDate(dateString: string): string {
    const [year, month, day] = dateString.split("-");
    return `${day}/${month}`;
  }
  

  return (
    <button
      className="bg-black mt-1 text-white w-full sm:w-auto inline-flex items-center justify-center h-12 px-4 sm:px-8 py-2 sm:py-0 text-lg font-semibold text-center transition-all duration-300 ease-in-out border-2 border-gray-600 rounded-lg cursor-pointer hover:shadow-2xl focus:shadow-xs"
      onClick={getSeriesData}
    >
      Submit
    </button>
  );
};

export default SubmitButton;
