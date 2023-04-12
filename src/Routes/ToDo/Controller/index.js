import { useRef, useState } from "react";
import {
  addToDo,
  deleteAll,
  onCheckBox,
  clearTask,
  moveUp,
  moveDown,
  editTask,
  saveEditTask,
  cancelEditTask,
} from "../../../App/Slicer/ToDoSlicer";
import { useDispatch, useSelector } from "react-redux";

export default function useLogic() {
  // const [value, setValue] = useState("");
  const inputRef = useRef("");
  const editTaskRef = useRef("");
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos);

  const add = () => {
    dispatch(addToDo(inputRef.current.value));
    inputRef.current.value = "";
  };
  // const add = () => {
  //   console.log(value);
  //   console.log(todos.length);
  //   dispatch(addToDo({id: todos.length +1, item: value}));
  // }

  const clearAll = () => {
    dispatch(deleteAll());
  };

  const onChangeCheckBox = (taskid) => {
    const index = todos.findIndex((taskitem) => taskitem.id === taskid);
    dispatch(onCheckBox(index));
  };

  const clear = (taskid) => {
    const index = todos.findIndex((taskitem) => taskitem.id === taskid);
    console.log(index);
    dispatch(clearTask(index));
  };

  const up = (taskid) => {
    const index = todos.findIndex((taskitem) => taskitem.id === taskid);
    console.log(index);
    dispatch(moveUp(index));
  };

  const down = (taskid) => {
    const index = todos.findIndex((taskitem) => taskitem.id === taskid);
    console.log(index);
    dispatch(moveDown(index));
  };

  const edit = (taskid) => {
    const index = todos.findIndex((taskitem) => taskitem.id === taskid);
    dispatch(editTask(index));
  };

  // Save Edited Task
  const saveTask = (taskid) => {
    const index = todos.findIndex((taskitem) => taskitem.id === taskid);
    const editTaskInput = editTaskRef.current?.value;
    dispatch(saveEditTask({ ind: index, editedTask: editTaskInput }));
  };

  // Cancel Editing Task
  const cancelEdit = (taskid) => {
    const index = todos.findIndex((taskitem) => taskitem.id === taskid);
    dispatch(cancelEditTask(index));
  };

  return {
    cancelEdit,
    saveTask,
    edit,
    onChangeCheckBox,
    clear,
    add,
    clearAll,
    up,
    down,
    editTaskRef,
    inputRef,
    todos,
  };
}
