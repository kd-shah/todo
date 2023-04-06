import "./style.scss";
import InputView from "Shared/InputView";
import Button from "Shared/Button";
import { Tasks } from "./Components/Tasks";
import { useRef } from "react";
import { tasks } from "Type";
import { useAppSelector, useAppDispatch } from "Routes/ToDo/Controller/hooks";
import {addTodo} from "Routes/ToDo/Controller" ;


export default function ToDoCreator() {
  //const [todoItems, settodoItem] = useState<tasks[]>([]);
  const todoItems = useAppSelector(state => state.todo); 
  const inputRef  = useRef<HTMLInputElement>(null);
  const editTaskRef = useRef<HTMLInputElement>(null);

  const dispatch = useAppDispatch();

 
  const add = () => {
      dispatch(addTodo(inputRef.current?.value))}
    

      {console.log(inputRef.current?.value)}

  return (
    <>
      <div className="background">
        <h1 className="heading">TODO LIST</h1>

        <InputView placeholder={"Enter Text here"} refer={inputRef} />

        <Button name={"Add"} onClick={add} />

        {/* <Button name={"Clear All"} onClick={clearAll} /> */}
      </div>

      {todoItems.length === 0 && <div className="noTask">No Tasks</div>}
      

      <Tasks
        todos={todoItems}
        // up={up}
        // down={down}
        // clear={clear}
        // onChangeCheckBox={onChangeCheckBox}
        // edit={edit}
        // saveTask={saveTask}
        // cancelEdit={cancelEdit}
        // editTaskRef={editTaskRef}
      />
    </>
  );
  }
