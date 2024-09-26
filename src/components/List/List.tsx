import { FC } from "react";
import IList from "./List.types";
import ITypography from "../Typography/Typography.types";
import { Typography } from "../Typography";
import "./list.styles.scss";
import "../Flex/flex.styles.scss";

const List: FC<IList> & { item: FC<ITypography> } = ({
  as: Component = "ul",
  integration = "vertical",
  spacing,
  children,
}) => {
  return (
    <Component className={`list list--${integration} list--${spacing}`}>
      {children}
    </Component>
  );
};

const ListItem: FC<ITypography> = ({
  as: Component = "p",
  children,
  variant = "dark",
  size = "md",
  weight = "normal",
  ...props
}) => {
  return (
    <Typography
      as="li"
      size={size}
      variant={variant}
      weight={weight}
      className="list__item"
      {...props}
    >
      {children}
    </Typography>
  );
};

List.item = ListItem;

export default List;
