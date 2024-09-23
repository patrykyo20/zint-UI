import { ReactNode } from "react";
import IBasic from "../../types/IBasic";

interface IHeader extends IBasic {
  children: ReactNode;
}

export default IHeader;