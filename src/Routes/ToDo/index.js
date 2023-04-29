import "./style.scss";
import InputView from "../../Shared/InputView";
import Button from "../../Shared/Button";
import { Tasks } from "./Components/Tasks";
import { useState, useRef, Fragment, memo } from "react";

export const ToDoCreator = memo(function ToDoCreator() {
  const array = [
    { id: 1, item: 1, isActive: true, isEditing: false },
    { id: 2, item: 2, isActive: true, isEditing: false },
    { id: 3, item: 3, isActive: true, isEditing: false },
    { id: 4, item: 4, isActive: true, isEditing: false },
    { id: 5, item: 5, isActive: true, isEditing: false },
    { id: 6, item: 6, isActive: true, isEditing: false },
    { id: 7, item: 7, isActive: true, isEditing: false },
    { id: 8, item: 8, isActive: true, isEditing: false },
    { id: 9, item: 9, isActive: true, isEditing: false },
    { id: 10, item: 10, isActive: true, isEditing: false },
    { id: 11, item: 11, isActive: true, isEditing: false },
    { id: 12, item: 12, isActive: true, isEditing: false },
    { id: 13, item: 13, isActive: true, isEditing: false },
    { id: 14, item: 14, isActive: true, isEditing: false },
    { id: 15, item: 15, isActive: true, isEditing: false },
    { id: 16, item: 16, isActive: true, isEditing: false },
    { id: 17, item: 17, isActive: true, isEditing: false },
    { id: 18, item: 18, isActive: true, isEditing: false },
    { id: 19, item: 19, isActive: true, isEditing: false },
    { id: 20, item: 20, isActive: true, isEditing: false },
    { id: 21, item: 21, isActive: true, isEditing: false },
    { id: 22, item: 22, isActive: true, isEditing: false },
    { id: 23, item: 23, isActive: true, isEditing: false },
    { id: 24, item: 24, isActive: true, isEditing: false },
    { id: 25, item: 25, isActive: true, isEditing: false },
    { id: 26, item: 26, isActive: true, isEditing: false },
    { id: 27, item: 27, isActive: true, isEditing: false },
    { id: 28, item: 28, isActive: true, isEditing: false },
    { id: 29, item: 29, isActive: true, isEditing: false },
    { id: 30, item: 30, isActive: true, isEditing: false },
    { id: 31, item: 31, isActive: true, isEditing: false },
    { id: 32, item: 32, isActive: true, isEditing: false },
    { id: 33, item: 33, isActive: true, isEditing: false },
    { id: 34, item: 34, isActive: true, isEditing: false },
    { id: 35, item: 35, isActive: true, isEditing: false },
    { id: 36, item: 36, isActive: true, isEditing: false },
    { id: 37, item: 37, isActive: true, isEditing: false },
    { id: 38, item: 38, isActive: true, isEditing: false },
    { id: 39, item: 39, isActive: true, isEditing: false },
    { id: 40, item: 40, isActive: true, isEditing: false },
    { id: 41, item: 41, isActive: true, isEditing: false },
    { id: 42, item: 42, isActive: true, isEditing: false },
    { id: 43, item: 43, isActive: true, isEditing: false },
    { id: 44, item: 44, isActive: true, isEditing: false },
    { id: 45, item: 45, isActive: true, isEditing: false },
    // { id: 46, item: 46, isActive: true, isEditing: false },
  ];
  const [todoItems, settodoItem] = useState([]);
  const [hasMore, sethasMore] = useState(true);
  const [index, setIndex] = useState(0);

  const [hasNextPage, sethasNextPage] = useState(true);
  const [isNextPageLoading, setisNextPageLoading] = useState(false);

  const inputRef = useRef("");
  const editTaskRef = useRef("");

  //Adding a Task
  const add = () => {
    if (inputRef.current.value === "") {
      alert("Task Cannot be Empty");
    } else {
      settodoItem([
        ...todoItems,
        {
          id: todoItems.length,
          item: inputRef.current.value,
          isActive: true,
          isEditing: false,
        },
      ]);
    }
    inputRef.current.value = "";
  };

  //Clear All Tasks
  const clearAll = () => {
    settodoItem([]);
  };

  //Clear Task
  const clear = (taskid) => {
    const newList = todoItems.filter((taskitem) => taskitem.id !== taskid);
    settodoItem(newList);
  };

  //Move Task Up
  const up = (taskid) => {
    const index = todoItems.findIndex((taskitem) => taskitem.id === taskid);
    if (index !== 0) {
      let tempObj = todoItems[index - 1];
      todoItems[index - 1] = todoItems[index];
      todoItems[index] = tempObj;
    }
    todoItems[index] = todoItems.splice(index - 1, 1, todoItems[index])[0];
    settodoItem([...todoItems]);
  };

  //Move Task Down
  const down = (taskid) => {
    const index = todoItems.findIndex((taskitem) => taskitem.id === taskid);
    console.log(index);
    todoItems[index] = todoItems.splice(index + 1, 1, todoItems[index])[0];
    settodoItem([...todoItems]);
  };

  //Changing Task status through Check box
  const onChangeCheckBox = (taskid) => {
    const index = todoItems.findIndex((taskitem) => taskitem.id === taskid);

    todoItems[index].isActive = todoItems[index].isActive ? false : true;
    console.log(todoItems[index].isActive);
    settodoItem([...todoItems]);
  };

  // Edit Task

  const edit = (taskid) => {
    const index = todoItems.findIndex((taskitem) => taskitem.id === taskid);
    for (let i = 0; i <= todoItems.length - 1; i++) {
      if (todoItems[i].isEditing === true) {
        if (
          window.confirm(
            "One Task is already being edited. Press OK to edit the new Task."
          )
        ) {
          todoItems[i].isEditing = false;
          settodoItem([...todoItems]);
          todoItems[index].isEditing = true;
        }
        return;
      }
    }

    settodoItem([...todoItems]);
    todoItems[index].isEditing = true;
  };

  // Save Edited Task
  const saveTask = (taskid) => {
    const index = todoItems.findIndex((taskitem) => taskitem.id === taskid);
    const tempTask = todoItems[index].item;
    if (editTaskRef.current?.value !== "") {
      todoItems[index].item = editTaskRef.current?.value;
    } else {
      alert("Invalid");
      todoItems[index].item = tempTask;
    }

    settodoItem([...todoItems]);
    todoItems[index].isEditing = false;
  };

  // Cancel Editing Task
  const cancelEdit = (taskid) => {
    const index = todoItems.findIndex((taskitem) => taskitem.id === taskid);
    todoItems[index].isEditing = false;
    settodoItem([...todoItems]);
  };

  // const fetchToDo = () => {
  //   let newTodo = [];
      
  //   if (todoItems.length >= 45) {
  //     sethasMore(false);
  //     return;
  //   }
  //   else{
  //   setTimeout(() => {
  //     for (let i = index; i < index + 15; i++) {
  //       newTodo.push({ id: i, item: i, isActive: true, isEditing: false });
  //       console.log(newTodo);
  //       // todoItems= todoItems.concat(newTodo)
  //     }
      
  //     // settodoItem(todoItems.concat(array.slice(index, index + 15)));
  //     // setIndex(index + 15);

  //     // settodoItem(array.slice(index, index + 15));
  //     // setIndex(index + 1);
      
  //     settodoItem([...todoItems, ...newTodo]);
      
  //     setIndex(index + 15);
  //   }, 1500);}
  // };

  const loadNextPage = () => {
    if (todoItems.length <= 50) {
      setisNextPageLoading(true);
      let newTodo = [];
      for (let i = index; i < index + 15; i++) {
        newTodo.push({ id: i, item: i, isActive: true, isEditing: false });
      }
      setTimeout(() => {
        sethasNextPage(true);
        setisNextPageLoading(false);

        settodoItem([...todoItems, ...newTodo]);
        console.log(newTodo);

        setIndex(index + 15);
      }, 1500);
    }
  };

  return (
    <>
      <div className="background">
        <h1 className="heading">TODO LIST</h1>

        <InputView placeholder={"Enter Text here"} refer={inputRef} />

        <Button name={"Add"} onClick={add} />

        <Button name={"Clear All"} onClick={clearAll} />
      </div>

      {todoItems.length === 0 && <div className="noTask">No Tasks</div>}

      <Fragment>
        <Tasks
          todos={todoItems}
          up={up}
          down={down}
          clear={clear}
          onChangeCheckBox={onChangeCheckBox}
          edit={edit}
          saveTask={saveTask}
          cancelEdit={cancelEdit}
          editTaskRef={editTaskRef}
          // fetchToDo={fetchToDo}
          // hasMore={hasMore}
          hasNextPage={hasNextPage}
          isNextPageLoading={isNextPageLoading}
          loadNextPage={loadNextPage}
        />
      </Fragment>
    </>
  );
});
