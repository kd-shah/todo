import PropTypes from "prop-types";

export default function IconButton (props) {
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
