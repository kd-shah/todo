import PropTypes from "prop-types";
import type {inputView} from "../Type";

export default function InputView  (props : inputView)  {
  return (
    <>
      <input
        id="input"
        className="input"
        defaultValue={props.value}
        placeholder={props.placeholder}
        ref={props.refer}
      />
    </>
  );
};

InputView.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  // refer: PropTypes.string
};
