import "./button.styles.scss";

import { FC } from "react";
import IButton from "./Button.types";

const Button: FC<IButton> = ({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}) => {
  return (
    <button className={`button button--${variant} button--${size} ${className ?? className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
