import "./style.scss";
import  ToDoItem  from "./ToDoItem";
import  Button  from "Shared/Button";
import  IconButton  from "./IconButton";
import  InputView  from "Shared/InputView";
import { FaChevronUp , FaChevronDown  } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import type {tasks , taskfunctions} from "Type";


export const Tasks  = ({
  todos ,
  // down,
  // clear,
  // up,
  // edit,
  // onChangeCheckBox,
  // cancelEdit,
  // saveTask,
  // editTaskRef,
} : taskfunctions ) => {
  const tasklist = todos?.map((task : tasks, index : number ) => {
    return (
      <div
        className={task.isActive ? "list" : "inActiveTask"} //Class Selection
        key={task.id}
      >
         <ToDoItem
            value={task.item}
            
          />
        
        
      </div>
    );
  });
  return <>{tasklist}</>;
};
