import "./style.scss";
import InputView from "../../Shared/InputView";
import Button from "../../Shared/Button";
import { Tasks } from "./Components/Tasks";
import useLogic from "./Controller";

export default function ToDoCreator() {
  const {
    cancelEdit,
    saveTask,
    edit,
    onChangeCheckBox,
    clear,
    add,
    clearAll,
    down,
    up,
    editTaskRef,
    inputRef,
    todos,
  } = useLogic();

  return (
    <>
      <div className="background">
        <h1 className="heading">TODO LIST</h1>

        <InputView
          placeholder={"Enter Text here"}
          refer={inputRef}
          // value={value}
          // onChange={(event) => setValue(event.target.value)}
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
