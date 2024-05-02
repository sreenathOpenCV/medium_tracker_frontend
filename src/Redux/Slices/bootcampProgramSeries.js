import { createSlice } from '@reduxjs/toolkit';

const bootcampProgramSlice = createSlice({
  name: 'bootcampProgram',
  initialState: {
    selected: '',
    seriesData: [], 
  },
  reducers: {
    setSelectedProgram(state, action) {
      state.selected = action.payload;
    },
    setSeriesData(state, action) {
      state.seriesData = [...state.seriesData, ...action.payload]; 
    },
  },
});

export const { setSelectedProgram, setSeriesData } = bootcampProgramSlice.actions;
export default bootcampProgramSlice.reducer;
