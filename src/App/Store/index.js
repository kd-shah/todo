import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../Slicer/ToDoSlicer";

export const store = configureStore({
  reducer: { todos: todoReducer },
});

export default store;