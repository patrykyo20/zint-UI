import { FC } from "react";
import IFlex from "./Flex.types";
import "./flex.styles.scss";

const Flex: FC<IFlex> = ({
  children,
  direction = "row",
  flexWrap = "nowrap",
  justifyContent = "flex-start",
  alignItems = "stretch",
  gap = 0,
  flexBasis = "auto",
  flexGrow = 0,
  flexShrink = 1,
  className = "",
  testId,
  ...props
}) => {
  const generateClassName = () => {
    const classNames = [
      "flex",
      `flex-direction--${direction}`,
      flexWrap ? `flex-wrap--${flexWrap}` : "",
      justifyContent ? `justify-content--${justifyContent}` : "",
      alignItems ? `align-items--${alignItems}` : "",
      gap ? `gap--${gap}` : "",
      flexBasis !== "auto" ? `flex-basis--${flexBasis}` : "",
      flexGrow !== undefined ? `flex-grow--${flexGrow}` : "",
      flexShrink !== undefined ? `flex-shrink--${flexShrink}` : "",
      className,
    ];

    return classNames.filter(Boolean).join(" ");
  };

  return (
    <div className={generateClassName()} data-testid={testId} {...props}>
      {children}
    </div>
  );
};

export default Flex;
