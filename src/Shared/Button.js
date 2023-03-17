import PropTypes from "prop-types";

export default function Button (props) {
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
