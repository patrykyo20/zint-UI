import "./input.styles.scss";
import { FC } from "react";
import IInput from "./Input.types";

const Input: FC<IInput> = ({
  variant = "primary",
  type = "text",
  size = "md",
  rounded = "none",
  className,
  label,
  ...props
}) => {
  if (type === "file") {
    return (
      <>
        <label
          htmlFor={props.name}
          className={`input__label input__label--${variant} input--rounded-${rounded} input--${size} ${className ?? className}`}
        >
          Choose file
        <input type="file" {...props} className="input"></input>
        </label>
      </>
    );
  } else if (label) {
    return (
      <label className="label__field">
        {!props.disabled && <span className={`label--${variant}`}>{label}</span>}
        <input
          type={type}
          {...props}
          className={`input input--${variant} input--${size} input--rounded-${rounded} ${className ?? className}`}
        ></input>
      </label>
    );
  } else {
    return (
      <input
        type={type}
        {...props}
        className={`input input--${variant} input--${size} input--rounded-${rounded} ${className ?? className}`}
      ></input>
    );
  }
};

export default Input;
