import "./textarea.styles.scss";
import "../Input/input.styles.scss";
import { FC } from "react";
import ITextarea from "./Textarea.types";

const Textarea: FC<ITextarea> = ({
  variant = "primary",
  size = "md",
  rounded = "sm",
  className,
  testId,
  label,
  ...props
}) => {
  if (label) {
    return (
      <>
        <label className="label__field">
          {!props.disabled && (
            <span className={`label--${variant}`}>{label}</span>
          )}
          <textarea
            data-testid={testId}
            className={`textarea textarea--${variant} textarea--${size} textarea--rounded-${rounded} ${
              className ?? className
            }`}
            {...props}
          ></textarea>
        </label>
      </>
    );
  } else {
    return (
      <textarea
        data-testid={testId}
        className={`textarea textarea--${variant} textarea--${size} textarea--rounded-${rounded} ${
          className ?? className
        }`}
        {...props}
      ></textarea>
    );
  }
};

export default Textarea;
