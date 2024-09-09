import { FC } from "react";
import IImage from "./Image.types";

const Image: FC<IImage> = ({ src, alt, width, height, className, testId }) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      data-testid={testId}
    />
  );
};

export default Image;
