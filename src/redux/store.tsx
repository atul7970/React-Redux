import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counter";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

// RootState represents the complete state of the Redux store. It is defined as the return type of the getState function of the Redux store.

// AppDispatch represents the type of the dispatch function of the Redux store. It is defined as the type of the dispatch function of the Redux store.
