import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { tasks } from "Type";


const initialState: tasks[] = [];
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string | undefined>) => {
      return [
        ...state,
        {
          //id: action.payload.id,
          item: action.payload,
          //isActive: action.payload.isActive,
        },
      ];
    },
  },
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;