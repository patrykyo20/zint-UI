import "./input.styles.scss";
import { FC } from "react";
import IInput from "./Input.types";

const Input: FC<IInput> = ({
  variant = "primary",
  type = "text",
  size = "md",
  rounded = "none",
  label,
  ...props
}) => {
  if (type === "file") {
    return (
      <>
        <label
          htmlFor={props.name}
          className={`input__label input__label--${variant} input--rounded-${rounded} input--${size}`}
        >
          Coose file
        <input type="file" {...props} className="input"></input>
        </label>
      </>
    );
  } else if (label) {
    return (
      <label className="label__field">
        {!props.disabled && <span>{label}</span>}
        <input
          type={type}
          {...props}
          className={`input input--${variant} input--${size} input--rounded-${rounded}`}
        ></input>
      </label>
    );
  } else {
    return (
      <input
        type={type}
        {...props}
        className={`input input--${variant} input--${size} input--rounded-${rounded}`}
      ></input>
    );
  }
};

export default Input;
