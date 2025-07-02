import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todoSlice.ts";
import sideListReducer from "../features/openSideList.ts";
export const store = configureStore({
  reducer: {
    sideList: sideListReducer,
    todo: todoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
