import { createSlice } from "@reduxjs/toolkit";

// const initialState= {
//     todos: ["hi"]
// };

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addToDo: (state, action) => {
      const todo = {
        id: action.payload.id,
        item: action.payload.item,
        isActive: true,
        isEditing: false,
      };
      //return( [...state, todo])
      state.push(todo);
      return state;
    },

    deleteAll: () => {
      return [];
    },

    onCheckBox: (state, action) => {
      state[action.payload].isActive = state[action.payload].isActive? false : true;
      return state;
    },

    clearTask: (state, action) => {
      const newList = state.filter(
        (taskitem) => taskitem.id !== action.payload
      );
      return newList;
    },

    moveUp: (state, action) => {
      if (action.payload !== 0) {
        let tempObj = state[action.payload - 1];
        state[action.payload - 1] = state[action.payload];
        state[action.payload] = tempObj;
      }
    },

    moveDown: (state, action) => {
      if (action.payload !== state.length) {
        let tempObj = state[action.payload + 1];
        state[action.payload + 1] = state[action.payload];
        state[action.payload] = tempObj;
      }
    },

    editTask: (state, action) => {
      for (let i = 0; i <= state.length - 1; i++) {
        if (state[i].isEditing === true) {
          if (
            window.confirm(
              "One Task is already being edited. Press OK to edit the new Task."
            )
          ) {
            state[i].isEditing = false;
            state[action.payload].isEditing = true;
            return state
            
          }
          return;
        }
      }
      state[action.payload].isEditing = true;
      return state;
    },

    saveEditTask: (state, action) => {
      const tempTask = state[action.payload.ind].item;
      if (action.payload.editedTask !== "") {
        state[action.payload.ind].item = action.payload.editedTask;
      } else {
        alert("Invalid");
        state[action.payload.ind].item = tempTask;
      }

      //settodoItem([...todoItems]);
      state[action.payload.ind].isEditing = false;
    },

    cancelEditTask: (state, action) => {
      state[action.payload].isEditing = false;
      return state;
    },
  },
});

export const {
  addToDo,
  deleteAll,
  onCheckBox,
  clearTask,
  moveUp,
  moveDown,
  editTask,
  saveEditTask,
  cancelEditTask,
} = todoSlice.actions;
export default todoSlice.reducer;
