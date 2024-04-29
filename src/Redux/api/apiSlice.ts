import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define the base query with the base URL
const baseQuery = fetchBaseQuery({ baseUrl: 'http://127.0.0.1:5000/api' });

// Define the API service
const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    // Endpoint to fetch data from /data
    fetchDataPythnbc: builder.query({
      query: () => '/data_pythnbc'
    }),
    // Endpoint to fetch data from /data_1
    fetchDataTensorbc: builder.query({
      query: () => '/data_tensorbc'
    }),
    // Endpoint to fetch data from /data_2
    fetchDataOpencvbc: builder.query({
      query: () => '/data_opencvbc'
    })
  })
});

export const { useFetchDataPythnbcQuery, useFetchDataTensorbcQuery, useFetchDataOpencvbcQuery } = apiSlice;

export default apiSlice;
