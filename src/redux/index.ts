import { configureStore } from "@reduxjs/toolkit";
import dateSlice from "./slices/dateSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import eventSlice from "./slices/eventSlice";

export const store = configureStore({
  reducer: {
    date: dateSlice,
    event: eventSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
