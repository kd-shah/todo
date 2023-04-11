import "./style.scss";
import InputView from "../../Shared/InputView";
import Button from "../../Shared/Button";
import { Tasks } from "./Components/Tasks";
import { useState, useRef } from "react";
import { addToDo , deleteAll, onCheckBox, clearTask , moveUp, moveDown , editTask , saveEditTask, cancelEditTask} from "../../App/Slicer/ToDoSlicer";
import { useDispatch, useSelector } from "react-redux";

export default function ToDoCreator() {

  const [value, setValue] = useState("");

  const inputRef = useRef("");
  const editTaskRef = useRef("");
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos);

  const add = () => {
    console.log(inputRef.current.value);
    console.log(todos.length);
    dispatch(
      addToDo({ id: todos.length + 1, item: inputRef.current.value })
    );
    inputRef.current.value = "";
  };
  // const add = () => {
  //   console.log(value);
  //   console.log(todos.length);
  //   dispatch(addToDo({id: todos.length +1, item: value}));
  // }

  const clearAll = () => {
    dispatch(
      deleteAll()
    );
  }

  const onChangeCheckBox = (taskid) => {
    const index = todos.findIndex((taskitem) => taskitem.id === taskid);
    dispatch(onCheckBox(index))
  };

  const clear = (taskid) => {
    const index = todos.findIndex((taskitem) => taskitem.id === taskid)
    dispatch(clearTask(index))
  }

  const up = (taskid) => {
    const index = todos.findIndex((taskitem) => taskitem.id === taskid)
    console.log(index)
    dispatch(moveUp(index))
  }

  const down = (taskid) => {
    const index = todos.findIndex((taskitem) => taskitem.id === taskid)
    console.log(index)
    dispatch(moveDown(index))
  }

  const edit = (taskid) => {
    const index = todos.findIndex((taskitem) => taskitem.id === taskid);
    dispatch(editTask(index))
  };

  // Save Edited Task
  const saveTask = (taskid) => {
    const index = todos.findIndex((taskitem) => taskitem.id === taskid);
    const editTaskInput = editTaskRef.current?.value;
    dispatch(saveEditTask({ind : index , editedTask: editTaskInput}))
    
   
  };

  // Cancel Editing Task
  const cancelEdit = (taskid) => {
    const index = todos.findIndex((taskitem) => taskitem.id === taskid);
    dispatch(cancelEditTask(index))
  };


  return (
    <>
      <div className="background">
        <h1 className="heading">TODO LIST</h1>

        <InputView
          placeholder={"Enter Text here"}
          refer={inputRef}
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />

        <Button name={"Add"} onClick={add} />

        <Button name={"Clear All"} onClick={clearAll} />
      </div>

      {todos.length === 0 && <div className="noTask">No Tasks</div>}

      <Tasks
        todos={todos}
        up={up}
        down={down}
        clear={clear}
        onChangeCheckBox={onChangeCheckBox}
        edit={edit}
        saveTask={saveTask}
        cancelEdit={cancelEdit}
        editTaskRef={editTaskRef}
      />
    </>
  );
}
