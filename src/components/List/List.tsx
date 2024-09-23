import { FC } from "react";
import IList, { IListItem } from "./List.types";

const List: FC<IList> = ({ as: Component = "ul", children }) => {
  return <Component>{children}</Component>;
};

const ListItem: FC<IListItem> = ({ children }) => {
  if (children) {
    
  }
  return <li>Item</li>;
}

export default List;