import { FC } from "react";
import INav, { INavLink } from "./Nav.types";
import "./nav.styles.scss";
import { Typography } from "../Typography";

const Nav: FC<INav> & { link: FC<INavLink> } = ({
  children,
  className,
  testId,
}) => {
  return (
    <nav className={`nav ${className && className}`} data-testid={testId}>
      {children}
    </nav>
  );
};

const NavLink: FC<INavLink> = ({
  variant,
  size,
  children,
  weight,
  href,
  className,
  testId,
  ...props
}) => {
  function handleNavigation(e: any, path: string) {
    e.preventDefault();
    window.history.pushState({}, "", `/${path}`);
  }

  return (
    <Typography
      as="a"
      variant={variant}
      size={size}
      weight={weight}
      className={`nav__link ${className && className}`}
      onClick={(e) => handleNavigation(e, href)}
      {...props}
    >
      {children}
    </Typography>
  );
};

Nav.link = NavLink;

export default Nav;
