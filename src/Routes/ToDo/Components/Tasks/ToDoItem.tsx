import PropTypes from "prop-types";
import { todoItem } from "Type"

export default function ToDoItem (props : todoItem) {
  return (
    <label>
      <input
        type="checkbox"
        onChange={props.onChange}
        className="check"
        checked={props.checked}
      />
      {props.value}
    </label>
  );
};

ToDoItem.propTypes = {
  value: PropTypes.any,
};
