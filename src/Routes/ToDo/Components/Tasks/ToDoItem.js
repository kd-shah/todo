import PropTypes from "prop-types";

export default function ToDoItem (props) {
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
