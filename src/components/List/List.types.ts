import { ReactNode } from "react";
import IBasic from "../../types/IBasic";

interface IList extends IBasic {
  children: ReactNode;
  integration?: 'vertical' | 'horizontal';
  spacing?: number;
  as?: "ul" | "ol";
}

export default IList;
