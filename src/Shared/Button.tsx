import PropTypes from "prop-types";
import { button } from "Type";

export default function Button (props : button) {
  return (
    <button className="mainBt" onClick={props.onClick}>
      {props.name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func,
};
