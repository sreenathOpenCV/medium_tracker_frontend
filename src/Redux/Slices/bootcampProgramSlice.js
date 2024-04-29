import { createSlice } from '@reduxjs/toolkit';

const bootcampProgramSlice = createSlice({
  name: 'bootcampProgram',
  initialState: {
    selected: '',
  },
  reducers: {
    setSelectedProgram(state, action) {
      state.selected = action.payload;
    },
  },
});

export const { setSelectedProgram } = bootcampProgramSlice.actions;
export default bootcampProgramSlice.reducer;
