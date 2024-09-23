import { ReactNode } from "react";
import IBasic from "../../types/IBasic";

interface IList extends IBasic {
  children: ReactNode;
  as?: "ul" | "ol";
}

export interface IListItem {
  children: ReactNode;
}

export default IList;
