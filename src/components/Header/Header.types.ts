import { ReactNode } from "react";
import IBasic from "../../types/IBasic";
import TVariant from "../../types/TVariants";

interface IHeader extends IBasic {
  children: ReactNode;
  variant?: TVariant;
}

export default IHeader;
