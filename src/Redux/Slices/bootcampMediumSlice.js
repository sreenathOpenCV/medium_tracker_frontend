import { createSlice } from '@reduxjs/toolkit';

const bootcampMediumSlice = createSlice({
  name: 'bootcampProgram',
  initialState: {
    selected: [],
  },
  reducers: {
    setSelectedMedium(state, action) {
      state.selected = action.payload;
    },
  },
});

export const { setSelectedMedium } = bootcampMediumSlice.actions;
export default bootcampMediumSlice.reducer;
