import { FC } from "react";
import IImage from "./Image.types";
import "./image.styles.scss";

const Image: FC<IImage> = ({
  src,
  alt,
  width,
  responsive,
  height,
  className,
  testId,
  ...props
}) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`${responsive && "responsive"} ${className}`}
      data-testid={testId}
      {...props}
    />
  );
};

export default Image;
