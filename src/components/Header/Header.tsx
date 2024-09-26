import { FC } from "react";
import IHeader from "./Header.types";
import "./header.styles.scss";

const Header: FC<IHeader> = ({ children, className, variant, testId, ...props }) => {
  return (
    <header
      className={`header header--${variant} ${className ?? className}`}
      data-testid={testId}
      {...props}
    >
      {children}
    </header>
  );
};

export default Header;
