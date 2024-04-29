import { createSlice } from '@reduxjs/toolkit';

const bootcampSourceSlice = createSlice({
  name: 'bootcampSource',
  initialState: {
    selected: [],
  },
  reducers: {
    setSelectedSource(state, action) {
      state.selected = action.payload;
    },
  },
});

export const { setSelectedSource } = bootcampSourceSlice.actions;
export default bootcampSourceSlice.reducer;