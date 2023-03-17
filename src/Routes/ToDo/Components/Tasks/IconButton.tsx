import PropTypes from "prop-types";
import { iconButton } from "../../../../Type";

export default function IconButton (props : iconButton) {
  return (
    <button
      className="buttons"
      onClick={props.onClick}
      disabled={props.disabled}
      title={props.title}
    >
    {props.icon}
    </button>
  );
};

IconButton.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func,
};
