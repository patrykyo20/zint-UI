import "./typography.styles.scss";
import { FC } from "react";
import ITypography from "./Typography.types";

const Typography: FC<ITypography> = ({
  as: Component = "p",
  children,
  variant = "dark",
  size = "md",
  weight =  "normal",
  className,
  ...props
}) => {
  return (
    <Component className={`typography typography--${variant} typography--${size} typography--${weight} ${className}`} {...props}>
      {children}
    </Component>
  );
};

export default Typography;
