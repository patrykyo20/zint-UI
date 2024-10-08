import { HTMLAttributes, ReactNode } from "react";
import TVariant from "../../types/TVariants";
import TSize from "../../types/TSize";
import IBasic from "../../types/IBasic";

type THTMLElement = 'p' | 'div' | 'span' | 'h1' | 'a' | 'li' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'li';

interface ITypography
  extends HTMLAttributes<HTMLElement>, IBasic {
  as?: THTMLElement;
  children?: ReactNode;
  variant?: TVariant;
  size?: TSize;
  weight?: "thin" | "normal" | "bold";
  className?: string;
}

export default ITypography;
