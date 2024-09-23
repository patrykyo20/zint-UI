import { FC } from "react";
import IHeader from "./Header.types";
import './header.styles.scss';

const Header: FC<IHeader> = ({ children, className, testId, ...props }) => {
  return (
    <header className={`header ${className ?? className}`} data-testid={testId} {...props}>
      {children}
    </header>
  );
};

export default Header;
