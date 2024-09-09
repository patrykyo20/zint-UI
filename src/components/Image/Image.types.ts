import { ImgHTMLAttributes } from "react"
import IBasic from "../../types/IBasic";

interface IImage extends ImgHTMLAttributes<HTMLImageElement>, IBasic {
  responsive?: boolean;
  src: string;
  alt: string;
  width: number;
  height: number;
}

export default IImage;