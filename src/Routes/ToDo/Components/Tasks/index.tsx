import "./style.scss";
import  ToDoItem  from "./ToDoItem";
import  Button  from "../../../../Shared/Button";
import  IconButton  from "./IconButton";
import  InputView  from "../../../../Shared/InputView";
import { FaChevronUp , FaChevronDown  } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import type {tasks , taskfunctions} from "../../../../Type";

export const Tasks  = ({
  todos ,
  down,
  clear,
  up,
  edit,
  onChangeCheckBox,
  cancelEdit,
  saveTask,
  editTaskRef,
} : taskfunctions ) => {
  const tasklist = todos?.map((task : tasks, index : number ) => {
    return (
      <div
        className={task.isActive ? "list" : "inActiveTask"} //Class Selection
        key={task.id}
      >
        {task.isEditing ? (
          <>
            <InputView refer={editTaskRef} value={task.item} />
            {/* value is default value */}
            <Button name={"Save"} onClick={() => saveTask(task.id)} />
            <Button name={"Cancel"} onClick={() => cancelEdit(task.id)} />
          </>
        ) : (
          <ToDoItem
            value={task.item}
            onChange={() => onChangeCheckBox(task.id)}
            checked={task.isActive ? false : true} // checked task is inactive task
          />
        )}

        <IconButton
          onClick={() => clear(task.id)}
          title={"Delete Task"}
          icon ={<AiFillDelete  />}
        />

        <IconButton
          disabled={index === todos.length - 1 ? true : false}
          onClick={() => down(task.id)}
          title={"Move Task Down"}
          icon={<FaChevronDown />}
        />

        <IconButton
          disabled={index === 0 ? true : false}
          onClick={() => up(task.id)}
          title={"Move Task Up"}
          icon ={<FaChevronUp />}
        />

        <IconButton
          disabled={task.isEditing ? true : false}
          onClick={() => edit(task.id)}
          title={"Edit Task"}
          icon={<MdModeEditOutline  />}
        />
      </div>
    );
  });
  return <>{tasklist}</>;
};
