import "./typography.styles.scss";
import { FC } from "react";
import ITypography from "./Typography.types";

const Typography: FC<ITypography> = ({
  as: Component = "p",
  children,
  variant = "dark",
  size = "md",
  weight =  "normal",
  ...props
}) => {
  return (
    <Component className={`typography typography--${variant} typography--${size} typography--${weight}`} {...props}>
      {children}
    </Component>
  );
};

export default Typography;
