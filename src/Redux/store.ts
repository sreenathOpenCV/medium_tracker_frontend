import { combineReducers, configureStore } from '@reduxjs/toolkit';
import apiSlice from './api/apiSlice';
import bootCampProgramReducer from './Slices/bootcampProgramSeries';
import bootcampSourceReducer from './Slices/bootcampSelectivesSlice';

const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  bootcampProgram: bootCampProgramReducer,
  bootcampSource: bootcampSourceReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
