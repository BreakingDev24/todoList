import { v4 as uuidv4 } from "uuid";

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface Todo {
  text: string;
  id: string;
  isChecked: boolean;
}

interface List {
  text: string;
  id: string;
  todo: Todo[];
}

interface State {
  list: List[];
  currentItem?: string;
}

const initialState: State = {
  list: [],
  currentItem: undefined,
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addList: (state, action: PayloadAction<string>) => {
      const newId = uuidv4();
      state.list.unshift({
        text: action.payload,
        id: newId,
        todo: [],
      });
      state.currentItem = newId;
    },
    removeList: (state, action: PayloadAction<List["id"]>) => {
      state.list = state.list.filter((el) => el.id !== action.payload);
    },
    setCurrentList: (state, action: PayloadAction<string>) => {
      state.currentItem = action.payload;
    },

    addTodo: (state, action: PayloadAction<string>) => {
      const current = state.list.find((el) => el.id === state.currentItem);
      if (current) {
        current.todo.unshift({
          text: action.payload,
          id: uuidv4(),
          isChecked: false,
        });
      }
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      const current = state.list.find((el) => el.id === state.currentItem);
      if (current) {
        current.todo = current.todo.filter((t) => t.id !== action.payload);
      }
    },
    toggleChecked: (state, action: PayloadAction<string>) => {
      const current = state.list.find((el) => el.id === state.currentItem);
      if (current) {
        const todo = current.todo.find((t) => t.id === action.payload);
        if (todo) {
          todo.isChecked = !todo.isChecked;
        }
      }
    },
  },
});
export const {
  addList,
  removeList,
  setCurrentList,
  addTodo,
  removeTodo,
  toggleChecked,
} = todoSlice.actions;
export default todoSlice.reducer;
