import { forwardRef } from "react";

const InputField = forwardRef((props, ref) => {
  return (
    <input
      className="input"
      ref={ref}
      type="text"
      placeholder="Enter your task"
      onKeyDown={props.onKeyDown}
    />
  );
});

export default InputField;
