import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store/store";

interface ListState {
  isOpen: boolean;
}

const initialState: ListState = {
  isOpen: false,
};

const sideListSlice = createSlice({
  name: "sideList",
  initialState,
  reducers: {
    openList: (state) => {
      state.isOpen = true;
    },
    closeList: (state) => {
      state.isOpen = false;
    },
    toggleList: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { openList, closeList, toggleList } = sideListSlice.actions;
export const selectIsListOpen = (state: RootState) => state.sideList.isOpen;

export default sideListSlice.reducer;