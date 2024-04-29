import { combineReducers, configureStore } from '@reduxjs/toolkit';
import apiSlice from './api/apiSlice';
import bootCampProgramReducer from './Slices/bootcampProgramSlice';
import bootcampSourceReducer from './Slices/bootcampSourceSlice';
import bootCampMediumReducer from './Slices/bootcampMediumSlice';

const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  bootCampProgram: bootCampProgramReducer,
  bootcampSource: bootcampSourceReducer,
  bootCampMedium: bootCampMediumReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
